// import React, { useEffect } from "react";
// import { axiosWithAuth } from "../axiosWithAuth/axiosWithAuth";
// import Axios from "axios";

// const LogoutPage = () => {
//   useEffect(() => {
//     axiosWithAuth()
//       .get("/api/auth/logout")
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => console.log(err.message));
//   }, []);

//   return (
//     <div>
//       <h1>Thanks for Visting!! Please come again soon!!!</h1>
//     </div>
//   );
// };

// export default LogoutPage;

import React, { useEffect } from "react";

const LogoutPage = () => {
  const logoutDeleteToken = () => {
    localStorage.clear();
  };

  useEffect(() => {
    logoutDeleteToken();
  }, []);
  return (
    <div>
      <h1>Thanks for visiting Users by Department List</h1>
      <h2>You have successfully logged out!</h2>
    </div>
  );
};

export default LogoutPage;
