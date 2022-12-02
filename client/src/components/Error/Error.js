import React from 'react'
import { NavLink } from 'react-router-dom'
import "./error.css";

const Error = () => {
    return (
        <>
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>we are sorry page not found!</h2>
                <p style={{marginBottom:"10px"}}>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <NavLink to="/">Back To Homepage</NavLink>
            </div>
        </div>
        </>
    )
}

export default Error
