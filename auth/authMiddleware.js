const jwt = require("jsonwebtoken");
const secret = require("../config/secret");

module.exports = (req, res, next) => {
  console.log(req);
  const token = req.headers.authorization;

  console.log("$$$$$$ TOKEN", token);

  if (token) {
    jwt.verify(token, secret.jwtSecret, (error, decodedToken) => {
      if (error) {
        res.status(401).json({
          error: `There was an error while authenticating your identity.`,
        });
      } else {
        req.decodedToken = decodedToken;

        next();
      }
    });
  } else {
    res.status(400).json({
      message: `Please provide valid credentials in order to proceed.`,
    });
  }
};
