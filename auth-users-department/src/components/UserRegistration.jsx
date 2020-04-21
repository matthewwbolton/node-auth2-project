import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../axiosWithAuth/axiosWithAuth";

const UserRegistration = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    department: "",
  });

  const { push } = useHistory();

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:7000/api/auth/register", newUser)
      .then((res) => {
        console.log("POST RESPONSE FROM USER REGISTRATION", res);
        localStorage.setItem("token", JSON.stringify(res.data.token));
        push("/");
      })
      .catch((err) => console.log(err.message));

    setNewUser({ username: "", password: "", department: "" });
  };

  return (
    <div>
      <h1>User Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Your Desired Username:
          <input
            onChange={handleChange}
            name="username"
            value={newUser.username}
          />
        </label>
        <label>
          Enter A Password To Protect Your Account:
          <input
            onChange={handleChange}
            name="password"
            value={newUser.password}
          />
        </label>
        <label>
          User Department:
          <input
            onChange={handleChange}
            name="department"
            value={newUser.department}
          />
        </label>
        <button>Create New User Account</button>
      </form>
    </div>
  );
};

export default UserRegistration;
