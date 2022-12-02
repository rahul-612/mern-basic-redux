import React,{useState,useEffect} from "react";
import "./login.css";
import loginImg from "./login.png";
import { useDispatch,useSelector } from "react-redux";
import {loginUser} from "../action/Action";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const dispatch=useDispatch();
  const { error,isAuthenticated } = useSelector((state) => state.user);

  const navigate=useNavigate()

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const loginSubmit=(e)=>{
    e.preventDefault();

    dispatch(loginUser(email, password));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch({ type: "clearErrors" });
    }
    if (isAuthenticated) {
      alert("Login Successfully");
      navigate("/")
    }
  }, [error, dispatch, isAuthenticated]);

  return (
    <section>
      <div className="loginContainer registerContainer">
        <h3 className="registerHeading">Sign In</h3>
        
        <div className="registerRight" style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
          <form onSubmit={loginSubmit} className="registerForm" style={{justifyContent:"center"}}>
            <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" style={{marginTop:"1.5rem"}}/>
            <button className="regBtn" type="submit" tyle={{marginTop:"1.5rem"}}>
                Login
              </button>
          </form>
        </div>
        <figure className="registerLeft" >
          <img src={loginImg} alt="RegisterImg" />
          <button
            className="regBtn"
            style={{ width: "18rem", marginTop: ".35rem" }}
            type="submit"
          >
            Create a Account
          </button>
        </figure>
      </div>
    </section>
  );
};

export default Login;