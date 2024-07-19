const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

// middleware
app.use(express.json());
app.use(cors());

// GLOBAL ERROR HANDLER
app.use((err, res, req, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log(`Listening in PORT ${PORT}...`);
  });
};

server();
