import fluently from "@/public/images/fluently.png";
import seedCycling from "@/public/images/seedCycling.png";
import turnei from "@/public/images/Turnie.png";
import lqdcvs from "@/public/images/lqdcnvs.png";
import leasemate from "@/public/images/leasemate.png";
import orcary from "@/public/images/orcary.png";
import pkmts from "@/public/images/pkmts.png";
import ghusia from "@/public/images/ghelec.png";
import qazaumri from "@/public/images/umri.png";
import pediaDose from "@/public/images/pediaDose.png";
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
    featured: false,
  },

  {
    id: "leasemate",
    title: "Lease Mate",
    role: "Full Stack Flutter Developer (Mobile & Web)",
    description:
      "An AI-powered rental assistance app built with Flutter, featuring intelligent chat, objection handling, quizzes, and smart rental insights.",
    fullDescription:
      "LeaseMate is a next-generation rental assistance platform that leverages AI to simplify apartment hunting and tenancy management. I led the project end-to-end, from designing responsive UIs and implementing business logic with Flutter/GetX to integrating Firebase backend services and OpenAI APIs. Major achievements include developing AI-driven chat, script generation, interactive quizzes, daily rental tips, and an objection roleplay system for negotiation practice. I maintained a clean architecture with modular development to ensure seamless performance across Android, iOS, and Web. The web version is live at leasemateapp.com and the mobile apps are now published on Google Play and the App Store (link coming soon).",
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
      // Play Store / App Store / GitHub links can be added once published
    },
    image: leasemate.src,
    featured: true,
  },

  {
    id: "orcary",
    title: "Orcary",
    role: "Team Lead & Flutter Developer",
    description:
      "A feature-rich social mobile app with live streaming (solo & multi), real-time chat, media sharing, courses, and event management.",
    fullDescription:
      "Orcary is a powerful social networking app built with Flutter, offering advanced functionalities such as solo and multi-host live streaming, real-time chat, media sharing, interactive courses, and full event management. I led the development team, implemented complex real-time features using Agora and Firebase, and ensured seamless performance across both Android and iOS platforms.",
    technologies: [
      "Flutter",
      "Agora (Solo & Multi-Host Live Streaming, Calling)",
      "Firebase (Auth, Firestore, Cloud Functions, Notifications)",
    ],
    category: "Social / Live Streaming / Education",
    links: {
      // Add relevant links if available
    },
    image: orcary.src,
    featured: true,
  },

  {
    id: "pk_matchz",
    title: "PK Matchz",
    role: "Lead Developer & Architect",
    description:
      "A TikTok-style social media app featuring short video feeds, live streaming, and real-time PK battles.",
    fullDescription:
      "PK Matchz is a dynamic social entertainment app built using Flutter, designed for short-form video engagement. As Lead Developer & Architect, I was responsible for designing and implementing the complete user interface and managing the entire development team. Key features included real-time PK battles, interactive live streaming, user feeds, and chat. I ensured high performance, intuitive UX, and seamless deployment across Android and iOS.",
    technologies: [
      "Flutter",
      "Agora (Live Streaming & PK Battles)",
      "Firebase (Auth, Firestore, Notifications)"
    ],
    category: "Social / Entertainment / Live Streaming",
    links: {
      // Add relevant Play Store, App Store, or GitHub links here
    },
    image: pkmts.src,
    featured: true
  },
  {
    id: "qaza_umri",
    title: "Qaza Umri",
    role: "Flutter Developer",
    description: "Siraat helps Muslims manage Qaza Namaz including Qaza-e-Umri, Regular Qaza, and Qasar Qaza prayers with a user-friendly experience.",
    fullDescription: "Siraat is designed to help Muslims manage their Qaza Namaz in an organized way, covering Regular Qaza, Qaza-e-Umri, and Qasar Qaza prayers. It ensures accurate tracking, prayer time adjustments, and considers female-specific exemptions as per Shariah. Features include PDF Quran, Arabic fonts, favorite posts, Naat/Nohy collection, categorized content, daily Ayats, tasbih targets, and multilingual support (8 languages).",
    technologies: [
      "Flutter",
      "Firebase",
      "Hive DB",
      "PDF Viewer",
      "Custom Arabic Fonts"
    ],
    category: "Islamic / Productivity / Education",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.twintechsoft.islamicapp.qaza_e_umri"
    },
    image: qazaumri.src,
    featured: false
  },
  {
    id: "ghousia_electronics",
    title: "Ghousia Electronics",
    role: "Flutter Developer",
    description: "E-commerce mobile app offering the latest electronic products including smartphones, laptops, and home appliances.",
    fullDescription: "At Ghousia Electronics, we're dedicated to providing you with the latest and greatest electronic products to enhance your lifestyle. Whether you're looking for cutting-edge smartphones, high-performance laptops, top-of-the-line home appliances, or innovative gadgets – this app makes it easy to explore, order, and track with ease.",
    technologies: [
      "Flutter",
      "Firebase",
      "Stripe Payment Gateway",
      "GetX",
      "Cloud Firestore"
    ],
    category: "E-commerce",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.baba.ghousiaelectronics"
    },
    image: ghusia.src,
    featured: false
  },

  {
    id: "turnie",
    title: "Turnie - Travel Companion",
    role: "Full-Stack Developer",
    description:
      "Full-stack travel planning app with drag-and-drop itinerary, real-time collaboration, and intelligent suggestions.",
    fullDescription:
      "Comprehensive travel planning platform featuring intelligent itinerary suggestions, real-time collaboration between travelers, and seamless booking integration. Built with Flutter for cross-platform compatibility and Firebase for backend services.",
    technologies: ["Flutter", "Firebase", "Google Maps API", "Real-time Sync"],
    category: "Travel",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.ms.turnie",
      ios: "https://apps.apple.com/pk/app/turnie-travel-companion/id6742225389",
    },
    image: turnei.src,
    featured: false,
  },
  {
    id: "mechanic_dost",
    title: "MechanicDost",
    role: "Lead Flutter Developer",
    description:
      "Connecting users with nearby mechanics for real-time booking, service tracking, and notifications.",
    fullDescription:
      "MechanicDost is a location-based automotive service app designed to connect users with nearby mechanics quickly and efficiently. As the Lead Flutter Developer, I managed the UI implementation, integrated booking systems, push notifications, and real-time service tracking. The app provides users with seamless appointment scheduling, order status updates, and mechanic reviews – all through a user-friendly green interface.",
    technologies: [
      "Flutter",
      "Firebase (Auth, Firestore, Notifications)",
      "Google Maps API"
    ],
    category: "Automotive / Services",
    links: {
      // Add Play Store or GitHub links if available
    },
    image: pkmts.src,
    featured: false
  },
  {
    id: "fluently-ai",
    title: "Fluently AI",
    role: "Lead Developer",
    description:
      "English learning app powered by GPT-4 with adaptive lessons, smart flashcards, leveling system.",
    fullDescription:
      "Advanced English learning platform utilizing GPT-4 for personalized lesson generation, adaptive difficulty adjustment, and intelligent progress tracking. Features include voice recognition, pronunciation analysis, and gamified learning experience.",
    technologies: ["Flutter", "GPT-4", "Speech Recognition", "Firebase"],
    category: "Education",
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.metasense.fluently",
      ios: "https://apps.apple.com/pk/app/fluently-ai/id6446021804",
    },
    image: fluently.src,
    featured: false,
  },
  {
    id: "seed-cycling",
    title: "Seed Cycling",
    role: "Mobile Developer",
    description:
      "Women's wellness app with daily seed tracking, cycle calendar, and reminders.",
    fullDescription:
      "Specialized women's health application focused on seed cycling methodology for hormonal balance. Features include cycle tracking, personalized recommendations, and educational content.",
    technologies: [
      "Flutter",
      "Health Tracking",
      "Local Notifications",
      "Charts",
    ],
    category: "Health",
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.appsknight.app.seed_cycle_blend",
      ios: "https://apps.apple.com/us/app/seed-cycling/id6612035777",
    },
    image: seedCycling.src,
    featured: false,
  },
  {
    id: "PediaDoseCalculations",
    title: "Pedia Dose Calculations",
    role: "Flutter Developer",
    description: "Precision in Pediatric Dosing – Because Every Child Counts.",
    fullDescription: "We are skilled pediatric dose calculators dedicated to delivering accurate and safe medication dosages for children. With a deep understanding of pediatric pharmacology and the latest dosing guidelines, we ensure every calculation is precise. Our expertise spans various dosage methods, always prioritizing safety and care in pediatric treatment.",
    technologies: ["Firebase", "flutter", "figma"],
    category: "Health",
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.pediadosecalculations.app",
    },
    image: pediaDose.src,
    featured: false,
  },
];

export const skills = {
  languages: ["Dart", "C#", "C++", "SQL", "Python"],
  mobile: [
    "Flutter",
    "iOS Development",
    "Android Development",
    "Cross-platform",
    "TV Development",
  ],
  architecture: ["Clean Architecture", "MVC", "MVVM", "Bloc"],
  stateManagement: ["Provider", "GetX", "Bloc"],
  services: ["Firebase", "REST APIs"],
  ai: [
    "OpenAI APIs",
    "GPT-4 Integration",
    "AI Model Integration",
  ],
  tools: ["Git", "VS Code", "Android Studio", "Postman"],
  design: ["Figma", "UI/UX Design", "Responsive Design"],
  management: ["Agile", "Scrum", "Jira", "Trello", "Team Leadership"],
};

export const experience = [
  {
    id: "metasense",
    company: "Metasense Technologies",
    position: "Flutter Developer",
    period: "July 2025 – Present",
    location: "Onsite - Peshawar, Pakistan",
    description:
      "Designing, developing, and scaling feature-rich mobile applications with Flutter, handling everything from responsive UI to backend integration, while ensuring clean architecture and long-term scalability.",

    achievements: [
      "Build and maintain cross-platform mobile apps using Flutter with efficient state management (GetX).",
      "Develop core modules such as authentication, data management, interactive feeds, and communication systems.",
      "Integrate third-party services and APIs to extend app functionality (e.g., notifications, payments, AI services where required).",
      "Design intuitive, responsive, and user-friendly interfaces aligned with modern UX principles.",
      "Manage full development lifecycle from frontend to backend services using Firebase (Auth, Firestore, Cloud Functions, Storage).",
      "Ensure modular, maintainable, and scalable architecture through clean coding practices and collaboration.",
      "Expand applications to support Flutter Web, enabling unified cross-platform accessibility."
    ],
  },
  {
    id: "apexappworks",
    company: "ApexAppWorks",
    position: "Software Developer",
    period: "February 2024 – June 2025",
    location: "Onsite - Islamabad, Pakistan",
    description:
      "Flutter app development with a strong focus on real-time features including live streaming, voice/video calling, and interactive user experiences.",
    achievements: [
      "Lead the team of development to complete various projects ",
      "Delivered various apps with live streaming, live battles, feeds, and live video-audio rooms.",
      "Implemented all Firebase modules like cloud functions , notifications, and both databases.",
    ],
  },
  {
    id: "sufiantech",
    company: "SufianTech",
    position: "Junior Developer",
    period: "June 2023 – January 2024",
    location: "Remote - Peshawar, Pakistan",
    description:
      "Collaborated in a fast-paced development team to build and enhance multiple client-focused mobile applications using Flutter.",
    achievements: [
      "Developed key features for MechanicDost, AA Associates, and Legal Ease apps.",
      "Integrated Firebase services including authentication, database, and notifications for real-time app functionality.",
      "Implemented localization to support region-specific versions of the applications.",
      "Actively coordinated with the team to manage task distribution, timelines, and code quality.",
    ],
  },
];
