
// src/components/ExpenseChart.jsx
// This file defines the ExpenseChart component that displays expense data in a chart format.

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { Card } from '@/components/ui/card';

const ExpenseChart = ({ expenses }) => {
  // Group expenses by date
  const grouped = expenses.reduce((acc, exp) => {
    const date = new Date(exp.createdAt).toLocaleDateString();
    acc[date] = (acc[date] || 0) + exp.amount;
    return acc;
  }, {});

  const chartData = Object.entries(grouped).map(([date, amount]) => ({
    date,
    amount,
  }));

  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4">Spending Over Time</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#38bdf8" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default ExpenseChart;
