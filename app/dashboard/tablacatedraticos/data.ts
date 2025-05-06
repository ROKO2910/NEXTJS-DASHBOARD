// Definición de tipos
export interface Catedratico {
    id: number;
    nombre: string;
    materias: string[];
    carreras: string[];
    valoracion: number;
    activo: boolean;
    motivoInactivo: string;
  }
  
  // Datos de ejemplo para los catedráticos
  export const catedraticosData: Catedratico[] = [
    {
      id: 1,
      nombre: "Dr. Manuel Rodríguez",
      materias: ["Matemáticas Avanzadas", "Álgebra Lineal"],
      carreras: ["Ingeniería", "Ciencias"],
      valoracion: 4.7,
      activo: true,
      motivoInactivo: ""
    },
    {
      id: 2,
      nombre: "Dra. Laura Martínez",
      materias: ["Literatura Medieval", "Análisis de Textos"],
      carreras: ["Humanidades", "Letras"],
      valoracion: 4.2,
      activo: true,
      motivoInactivo: ""
    },
    {
      id: 3,
      nombre: "Lic. Carlos Sánchez",
      materias: ["Base de Datos", "Programación Web"],
      carreras: ["Ingeniería en Sistemas", "Informática"],
      valoracion: 3.8,
      activo: false,
      motivoInactivo: "Año sabático"
    },
    {
      id: 4,
      nombre: "Mtra. Ana García",
      materias: ["Física Cuántica", "Termodinámica"],
      carreras: ["Física", "Ingeniería"],
      valoracion: 4.9,
      activo: true,
      motivoInactivo: ""
    },
    {
      id: 5,
      nombre: "Dr. Roberto Mendoza",
      materias: ["Derecho Penal", "Derecho Constitucional"],
      carreras: ["Derecho"],
      valoracion: 4.1,
      activo: false,
      motivoInactivo: "Licencia médica"
    },
    {
      id: 6,
      nombre: "Dra. Patricia Flores",
      materias: ["Química Orgánica", "Bioquímica"],
      carreras: ["Química", "Medicina"],
      valoracion: 4.5,
      activo: true,
      motivoInactivo: ""
    },
    {
      id: 7,
      nombre: "Dr. Javier Luna",
      materias: ["Economía Internacional", "Macroeconomía"],
      carreras: ["Economía", "Administración"],
      valoracion: 3.9,
      activo: false,
      motivoInactivo: "Jubilación"
    }
  ];