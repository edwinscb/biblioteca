const db = require("../config/config");

const Idioma = {};

Idioma.getAll = () => {
  const sql = `SELECT * FROM idioma`;
  return db.manyOrNone(sql);
};

Idioma.create = (idioma) => {
  const sql = `INSERT INTO
                idioma(
                  nombre
                )
                VALUES(
                  $1
                ) RETURNING id`;

  return db.oneOrNone(sql, [idioma.nombre]);
};

Idioma.delete = (id) => {
  const sql = `DELETE FROM idioma WHERE id = $1 RETURNING id`;
  return db.oneOrNone(sql, [id]);
};

module.exports = Idioma;
