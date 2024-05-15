const promise = require("bluebird");
const { query } = require("express");
const options = {
  promiseLib: promise,
  query: (e) => {},
};

const pgp = require("pg-promise")(options);
const types = pgp.pg.types;
types.setTypeParser(1114, function (stringValue) {
  return stringValue;
});

const databaseConfig = {
  host: "127.0.0.1",
  port: 5432,
  database: "biblioteca_db",
  user: "postgres",
  password: "2017",
};

const db = pgp(databaseConfig);

module.exports = db;
