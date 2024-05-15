const PreferenciaUsuario = require("../models/preferenciaUsuario");

module.exports = {
  async getAll(req, res, next) {
    try {
      const data = await PreferenciaUsuario.getAll();
      console.log(`Preferencias de usuario: ${data}`);
      return res.status(200).json(data);
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Error al obtener las preferencias de usuario",
      });
    }
  },

  async create(req, res, next) {
    try {
      const preferencia = req.body;
      const data = await PreferenciaUsuario.create(preferencia);

      return res.status(201).json({
        success: true,
        message: "La preferencia de usuario se creó correctamente",
        data: data.id,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Hubo un error al crear la preferencia de usuario",
        error: error,
      });
    }
  },

  async delete(req, res, next) {
    try {
      const { id_usuario, id_genero } = req.params;
      const data = await PreferenciaUsuario.delete(id_usuario, id_genero);

      if (data) {
        return res.status(200).json({
          success: true,
          message: "Preferencia de usuario eliminada correctamente",
          data: data,
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "Preferencia de usuario no encontrada",
        });
      }
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Hubo un error al intentar eliminar la preferencia de usuario",
        error: error,
      });
    }
  },
};
