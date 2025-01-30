const WorkoutDetails = ({ workout, deleteWorkout }) => {
  const handleClick = () => {
    deleteWorkout(workout._id)
  }

  return (
    <div>
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Reps: </strong>{workout.reps}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  )
}

export default WorkoutDetails

