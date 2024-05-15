const Genero = require("../models/genero");

module.exports = {
  async getAll(req, res, next) {
    try {
      const data = await Genero.getAll();
      console.log(`Géneros: ${data}`);
      return res.status(200).json(data);
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Error al obtener los géneros",
      });
    }
  },

  async create(req, res, next) {
    try {
      const genero = req.body;
      const data = await Genero.create(genero);

      return res.status(201).json({
        success: true,
        message: "El género se creó correctamente",
        data: data.id,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Hubo un error al crear el género",
        error: error,
      });
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Genero.delete(id);

      if (data) {
        return res.status(200).json({
          success: true,
          message: "Género eliminado correctamente",
          data: data.id,
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "Género no encontrado",
        });
      }
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Hubo un error al intentar eliminar el género",
        error: error,
      });
    }
  },
};
