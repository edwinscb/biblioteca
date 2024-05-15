const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const logger = require("morgan");
const cors = require("cors");
const { resolve } = require("path");

const usuarios = require("./routes/usuariosRoutes");
const libros = require("./routes/librosRoutes");
const generos = require("./routes/generosRoutes");
const autores = require("./routes/autoresRoutes");
const idiomas = require("./routes/idiomasRoutes");
const librosLeidos = require("./routes/librosLeidosRoutes");
const valoracionLibros = require("./routes/valoracionLibrosRoutes");
const preferenciaUsuarios = require("./routes/preferenciaUsuariosRoutes");

const port = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.disable("x-powered-by");

app.set("port", port);

usuarios(app);
libros(app);
generos(app);
autores(app);
idiomas(app);
librosLeidos(app);
valoracionLibros(app);
preferenciaUsuarios(app);

server.listen(3000, "192.168.56.1" || "localhost", function () {
  console.log("Aplicacion de NodeJs " + port + " Iniciada...");
});

app.get("/", (req, res) => {
  res.send("raiz");
});

app.get("/libros", (req, res) => {
  res.send("Libros");
});

app.get("/Usuarios", (req, res) => {
  res.send("Usuarios");
});

app.get("/Generos", (req, res) => {
  res.send("Generos");
});

app.get("/Autores", (req, res) => {
  res.send("Autores");
});

app.get("/Idiomas", (req, res) => {
  res.send("Idiomas");
});

app.get("/librosLeidos", (req, res) => {
  res.send("Libros leidos");
});

app.get("/PreferenciaUsuarios", (req, res) => {
  res.send("Preferencia de Usuarios");
});

app.get("/ValoracionLibros", (req, res) => {
  res.send("Valoracion de Libros");
});

//ERROR HANDLER
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send(err.stack);
});

module.exports = {
  app: app,
  server: server,
};

//200 - RESPUESTA EXITOSA
//404 URL NO EXISTE
//500 ERROR EN EL SERVER
