const LibrosLeidosController = require("../controllers/librosLeidosController");

module.exports = (app) => {
  app.get("/api/librosLeidos/gtAlel", LibrosLeidosController.getAll);
  app.post("/api/librosLeidos/create", LibrosLeidosController.create);
  app.delete("/api/librosLeidos/delete/:id", LibrosLeidosController.delete);
};
