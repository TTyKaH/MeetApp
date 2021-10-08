module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    firstName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: [true],
          msg: "First name field cannot be empty!",
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
    },
    birthday: {
      type: DataTypes.DATE,
    },
    role: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: {
          args: [true],
          msg: "Email has wrong format!",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: [true],
          msg: "Password field cannot be empty!",
        },
        len: {
          args: [(4, 8)],
          msg: "Password should be have from 4 to 8 symbols!",
        },
      },
    },
    phone: {
      type: DataTypes.STRING,
    },
    companyName: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
  });

  return User;
};
