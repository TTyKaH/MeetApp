const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./models");

app.use(express.json());

db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to your application." });
});

require("./router/user.js")(app);

app.listen(8080, () => {
  console.log("Server is running on port 8080...");
});

// {
//   force: true
// }
