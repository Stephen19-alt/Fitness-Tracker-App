// File: src/utils/reminder.js
// This utility checks if the user needs a reminder to meet their daily exercise goal
export const checkReminders = (exercises, goalMinutesPerDay) => {
  const today = new Date().toISOString().slice(0, 10);
  const todayTotal = exercises
    .filter(e => e.date.slice(0, 10) === today)
    .reduce((sum, e) => sum + e.minutes, 0);

  if (todayTotal < goalMinutesPerDay) {
    return `Reminder: You're ${goalMinutesPerDay - todayTotal} mins away from today's goal.`;
  }

  return null;
};
