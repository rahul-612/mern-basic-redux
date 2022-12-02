import React,{useEffect} from 'react'
import Navbar from './components/navbar/Navbar';
import "./App.css";
import Home from './components/home/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from "./components/register/Register.jsx";
import Login from "./components/login/Login.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Error from './components/Error/Error';
import { loadUser } from "./components/action/Action";
import {useSelector,useDispatch } from "react-redux";

const App = () => {
  const {isAuthenticated} = useSelector((state) => state.user);
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(loadUser())
    }, [dispatch])

  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/about" element={isAuthenticated?<About/>:<Login/>}/>
          <Route path="/contact" element={isAuthenticated?<Contact/>:<Login/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App