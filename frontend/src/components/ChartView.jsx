// File: src/components/ChartView.jsx
// This component displays a bar chart of the user's exercise data
// frontend/src/components/ChartView.jsx

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

export default function ChartView({ data }) {
  if (!data || !Array.isArray(data)) {
    return <p>No data to display</p>; // Optional loading state
  }

  const chartData = {
    labels: data.map(d => d.date),
    datasets: [
      {
        label: 'Minutes per Day',
        data: data.map(d => d.minutes),
        backgroundColor: '#3B82F6',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Weekly Exercise Chart' }
    },
    scales: {
      y: { beginAtZero: true }
    }
  };

  return <Bar data={chartData} options={options} />;
}

