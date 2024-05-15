const Libro = require("../models/libro");

module.exports = {
  async getAll(req, res, next) {
    try {
      const data = await Libro.getAll();
      console.log(`Libros: ${data}`);
      return res.status(200).json(data);
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Error al obtener los libros",
      });
    }
  },

  async create(req, res, next) {
    try {
      const libro = req.body;
      const data = await Libro.create(libro);

      return res.status(201).json({
        success: true,
        message: "El libro se creó correctamente",
        data: data.id,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Hubo un error al crear el libro",
        error: error,
      });
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Libro.delete(id);

      if (data) {
        return res.status(200).json({
          success: true,
          message: "Libro eliminado correctamente",
          data: data.id,
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "Libro no encontrado",
        });
      }
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Hubo un error al intentar eliminar el libro",
        error: error,
      });
    }
  },
};
