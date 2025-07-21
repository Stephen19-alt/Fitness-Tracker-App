import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { checkReminders } from '../utils/reminder';

export default function Home() {
  const [exercises, setExercises] = useState([]);
  const { token, logout } = useAuth();

  const fetchExercises = async () => {
    const res = await fetch('/api/exercises', {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    setExercises(data);
  };

  useEffect(() => {
    fetchExercises();
  }, []);
  const reminder = checkReminders(exercises, 30);
if (reminder) alert(reminder);

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl">My Exercises</h2>
        <button className="btn" onClick={logout}>Logout</button>
      </div>
      <ul className="space-y-2">
        {exercises.map(ex => (
          <li key={ex._id} className="p-2 rounded border shadow">
            <div>{ex.title} - {ex.minutes} min ({ex.type})</div>
            <div className="text-sm text-gray-500">{new Date(ex.date).toLocaleDateString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
