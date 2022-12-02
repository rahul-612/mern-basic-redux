import React,{useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import "./register.css";
import registerImg from "./register.png";
import { createUser } from "../action/Action";

const Register = () => {
  const dispatch=useDispatch();

  const {loading,error,message} = useSelector((state) => state.user);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    profile:"",
    password:"",
    cpassword:""
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;

    setUser((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    dispatch(createUser(user.name, user.email, user.phone,user.profile,user.password,user.cpassword));

    // alert("User Created!");

    setUser({ name: "", email: "", phone: "",profile:"",password:"",cpassword:""});
    
  }; 

  useEffect(() => {
    if (error) {
      // alert(error);
      dispatch({ type: "clearErrors" });
    }
   if(message){

      alert(message)
    }
  }, [dispatch, error, message]);


  return (
    <>
      <section>
        <div className="registerContainer">
          <h3 className="registerHeading">Sign Up</h3>
          <div className="registerRight">
            <form action="" className="registerForm" onSubmit={formSubmit}>
              <input type="text" placeholder="Name" name="name" value={user.name} onChange={inputEvent}/>
              <input type="email" placeholder="Email" name="email" value={user.email} onChange={inputEvent}/>
              <input type="number" placeholder="Mobile" name="phone" value={user.phone} onChange={inputEvent}/>
              <input type="profile" placeholder="Profile" name="profile" value={user.profile} onChange={inputEvent}/>
              <input type="password" placeholder="Password" name="password" value={user.password} onChange={inputEvent}/>
              <input type="password" placeholder="Confirm Password" name="cpassword" value={user.cpassword} onChange={inputEvent}/>
              <button className="regBtn" type="submit">
                Register
              </button>
            </form>
          </div>
          <figure className="registerLeft">
            <img src={registerImg} alt="RegisterImg" />
            <button
              className="regBtn"
              style={{ width: "18rem", marginTop: ".35rem" }}
              type="submit"
            >
              Already Register?
            </button>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Register;