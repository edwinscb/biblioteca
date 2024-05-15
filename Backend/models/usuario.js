const db = require("../config/config");

const Usuario = {};

Usuario.getAll = () => {
  const sql = `SELECT * FROM usuario`;
  return db.manyOrNone(sql);
};

Usuario.create = (usuario) => {
  const sql = `INSERT INTO
                usuario(
                  nombre,
                  correo,
                  password,
                  created_at,
                  updated_at
                )
                VALUES(
                  $1,
                  $2,
                  $3,
                  $4,
                  $5
                ) RETURNING id`;

  return db.oneOrNone(sql, [
    usuario.nombre,
    usuario.correo,
    usuario.password,
    new Date(),
    new Date(),
  ]);
};

Usuario.delete = (id) => {
  const sql = `DELETE FROM usuario WHERE id = $1 RETURNING id`;
  return db.oneOrNone(sql, [id]);
};

module.exports = Usuario;
