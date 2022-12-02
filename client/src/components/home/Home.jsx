import React from "react";
import "./home.css";
import {useSelector,useDispatch } from "react-redux";


const Home = () => {
  const {user} = useSelector((state) => state.user);
  
  return (
    <>
      <section className="home">
        <p>WELCOME</p>
        <h1>{user?user.name.toUpperCase():null}</h1>
        <h2>{user ? "Happy, to see you back" : "We Are The MERN Developer"}</h2>
      </section> 
    </>
  );
};

export default Home;
