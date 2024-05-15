const ValoracionLibro = require("../models/valoracionLibros");

module.exports = {
  async getAll(req, res, next) {
    try {
      const data = await ValoracionLibro.getAll();
      console.log(`Valoraciones de libros: ${data}`);
      return res.status(200).json(data);
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Error al obtener las valoraciones de libros",
      });
    }
  },

  async create(req, res, next) {
    try {
      const valoracion = req.body;
      const data = await ValoracionLibro.create(valoracion);

      return res.status(201).json({
        success: true,
        message: "La valoración del libro se realizó correctamente",
        data: data.id,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Hubo un error al realizar la valoración del libro",
        error: error,
      });
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const data = await ValoracionLibro.delete(id);

      if (data) {
        return res.status(200).json({
          success: true,
          message: "Valoración de libro eliminada correctamente",
          data: data.id,
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "Valoración de libro no encontrada",
        });
      }
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Hubo un error al intentar eliminar la valoración de libro",
        error: error,
      });
    }
  },
};
