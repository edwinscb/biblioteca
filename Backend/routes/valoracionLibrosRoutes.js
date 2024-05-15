const ValoracionesLibrosController = require("../controllers/valoracionLibrosController");

module.exports = (app) => {
  app.get(
    "/api/valoracionesLibros/getAll",
    ValoracionesLibrosController.getAll
  );
  app.post(
    "/api/valoracionesLibros/create",
    ValoracionesLibrosController.create
  );
  app.delete(
    "/api/valoracionesLibros/delete/:id",
    ValoracionesLibrosController.delete
  );
};
