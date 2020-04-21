const router = require("express").Router();

const Users = require("./userModel");

// router.get("/", (req, res) => {
//   console.log(req.decodedToken);
//   Users.find()
//     .then((users) => {
//       res.status(200).json(users);
//     })
//     .catch((error) => {
//       res.status(500).json({ error: `Internal Server Error` });
//     });
// });

router.get("/", (req, res) => {
  console.log(req.decodedToken);
  let { department } = req.decodedToken;

  Users.findBy({ department })
    .then((users) => {
      console.log(users);
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(500).json({ error: `Internal Server Error` });
    });
});

module.exports = router;
