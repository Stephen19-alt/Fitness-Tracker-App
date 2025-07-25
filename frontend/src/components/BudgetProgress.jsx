// BudgetProgress.jsx
// This file defines the budget progress component for the frontend application.
import { Progress } from '@/components/ui/progress';

const BudgetProgress = ({ total, goal = 1000 }) => {
  const percentage = Math.min((total / goal) * 100, 100).toFixed(1);

  return (
    <div className="bg-white p-4 rounded shadow space-y-2">
      <div className="flex justify-between text-sm font-medium">
        <span>Budget Usage</span>
        <span>{percentage}%</span>
      </div>
      <Progress value={percentage} />
      <p className="text-sm text-gray-500">
        ${total.toFixed(2)} of ${goal} used
      </p>
    </div>
  );
};

export default BudgetProgress;
