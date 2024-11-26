export const cursos =  [
    {
        "id": 1,
        "curso": "Introduccion a la Programacion",
        "categoria": "Programacion",
        "descripcion": "Aprende los fundamentos de la programacion desde cero.",
        "costo": 50.0,
        "profesor": "Juan Perez",
        "duracion": "4 semanas"
    },
    {
        "id": 2,
        "curso": "Desarrollo Web con React",
        "categoria": "Desarrollo Web",
        "descripcion": "Crea aplicaciones web modernas con React y sus herramientas.",
        "costo": 75.0,
        "profesor": "Maria Gonzalez",
        "duracion": "6 semanas"
    },
    {
        "id": 3,
        "curso": "Bases de Datos SQL",
        "categoria": "Bases de Datos",
        "descripcion": "Domina el uso de SQL para gestionar bases de datos.",
        "costo": 60.0,
        "profesor": "Carlos Mendoza",
        "duracion": "5 semanas"
    },
    {
        "id": 4,
        "curso": "Machine Learning Basico",
        "categoria": "Inteligencia Artificial",
        "descripcion": "Introduccion a los conceptos basicos de Machine Learning.",
        "costo": 100.0,
        "profesor": "Ana Lopez",
        "duracion": "8 semanas"
    },
    {
        "id": 5,
        "curso": "Ciberseguridad para Principiantes",
        "categoria": "Ciberseguridad",
        "descripcion": "Aprende como proteger datos e infraestructura digital.",
        "costo": 80.0,
        "profesor": "Jose Torres",
        "duracion": "6 semanas"
    },
    {
        "id": 6,
        "curso": "Programacion en Python",
        "categoria": "Programacion",
        "descripcion": "Curso completo para dominar Python.",
        "costo": 70.0,
        "profesor": "Laura Diaz",
        "duracion": "7 semanas"
    },
    {
        "id": 7,
        "curso": "Desarrollo de APIs REST",
        "categoria": "Desarrollo Web",
        "descripcion": "Crea y consume APIs REST con las mejores practicas.",
        "costo": 65.0,
        "profesor": "Fernando Garcia",
        "duracion": "5 semanas"
    },
    {
        "id": 8,
        "curso": "Big Data y Analisis de Datos",
        "categoria": "Datos",
        "descripcion": "Explora herramientas y tecnicas para analisis de datos masivos.",
        "costo": 120.0,
        "profesor": "Luis Martinez",
        "duracion": "10 semanas"
    },
    {
        "id": 9,
        "curso": "Diseño UX/UI",
        "categoria": "Diseño",
        "descripcion": "Crea interfaces y experiencias de usuario atractivas.",
        "costo": 90.0,
        "profesor": "Clara Sanchez",
        "duracion": "6 semanas"
    },
    {
        "id": 10,
        "curso": "Programacion en JavaScript",
        "categoria": "Programacion",
        "descripcion": "Domina JavaScript, el lenguaje esencial para desarrollo web.",
        "costo": 60.0,
        "profesor": "Andres Perez",
        "duracion": "5 semanas"
    },
    {
        "id": 11,
        "curso": "Curso de Ejemplo 11",
        "categoria": "General",
        "descripcion": "Descripcion del curso de ejemplo 11.",
        "costo": 61.0,
        "profesor": "Profesor 11",
        "duracion": "4 semanas"
    },
    {
        "id": 12,
        "curso": "Curso de Ejemplo 12",
        "categoria": "General",
        "descripcion": "Descripcion del curso de ejemplo 12.",
        "costo": 62.0,
        "profesor": "Profesor 12",
        "duracion": "5 semanas"
    },
    {
        "id": 13,
        "curso": "Curso de Ejemplo 13",
        "categoria": "General",
        "descripcion": "Descripcion del curso de ejemplo 13.",
        "costo": 63.0,
        "profesor": "Profesor 13",
        "duracion": "6 semanas"
    },
    {
        "id": 14,
        "curso": "Curso de Ejemplo 14",
        "categoria": "General",
        "descripcion": "Descripcion del curso de ejemplo 14.",
        "costo": 64.0,
        "profesor": "Profesor 14",
        "duracion": "7 semanas"
    },
    {
        "id": 15,
        "curso": "Curso de Ejemplo 15",
        "categoria": "General",
        "descripcion": "Descripcion del curso de ejemplo 15.",
        "costo": 65.0,
        "profesor": "Profesor 15",
        "duracion": "3 semanas"
    },
    {
        "id": 16,
        "curso": "Curso de Ejemplo 16",
        "categoria": "General",
        "descripcion": "Descripcion del curso de ejemplo 16.",
        "costo": 66.0,
        "profesor": "Profesor 16",
        "duracion": "4 semanas"
    },
    {
        "id": 17,
        "curso": "Curso de Ejemplo 17",
        "categoria": "General",
        "descripcion": "Descripcion del curso de ejemplo 17.",
        "costo": 67.0,
        "profesor": "Profesor 17",
        "duracion": "5 semanas"
    },
    {
        "id": 18,
        "curso": "Curso de Ejemplo 18",
        "categoria": "General",
        "descripcion": "Descripcion del curso de ejemplo 18.",
        "costo": 68.0,
        "profesor": "Profesor 18",
        "duracion": "6 semanas"
    },
    {
        "id": 19,
        "curso": "Curso de Ejemplo 19",
        "categoria": "General",
        "descripcion": "Descripcion del curso de ejemplo 19.",
        "costo": 69.0,
        "profesor": "Profesor 19",
        "duracion": "7 semanas"
    },
    {
        "id": 20,
        "curso": "Curso de Ejemplo 20",
        "categoria": "General",
        "descripcion": "Descripcion del curso de ejemplo 20.",
        "costo": 70.0,
        "profesor": "Profesor 20",
        "duracion": "3 semanas"
    }
];


export const getCursos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cursos);
    }, 1000); 
  });
};


export const getCursosByCategoria = (categoria) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const cursosFiltrados = cursos.filter((curso) => curso.categoria === categoria);
        resolve(cursosFiltrados);
      }, 1000);
    });
  };



