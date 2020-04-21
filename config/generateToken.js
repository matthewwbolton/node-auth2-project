const jwt = require("jsonwebtoken");
const secret = require("../config/secret");

module.exports = (user) => {
  const payload = {
    userId: user.id,
    username: user.username,
    department: user.department,
  };

  const options = {
    expiresIn: "1d",
  };

  return jwt.sign(payload, secret.jwtSecret, options);
};
