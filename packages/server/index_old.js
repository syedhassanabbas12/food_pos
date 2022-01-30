// server/index.js

const express = require("express");
const cors = require("cors");
const mongo = require("mongodb");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const REACT_APP_URL = process.env.REACT_APP_ENDPOINT;
const app = express();

const whitelist = [REACT_APP_URL];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.get("/api", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({ message: "Hello from server!" });
});

app.post("/api/user/login", (req, res) => {
  const { email, password } = req?.body;
  const response = {};
  if (email === "admin") {
    if (password === "admin") {
      response.success = true;
      response.message = "User Successfully logged in";
      response.data = {
        user: {
          name: "Hassan Abbas",
          email: "hassanabbassayed@gmail.com",
          role: 1,
        },
        token: "test123",
      };
    } else {
      response.success = false;
      response.message = "Incorrect password";
      response.data = null;
    }
  } else {
    response.success = false;
    response.message = "User does not exist";
    response.data = null;
  }
  res.send(response);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
