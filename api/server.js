require("dotenv").config();

const express = require("express");

const authRouter = require("../auth/authRouter");
const usersRouter = require("../users/usersRouter");
const foodRouter = require("../food/foodRouter");

const server = express();
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/food", foodRouter);

module.exports = server;
