// Exercise controller for the application
// This file contains the logic for handling exercise-related requests
import Exercise from '../models/Exercise.js';
import User from '../models/User.js';
import moment from 'moment';

export const createExercise = async (req, res) => {
  const { title, duration, date } = req.body;
  const exercise = await Exercise.create({ user: req.user.id, title, duration, date });

  const user = await User.findById(req.user.id);
  const today = moment().format('YYYY-MM-DD');

  if (user.lastActiveDate !== today) {
    user.streak = moment(today).diff(moment(user.lastActiveDate), 'days') === 1 ? user.streak + 1 : 1;
    user.lastActiveDate = today;
    await user.save();
  }

  res.status(201).json(exercise);
};

export const getExercises = async (req, res) => {
  const exercises = await Exercise.find({ user: req.user.id });
  res.json(exercises);
};

export const updateExercise = async (req, res) => {
  const exercise = await Exercise.findById(req.params.id);
  if (!exercise) return res.status(404).json({ message: 'Exercise not found' });

  if (exercise.user.toString() !== req.user.id)
    return res.status(401).json({ message: 'Not authorized' });

  const updated = await Exercise.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteExercise = async (req, res) => {
  const exercise = await Exercise.findById(req.params.id);
  if (!exercise) return res.status(404).json({ message: 'Exercise not found' });

  if (exercise.user.toString() !== req.user.id)
    return res.status(401).json({ message: 'Not authorized' });

  await exercise.deleteOne();
  res.json({ message: 'Deleted successfully' });
};

export const weeklySummary = async (req, res) => {
  const today = moment();
  const weekStart = today.clone().startOf('isoWeek');

  const exercises = await Exercise.find({
    user: req.user.id,
    date: { $gte: weekStart.format('YYYY-MM-DD'), $lte: today.format('YYYY-MM-DD') },
  });

  const totalMinutes = exercises.reduce((sum, e) => sum + e.duration, 0);
  const avgPerDay = totalMinutes / 7;
  const goal = 30 * 7;
  const goalPercent = Math.min((totalMinutes / goal) * 100, 100);

  res.json({ totalMinutes, avgPerDay, goalPercent });
};
