// expenseController.js
const Expense = require("../models/Expense");

exports.getExpenses = async (req, res) => {
	try {
		const expenses = await Expense.find({ user: req.user._id }).sort({ createdAt: -1 });
		res.json(expenses);
	} catch (error) {
		res.status(500).json({ message: "Failed to fetch expenses" });
	}
};

exports.addExpense = async (req, res) => {
	const { description, amount } = req.body;
	try {
		const expense = await Expense.create({
			user: req.user._id,
			description,
			amount,
		});
		res.status(201).json(expense);
	} catch (error) {
		res.status(500).json({ message: "Failed to add expense" });
	}
};

exports.deleteExpense = async (req, res) => {
	try {
		const deleted = await Expense.findOneAndDelete({ _id: req.params.id, user: req.user._id });
		if (!deleted) return res.status(404).json({ message: "Not found" });
		res.json({ message: "Expense deleted" });
	} catch (error) {
		res.status(500).json({ message: "Failed to delete expense" });
	}
};

exports.createExpense = async (req, res) => {
	const { title, amount, date, category } = req.body;

	try {
		const expense = new Expense({
			title,
			amount,
			category: category || "Other",
			date: date || new Date(),
			userId: req.user.id,
		});

		await expense.save();
		res.status(201).json(expense);
	} catch (error) {
		console.error("Create Expense Error:", error);
		res.status(500).json({ message: "Server error" });
	}
};
