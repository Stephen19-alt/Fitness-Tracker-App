// File: src/components/StreakBadge.jsx
// This component displays a badge for the user's exercise streak
export default function StreakBadge({ streak }) {
  if (streak < 3) return null;

  let label = '';
  if (streak >= 30) label = '🔥 30-Day Champion';
  else if (streak >= 14) label = '🏅 14-Day Warrior';
  else if (streak >= 7) label = '💪 7-Day Strong';
  else if (streak >= 3) label = '🎉 3-Day Streak';

  return (
    <div className="p-2 bg-green-100 text-green-700 rounded shadow text-sm inline-block">
      {label}
    </div>
  );
}
