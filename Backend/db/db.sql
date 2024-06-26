CREATE TABLE GENERO (
    id BIGSERIAL PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL UNIQUE,
    created_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE AUTOR (
    id BIGSERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE,
    nacionalidad VARCHAR(20) NOT NULL,
    fechaNacimiento DATE NOT NULL,
    biografia TEXT NOT NULL,
    created_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IDIOMA (
    id BIGSERIAL PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL UNIQUE,
    created_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE LIBRO (
    id BIGSERIAL PRIMARY KEY,
    ISBN VARCHAR(50) NOT NULL UNIQUE,
    titulo VARCHAR(50) NOT NULL,
    sinopsis TEXT NOT NULL,
    fechaPublicacion DATE NOT NULL,
    id_genero BIGINT NOT NULL REFERENCES GENERO(id) ON DELETE CASCADE,
    id_autor BIGINT NOT NULL REFERENCES AUTOR(id) ON DELETE CASCADE,
    id_idioma BIGINT NOT NULL REFERENCES IDIOMA(id) ON DELETE CASCADE,
    created_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE USUARIO (
    id BIGSERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    correo VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE PREFERENCIAS_USUARIO (
    id_usuario BIGINT NOT NULL REFERENCES USUARIO(id) ON DELETE CASCADE,
    id_genero BIGINT NOT NULL REFERENCES GENERO(id) ON DELETE CASCADE,
    PRIMARY KEY (id_usuario, id_genero)
);

CREATE TABLE VALORACIONES_LIBROS (
    id BIGSERIAL PRIMARY KEY,
    id_usuario BIGINT NOT NULL REFERENCES USUARIO(id) ON DELETE CASCADE,
    id_libro BIGINT NOT NULL REFERENCES LIBRO(id) ON DELETE CASCADE,
    puntuacion INTEGER CHECK (puntuacion >= 1 AND puntuacion <= 5),
    comentario TEXT,
    created_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE LIBROS_LEIDOS (
    id BIGSERIAL PRIMARY KEY,
    id_usuario BIGINT NOT NULL REFERENCES USUARIO(id) ON DELETE CASCADE,
    id_libro BIGINT NOT NULL REFERENCES LIBRO(id) ON DELETE CASCADE,
    fecha_lectura DATE,
    progreso_lectura INTEGER CHECK (progreso_lectura >= 0 AND progreso_lectura <= 100)
);
