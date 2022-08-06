import React, { useContext, useEffect, useState } from 'react'
import CommonContext from '../context/CommonContext'

function StudentList() {
    
    const [students, setStudents] = useState([])
    const displayStudents = async () => {
        const response = await fetch(`http://localhost:1000/api/teacher/studentList`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        
        const json = await response.json()
        setStudents(json.students)
        
        
    }

   const markStudent = async (id) => {
    console.log(id)
    const response = await fetch(`http://localhost:1000/api/teacher/setAttendance/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    })

    const json = await response.json()
    console.log(json)
   }


    useEffect(() => {
        displayStudents()
    },[])

  return (
    <div>
        <h1>Student Lists</h1>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Present</th>
                </tr>
            </thead>
            <tbody>
            {students.map(student => {
            return (
                <tr>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.status?<form><input type='checkbox' checked={true} onChange={() => markStudent(student._id)}/></form>:<form><input type='checkbox' onChange={() => markStudent(student._id)} /></form>}</td>
            </tr>
            )
            })}
            </tbody>
        </table>
    </div>
  )
}

export default StudentList