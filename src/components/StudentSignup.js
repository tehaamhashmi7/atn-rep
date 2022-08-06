import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'

function StudentSignup() {

    let navigate = useNavigate()

    const [credentials, setCredentials] = useState({name: "", email: "", password: "", cpassword: ""})

    const onChange = (event) => {
        setCredentials({...credentials, [event.target.name]: event.target.value})
    } 
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:1000/api/student/newStudent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: credentials.name ,email: credentials.email, password: credentials.password})
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
    <div className='container'>
        <h1>Student Sign up</h1>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={credentials.name}
            onChange = {onChange}
          />
        </div>
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
        <div>
        {credentials.password !== credentials.cpassword && <h5 style={{color: "red"}}>Passwords do not match</h5>}
        <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            value={credentials.cpassword}
            onChange = {onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default StudentSignup