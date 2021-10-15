const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  // if (!req.body.email || !req.body.password || !req.body.firstName) {
  //   res.status(400).send({
  //     message: "Content can not be empty!",
  //   });
  //   return;
  // }

  // Create a user
  const user = {
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

  // Save User in the database
  console.log("1", res);
  res.send({ message: "Some error occurred while creating the User." });
  console.log("2", res);
  // User.create(user)
  //   .then((data) => {
  //     console.log("Create user:", data);
  //     res.send(data);
  //   })
  //   .catch((err) => {
  //     // console.log(err.errors[0]);
  //     res.status(500).send("Some error occurred while creating the User.");
  //   });
};

exports.findAll = (req, res) => {
  const companyName = req.query.companyName;
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;
  var condition = {};
  if (companyName) {
    condition.companyName = { [Op.iLike]: `%${companyName}%` };
  }
  if (firstName) {
    condition.firstName = { [Op.iLike]: `%${firstName}%` };
  }
  if (lastName) {
    condition.lastName = { [Op.iLike]: `%${lastName}%` };
  }

  User.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating User with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
};

exports.login = (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;

  User.get();
};
