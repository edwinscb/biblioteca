const Autor = require("../models/autor");

module.exports = {
  async getAll(req, res, next) {
    try {
      const data = await Autor.getAll();
      console.log(`Autores: ${data}`);
      return res.status(200).json(data);
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Error al obtener los autores",
      });
    }
  },

  async create(req, res, next) {
    try {
      const autor = req.body;
      const data = await Autor.create(autor);

      return res.status(201).json({
        success: true,
        message: "El autor se creó correctamente",
        data: data.id,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Hubo un error al crear el autor",
        error: error,
      });
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Autor.delete(id);

      if (data) {
        return res.status(200).json({
          success: true,
          message: "Autor eliminado correctamente",
          data: data.id,
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "Autor no encontrado",
        });
      }
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Hubo un error al intentar eliminar el autor",
        error: error,
      });
    }
  },
};
