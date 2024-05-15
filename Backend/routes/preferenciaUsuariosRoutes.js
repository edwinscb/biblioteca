const PreferenciaUsuariosController = require("../controllers/preferenciaUsuariosController");
const { app } = require("../server");

module.exports = (app) => {
  app.get(
    "/api/preferenciaUsuarios/getAll",
    PreferenciaUsuariosController.getAll
  );

  app.post(
    "/api/preferenciaUsuarios/create",
    PreferenciaUsuariosController.create
  );
  app.delete(
    "/api/preferenciasUsuario/delete/:id_usuario/:id_genero",
    PreferenciaUsuariosController.delete
  );
};
