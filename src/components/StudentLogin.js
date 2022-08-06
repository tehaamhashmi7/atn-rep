import React, { useState } from "react";
import {useNavigate, Link} from 'react-router-dom'

function StudentLogin() {

    let navigate = useNavigate()

    const [credentials, setCredentials] = useState({email: "", password: ""})

    const onChange = (event) => {
        setCredentials({...credentials, [event.target.name]: event.target.value})
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:1000/api/student/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        })
        const json = await response.json()
        console.log(json)
        if (json.success) {
            // Save the token
            navigate('/noticeboard')

        }
        else {
            alert("Invalid credentials")
        }
    }

  return (
    <div className="container">
    <h1>Student Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={credentials.email}
            onChange = {onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange = {onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div><span><h4>Not Registered? <Link to={'/student/signup'}>Signup here</Link></h4></span></div>
    </div>
  );
}

export default StudentLogin;
