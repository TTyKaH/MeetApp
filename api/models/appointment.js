module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define("appointment", {
    author: {
      type: DataTypes.STRING,
    },
    authorLink: {
      type: DataTypes.STRING,
    },
    invited: {
      type: DataTypes.STRING,
    },
    invitedLink: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATE,
    },
    duration: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    meetPlace: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  });

  return Appointment;
};
