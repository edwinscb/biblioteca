const LibrosController = require("../controllers/librosController");

module.exports = (app) => {
  app.get("/api/libros/getAll", LibrosController.getAll);
  app.post("/api/libros/create", LibrosController.create);
  app.delete("/api/libros/delete/:id", LibrosController.delete);
};
