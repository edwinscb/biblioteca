const Usuario = require("../models/usuario");

module.exports = {
  async getAll(req, res, next) {
    try {
      const data = await Usuario.getAll();
      console.log(`Usuarios: ${data}`);
      return res.status(200).json(data);
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Error al obtener los resultados",
      });
    }
  },

  async register(req, res, next) {
    try {
      const usuario = req.body;
      const data = await Usuario.create(usuario);

      return res.status(201).json({
        success: true,
        message: "El registro se realizó correctamente",
        data: data.id,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Hubo un error con el registro del usuario",
        error: error,
      });
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Usuario.delete(id);

      if (data) {
        return res.status(200).json({
          success: true,
          message: "Usuario eliminado correctamente",
          data: data.id,
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "Usuario no encontrado",
        });
      }
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Hubo un error al intentar eliminar el usuario",
        error: error,
      });
    }
  },
};
