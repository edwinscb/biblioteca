const IdiomaController = require("../controllers/idiomasController");

module.exports = (app) => {
  app.get("/api/idioma/getAll", IdiomaController.getAll);
  app.post("/api/idioma/create", IdiomaController.create);
  app.delete("/api/idioma/delete/:id", IdiomaController.delete);
};
