// src/components/ExerciseForm.jsx
import { useState } from "react";

const ExerciseForm = ({ onError }) => {
  const [name, setName] = useState("");
  const [minutes, setMinutes] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !minutes || !date) {
      onError("All fields are required.");
      return;
    }

    // Add exercise logic here...
    onError(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-center gap-4"
    >
      <input
        type="text"
        placeholder="Exercise"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 w-full md:w-1/4"
      />
      <input
        type="number"
        placeholder="Minutes"
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 w-full md:w-1/4"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 w-full md:w-1/4"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  );
};

export default ExerciseForm;
