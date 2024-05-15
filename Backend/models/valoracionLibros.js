const db = require("../config/config");

const ValoracionLibro = {};

ValoracionLibro.getAll = () => {
  const sql = `SELECT * FROM valoraciones_libros`;
  return db.manyOrNone(sql);
};

ValoracionLibro.create = (valoracion) => {
  const sql = `INSERT INTO
                valoraciones_libros(
                  id_usuario,
                  id_libro,
                  puntuacion,
                  comentario,
                  created_at,
                  updated_at
                )
                VALUES(
                  $1,
                  $2,
                  $3,
                  $4,
                  $5,
                  $6
                ) RETURNING id`;

  return db.oneOrNone(sql, [
    valoracion.id_usuario,
    valoracion.id_libro,
    valoracion.puntuacion,
    valoracion.comentario,
    new Date(),
    new Date(),
  ]);
};

ValoracionLibro.delete = (id) => {
  const sql = `DELETE FROM valoraciones_libros WHERE id = $1 RETURNING id`;
  return db.oneOrNone(sql, [id]);
};

module.exports = ValoracionLibro;
