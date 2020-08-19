const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require("../auth/auth-router");
const usersRouter = require("../users/users-router");
const postsRouter = require("../posts/posts-router");
const { authenticateUser } = require("../middleware");

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/posts", postsRouter);

module.exports = server;
