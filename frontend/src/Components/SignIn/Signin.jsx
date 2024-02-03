import React, { useState } from 'react'
import './Signin.css'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Signup = () => {
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        username: ""
    })
    const { email, password, username } = inputs
    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs({ ...inputs, [name]: value })
    }

    const handleError = (err) => {
        toast.error(err, {
            position: 'bottom-left'
        })
    }

    const handleSuccess = (msg) => {
        toast.success(msg, {
            position: 'bottom-right'
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:4000/signup", {
                ...inputs
            },
                { withCredentials: true }
            )
            const { success, message } = data
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login')
                }, 1000)
            } else {
                handleError(message)
            }
        } catch (error) {
            console.log(error);
        }
        setInputs({
            ...inputs,
            email: '',
            password: '',
            username: ''
        })
    }
    return (
        <div className="signup">
            <div className="form_container">
                <h2>Signup Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className='field'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className='field'>
                        <label htmlFor="email">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            placeholder="Enter your username"
                            onChange={handleChange}
                        />
                    </div>
                    <div className='field'>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                    <span>
                        Already have an account? <Link to={"/login"}>Login</Link>
                    </span>
                </form>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Signup
