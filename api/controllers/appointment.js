const db = require("../models");
const Appointment = db.appointment;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const appointment = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthday: req.body.birthday,
    role: req.body.role,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    companyName: req.body.companyName,
    country: req.body.country,
    city: req.body.city,
    address: req.body.address,
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
  const author = req.query.author;
  const invited = req.query.invited;
  const date = req.query.date;
  const type = req.query.type;
  const status = req.query.status;
  var condition = {};
  if (author) {
    condition.author = { [Op.iLike]: `%${author}%` };
  }
  if (invited) {
    condition.invited = { [Op.iLike]: `%${invited}%` };
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
