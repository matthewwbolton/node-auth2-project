import React from "react";
import { Route, NavLink } from "react-router-dom";
import LoginForm from "../src/components/LoginForm";
import Users from "../src/components/Users";
import LogoutPage from "../src/components/LogoutPage";
import UserRegistration from "../src/components/UserRegistration";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Login</NavLink>
        <NavLink to="/register">Register Here</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/logout">Logout</NavLink>
      </nav>
      <Route path="/register">
        <UserRegistration />
      </Route>
      <Route exact path="/">
        <LoginForm />
      </Route>
      <Route exact path="/users">
        <Users />
      </Route>
      <Route exact path="/logout">
        <LogoutPage />
      </Route>
    </div>
  );
}

export default App;
