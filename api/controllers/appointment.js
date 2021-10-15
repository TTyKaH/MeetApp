const db = require("../models");
const Appointment = db.appointments;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const appointment = {
    ownerID: req.body.ownerID,
    clientID: req.body.clientID,
    date: req.body.date,
    duration: req.body.duration,
    type: req.body.type,
    location: req.body.location,
    status: req.body.status,
    description: req.body.description,
  };

  Appointment.create(appointment)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Appointment.",
      });
    });
};

exports.findAll = (req, res) => {
  const ownerID = req.query.ownerID;
  const clientID = req.query.clientID;
  const date = req.query.date;
  const type = req.query.type;
  const status = req.query.status;
  var condition = {};
  if (ownerID) {
    condition.ownerID = { [Op.iLike]: `%${ownerID}%` };
  }
  if (clientID) {
    condition.clientID = { [Op.iLike]: `%${clientID}%` };
  }
  if (date) {
    condition.date = { [Op.iLike]: `%${date}%` };
  }
  if (type) {
    condition.type = { [Op.iLike]: `%${type}%` };
  }
  if (status) {
    condition.status = { [Op.iLike]: `%${status}%` };
  }

  Appointment.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving appointment.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Appointment.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Appointment with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Appointment with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Appointment.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Appointment was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Appointment with id=${id}. Maybe Appointment was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Appointment with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Appointment.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Appointment was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Appointment with id=${id}. Maybe Appointment was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Appointment with id=" + id,
      });
    });
};
