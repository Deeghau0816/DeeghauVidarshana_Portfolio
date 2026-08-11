import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../Components/Projectcard";
import ProjectCardCurrent from "../Components/ProjectCardCurrent";
import PageBackground from "../Components/Pagebackground";

const projects = [
  {
    title: "AegisBank",
    subtitle: "Agentic AI Banking System",
    period: "2026 • Ongoing",
    description:
      "Currently developing an advanced Agentic AI banking system that uses specialized intelligent agents to analyze financial situations, collaborate on complex banking problems, evaluate possible actions, and provide context-aware financial decision support.",
    tags: [
      "Agentic AI",
      "Multi-Agent Systems",
      "AI",
      "Financial Intelligence",
      "Decision Support",
      "LLM",
      "ML",
    ],
    githubUrl:
      "https://github.com/Deeghau0816/AegisBank---Agentic-AI-Bank-System.git",
    isUni: true,
    badgeImg: "/sliit-badge.png",
    isCurrent: true,
  },

  {
    title: "UniPulse",
    subtitle: "University Social Platform",
    period: "2026",
    description:
      "A university-focused social platform with Authentication, Role-based access, Notifications, Role request management, and OAuth login improvements to support students, academics, and admins.",
    tags: [
      "Spring Boot",
      "TypeScript",
      "MySQL",
      "JWT",
      "OAuth",
      "Role Management",
    ],
    githubUrl:
      "https://github.com/Deeghau0816/IT3030-paf-2026-smart-campus-Y3S1-WE-120.git",
    isUni: true,
    badgeImg: "/sliit-badge.png",
  },

  {
    title: "DataWarehouse Project",
    subtitle: "Retail Orders Data Warehouse & BI Solution",
    period: "2026 March",
    description:
      "Designed and implemented a retail data warehouse solution using SQL Server and SSIS by integrating data from many sources to support ETL processing, analytics, and reporting.",
    tags: [
      "SQL Server",
      "SSIS",
      "SSMS",
      "ETL",
      "Business Intelligence",
    ],
    githubUrl:
      "https://github.com/Deeghau0816/DWBI-Data-Warehouse-Project.git",
    isUni: true,
    badgeImg: "/sliit-badge.png",
  },

  {
    title: "SafeZone",
    subtitle: "Disaster Management System",
    period: "2025",
    description:
      "District-based alerts, user registration, admin dashboards, and reporting for disaster notifications.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/Deeghau0816/SafeZone_DMS.git",
    isUni: true,
    badgeImg: "/sliit-badge.png",
  },

  {
    title: "StockFlux",
    subtitle: "Real-time Stock Prediction Dashboard",
    period: "2025",
    description:
      "Streamlit dashboard with real-time fetching and ML-based next-candle prediction with intervals.",
    tags: ["Python", "Streamlit", "yfinance", "ML"],
    githubUrl: "https://github.com/Deeghau0816/StockFlux.git",
    isUni: false,
  },

  {
    title: "WellTrack",
    subtitle: "Wellness Tracker App",
    period: "2024",
    description:
      "Android wellness tracker focusing on storing user wellness data with offline-first local storage.",
    tags: [
      "Kotlin",
      "Data Persistence",
      "Local Database",
      "Mobile App",
    ],
    githubUrl:
      "https://github.com/Deeghau0816/WellTrack_Mobile_Application.git",
    isUni: true,
    badgeImg: "/sliit-badge.png",
  },

  {
    title: "TravelMania",
    subtitle: "Sri Lanka Tourism App",
    period: "2025",
    description:
      "Tourism mobile app with listings and features designed for Sri Lanka travel planning.",
    tags: ["Kotlin", "Android Studio", "Mobile App"],
    githubUrl:
      "https://github.com/Deeghau0816/Travel-Mania-Android-UI.git",
    isUni: true,
    badgeImg: "/sliit-badge.png",
  },

  {
    title: "TravelMania",
    subtitle: "Web Application",
    period: "2025",
    description:
      "Full-stack web platform for exploring Sri Lankan tourism with dynamic content and booking features.",
    tags: [
      "Java Servlets",
      "JSP",
      "MySQL",
      "HTML/CSS",
      "JavaScript",
    ],
    githubUrl: "https://github.com/Deeghau0816/Travel-mainia.git",
    isUni: true,
    badgeImg: "/sliit-badge.png",
  },

  {
    title: "Online Pharmacy System",
    subtitle: "E-commerce Web App",
    period: "2024",
    description:
      "Online pharmacy system with product management, order processing, and secure checkout flow.",
    tags: ["PHP", "MySQL", "jQuery", "HTML/CSS"],
    isUni: true,
    badgeImg: "/sliit-badge.png",
  },
];

export default function Projects() {
  const [count, setCount] = useState(0);

  // Counter animation
  useEffect(() => {
    const total = projects.length;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      setCount(current);

      if (current >= total) {
        clearInterval(timer);
      }
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-16">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <PageBackground />
      </div>

      {/* Scroll target */}
      <div id="projects" className="scroll-mt-36" />

      <motion.div
        className="relative z-10 mx-auto max-w-6xl px-4"
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        viewport={{
          once: true,
        }}
      >
        {/* Heading */}
        <div className="text-left">
          <p className="text-sm font-medium tracking-wide text-slate-700">
            PROJECTS • SELECTED WORK
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            My{" "}
            <span className="text-violet-700">
              Projects
            </span>{" "}
            showcase
          </h2>

          {/* Project count */}
          <div className="mt-4 flex items-center gap-3">
            <span className="text-slate-600">
              Total projects in portfolio
            </span>

            <motion.span
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-red-200
                bg-white/60
                px-4
                py-1.5
                text-sm
                font-extrabold
                text-red-600
                shadow-[0_8px_25px_rgba(239,68,68,0.15)]
                backdrop-blur
              "
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              animate={{
                scale: [1, 1.06, 1],
              }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
            >
              {count}
            </motion.span>
          </div>

          <p className="mt-3 max-w-3xl text-base text-slate-600 sm:text-lg">
            A curated set of academic and personal builds focused on real
            features, practical outcomes, data, and intelligent systems.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) =>
            project.isCurrent ? (
              <ProjectCardCurrent
                key={`${project.title}-${project.subtitle}`}
                project={project}
              />
            ) : (
              <ProjectCard
                key={`${project.title}-${project.subtitle}`}
                project={project}
              />
            )
          )}
        </div>
      </motion.div>
    </section>
  );
}