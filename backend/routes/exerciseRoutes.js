// backend/routes/exerciseRoutes.js
// This file defines the exercise-related routes for the application
// It includes routes for creating, updating, deleting exercises, and fetching weekly summaries
import express from 'express';
import {
  createExercise,
  getExercises,
  updateExercise,
  deleteExercise,
  weeklySummary,
} from '../controllers/exerciseController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/').post(protect, createExercise).get(protect, getExercises);
router.route('/:id').put(protect, updateExercise).delete(protect, deleteExercise);
router.get('/summary/week', protect, weeklySummary);

export default router;