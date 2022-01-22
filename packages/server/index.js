// server/index.js

const express = require("express");
const cors = require("cors");
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

app.get("/api", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({ message: "Hello from server!" });
});

app.use("/api/user/login", (req, res) => {
  res.send({
    success: true,
    message: "User Successfully logged in",
    data: {
      user: {
        name: "Hassan Abbas",
        email: "hassanabbassayed@gmail.com",
        role: 1,
      },
      token: "test123",
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
