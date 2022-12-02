import React from "react";
import "./about.css";
import aboutImg from "./about.png";
import {useSelector } from "react-redux";

const About = () => {

  const {user} = useSelector((state) => state.user);

  return (
    <section className="about">
      <div className="aboutContainer">
        <div className="leftAbout">
          <figure className="aboutImg">
            <img src={aboutImg} alt="userImg" />
          </figure>
          <div className="aboutLinks">
            <p>Work Link</p>
            <a href="#">Youtube</a>
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </div>
        <div className="rightAbout">
          <div className="user">
            <div className="profession">
            <h3>{user.name}</h3>
            <p style={{color:"var(--main_color)"}}>{user.profile}</p>
            <p>Ranking:10/10</p>
            </div>
            <div className="editBtn">
            <button>Edit Profile</button>
            </div>
          </div>
          <div className="userDetails">
            <div className="userForm">
              <label htmlFor="user_id">User-ID</label>
              <p>{user._id}</p>
            </div>
            <div className="userForm">
              <label htmlFor="name">Name</label>
              <p>{user.name}</p>
            </div>
            <div className="userForm">
              <label htmlFor="email">Email</label>
              <p>{user.email}</p>
            </div>
            <div className="userForm">
              <label htmlFor="mobile">Mobile</label>
              <p>{user.phone}</p>
            </div>
            <div className="userForm">
              <label htmlFor="Profession">Profession</label>
              <p>{user.profile}</p>
            </div>
  
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;