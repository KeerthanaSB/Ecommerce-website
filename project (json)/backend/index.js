process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const express = require("express");
const cors = require("cors");
const axios = require("axios");
var bodyParser = require("body-parser");

const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// this for insert one or feedback

app.post("/insertdata", (req, res) => {
  const { name, email, message } = req.body;

  var data = JSON.stringify({
    collection: "feedback",
    database: "ATC",
    dataSource: "Cluster1",
    document: {
      name: name,
      email: email,
      message: message

    },
  });

  var config = {
    method: "post",
    url: "https://ap-south-1.aws.data.mongodb-api.com/app/data-iepguef/endpoint/data/v1/action/insertOne",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key":
        "tt8N60mF9SGG7yOWh5hUkSVqkGPzvZYEWudMXgp54uZi98mbKJoucQqBlWXT1vek",
    },
    data: data,
  };

  axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      res.status(200).send({ success: "sumbitted sucessfully" });
    })
    .catch((error) => {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      res
        .status(500)
        .send({ error: "An error occurred while processing your request" });
    });
});

// for login/for signup

// this for insert one or singup

app.post("/insertreg", (req, res) => {
  const { username, email, password } = req.body;

  var data = JSON.stringify({
    collection: "login",
    database: "ATC",
    dataSource: "Cluster1",
    document: {
      username: username,
      email: email,
      password: password,
    },
  });

  var config = {
    method: "post",
    url: "https://ap-south-1.aws.data.mongodb-api.com/app/data-iepguef/endpoint/data/v1/action/insertOne",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key":
      "tt8N60mF9SGG7yOWh5hUkSVqkGPzvZYEWudMXgp54uZi98mbKJoucQqBlWXT1vek",

    },
    data: data,
  };

  axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      res.status(200).send({ success: "Registration is success" });
    })
    .catch((error) => {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      res
        .status(500)
        .send({ error: "An error occurred while processing your request" });
    });
});

app.post("/getlogin", (req, res) => {
  const { username, password } = req.body;

  var data = JSON.stringify({
    collection: "login",
    database: "ATC",
    dataSource: "Cluster1",
    filter: { username: username, password: password },
  });

  var config = {
    method: "post",
    url: "https://ap-south-1.aws.data.mongodb-api.com/app/data-iepguef/endpoint/data/v1/action/findOne",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key":
      "tt8N60mF9SGG7yOWh5hUkSVqkGPzvZYEWudMXgp54uZi98mbKJoucQqBlWXT1vek",

    },
    data: data,
  };

  axios(config)
    .then((response) => {
      console.log(response);
      if (response.data.document !== null) {
        res.status(200).send({ success: "Login is success" });
      } else {
        res.status(400).send({ error: " Please register before the login" });
      }
    })
    .catch((error) => {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      res
        .status(500)
        .send({ error: "An error occurred while processing your request" });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});