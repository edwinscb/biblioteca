const Idioma = require("../models/idioma");

module.exports = {
  async getAll(req, res, next) {
    try {
      const data = await Idioma.getAll();
      console.log(`Idiomas: ${data}`);
      return res.status(200).json(data);
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Error al obtener los idiomas",
      });
    }
  },

  async create(req, res, next) {
    try {
      const idioma = req.body;
      const data = await Idioma.create(idioma);

      return res.status(201).json({
        success: true,
        message: "El idioma se creó correctamente",
        data: data.id,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Hubo un error al crear el idioma",
        error: error,
      });
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Idioma.delete(id);

      if (data) {
        return res.status(200).json({
          success: true,
          message: "Idioma eliminado correctamente",
          data: data.id,
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "Idioma no encontrado",
        });
      }
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Hubo un error al intentar eliminar el idioma",
        error: error,
      });
    }
  },
};
