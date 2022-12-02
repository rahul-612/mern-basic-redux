import React from "react";
import "./contact.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Contact = () => {
  const { user } = useSelector((state) => state.user);
  const { userMesssage, setUserMessage } = useState("");

  const submitContact = (e) => {
    e.preventDefault();

    alert("Form Submitted!");
    setUserMessage("")
  };

  return (
    <section>
      <div className="contactContainer">
        <div className="contactDetailContainer">
          <div className="contactDetail">
            <h3> ☎️ Phone</h3>
            <p>785484</p>
          </div>
          <div className="contactDetail">
            <h3> 📧 Email</h3>
            <p>@gmail</p>
          </div>
          <div className="contactDetail">
            <h3> 🏠 Home</h3>
            <p>785484</p>
          </div>
        </div>
        <div className="contactForm">
          <div className="contactFormHead">Get In Touch</div>
          <form className="contactFormMain" onSubmit={submitContact}>
            <div className="contactFormDetail">
              <input type="text" value={user.name} readOnly />
              <input type="email" value={user.email} readOnly />
              <input type="number" value={user.phone} readOnly />
            </div>
              <textarea
                name="message"
                className="contactFormMessage"
                cols="108"
                rows="08"
                value={userMesssage}
                onChange={(e) => {
                  setUserMessage(e.target.value());
                }}
              />
            <button className="contactSubmitBtn" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
