import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../axiosWithAuth/axiosWithAuth";
// Axios.defaults.withCredentials = true;

const LoginForm = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { push } = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:7000/api/auth/login", user)
      .then((res) => {
        console.log("THIS IS RES FROM .POST LOGIN FORM", res);
        localStorage.setItem("token", JSON.stringify(res.data.token));
        console.log(localStorage.getItem("token"));
        push("/users");
      })
      .catch((err) => console.log(err.message));
    setUser({
      username: "",
      password: "",
    });
  };

  const pushToRegistration = () => {
    push("/register");
  };
  return (
    <div>
      <h1>Welcome! Please Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            onChange={handleChange}
            name="username"
            value={user.username}
          />
        </label>
        <label>
          Password:
          <input
            onChange={handleChange}
            name="password"
            value={user.password}
          />
        </label>
        <input type="submit" />
      </form>
      <div>
        <h1>Need an Account? Sign Up Below!</h1>
        <button onClick={(e) => pushToRegistration()}>Sign Up Here</button>
      </div>
    </div>
  );
};

export default LoginForm;
