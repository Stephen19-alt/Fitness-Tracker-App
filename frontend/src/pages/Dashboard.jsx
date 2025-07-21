// frontend/src/pages/Dashboard.jsx

import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import axios from 'axios'
import ExerciseForm from '../components/ExerciseForm'
import ExerciseItem from '../components/ExerciseItem'
import SummaryCard from '../components/SummaryCard'
import ChartView from '../components/ChartView'
import StreakBadge from '../components/StreakBadge'

export default function Dashboard() {
  const { user } = useAuth()
  const [exercises, setExercises] = useState([])

  const fetchExercises = async () => {
    try {
      const { data } = await axios.get('/api/exercises')
      console.log('Fetched exercises:', data)

      // Adjust depending on response format:
      // If your backend returns: { exercises: [...] }
      // then use: setExercises(data.exercises)
      // If it returns just the array, use as-is:
      setExercises(Array.isArray(data) ? data : data.exercises || [])
    } catch (err) {
      console.error('Error fetching exercises:', err)
      setExercises([]) // fallback to avoid map() crash
    }
  }

  useEffect(() => {
    if (user) fetchExercises()
  }, [user])

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <ExerciseForm onAdd={fetchExercises} />
      <SummaryCard
        totalMinutes={exercises.reduce((sum, ex) => sum + ex.minutes, 0)}
        averagePerDay={(exercises.reduce((sum, ex) => sum + ex.minutes, 0) / 7).toFixed(1)}
        goalPercent={Math.round(
          (exercises.reduce((sum, ex) => sum + ex.minutes, 0) / (7 * 30)) * 100
        )}
      />
      <ChartView data={exercises} />
      <StreakBadge exercises={exercises} />

      <div className="mt-4 space-y-2">
        {Array.isArray(exercises) &&
          exercises.map((ex) => (
            <ExerciseItem key={ex._id} exercise={ex} onUpdate={fetchExercises} />
          ))}
      </div>
    </div>
  )
}
