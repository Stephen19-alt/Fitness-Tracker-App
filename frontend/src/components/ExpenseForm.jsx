
// frontend/src/components/ExpenseForm.jsx
// This file defines the form component for adding new expenses.

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { addExpense } from "@/services/api";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem
} from "@/components/ui/select";

const ExpenseForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "Other"
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.amount || !form.category) return;

    try {
      await addExpense({
        ...form,
        amount: parseFloat(form.amount)
      });
      setForm({ title: "", amount: "", category: "Other" });
      onAdd(); // refresh expenses
    } catch (err) {
      console.error("Failed to add expense", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow space-y-4"
    >
      <div className="grid grid-cols-2 gap-4">
        <Input
          name="title"
          placeholder="Expense Title"
          value={form.title}
          onChange={handleChange}
        />
        <Input
          name="amount"
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
        />
      </div>

      <Select
        name="category"
        value={form.category}
        onValueChange={(val) => setForm({ ...form, category: val })}
      >
        <SelectTrigger className="w-full">Category</SelectTrigger>
        <SelectContent>
          <SelectItem value="Food">Food</SelectItem>
          <SelectItem value="Transport">Transport</SelectItem>
          <SelectItem value="Utilities">Utilities</SelectItem>
          <SelectItem value="Entertainment">Entertainment</SelectItem>
          <SelectItem value="Other">Other</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit" className="w-full">
        Add Expense
      </Button>
    </form>
  );
};

export default ExpenseForm;
