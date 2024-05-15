const AutorController = require("../controllers/autoresController");

module.exports = (app) => {
  app.get("/api/autor/getAll", AutorController.getAll);
  app.post("/api/autor/create", AutorController.create);
  app.delete("/api/autor/delete/:id", AutorController.delete);
};
