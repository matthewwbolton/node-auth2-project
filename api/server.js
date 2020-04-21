require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const userRouter = require("../users/userRouter");
const authRouter = require("../auth/authRouter");
const authMiddleware = require("../auth/authMiddleware");

const server = express();

const corsOptions = {
  origin: ["http://localhost:7000", "http://localhost:3001"],
  credentials: true,
};

server.use(helmet());
server.use(express.json());
server.use(cors(corsOptions));

server.use("/api/auth", authRouter);
server.use("/api/users", authMiddleware, userRouter);

server.get("/", (req, res) => {
  res.send(`The API is Up and Running`);
});

module.exports = server;
