const UsuariosController = require("../controllers/usuariosController");

module.exports = (app) => {
  app.get("/api/usuarios/getAll", UsuariosController.getAll);
  app.post("/api/usuarios/create", UsuariosController.register);
  app.delete("/api/usuarios/delete/:id", UsuariosController.delete); // Nueva ruta para eliminar usuario
};
