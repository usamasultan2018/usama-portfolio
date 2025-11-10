import lqdcvs from "@/public/images/lqdcnvs.png";
import leasemate from "@/public/images/leasemate.png";
import ecommerce from "@/public/images/ecommerce.png";;
export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  fullDescription?: string;
  technologies: string[];
  category: "AI" | "Health" | "TV" | "Web" | "Travel" | "Education" | "Social / Live Streaming / Education" | "Social / Entertainment / Live Streaming" | "Automotive / Services" | "Islamic / Productivity / Education" | "E-commerce" | "AI / Real Estate";
  links: {
    playStore?: string;
    ios?: string;
    website?: string;
    github?: string;
  };
  image: string;
  featured: boolean;
}
export const projects: Project[] = [
  {
    id: "shopora_ecommerce",
    title: "Shopora – Smart E-Commerce",
    role: "Lead Flutter Developer",
    description:
      "Modern cross-platform e-commerce app with real-time product catalog, secure authentication, and order management.",
    fullDescription:
      "Shopora is a full-stack e-commerce platform built with Flutter for mobile/web and Node.js + Express with MongoDB for backend. I implemented core features including product listing, advanced search, secure JWT authentication, wishlist, cart management, order placement, reviews, and admin-controlled categories. The architecture is fully modular, optimized for scalability, and designed for smooth performance across all platforms.",
    technologies: [
      "Flutter",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "REST APIs"
    ],
    category: "E-commerce",
    links: {
      playStore: "",
      ios: "",
      website: ""
    },
    image: ecommerce.src,
    featured: true,
  },

  {
    id: "liquid-canvas",
    title: "Liquid Canvas",
    role: "Architect",
    description:
      "AI-powered streaming art app for TVs and mobile. Developed 6 apps across iOS, Android, Roku, Android TV, Fire TV.",
    fullDescription:
      "Revolutionary AI-powered streaming art application that transforms any screen into a dynamic canvas. Led a team to develop cross-platform applications reaching millions of users across mobile and TV platforms. Integrated Pinecone vector database for intelligent art recommendations and Firebase for real-time synchronization.",
    technologies: [
      "Flutter",
      "BrightScript",
      "Pinecone DB",
      "Firebase",
      "AI Integration",
    ],
    category: "Web",
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.metasense.lqdcnvs_mobile",
      ios: "https://apps.apple.com/us/app/liquid-canvas/id6478953093",
      website: "https://www.liquidcanvas.art/",
    },
    image: lqdcvs.src,
    featured: true,
  },

  {
    id: "leasemate",
    title: "Lease Mate",
    role: "Full Stack Flutter Developer (Mobile & Web)",
    description:
      "An AI-powered rental assistance app built with Flutter, featuring intelligent chat, objection handling, quizzes, and smart rental insights.",
    fullDescription:
      "LeaseMate is a next-generation rental assistance platform that leverages AI to simplify apartment hunting and tenancy management. I led the project end-to-end, from designing responsive UIs and implementing business logic with Flutter/GetX to integrating Firebase backend services and OpenAI APIs. Major achievements include developing AI-driven chat, script generation, interactive quizzes, daily rental tips, and an objection roleplay system for negotiation practice. I maintained a clean architecture with modular development to ensure seamless performance across Android, iOS, and Web.",
    technologies: [
      "Flutter (Mobile & Web)",
      "Dart",
      "GetX",
      "Firebase (Auth, Firestore, Cloud Functions, Notifications, Storage)",
      "OpenAI API"
    ],
    category: "AI / Real Estate",
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.metasense.leasemate",
      ios: "https://apps.apple.com/us/app/lease-mate-app/id6753330159",
      website: "https://leasemateapp.com",
    },
    image: leasemate.src,
    featured: true,
  },
];

export const skills = {
  languages: ["Dart", "JavaScript", "TypeScript", "SQL", "Python"],
  mobile: [
    "Flutter",
    "Cross-platform (iOS/Android/Web)",
    "Responsive UI Design",
  ],
  architecture: ["Clean Architecture", "SOLID", "MVC", "MVVM", "BLoC"],
  stateManagement: ["Provider", "BLoC", "Cubit", "GetX"],
  services: [
    "Node.js",
    "Express.js",
    "Firebase Cloud Functions",
    "REST APIs",
    "GraphQL",
    "JWT Auth",
  ],
  databases: ["Firebase Firestore", "MongoDB", "MySQL", "PostgreSQL"],
  ai: ["OpenAI APIs", "AI Integration"],
  tools: ["Git", "GitHub", "VS Code", "Android Studio", "Postman"],
  design: ["Figma", "UI/UX Design", "Responsive Design"],
  management: ["Agile", "Scrum", "Code Reviews", "Mentoring"],
};

export const experience = [
  {
    id: "metasense",
    company: "Metasense Technologies",
    position: "Flutter Developer",
    period: "February 2025 – Present",
    location: "Pakistan",
    description:
      "Leading the development of scalable Flutter apps with clean architecture and AI integrations.",
    achievements: [
      "Led end-to-end Flutter development across mobile & web with modular, maintainable code.",
      "Integrated OpenAI APIs and Node.js/Express backends where needed.",
      "Implemented advanced UI features, state management (GetX/Provider/BLoC), and performance optimizations.",
      "Collaborated with backend engineers and designers to deliver pixel-perfect, high-performance apps.",
    ],
  },
  {
    id: "easetechit",
    company: "EaseTechIT Solution",
    position: "Flutter Developer",
    period: "August 2024 – February 2025",
    location: "Pakistan",
    description:
      "Built and shipped multi-module Flutter apps with Firebase integration and smooth UX.",
    achievements: [
      "Implemented Firebase Authentication and Firestore with offline persistence.",
      "Improved app startup time and reduced unnecessary widget rebuilds.",
      "Contributed to code reviews, planning, and Git-based workflows.",
    ],
  },
  {
    id: "tritect",
    company: "Tritect Solution",
    position: "Junior Flutter Developer",
    period: "December 2023 – March 2024",
    location: "Pakistan",
    description:
      "Delivered features across Flutter apps from design to deployment under agile practices.",
    achievements: [
      "Integrated REST APIs, built data models, and used Provider for state control.",
      "Enhanced UI/UX and resolved bugs across ongoing projects.",
    ],
  },
];