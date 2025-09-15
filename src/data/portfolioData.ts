import type { 
  PersonalInfo, 
  Competency, 
  Project, 
  Education, 
  WorkExperience, 
  Certification, 
  Seminar, 
  Publication, 
  ResearchInvolvement, 
  Membership, 
  SocialLink,
  Skill,
  Affiliation,
  Conference,
  Training
} from '../types/index';

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Raymart O. Villena",
  title: "Full-Stack Developer - DevOps Engineer - Computer Engineer",
  bio: "Full-Stack Developer and DevOps Engineer by heart. CPECB Certified Computer Engineer and Senior Researcher at Mariano Marcos State University by profession. Specializing in web development with expertise in React with TypeScript and JavaScript; Express.js with Node.js, and DRF with Python. With experience in IoT systems, AI/ML applications, and DevOps.",
  profileImage: "/avatar-cropped.svg",
  resumeUrl: "/CV-Raymart Villena - Short Resume.docx",
  contact: {
    email: "rovillena@mmsu.edu.ph",
    phone: "+63912-806-6924",
    location: "Ilocos Norte, Philippines",
    website: "https://raymartvillena.dev",
    linkedin: "https://www.linkedin.com/in/raymart-villena/",
    github: "https://github.com/raevillena",
  }
};

// Core Competencies
export const competencies: Competency[] = [
  {
    category: "Full-Stack Development",
    skills: ["JavaScript/TypeScript", "Node.js", "Express.js", "React", "TailwindCSS", "MaterialUI", "CSS3", "Vite", "Redux"],
    icon: "💻"
  },
  {
    category: "Database & Storage",
    skills: ["MongoDB", "MySQL", "MariaDB", "PostgreSQL", "NoSQL", "Relational Design", "Data Modeling", "ORM", "Persistent Volumes"],
    icon: "🗄️"
  },
  {
    category: "IoT & Embedded Systems",
    skills: ["ESP32 Microcontrollers", "MQTT/HTTP", "Arduino", "Advance DSP algorithms", "Industrial Grade Sensors", "Prototyping Tools", "Sensor Integration", "Automation"],
    icon: "🌐"
  },
  {
    category: "DevOps & Infrastructure",
    skills: ["Kubernetes", "Docker", "Linux", "Container Orchestration", "CI/CD", "Bare-Metal"],
    icon: "⚙️"
  },
  {
    category: "AI & Machine Learning",
    skills: ["Python", "TensorFlow", "Deep Learning", "Neural Networks", "Computer Vision", "Data Analysis"],
    icon: "🤖"
  },
  {
    category: "Research & Development",
    skills: ["Technology Assessment", "Research Tools", "Data Visualization", "Technical Writing", "Innovation"],
    icon: "🔬"
  },
  {
    category: "GIS & Mapping",
    skills: ["Geographic Information Systems", "Spatial Data", "Mapping", "API Development", "Data Visualization"],
    icon: "🗺️"
  }
];

// Detailed Skills
export const skills: Skill[] = [
  // Full-Stack Development
  {
    id: "1",
    name: "Node.js",
    category: "backend",
    proficiency: "expert",
    yearsOfExperience: 5,
    icon: "nodejs"
  },
  {
    id: "2",
    name: "Express.js",
    category: "backend",
    proficiency: "expert",
    yearsOfExperience: 5,
    icon: "express"
  },
  {
    id: "3",
    name: "React",
    category: "frontend",
    proficiency: "expert",
    yearsOfExperience: 4,
    icon: "react"
  },
  {
    id: "4",
    name: "Redux",
    category: "frontend",
    proficiency: "advanced",
    yearsOfExperience: 3,
    icon: "redux"
  },
  {
    id: "5",
    name: "Vite",
    category: "frontend",
    proficiency: "advanced",
    yearsOfExperience: 3,
    icon: "vite"
  },
  {
    id: "6",
    name: "Material UI",
    category: "frontend",
    proficiency: "advanced",
    yearsOfExperience: 3,
    icon: "mui"
  },
  // Database & Storage
  {
    id: "7",
    name: "MariaDB",
    category: "database",
    proficiency: "expert",
    yearsOfExperience: 4,
    icon: "mariadb"
  },
  {
    id: "8",
    name: "Sequelize ORM",
    category: "database",
    proficiency: "expert",
    yearsOfExperience: 4,
    icon: "sequelize"
  },
  {
    id: "9",
    name: "Redis",
    category: "database",
    proficiency: "advanced",
    yearsOfExperience: 3,
    icon: "redis"
  },
  {
    id: "10",
    name: "MongoDB Atlas",
    category: "database",
    proficiency: "intermediate",
    yearsOfExperience: 2,
    icon: "mongodb"
  },
  // Authentication & Security
  {
    id: "11",
    name: "JWT",
    category: "backend",
    proficiency: "expert",
    yearsOfExperience: 4,
    icon: "jwt"
  },
  {
    id: "12",
    name: "OAuth2 (Google)",
    category: "backend",
    proficiency: "advanced",
    yearsOfExperience: 3,
    icon: "oauth"
  },
  {
    id: "13",
    name: "RBAC",
    category: "backend",
    proficiency: "expert",
    yearsOfExperience: 4,
    icon: "security"
  },
  // DevOps & Infrastructure
  {
    id: "14",
    name: "Docker",
    category: "tools",
    proficiency: "advanced",
    yearsOfExperience: 3,
    icon: "docker"
  },
  {
    id: "15",
    name: "Kubernetes",
    category: "tools",
    proficiency: "intermediate",
    yearsOfExperience: 2,
    icon: "kubernetes"
  },
  {
    id: "16",
    name: "NGINX",
    category: "tools",
    proficiency: "advanced",
    yearsOfExperience: 3,
    icon: "nginx"
  },
  {
    id: "17",
    name: "Cloudflare Tunnels",
    category: "tools",
    proficiency: "advanced",
    yearsOfExperience: 3,
    icon: "cloudflare"
  },
  {
    id: "18",
    name: "Linux (Ubuntu)",
    category: "tools",
    proficiency: "expert",
    yearsOfExperience: 5,
    icon: "linux"
  },
  // IoT & Embedded Systems
  {
    id: "19",
    name: "ESP32",
    category: "other",
    proficiency: "expert",
    yearsOfExperience: 4,
    icon: "esp32"
  },
  {
    id: "20",
    name: "MQTT",
    category: "other",
    proficiency: "advanced",
    yearsOfExperience: 3,
    icon: "mqtt"
  },
  {
    id: "21",
    name: "PID Control",
    category: "other",
    proficiency: "advanced",
    yearsOfExperience: 3,
    icon: "pid"
  },
  {
    id: "22",
    name: "Sensor Integration",
    category: "other",
    proficiency: "expert",
    yearsOfExperience: 4,
    icon: "sensors"
  },
  // AI & Data Science
  {
    id: "23",
    name: "Python",
    category: "other",
    proficiency: "advanced",
    yearsOfExperience: 4,
    icon: "python"
  },
  {
    id: "24",
    name: "Neural Networks",
    category: "other",
    proficiency: "advanced",
    yearsOfExperience: 3,
    icon: "neural"
  },
  {
    id: "25",
    name: "Computer Vision",
    category: "other",
    proficiency: "advanced",
    yearsOfExperience: 3,
    icon: "vision"
  },
  {
    id: "26",
    name: "Object Detection",
    category: "other",
    proficiency: "intermediate",
    yearsOfExperience: 2,
    icon: "detection"
  },
  {
    id: "27",
    name: "Vision Transformers",
    category: "other",
    proficiency: "intermediate",
    yearsOfExperience: 2,
    icon: "transformer"
  }
];

// Projects
export const projects: Project[] = [
  // GitHub Projects (Newest to Oldest)
  {
    id: "mayhemcreations-shawn-denis",
    title: "Mayhem Creation",
    description: "Collaborative project for MayhemCreations focusing on creative design and development",
    longDescription: "A collaborative project with MayhemCreations, focusing on creative design and development. This project demonstrates teamwork, creative development, and integration of various web technologies for content management and presentation.",
    technologies: ["React", "Node.js", "Content Management", "Collaborative Development", "Creative Design"],
    features: [
      "Content management system",
      "Collaborative development workflow",
      "Creative design implementation",
      "User engagement features",
      "Responsive content delivery",
      "Team collaboration tools"
    ],
    status: "in-progress",
    githubUrl: "https://github.com/tayawaaean/mayhemcreations-shawn-denis",
    liveUrl: "https://mayhemcreations.com/shawn-denis",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ]
  },
  {
    id: "arec-gis",
    title: "AREC GIS",
    description: "Geographic Information System for Agricultural Research and Extension Center",
    longDescription: "A comprehensive Geographic Information System (GIS) application for the Agricultural Research and Extension Center (AREC). Features interactive maps, spatial data analysis, and agricultural monitoring capabilities for research and extension activities.",
    technologies: ["React", "Leaflet", "Mapbox", "GIS", "Spatial Data", "Agricultural Technology"],
    features: [
      "Interactive mapping interface",
      "Spatial data visualization",
      "Agricultural monitoring tools",
      "Research data integration",
      "Extension service mapping",
      "Real-time data updates"
    ],
    status: "in-progress",
    githubUrl: "https://github.com/arecmmsu/arecgis",
    liveUrl: "https://arecgis.mmsu.edu.ph",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ]
  },
  {
    id: "adminer-node",
    title: "Adminer Node",
    description: "Node.js wrapper for Adminer database management tool",
    longDescription: "A Node.js wrapper and customization of Adminer, providing enhanced database management capabilities. Features custom authentication, improved UI, and additional functionality for database administration and management.",
    technologies: ["Node.js", "Express", "Adminer", "Database Management", "Authentication", "Custom UI"],
    features: [
      "Database management interface",
      "Custom authentication system",
      "Enhanced UI/UX design",
      "Multi-database support",
      "Query builder and executor",
      "Database schema visualization"
    ],
    status: "completed",
    githubUrl: "https://github.com/raevillena/adminer_node",
    liveUrl: "https://adminer.raevillena.dev",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ]
  },
  {
    id: "umans-frontend",
    title: "UMANS Frontend",
    description: "Frontend application for University Management and Administration System",
    longDescription: "The frontend application for the University Management and Administration System (UMANS). Built with React and Material-UI, providing a comprehensive interface for managing university operations, student records, and administrative tasks.",
    technologies: ["React", "TypeScript", "Material-UI", "React Query", "React Router", "Formik"],
    features: [
      "Student management interface",
      "Faculty administration panel",
      "Academic records management",
      "Real-time data synchronization",
      "Role-based access control",
      "Responsive design"
    ],
    status: "completed",
    githubUrl: "https://github.com/raevillena/umans-frontend",
    liveUrl: "https://umans.mmsu.edu.ph"
  },
  {
    id: "umans-backend",
    title: "UMANS Backend",
    description: "Backend API for University Management and Administration System",
    longDescription: "A robust backend API system for university management and administration. Built with Node.js and Express, providing comprehensive APIs for student management, academic records, and administrative functions.",
    technologies: ["Node.js", "Express", "Sequelize", "PostgreSQL", "JWT", "REST API"],
    features: [
      "RESTful API design",
      "Database management with Sequelize ORM",
      "JWT authentication and authorization",
      "Student and faculty management",
      "Academic records system",
      "Comprehensive error handling"
    ],
    status: "completed",
    githubUrl: "https://github.com/raevillena/umans",
    liveUrl: "https://api.umans.mmsu.edu.ph"
  },
  {
    id: "vrms-frontend",
    title: "VRMS Frontend",
    description: "Frontend application for Virtual Research Management System",
    longDescription: "The frontend component of the Virtual Research Management System (VRMS), built with modern React technologies. Provides an intuitive interface for researchers to manage projects, collaborate, and track research progress.",
    technologies: ["React", "TypeScript", "Material-UI", "Axios", "React Router", "State Management"],
    features: [
      "Research project management",
      "User authentication and authorization",
      "Collaborative workspace",
      "Document management system",
      "Progress tracking dashboard",
      "Responsive design"
    ],
    status: "completed",
    githubUrl: "https://github.com/raevillena/vrms_frontend",
    liveUrl: "https://vrms.mmsu.edu.ph"
  },
  {
    id: "energymon",
    title: "Energymon",
    description: "Energy monitoring system for tracking power consumption and efficiency",
    longDescription: "An IoT-based energy monitoring system designed to track power consumption, analyze energy efficiency, and provide insights for optimizing energy usage. Features real-time monitoring, data logging, and comprehensive analytics.",
    technologies: ["IoT", "Node.js", "Express", "Database", "Real-time Monitoring", "Energy Analytics"],
    features: [
      "Real-time energy monitoring",
      "Power consumption tracking",
      "Energy efficiency analytics",
      "Data logging and storage",
      "Alert system for anomalies",
      "Historical data visualization"
    ],
    status: "completed",
    githubUrl: "https://github.com/raevillena/energymon",
    liveUrl: "https://energymon.raevillena.dev"
  },
  {
    id: "dashboard",
    title: "Dashboard",
    description: "A comprehensive dashboard application for data visualization and monitoring",
    longDescription: "A modern dashboard application built with React and modern web technologies. Features real-time data visualization, interactive charts, and responsive design for monitoring various metrics and KPIs.",
    technologies: ["React", "TypeScript", "Vite", "Material-UI", "Chart.js", "Responsive Design"],
    features: [
      "Real-time data visualization",
      "Interactive charts and graphs",
      "Responsive dashboard layout",
      "Modern UI/UX design",
      "Data filtering and sorting",
      "Export functionality"
    ],
    status: "completed",
    githubUrl: "https://github.com/raevillena/dashboard",
    liveUrl: "https://raevillena.github.io/dashboard"
  },
  {
    id: "zero-fossil-fuel-bioethanol-distiller",
    title: "Zero-Fossil Fuel Bioethanol Distiller",
    description: "Design and evaluation of a zero-fossil fuel distiller for bioethanol production",
    longDescription: "Co-authored research on designing and evaluating a zero-fossil fuel distiller for bioethanol production. Published in IOP Conference Series: Earth and Environmental Science. This project focuses on sustainable energy solutions and renewable technology for bioethanol production.",
    technologies: ["Renewable Energy", "Bioethanol Production", "Sustainable Technology", "Research", "IOP Publishing"],
    features: [
      "Zero-fossil fuel operation",
      "Sustainable bioethanol production",
      "Published research paper",
      "Environmental impact assessment",
      "Energy efficiency optimization",
      "Renewable energy integration"
    ],
    status: "completed",
    githubUrl: "https://github.com/raymartvillena/bioethanol-distiller",
    liveUrl: "https://doi.org/10.1088/1755-1315/749/1/012043"
  },
  {
    id: "remote-monitoring-control-system",
    title: "Remote Monitoring & Control System",
    description: "Remote monitoring and control system for energy self-sufficient bioethanol distiller",
    longDescription: "Co-authored research on developing a remote monitoring and control system for energy self-sufficient bioethanol distiller. Published in IOP Conference Series: Earth and Environmental Science. Features IoT integration, real-time monitoring, and automated control systems.",
    technologies: ["IoT", "Remote Monitoring", "Control Systems", "Energy Management", "Real-time Data"],
    features: [
      "Real-time remote monitoring",
      "Automated control systems",
      "IoT sensor integration",
      "Energy self-sufficiency",
      "Data logging and analysis",
      "Published research paper"
    ],
    status: "completed",
    githubUrl: "https://github.com/raymartvillena/remote-monitoring",
    liveUrl: "https://doi.org/10.1088/1755-1315/749/1/012034"
  },
  {
    id: "black-garlic-classification",
    title: "Black Garlic Grade Classification",
    description: "Classification of Black Garlic Grade Using Convolutional Neural Network",
    longDescription: "MS Thesis research on using Convolutional Neural Networks for classifying black garlic grades. This computer vision application demonstrates practical AI/ML implementation in agricultural quality assessment. Published in ACM Digital Library.",
    technologies: ["Python", "Convolutional Neural Networks", "Computer Vision", "TensorFlow", "PyTorch", "Image Classification"],
    features: [
      "CNN-based image classification",
      "Agricultural quality assessment",
      "Published in ACM Digital Library",
      "Computer vision implementation",
      "Machine learning algorithms",
      "Quality control automation"
    ],
    status: "completed",
    githubUrl: "https://github.com/raymartvillena/black-garlic-classification",
    liveUrl: "https://doi.org/10.1145/3731806.3731823"
  },
  {
    id: "mmsu-industry-4-iot-platform",
    title: "MMSU Industry 4.0 IoT Platform",
    description: "Development of a Cloud Server for Internet of Things",
    longDescription: "Led the development of MMSU Industry 4.0 IoT Platform, creating a comprehensive cloud server infrastructure for Internet of Things applications. This project supports various IoT devices and provides scalable cloud services for research and educational purposes.",
    technologies: ["Cloud Computing", "IoT", "Server Development", "Industry 4.0", "Scalable Architecture"],
    features: [
      "Cloud server infrastructure",
      "IoT device integration",
      "Scalable architecture",
      "Industry 4.0 compliance",
      "Research and educational support",
      "Multi-device compatibility"
    ],
    status: "completed",
    githubUrl: "https://github.com/raymartvillena/mmsu-iot-platform",
    liveUrl: "https://iot.mmsu.edu.ph"
  },
  {
    id: "3-stage-gac-deodorizing-unit",
    title: "3-Stage GAC Deodorizing Unit",
    description: "Filed Patent Application for Malodorous Ethanol Treatment System",
    longDescription: "Developed and filed patent application for a 3-Stage Granular Activated Carbon (GAC) Deodorizing Unit specifically designed for treating malodorous ethanol. This innovative system addresses odor issues in bioethanol production processes.",
    technologies: ["Patent Development", "GAC Technology", "Ethanol Treatment", "Odor Control", "Bioethanol Production"],
    features: [
      "3-stage GAC treatment process",
      "Malodorous ethanol treatment",
      "Patent application filed",
      "Odor control technology",
      "Bioethanol production optimization",
      "Innovative design solution"
    ],
    status: "completed",
    githubUrl: "https://github.com/raymartvillena/gac-deodorizing",
    liveUrl: "https://patents.mmsu.edu.ph/gac-deodorizing"
  },
  {
    id: "multi-protocol-platform-industry-4",
    title: "Multi-Protocol Platform for Industry 4.0",
    description: "Filed Patent Application for Industry 4.0 Integration Platform",
    longDescription: "Developed and filed patent application for a Multi-Protocol Platform designed for Industry 4.0 applications. This platform enables seamless integration of various industrial protocols and IoT devices for smart manufacturing.",
    technologies: ["Industry 4.0", "Multi-Protocol Integration", "IoT", "Smart Manufacturing", "Patent Development"],
    features: [
      "Multi-protocol integration",
      "Industry 4.0 compliance",
      "Smart manufacturing support",
      "IoT device compatibility",
      "Patent application filed",
      "Seamless protocol switching"
    ],
    status: "completed",
    githubUrl: "https://github.com/raymartvillena/industry4-platform",
    liveUrl: "https://patents.mmsu.edu.ph/industry4-platform"
  },
  {
    id: "virtual-research-management-system",
    title: "Virtual Research Management System",
    description: "Development of Virtual Research Management System for MMSU",
    longDescription: "Led the development of a comprehensive Virtual Research Management System for Mariano Marcos State University. This system streamlines research processes, project management, and collaboration among researchers.",
    technologies: ["Web Development", "Research Management", "Project Management", "Database Design", "User Interface"],
    features: [
      "Research process management",
      "Project collaboration tools",
      "User-friendly interface",
      "Database integration",
      "Streamlined workflows",
      "Academic institution support"
    ],
    status: "completed",
    githubUrl: "https://github.com/raymartvillena/virtual-research-system",
    liveUrl: "https://research.mmsu.edu.ph"
  },
  {
    id: "rooftop-solar-panel-detection",
    title: "Rooftop Solar Panel Detection",
    description: "Automated Detection of Rooftop Solar Panels using Vision Transformers",
    longDescription: "Research proposal for automated detection of rooftop solar panels in satellite imagery using Vision Transformers (ViTs) and transfer learning. This project aims to improve renewable energy planning and monitoring in Ilocos Norte province.",
    technologies: ["Vision Transformers", "Computer Vision", "Satellite Imagery", "Transfer Learning", "Renewable Energy Planning"],
    features: [
      "Vision Transformer implementation",
      "Satellite imagery analysis",
      "Transfer learning techniques",
      "Renewable energy planning",
      "Automated detection system",
      "Provincial monitoring support"
    ],
    status: "completed",
    githubUrl: "https://github.com/raymartvillena/solar-detection",
    liveUrl: "https://research.mmsu.edu.ph/solar-detection"
  },
  {
    id: "iot-integrated-mini-pervaporation-distiller",
    title: "IoT-Integrated Mini Pervaporation Distiller",
    description: "Development of IoT-Integrated Embedded System for Mini Pervaporation Bioethanol Distiller",
    longDescription: "Research proposal for developing an IoT-integrated embedded system for a mini pervaporation bioethanol distiller. This project combines advanced distillation technology with modern IoT monitoring and control systems.",
    technologies: ["IoT", "Embedded Systems", "Pervaporation", "Bioethanol Production", "Real-time Monitoring"],
    features: [
      "IoT integration",
      "Embedded system development",
      "Pervaporation technology",
      "Real-time monitoring",
      "Bioethanol production optimization",
      "Advanced distillation methods"
    ],
    status: "completed",
    githubUrl: "https://github.com/raymartvillena/pervaporation-distiller",
    liveUrl: "https://research.mmsu.edu.ph/pervaporation-distiller"
  }
];

// Education
export const education: Education[] = [
  {
    degree: "Master of Science in Computer Engineering",
    institution: "Mapua University",
    field: "Computer Engineering (MS-CPE)",
    period: "2020-2025",
    status: "completed",
    gpa: "Graduated",
    relevantCoursework: [
      "Thesis: Classification of Black Garlic Grade Using Convolutional Neural Network",
      "Published in ACM Digital Library (doi: 10.1145/3731806.3731823)",
      "Specialized in AI/ML applications and computer vision"
    ]
  },
  {
    degree: "Bachelor of Science",
    institution: "Mariano Marcos State University",
    field: "Computer Engineering (BS-CPE)",
    period: "2010-2015",
    status: "completed",
    gpa: "Graduated",
    relevantCoursework: [
      "CPECB Certified Computer Engineer (CCPE Number: 00223)",
      "Career Service Professional Eligibility (December 6, 2015)",
      "ID number: 2001151205940601"
    ]
  },
];

// Work Experience
export const workExperience: WorkExperience[] = [
  {
    position: "Senior Research Assistant",
    company: "Mariano Marcos State University - NBERIC Research Directorate",
    period: "Sep 2020 – Present",
    description: "Leading research initiatives in renewable energy, IoT systems, AI/ML applications, and bioethanol technology. Managing multiple projects, supervising research staff, and contributing to academic publications and patent applications.",
    achievements: [
      "Co-authored 2 research papers published in IOP Conference Series: Earth and Environmental Science",
      "Filed 2 patent applications: 3-Stage GAC Deodorizing Unit and Multi-Protocol Platform for Industry 4.0",
      "Led development of MMSU Industry 4.0 IoT Platform as Study Leader",
      "Presented research at 14th International Conference on Software and Computer Applications (ICSCA) in Malaysia",
      "Served as speaker at ICPEP.SE Seminar on Smart AI and Sustainability (March 2025)",
      "Served as evaluator for MMSU Research In-House Proposal Review 2025",
      "Led 8+ major research projects including bioethanol production, data analytics, and renewable energy",
      "Completed MS-CPE, specializing in AI/ML applications",
      "Co-authored 2nd Place Paper at 7th RAFEN 1 Symposium (2021)",
      "Developed Virtual Research Management System for MMSU (Completed 2022)"
    ],
    technologies: ["Python", "IoT", "Renewable Energy", "Computer Vision", "Neural Networks", "Research", "Data Analytics", "Patent Development"]
  },
  {
    position: "Science Research Specialist I",
    company: "Mariano Marcos State University",
    period: "Mar 2018 – Sep 2020",
    description: "Specialized in renewable energy research, bioethanol production systems, and IoT monitoring solutions. Contributed to multiple research publications and community development projects.",
    achievements: [
      "Co-authored research on zero-fossil fuel bioethanol distiller design and evaluation",
      "Developed remote monitoring and control systems for energy self-sufficient bioethanol distiller",
      "Contributed to renewable energy hybrid integrator system research using DC-DC buck circuits",
      "Participated in Technology Franchising of Village-Scale Nipahol Technology (VSNPT)",
      "Published research findings in international conference proceedings"
    ],
    technologies: ["Renewable Energy", "Bioethanol Production", "IoT Monitoring", "Research", "Community Development"]
  },
  {
    position: "IT Applications Associate",
    company: "ACCENTURE LLC - PROJECT CIO",
    period: "Sep 2017 – Mar 2018",
    description: "Developed and maintained IT applications, providing technical support and solutions for enterprise clients. Gained experience in corporate IT environments and application development.",
    achievements: [
      "Developed and maintained IT applications for enterprise clients",
      "Provided technical support and troubleshooting for various IT systems",
      "Gained valuable experience in corporate IT environments",
      "Contributed to project delivery and client satisfaction"
    ],
    technologies: ["IT Applications", "Software Development", "Technical Support", "Enterprise Solutions"]
  }
];

// Certifications
export const certifications: Certification[] = [
  {
    name: "Career Service Professional Eligibility",
    issuer: "Civil Service Commission",
    date: "2015-12-06",
    credentialId: "2001151205940601",
    credentialUrl: "https://csc.gov.ph"
  },
  {
    name: "CPECB Certified Computer Engineer",
    issuer: "Computer Engineers Certification Board",
    date: "2015-01-01",
    credentialId: "00223",
    credentialUrl: "https://cpecb.org.ph"
  }
];

// Seminars & Trainings
export const seminars: Seminar[] = [
  {
    title: "14th International Conference on Software and Computer Applications (ICSCA 2025)",
    type: "presenter",
    organization: "Malaysia",
    date: "2025",
    location: "Malaysia",
    description: "Presented research on AI/ML applications in software development"
  },
  {
    title: "Business Innovation and Engineering Conference 2020",
    type: "presenter",
    organization: "Bogor University",
    date: "2020",
    location: "Bogor, Indonesia",
    description: "Presented innovative engineering solutions for business applications"
  },
  {
    title: "5th Industry, Energy and Emerging Technology R&D Symposium",
    type: "presenter",
    organization: "SLU-La Union",
    date: "2019",
    location: "La Union, Philippines",
    description: "Presented research on emerging technologies in energy sector"
  },
  {
    title: "Ethical Hacking Training",
    type: "participant",
    organization: "ICPEP",
    date: "2021",
    description: "Comprehensive training on ethical hacking and cybersecurity"
  },
  {
    title: "Siemens Smart Industry Readiness Workshop",
    type: "participant",
    organization: "Siemens",
    date: "2021",
    description: "Industry 4.0 readiness and smart manufacturing technologies"
  },
  {
    title: "Renewable Energy Trainings",
    type: "participant",
    organization: "MMSU",
    date: "2018–2019",
    description: "Series of trainings on renewable energy technologies and applications"
  }
];

// Publications
export const publications: Publication[] = [
  {
    title: "Design and evaluation of a zero-fossil fuel distiller for bioethanol",
    authors: "Ubiña, T., Mateo, N., Ulep, R., Baga, C., Sagadraca, J., Pastor, P., Villena, R. et al.",
    journal: "IOP Conf. Series: Earth and Environmental Science",
    year: "2021",
    doi: "10.1088/1755-1315/749/1/012043"
  },
  {
    title: "Remote monitoring and control system for the energy self-sufficient bioethanol distiller",
    authors: "Ibañez, V., Manzanas, W., Villena, R., Ubiña, T., Agrupis, S.",
    journal: "IOP Conf. Series: Earth and Environmental Science",
    year: "2021",
    doi: "10.1088/1755-1315/749/1/012034"
  }
];

// Research Involvements
export const researchInvolvements: ResearchInvolvement[] = [
  {
    title: "Design and evaluation of a zero-fossil fuel distiller for bioethanol",
    role: "Co-author",
    period: "2020-2021",
    description: "Developed and evaluated a sustainable bioethanol distillation system using renewable energy sources.",
    technologies: ["IoT", "Renewable Energy", "Control Systems", "Data Analysis"]
  },
  {
    title: "Remote monitoring and control system for the self-sufficient distiller",
    role: "Co-author",
    period: "2020-2021",
    description: "Implemented IoT-based monitoring and control system for autonomous bioethanol production.",
    technologies: ["ESP32", "MQTT", "React", "Node.js", "IoT"]
  },
  {
    title: "Renewable energy hybrid integrator system",
    role: "Co-author",
    period: "2019-2020",
    description: "Developed hybrid energy integration system combining solar, wind, and battery storage.",
    technologies: ["Energy Systems", "Control Engineering", "Data Logging", "IoT"]
  },
  {
    title: "Project Saranay: Ethyl Alcohol Production",
    role: "Project Staff",
    period: "2018-2019",
    description: "Technical support for ethyl alcohol production project using sustainable methods.",
    technologies: ["Chemical Engineering", "Process Control", "Quality Assurance"]
  },
  {
    title: "Technology Franchising of Nipahol",
    role: "Project Staff",
    period: "2018-2019",
    description: "Supported technology transfer and franchising of Nipahol production technology.",
    technologies: ["Technology Transfer", "Business Development", "Technical Training"]
  },
  {
    title: "MMSU Industry 4.0 IoT Platform",
    role: "Study Leader",
    period: "2021-Present",
    description: "Leading development of Industry 4.0 IoT platform for smart manufacturing applications.",
    technologies: ["Industry 4.0", "IoT", "Smart Manufacturing", "Data Analytics"]
  }
];

// Memberships
export const memberships: Membership[] = [
  {
    organization: "Institute of Computer Engineers of the Philippines (ICpEP)",
    memberId: "R1-2019-001",
    type: "Lifetime Member",
    status: "Active"
  }
];

// Social Links
export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/raevillena",
    icon: "github"
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/raymart-villena",
    icon: "linkedin"
  },
  {
    platform: "Website",
    url: "https://raymartvillena.dev",
    icon: "globe"
  },
  {
    platform: "Email",
    url: "mailto:raymart.o.villena@gmail.com",
    icon: "email"
  }
];

// Affiliations
export const affiliations: Affiliation[] = [
  {
    id: "1",
    organization: "Institute of Computer Engineers of the Philippines",
    role: "Lifetime Member",
    memberId: "R1-2019-001",
    status: "Active",
    description: "Professional organization for computer engineers in the Philippines"
  }
];

// Conferences
export const conferences: Conference[] = [
  {
    id: "1",
    title: "14th International Conference on Software and Computer Applications (ICSCA 2025)",
    type: "International",
    role: "Presenter",
    date: "2025-02-20",
    location: "Kuala Lumpur, Malaysia",
    description: "Presented research on software and computer applications"
  },
  {
    id: "2",
    title: "ICPEP.SE Seminar: Smart AI, Smarter World: Advancing Sustainability Through Innovation",
    type: "International",
    role: "Speaker",
    date: "2025-03-19",
    location: "MMSU, Philippines",
    description: "Delivered keynote presentation on AI and sustainability"
  },
  {
    id: "3",
    title: "11th Engineering Research and Development for Technology Congress",
    type: "National",
    role: "Participant",
    date: "2023-11-23",
    location: "Philippines",
    description: "Participated in national engineering research congress"
  },
  {
    id: "4",
    title: "2nd International Convention and 10th National Convention of ICPEP",
    type: "International",
    role: "Participant",
    date: "2022-08-11",
    location: "Philippines",
    description: "Attended international computer engineering convention"
  },
  {
    id: "5",
    title: "Business Innovation and Engineering Conference 2020",
    type: "International",
    role: "Presenter",
    date: "2020-07-01",
    location: "Online",
    description: "Presented research on business innovation and engineering"
  },
  {
    id: "6",
    title: "5th Industry, Energy and Emerging Technology Research and Development Symposium",
    type: "Regional",
    role: "Presenter",
    date: "2019-10-22",
    location: "Philippines",
    description: "Presented research on industry and energy technology"
  }
];

// Trainings
export const trainings: Training[] = [
  {
    id: "1",
    title: "Basic Drone Familiarization and Basic Operation of DJI Mavic 3 Pro",
    date: "2025-06-03",
    duration: "3 days",
    provider: "AERO",
    description: "Comprehensive training on drone operation and aerial photography"
  },
  {
    id: "2",
    title: "The Solar PV Systems and Benefits to The Business and Environment",
    date: "2022-04-23",
    duration: "1 day",
    provider: "MMSU",
    description: "Training on solar photovoltaic systems and environmental benefits"
  },
  {
    id: "3",
    title: "Python Programming Essentials",
    date: "2021-05-17",
    duration: "12 days",
    provider: "MMSU",
    description: "Comprehensive Python programming course covering fundamentals to advanced topics"
  },
  {
    id: "4",
    title: "Practical Hands-on Training Skills on Ethical Hacking",
    date: "2021-11-01",
    duration: "1 month",
    provider: "MMSU",
    description: "Skills development for Computer Engineering professionals in cybersecurity"
  },
  {
    id: "5",
    title: "Renewable Energy Smart Grid Applications",
    date: "2019-07-30",
    duration: "4 days",
    provider: "MMSU",
    description: "Training on smart grid applications in renewable energy systems"
  },
  {
    id: "6",
    title: "Joint International Capability-Building Workshop on Renewable Energy Technologies",
    date: "2018-05-14",
    duration: "16 days",
    provider: "International",
    description: "International workshop on renewable energy technologies and applications"
  }
];
