const LibroLeido = require("../models/librosLeidos");

module.exports = {
  async getAll(req, res, next) {
    try {
      const data = await LibroLeido.getAll();
      console.log(`Libros leídos: ${data}`);
      return res.status(200).json(data);
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Error al obtener los libros leídos",
      });
    }
  },

  async create(req, res, next) {
    try {
      const libroLeido = req.body;
      const data = await LibroLeido.create(libroLeido);

      return res.status(201).json({
        success: true,
        message: "El registro de libro leído se creó correctamente",
        data: data.id,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Hubo un error al crear el registro de libro leído",
        error: error,
      });
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const data = await LibroLeido.delete(id);

      if (data) {
        return res.status(200).json({
          success: true,
          message: "Registro de libro leído eliminado correctamente",
          data: data.id,
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "Registro de libro leído no encontrado",
        });
      }
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message:
          "Hubo un error al intentar eliminar el registro de libro leído",
        error: error,
      });
    }
  },
};
