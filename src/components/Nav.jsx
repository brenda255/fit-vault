import { Link } from "react-router-dom";

function Nav({ isLoggedIn, setIsLoggedIn }) {
    return (
        <nav>
            <Link to="/">Home</Link>
            {isLoggedIn ? (
                //show these links when logged in
                <>
                    <Link to="/AddWorkout">Add Workout</Link>
                    <Link to="/Exercises">Exercises</Link>
                    <Link to="/Profile">Profile</Link>
                    <Link to="/Recap">Recap</Link>
                    <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                </>
            ) : (
                //these show when NOT logged in
                <>
                    <Link to="/Login">Login</Link>
                    <Link to="/Register">Register</Link>
                    <button onClick={() => setIsLoggedIn(true)}>Login</button>
                </>
            )}

        </nav>
    )
}

export default Nav;