import React, { useState } from "react";
import CommonContext from "./CommonContext";


const AppState = (props) => {
    const host = "http://localhost:1000"

    const displayStudents = async () => {
        const response = await fetch(`${host}/api/teacher/studentList`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        const json = await response.json()
    }


    return (
        <CommonContext.Provider value={displayStudents}>
            {props.children}
        </CommonContext.Provider>
    )

    
} 

export default AppState
