import { Link } from "react-router-dom";

function Nav () {
    return (
        <nav>
            <Link to= "/">Home</Link>
            <Link to ="/AddWorkout">Add Workout</Link>
            <Link to ="/Exercises">Exercises</Link>
            <Link to ="/Login">Login</Link>
            <Link to ="/Profile">Profile</Link>
            <Link to ="/Recap">Recap</Link>
        </nav>
    )
}

export default Nav;