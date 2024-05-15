const db = require("../config/config");

const PreferenciaUsuario = {};

PreferenciaUsuario.create = (preferencia) => {
  const sql = `INSERT INTO
                preferencias_usuario(
                  id_usuario,
                  id_genero
                )
                VALUES(
                  $1,
                  $2
                ) RETURNING id`;

  return db.oneOrNone(sql, [preferencia.id_usuario, preferencia.id_genero]);
};

PreferenciaUsuario.delete = (id_usuario, id_genero) => {
  const sql = `DELETE FROM preferencias_usuario WHERE id_usuario = $1 AND id_genero = $2 RETURNING id_usuario, id_genero`;
  return db.oneOrNone(sql, [id_usuario, id_genero]);
};

module.exports = PreferenciaUsuario;
