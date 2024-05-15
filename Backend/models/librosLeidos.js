const db = require("../config/config");

const LibroLeido = {};

LibroLeido.getAll = () => {
  const sql = `SELECT * FROM libros_leidos`;
  return db.manyOrNone(sql);
};

LibroLeido.create = (libroLeido) => {
  const sql = `INSERT INTO
                libros_leidos(
                  id_usuario,
                  id_libro,
                  fecha_lectura,
                  progreso_lectura
                )
                VALUES(
                  $1,
                  $2,
                  $3,
                  $4
                ) RETURNING id`;

  return db.oneOrNone(sql, [
    libroLeido.id_usuario,
    libroLeido.id_libro,
    libroLeido.fecha_lectura,
    libroLeido.progreso_lectura,
  ]);
};

LibroLeido.delete = (id) => {
  const sql = `DELETE FROM libros_leidos WHERE id = $1 RETURNING id`;
  return db.oneOrNone(sql, [id]);
};

module.exports = LibroLeido;
