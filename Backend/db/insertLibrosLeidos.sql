-- Insertar datos en la tabla de libros leídos
INSERT INTO LIBROS_LEIDOS (id_usuario, id_libro, fecha_lectura, progreso_lectura) VALUES
    (1, 1, '2023-01-15', 100),  -- Usuario 1 leyó completamente el libro 1
    (2, 2, '2022-10-20', 80),   -- Usuario 2 leyó el libro 2 hasta el 80%
    (3, 3, '2023-05-05', 100),  -- Usuario 3 leyó completamente el libro 3
    (4, 4, '2023-03-10', 100),  -- Usuario 4 leyó completamente el libro 4
    (5, 5, '2022-12-05', 50),   -- Usuario 5 leyó el libro 5 hasta el 50%
    (6, 6, '2023-07-20', 100),  -- Usuario 6 leyó completamente el libro 6
    (7, 7, '2023-01-30', 80),   -- Usuario 7 leyó el libro 7 hasta el 80%
    (8, 8, '2022-08-15', 100),  -- Usuario 8 leyó completamente el libro 8
    (9, 9, '2023-05-01', 100),  -- Usuario 9 leyó completamente el libro 9
    (10, 10, '2023-10-10', 100),-- Usuario 10 leyó completamente el libro 10
    (11, 11, '2022-11-25', 70), -- Usuario 11 leyó el libro 11 hasta el 70%
    (12, 12, '2023-04-05', 100),-- Usuario 12 leyó completamente el libro 12
    (13, 13, '2023-09-15', 100),-- Usuario 13 leyó completamente el libro 13
    (14, 14, '2022-12-30', 100),-- Usuario 14 leyó completamente el libro 14
    (15, 15, '2023-06-20', 90), -- Usuario 15 leyó el libro 15 hasta el 90%
    (16, 16, '2022-07-05', 100),-- Usuario 16 leyó completamente el libro 16
    (17, 17, '2023-08-25', 100),-- Usuario 17 leyó completamente el libro 17
    (18, 18, '2023-02-14', 100),-- Usuario 18 leyó completamente el libro 18
    (19, 19, '2023-12-01', 100),-- Usuario 19 leyó completamente el libro 19
    (20, 20, '2022-09-10', 100),-- Usuario 20 leyó completamente el libro 20
    (21, 21, '2023-03-28', 100), -- Usuario 21 leyó completamente el libro 21
    (22, 22, '2022-11-10', 80),  -- Usuario 22 leyó el libro 22 hasta el 80%
    (23, 23, '2023-07-15', 100), -- Usuario 23 leyó completamente el libro 23
    (24, 24, '2023-02-05', 60),  -- Usuario 24 leyó el libro 24 hasta el 60%
    (25, 25, '2023-09-20', 100), -- Usuario 25 leyó completamente el libro 25
    (26, 26, '2022-08-30', 100), -- Usuario 26 leyó completamente el libro 26
    (27, 27, '2023-06-10', 90),  -- Usuario 27 leyó el libro 27 hasta el 90%
    (28, 28, '2022-12-15', 100), -- Usuario 28 leyó completamente el libro 28
    (29, 1, '2023-08-05', 100), -- Usuario 29 leyó completamente el libro 29
    (30, 2, '2023-05-30', 100), -- Usuario 30 leyó completamente el libro 30
    (31, 3, '2023-10-20', 100), -- Usuario 31 leyó completamente el libro 31
    (32, 4, '2022-07-25', 70),  -- Usuario 32 leyó el libro 32 hasta el 70%
    (33, 5, '2023-04-10', 100), -- Usuario 33 leyó completamente el libro 33
    (34, 6, '2023-11-01', 100), -- Usuario 34 leyó completamente el libro 34
    (35, 7, '2022-10-15', 100), -- Usuario 35 leyó completamente el libro 35
    (36, 8, '2023-01-05', 80),  -- Usuario 36 leyó el libro 36 hasta el 80%
    (37, 9, '2023-07-30', 100), -- Usuario 37 leyó completamente el libro 37
    (38, 10, '2023-05-15', 100), -- Usuario 38 leyó completamente el libro 38
    (39, 11, '2023-12-10', 100), -- Usuario 39 leyó completamente el libro 39
    (40, 12, '2022-09-05', 100);