-- Vaciar la tabla de valoraciones de libros
DELETE FROM VALORACIONES_LIBROS;

-- Vaciar la tabla de libros leídos
DELETE FROM LIBROS_LEIDOS;

-- Vaciar la tabla de preferencias de usuario
DELETE FROM PREFERENCIAS_USUARIO;

-- Vaciar la tabla de usuarios
DELETE FROM USUARIO;

-- Vaciar la tabla de libros
DELETE FROM LIBRO;

-- Vaciar la tabla de idiomas
DELETE FROM IDIOMA;

-- Vaciar la tabla de autores
DELETE FROM AUTOR;

-- Vaciar la tabla de géneros
DELETE FROM GENERO;

DROP TABLE IF EXISTS VALORACIONES_LIBROS;
DROP TABLE IF EXISTS LIBROS_LEIDOS;
DROP TABLE IF EXISTS PREFERENCIAS_USUARIO;
DROP TABLE IF EXISTS USUARIO;
DROP TABLE IF EXISTS LIBRO;
DROP TABLE IF EXISTS IDIOMA;
DROP TABLE IF EXISTS AUTOR;
DROP TABLE IF EXISTS GENERO;
