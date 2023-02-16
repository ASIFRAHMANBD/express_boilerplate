const env = process.env.NODE_ENV || 'development';
const config =  require('../../config/config.json')[env];

module.exports = {
  HOST: "localhost",
  USER: config.username,
  PASSWORD: config.password,
  DB: config.database,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
