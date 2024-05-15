const db = require("../config/config");

const Libro = {};

Libro.getAll = () => {
  const sql = `SELECT * FROM libro`;
  return db.manyOrNone(sql);
};

Libro.create = (libro) => {
  const sql = `INSERT INTO
                libro(
                  ISBN,
                  titulo,
                  sinopsis,
                  fechaPublicacion,
                  id_genero,
                  id_autor,
                  id_idioma,
                  created_at,
                  updated_at
                )
                VALUES(
                  $1,
                  $2,
                  $3,
                  $4,
                  $5,
                  $6,
                  $7,
                  $8,
                  $9
                ) RETURNING id`;

  return db.oneOrNone(sql, [
    libro.ISBN,
    libro.titulo,
    libro.sinopsis,
    libro.fechaPublicacion,
    libro.id_genero,
    libro.id_autor,
    libro.id_idioma,
    new Date(),
    new Date(),
  ]);
};

Libro.delete = (id) => {
  const sql = `DELETE FROM libro WHERE id = $1 RETURNING id`;
  return db.oneOrNone(sql, [id]);
};

module.exports = Libro;
