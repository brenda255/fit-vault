import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
    //state for each input (controlled inputs)
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); //prevent default form submission
        //clear any previous errors
        setError("");

        //basic validation
        if (!displayName || !email || !password) {
            setError("Please fill in all fields");
            return;
        }

        //get current users from localStorage (or empty array if none)
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

        //check if email already exists
        const userExists = existingUsers.find(user => user.email === email);
        if (userExists) {
            setError("Email already exists. Please use a different email.");
            return;
        }

        //create new user object
        const newUser = {
            id: Date.now(),
            displayName,
            email,
            password
        };

        //add new user to array
        const updatedUsers = [...existingUsers, newUser];

        //save back to localStorage
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        //success! redirect to login page
        alert("Registration successful! Please log in.");
        navigate("/login");

        //clear the form
        setDisplayName("");
        setEmail("");
        setPassword("");

    }

    return (
        <div className="register-container">
            <h2>Create Account</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="displayName">Name: </label>
                    <input type="text"
                        id="displayName"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        placeholder="Enter your name"
                    />
                </div>

                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email" />
                </div>

                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                </div>

                {error && <p className="error-message">{error}</p>}

                <button type="submit">Register</button>
            </form>


            <p>
                Already have an account?
                <Link to="/login">Log in here</Link>
            </p>
        </div>
    )
};
export default Register;