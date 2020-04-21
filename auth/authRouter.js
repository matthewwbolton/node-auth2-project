const router = require("express").Router();

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const secret = require("../config/secret");
const generateToken = require("../config/generateToken");

const Users = require("../users/userModel");

router.post("/register", (req, res) => {
  let user = req.body;

  const rounds = process.env.HASH_ROUNDS || 14;

  const hash = bcrypt.hashSync(user.password, rounds);

  user.password = hash;

  Users.addUser(user)
    .then((newUser) => {
      res.status(201).json(newUser);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ message: `Welcome user ${username}!`, token });
      } else {
        res.status(401).json({
          message: `There is no account associated with username ${username}`,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: error.message });
    });
});

router.get("/logout", (req, res) => {});

module.exports = router;
