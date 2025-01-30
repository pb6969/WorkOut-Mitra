import WorkoutDetails from './WorkoutDetails'

const WorkoutList = ({ workouts, deleteWorkout }) => {
  return (
    <div>
      {workouts.length === 0 ? (
        <p>No workouts to display</p>
      ) : (
        workouts.map(workout => (
          <WorkoutDetails 
            key={workout._id} 
            workout={workout} 
            deleteWorkout={deleteWorkout} 
          />
        ))
      )}
    </div>
  )
}

export default WorkoutList

