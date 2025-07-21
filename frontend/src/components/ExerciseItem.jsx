// File: src/components/ExerciseItem.jsx
import { useState } from 'react';

export default function ExerciseItem({ ex, onEdit, onDelete }) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="p-2 rounded border shadow hover:bg-gray-50 transition">
      <div className="flex justify-between items-center">
        <div>
          <div>{ex.title} - {ex.minutes} min ({ex.type})</div>
          <div className="text-sm text-gray-500">{new Date(ex.date).toLocaleDateString()}</div>
        </div>
        <div className="relative">
          <button onClick={() => setShowOptions(!showOptions)} className="text-gray-600">⋮</button>
          {showOptions && (
            <div className="absolute right-0 mt-2 bg-white shadow rounded text-sm z-10">
              <button onClick={() => onEdit(ex)} className="block w-full px-4 py-2 hover:bg-gray-100">Edit</button>
              <button onClick={() => onDelete(ex._id)} className="block w-full px-4 py-2 text-red-600 hover:bg-gray-100">Delete</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
