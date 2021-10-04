module.exports = {
  HOST: "localhost",
  USER: "meetapp",
  PASSWORD: "123",
  DB: "meetapp",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
