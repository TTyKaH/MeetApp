module.exports = (app) => {
  const appointment = require("../controllers/appointment.js");

  var router = require("express").Router();

  router.post("/", appointment.create);
  router.get("/", appointment.findAll);
  router.get("/:id", appointment.findOne);
  router.put("/:id", appointment.update);
  router.delete("/:id", appointment.delete);

  app.use("/api/appointments", router);
};
