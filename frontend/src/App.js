
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  const [workouts, setWorkouts] = useState([])

  const addWorkout = (workout) => {
    setWorkouts([workout, ...workouts])
  }

  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter(workout => workout._id !== id))
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home workouts={workouts} addWorkout={addWorkout} deleteWorkout={deleteWorkout} />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

