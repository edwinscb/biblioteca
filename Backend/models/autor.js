const db = require("../config/config");

const Autor = {};

Autor.getAll = () => {
  const sql = `SELECT * FROM autor`;
  return db.manyOrNone(sql);
};

Autor.create = (autor) => {
  const sql = `INSERT INTO
                autor(
                  nombre,
                  nacionalidad,
                  fechaNacimiento,
                  biografia
                )
                VALUES(
                  $1,
                  $2,
                  $3,
                  $4
                ) RETURNING id`;

  return db.oneOrNone(sql, [
    autor.nombre,
    autor.nacionalidad,
    autor.fechaNacimiento,
    autor.biografia,
  ]);
};

Autor.delete = (id) => {
  const sql = `DELETE FROM autor WHERE id = $1 RETURNING id`;
  return db.oneOrNone(sql, [id]);
};

module.exports = Autor;
