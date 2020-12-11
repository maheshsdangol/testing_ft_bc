module.exports.development = {
  username: "root",
  password: 'password',
  database: "db",
  host: "34.230.38.84",
  port: "7200",
  dialect: "mysql",
  seederStorage: "sequelize",
  url: process.env.DB_URI
};
