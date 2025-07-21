// src/App.jsx
import { useState } from "react";
import ExerciseForm from "./components/ExerciseForm";
import SummaryCard from "./components/SummaryCard"; // Correct
import Chart from "./components/ChartView"; // Correct
import { Link } from "react-router-dom";


function App() {
  const [error, setError] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">🏋️ Fitness Tracker</h1>
          <Link to="/login" className="hover:underline text-sm">
            Login/Register
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 space-y-6">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Add Exercise</h2>
          <ExerciseForm onError={setError} />
          {error && <p className="text-red-600 mt-2">⚠ {error}</p>}
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <SummaryCard />
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-4 text-center">📊 Weekly Exercise Chart</h3>
          <Chart />
        </section>
      </main>
    </div>
  );
}

export default App;
