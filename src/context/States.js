import React, { useState } from "react";
import CommonContext from "./CommonContext";


const AppState = (props) => {
    const host = "http://localhost:1000"

    const message = "Tehaam is a good boy"


    return (
        <CommonContext.Provider value={message}>
            {props.children}
        </CommonContext.Provider>
    )

    
} 

export default AppState
