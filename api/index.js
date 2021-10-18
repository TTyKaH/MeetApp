const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./models");
const cors = require("cors");

// app.use(express());
app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());

db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to your application." });
});
app.post("/", (req, res) => {
  res.json({ message: "Welcome to your application." });
});

require("./router/user.js")(app);
require("./router/appointment.js")(app);

app.listen(8080, () => {
  console.log("Server is running on port 8080...");
});

// {
//   force: true
// }
