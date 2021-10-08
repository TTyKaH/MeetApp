module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define("appointment", {
    ownerID: {
      type: DataTypes.STRING,
    },
    clientID: {
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
    location: {
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
