import axios from "axios";

export const createUser = (name, email, phone,profile,password,cpassword) => async (dispatch) => {
    try {
      dispatch({
        type: "CreateUserRequest",
      });
  
      const { data } = await axios.post(
        "/create",
        { name, email, phone,profile,password,cpassword },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      dispatch({
        type: "CreateUserSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "CreateUserFailure",
        payload: error.response.data.message,
      });
    }
  };
  
  export const loginUser = (email, password) => async (dispatch) => {
    try {
      
      dispatch({
        type: "LoginRequest",
      });
  
      
      const { data } = await axios.post(
        "/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      
      dispatch({
        type: "LoginSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "LoginFailure",
        payload: error.response.data.message,
      });
    }
  };
  
  export const loadUser = () => async (dispatch) => {
    try {
      dispatch({
        type: "LoadUserRequest",
      });
  
      const { data } = await axios.get("/me");
  
      dispatch({
        type: "LoadUserSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "LoadUserFailure",
        payload: error.response.data.message,
      });
    }
  };

  export const logoutUser = () => async (dispatch) => {
    try {
      dispatch({
        type: "LogoutUserRequest",
      });
  
      await axios.get("logout");
      
      dispatch({
        type: "LogoutUserSuccess",
      });
    } catch (error) {
      dispatch({
        type: "LogoutUserFailure",
        payload: error.response.data.message,
      });
    }
  };