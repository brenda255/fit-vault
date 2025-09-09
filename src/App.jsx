import './App.css'
import Nav from "./components/Nav"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import AddWorkout from "./pages/AddWorkout"
import Exercises from "./pages/Exercises"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Recap from "./pages/Recap"

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/AddWorkout' element={<AddWorkout/>}/>
        <Route path='/Exercises' element={<Exercises/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Recap' element={<Recap/>}/>
      </Routes>
    </Router>
  )
}

export default App;
