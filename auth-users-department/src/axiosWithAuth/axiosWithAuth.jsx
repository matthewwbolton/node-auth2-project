// import axios from "axios";

// const token = JSON.parse(localStorage.getItem("token"));

// export default axios.create({
//   baseURL: "http://localhost:7000",
//   withCredentials: true,
//   headers: {
//     Authorization: token,
//   },
// });

import axios from "axios";

export const axiosWithAuth = () => {
  const token = JSON.parse(window.localStorage.getItem("token"));

  return axios.create({
    baseURL: "http://localhost:7000",
    withCredentials: true,
    headers: {
      Authorization: token,
    },
  });
};
