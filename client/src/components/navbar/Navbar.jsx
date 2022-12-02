import React from 'react'
import "./navbar.css";
import logo from "./logo.png";
import { NavLink } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux";
import {logoutUser} from "../action/Action"

const Navbar = () => {
  const dispatch=useDispatch();
  const {isAuthenticated} = useSelector((state) => state.user);

  const logoutBtn=()=>{
    dispatch(logoutUser())
    // alert("logout successfully")
  }

  return (
    <nav>
        <figure>
            <img src={logo} alt="logo" />
        </figure>
        <ul>
            <li><NavLink to="/" activeClassName="active" className="navLink">Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="active" className="navLink">About</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active" className="navLink">Contact</NavLink></li>
            {isAuthenticated?<li><NavLink to="" activeClassName="active" className="navLink" onClick={logoutBtn} style={{color:"black"}}>Logout</NavLink></li>:null}
            {!isAuthenticated?<li><NavLink to="/login" activeClassName="active" className="navLink">Login</NavLink></li>:null}
            {!isAuthenticated?<li><NavLink to="/register" activeClassName="active" className="navLink">Register</NavLink></li>:null}
        </ul>   
    </nav>
  )
}

export default Navbar