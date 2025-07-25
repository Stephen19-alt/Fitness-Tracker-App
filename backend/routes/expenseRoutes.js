// expenseRoutes.js
// This file defines the routes for managing expenses.
const express = require("express");
const { getExpenses, addExpense, deleteExpense } = require("../controllers/expenseController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/")
  .get(protect, getExpenses)
  .post(protect, addExpense);

router.delete("/:id", protect, deleteExpense);

module.exports = router;
