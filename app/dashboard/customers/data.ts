export type Estudio = {
    nivel: string;
    descripcion: string;
    institucion: string;
  };
  
  export type Asignacion = {
    licenciatura: string;
    ciclo: string;
    modalidad: string;
    clases: string;
    status: string;
    motivoBaja: string;
    recomendaReingreso: string;
  };
  
  export type Experiencia = {
    descripcion: string;
    institucion: string;
    fecha: string;
  };
  
  export type Evaluacion = {
    ciclo: string;
    calificacion: string;
    comentarios: string;
  };
  
  export type Catedratico = {
    id: number;
    nombre: string;
    especialidad: string;
    fechaNacimiento: string;
    titulo: string;
    escuelaAval: string;
    estudios: Estudio[];
    asignaciones: Asignacion[];
    experiencia: Experiencia[];
    evaluaciones: Evaluacion[];
  };
  
  export const catedraticosData: Catedratico[] = [
    {
      id: 1,
      nombre: "Dr. Carlos Ramírez",
      especialidad: "Ciencias Sociales",
      fechaNacimiento: "1982-05-14",
      titulo: "Doctorado en Ciencias Políticas",
      escuelaAval: "UNAM",
      estudios: [
        {
          nivel: "Licenciatura",
          descripcion: "Ciencias Políticas",
          institucion: "IPN"
        },
        {
          nivel: "Maestría",
          descripcion: "Relaciones Internacionales",
          institucion: "ITESM"
        },
        {
          nivel: "Doctorado",
          descripcion: "ND",
          institucion: "ND"
        }
      ],
      asignaciones: [
        {
          licenciatura: "Ciencias Sociales",
          ciclo: "2024-1",
          modalidad: "Presencial",
          clases: "Política",
          status: "Activo",
          motivoBaja: "ND",
          recomendaReingreso: "si"
        }
      ],
      experiencia: [
        {
          descripcion: "Analista político ",
          institucion: "El Colegio de México",
          fecha: "2010-2015"
        },
        {
          descripcion: "Docente e Investigador",
          institucion: "UNAM",
          fecha: "2015-Actualidad"
        }
      ],
      evaluaciones: [
        {
          ciclo: "2024-1",
          calificacion: "9.5",
          comentarios: "Clases bien estructuradas"
        },
        {
          ciclo: "2024-2",
          calificacion: "9.8",
          comentarios: "Excelente manejo de grupo"
        }
      ]
    },
  
    {
      id: 2,
      nombre: "Mtra. Ana Gómez",
      especialidad: "Literatura",
      fechaNacimiento: "1982-03-22",
      titulo: "Maestría en Letras Hispánicas",
      escuelaAval: "UAM",
      estudios: [
        {
          nivel: "Licenciatura",
          descripcion: "Letras Hispánicas",
          institucion: "UAM"
        },
        {
          nivel: "Maestría",
          descripcion: "Literatura Latinoamericana",
          institucion: "UAM"
        }
      ],
      asignaciones: [
        {
          licenciatura: "Lengua y Literatura",
          ciclo: "2023-2",
          modalidad: "En línea",
          clases: "Literatura Contemporánea",
          status: "Activo",
          motivoBaja: "N/A",
          recomendaReingreso: "Sí"
        }
      ],
      experiencia: [
        {
          descripcion: "Editora de textos",
          institucion: "Editorial Planeta",
          fecha: "2008-2013"
        },
        {
          descripcion: "Docente universitaria",
          institucion: "UAM",
          fecha: "2013-Actualidad"
        }
      ],
      evaluaciones: [
        {
          ciclo: "2023-1",
          calificacion: "9.0",
          comentarios: "Muy dinámica en clases"
        },
        {
          ciclo: "2023-2",
          calificacion: "9.2",
          comentarios: "Estímulo a la participación"
        }
      ]
    },
    {
      id: 3,
      nombre: "Mtra. Laura Hernández",
      especialidad: "Literatura",
      fechaNacimiento: "1982-03-22",
      titulo: "Maestría en Letras Hispánicas",
      escuelaAval: "UAM",
      estudios: [
        {
          nivel: "Licenciatura",
          descripcion: "Letras Hispánicas",
          institucion: "UAM"
        },
        {
          nivel: "Maestría",
          descripcion: "Literatura Latinoamericana",
          institucion: "UAM"
        }
      ],
      asignaciones: [
        {
          licenciatura: "Lengua y Literatura",
          ciclo: "2023-2",
          modalidad: "En línea",
          clases: "Literatura Contemporánea",
          status: "Activo",
          motivoBaja: "N/A",
          recomendaReingreso: "Sí"
        }
      ],
      experiencia: [
        {
          descripcion: "Editora de textos",
          institucion: "Editorial Planeta",
          fecha: "2008-2013"
        },
        {
          descripcion: "Docente universitaria",
          institucion: "UAM",
          fecha: "2013-Actualidad"
        }
      ],
      evaluaciones: [
        {
          ciclo: "2023-1",
          calificacion: "9.0",
          comentarios: "Muy dinámica en clases"
        },
        {
          ciclo: "2023-2",
          calificacion: "9.2",
          comentarios: "Estímulo a la participación"
        }
      ]
    },
  ];
  