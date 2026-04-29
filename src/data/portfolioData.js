export const personalInfo = {
  name: 'Arturo Tuarez Calle',
  title: 'Desarrollador Web Full Stack',
  description: 'Estudiante del Grado Superior en Desarrollo de Aplicaciones Web (DAW) con experiencia en frontend y backend. Apasionado por la tecnología, con sólida base en HTML, CSS, JavaScript, React, Java, Python y bases de datos. Busco desarrollarme como programador junior aportando valor en entornos tecnológicos innovadores.',
  photo: '../foto.jpeg',
  email: 'arturocalle0556@gmail.com',
  phone: '642-83-09-14',
  location: 'Almassora, Castellón',
  linkedin: 'https://www.linkedin.com/in/eduardo-arturo-tuarez-calle-01917b170',
  github: 'https://github.com/Arturex919',
  cvUrl: '/cv-arturo-tuarez.pdf' // Update this when you add your CV to public/
};

export const skills = [
  {
    category: 'Frontend',
    icon: 'Code2',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap', 'TypeScript'],
    color: '#4361ee',
    level: 80
  },
  {
    category: 'Backend & BD',
    icon: 'Server',
    items: ['Java', 'Python', 'SpringBoot', 'MySQL', 'MongoDB', 'Node.js'],
    color: '#7209b7',
    level: 70
  },
  {
    category: 'Herramientas',
    icon: 'Wrench',
    items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'AWS', 'Docker'],
    color: '#f72585',
    level: 75
  }
];

export const education = [
  {
    title: 'Grado Superior en Desarrollo de Aplicaciones Web (DAW)',
    institution: 'IES Alvaro Falomir',
    period: '2024 - Actualidad',
    description: 'Formación en desarrollo web full stack: HTML, CSS, JavaScript, PHP, Java, MySQL, Despliegue de aplicaciones.'
  },
  {
    title: 'Formación Adicional',
    institution: 'Online',
    period: 'En curso',
    description: 'Ciberseguridad (Google), Data Science (IBM/Coursera), Desarrollo Web con Python (IBM)'
  }
];

export const experience = [
  {
    title: 'Desarrollador Web (Prácticas)',
    company: 'Rental Holidays',
    period: 'Feb 2026 - Actualidad',
    responsibilities: [
      'Desarrollo y mantenimiento de plataformas de gestión de alquileres vacacionales.',
      'Optimización de interfaces de usuario y mejora de la experiencia de reserva.',
      'Integración de APIs y gestión de datos en tiempo real.'
    ]
  },
  {
    title: 'Asistente Técnico',
    company: 'Smart Net (Ecuador)',
    period: 'Feb 2024 - May 2024',
    responsibilities: [
      'Instalación y mantenimiento de redes de fibra óptica.',
      'Soporte técnico y atención al cliente.',
      'Armado de NAPs y configuración de troncales.'
    ]
  }
];

export const projects = [
  {
    title: 'ODS 2: Hambre Cero',
    description: 'Proyecto web enfocado en la concienciación sobre el Objetivo de Desarrollo Sostenible 2 de la ONU. Interfaz responsiva, semántica y con contenido multimedia integrado.',
    techStack: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    repoLink: 'https://github.com/Arturex919/ods2-hambre_cero',
    demoLink: 'https://ods2s.netlify.app',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    category: 'frontend',
    featured: true
  },
  {
    title: 'Web para Restaurante',
    description: 'Desarrollo de una página web completa para restaurante con sistema de pedidos, menú interactivo, modo oscuro y carrito de compras. Experiencia de usuario (UX/UI) optimizada.',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    repoLink: 'https://github.com/Arturex919/PAGINA-WEB-RESTAURANTE',
    demoLink: 'https://stately-rabanadas-51f7e9.netlify.app',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    category: 'frontend',
    featured: true
  },
  {
    title: 'Gestor de Inventario',
    description: 'Aplicación full stack para gestionar stock de productos con API REST, inspirada en mi experiencia profesional previa en logística. CRUD completo con autenticación.',
    techStack: ['Java', 'SpringBoot', 'MySQL'],
    repoLink: 'https://github.com/Arturex919',
    demoLink: null,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    category: 'fullstack',
    featured: true
  },
  {
    title: 'FITAPP',
    description: 'Aplicación de fitness con tracking de ejercicios, planes personalizados y seguimiento de progreso. Desarrollada con TypeScript y React.',
    techStack: ['TypeScript', 'React', 'CSS3'],
    repoLink: 'https://github.com/Arturex919/FITAPP',
    demoLink: null,
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    category: 'fullstack',
    featured: false
  },
  {
    title: 'SaaS de Facturación',
    description: 'Sistema de facturación como servicio web con gestión de clientes, generación de facturas y reportes. Arquitectura escalable.',
    techStack: ['JavaScript', 'Node.js', 'MySQL'],
    repoLink: 'https://github.com/Arturex919/SaaS-de-facturacion',
    demoLink: null,
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    category: 'fullstack',
    featured: false
  },
  {
    title: 'Holidays & Envíos',
    description: 'Aplicación Python para gestión de envíos y vacaciones con lógica de negocio compleja y manejo de datos.',
    techStack: ['Python', 'POO'],
    repoLink: 'https://github.com/Arturex919/holidays-envios',
    demoLink: null,
    gradient: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
    category: 'backend',
    featured: false
  }
];

export const certifications = [
  {
    name: 'Claude Code 101',
    issuer: 'Anthropic',
    date: 'Abril 2026',
    icon: 'AI'
  },
  {
    name: 'Docker Essentials',
    issuer: 'Cognitive Class',
    date: 'Abril 2026',
    icon: 'DevOps'
  },
  {
    name: 'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services',
    date: 'Abril 2025',
    icon: 'Cloud'
  },
  {
    name: 'Cybersecurity Fundamentals',
    issuer: 'IBM',
    date: 'Abril 2026',
    icon: 'Security'
  },
  {
    name: 'Prompt Engineering',
    issuer: 'Cognitive Class',
    date: 'Marzo 2026',
    icon: 'AI'
  },
  {
    name: 'Fundamentos de Programación',
    issuer: 'IBM SkillsBuild',
    date: 'Junio 2025',
    icon: 'Dev'
  }
];
