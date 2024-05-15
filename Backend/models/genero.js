const db = require("../config/config");

const Genero = {};

Genero.getAll = () => {
  const sql = `SELECT * FROM genero`;
  return db.manyOrNone(sql);
};

Genero.create = (genero) => {
  const sql = `INSERT INTO
                genero(
                  nombre
                )
                VALUES(
                  $1
                ) RETURNING id`;

  return db.oneOrNone(sql, [genero.nombre]);
};

Genero.delete = (id) => {
  const sql = `DELETE FROM genero WHERE id = $1 RETURNING id`;
  return db.oneOrNone(sql, [id]);
};

module.exports = Genero;
