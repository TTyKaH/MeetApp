module.exports = (app) => {
  const appointment = require("../controllers/user.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/", appointment.create);

  // Retrieve all appointment
  router.get("/", appointment.findAll);

  // Retrieve a single User with id
  router.get("/:id", appointment.findOne);

  // Update a User with id
  router.put("/:id", appointment.update);

  // Delete a User with id
  router.delete("/:id", appointment.delete);

  app.use("/api/appointment", router);
};
