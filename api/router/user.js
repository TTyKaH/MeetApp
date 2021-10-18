module.exports = (app) => {
  const users = require("../controllers/user.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/", (req, res) => {
    // Validate request
    // if (!req.body.email || !req.body.password || !req.body.firstName) {
    //   res.status(400).send({
    //     message: "Content can not be empty!",
    //   });
    //   return;
    // }

    // Create a user
    // const user = {
    //   firstName: req.body.firstName,
    //   lastName: req.body.lastName,
    //   birthday: req.body.birthday,
    //   role: req.body.role,
    //   email: req.body.email,
    //   password: req.body.password,
    //   phone: req.body.phone,
    //   companyName: req.body.companyName,
    //   country: req.body.country,
    //   city: req.body.city,
    //   address: req.body.address,
    // };

    // Save User in the database
    console.log("1");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "origin, content-type, accept"
    );
    res.json({ message: "Some error occurred while creating the User." });
    console.log("2");
    // User.create(user)
    //   .then((data) => {
    //     console.log("Create user:", data);
    //     res.send(data);
    //   })
    //   .catch((err) => {
    //     // console.log(err.errors[0]);
    //     res.status(500).send("Some error occurred while creating the User.");
    //   });
  });

  // Retrieve all Users
  router.get("/", users.findAll);

  // Retrieve a single User with id
  router.get("/:id", users.findOne);

  // Update a User with id
  router.put("/:id", users.update);

  // Delete a User with id
  router.delete("/:id", users.delete);

  app.use("/api/users", router);
};
