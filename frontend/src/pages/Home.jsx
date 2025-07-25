
// src/pages/Home.jsx
// This file defines the home page of the frontend application, displaying an overview of expenses and recent transactions.
import ExpenseChart from '@/components/ExpenseChart';
import ExpenseList from '@/components/ExpenseList';
import { useEffect, useState } from 'react';
import { getAllExpenses } from '@/services/api';

const Home = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await getAllExpenses();
        setExpenses(data);
      } catch (error) {
        console.error('Error loading expenses:', error);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6">
      <header className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
          Expense Tracker
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          Track your spending and stay on budget
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
          Spending Overview
        </h2>
        <div className="w-full h-60 md:h-80 bg-white shadow rounded-md">
          <ExpenseChart expenses={expenses} />
        </div>
      </section>

      <section>
        <h2 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
          Recent Expenses
        </h2>
        <div className="bg-white rounded-md shadow overflow-auto">
          <ExpenseList expenses={expenses} />
        </div>
      </section>
    </div>
  );
};

export default Home;
