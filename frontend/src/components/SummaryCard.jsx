
// src/components/SummaryCard.jsx
export default function SummaryCard({ totalMinutes = 0, averagePerDay = 0, goalPercent = 0 }) {
  return (
    <div className="p-6 rounded-lg shadow-md bg-blue-50 border border-blue-200">
      <h3 className="text-xl font-semibold text-blue-800 mb-4">📅 Weekly Summary</h3>
      <ul className="space-y-2 text-sm text-blue-900">
        <li><span className="font-medium">Total Minutes:</span> {totalMinutes}</li>
        <li><span className="font-medium">Average per Day:</span> {averagePerDay.toFixed(1)} min</li>
        <li><span className="font-medium">Goal Completion:</span> {goalPercent}%</li>
      </ul>
    </div>
  );
}
