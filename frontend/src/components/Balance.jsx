//balance.jsx
// This file defines the balance component for the frontend application.
import { Card } from '@/components/ui/card';

const Balance = ({ total, goal = 1000 }) => {
  const balance = goal - total;
  return (
    <Card className="p-4 grid grid-cols-2 gap-4 text-center">
      <div>
        <h2 className="text-sm text-gray-500">Total Spent</h2>
        <p className="text-2xl font-bold text-red-500">${total.toFixed(2)}</p>
      </div>
      <div>
        <h2 className="text-sm text-gray-500">Balance (Goal: ${goal})</h2>
        <p className="text-2xl font-bold text-green-600">${balance.toFixed(2)}</p>
      </div>
    </Card>
  );
};

export default Balance;
