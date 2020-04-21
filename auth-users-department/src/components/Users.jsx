import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../axiosWithAuth/axiosWithAuth";
import styled from "styled-components";
axiosWithAuth().defaults.withCredentials = true;

const NewDiv = styled.div`
  border: 1px solid grey;
`;

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:7000/api/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <NewDiv key={user.id}>
          <h4>Username: {user.username}</h4>
          <h4>Department: {user.department}</h4>
        </NewDiv>
      ))}
    </div>
  );
};

export default Users;
