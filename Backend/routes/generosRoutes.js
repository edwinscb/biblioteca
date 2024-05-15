const GeneroController = require("../controllers/generosController");

module.exports = (app) => {
  app.get("/api/genero/getAll", GeneroController.getAll);
  app.post("/api/genero/create", GeneroController.create);
  app.delete("/api/genero/delete/:id", GeneroController.delete);
};
