import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"


import WorkoutForm from '../components/WorkoutForm'
import WorkoutList from '../components/WorkoutList'

const Home = ({ workouts, addWorkout, deleteWorkout }) => {
  return (
    <div>
      <WorkoutForm addWorkout={addWorkout} />
      <WorkoutList workouts={workouts} deleteWorkout={deleteWorkout} />
    </div>
  )
}

export default Home

