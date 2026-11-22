
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import ProjectCard from "../Components/Projectcard";
import ProjectCardCurrent from "../Components/ProjectcardCurrent";
import PageBackground from "../Components/Pagebackground";

const projects = [
  // =========================================================
  // VERITY - CURRENT PROJECT
  // =========================================================

  {
    title: "Verity",
    subtitle: "Trustworthy AI Stock Forecasting System",
    period: "2026 • Ongoing",

    image: "/projects/verity.png",

    description:
      "Developing an AI-powered stock forecasting system combining time-series models, calibrated prediction intervals, explainable AI, and market drift detection for reliable financial insights.",

    tags: [
      "Python",
      "FastAPI",
      "Docker",
      "React",
      "Machine Learning",
      "Time-Series",
      "Chronos / TimesFM",
      "XGBoost",
      "SHAP",
      "Conformal Prediction",
      "yfinance",
    ],

    githubUrl: null,

    isUni: false,
    isCurrent: true,
  },

  // =========================================================
  // DINEFLOW - CURRENT PROJECT
  // =========================================================

  {
    title: "DineFlow",
    subtitle: "Restaurant Management System",
    period: "2026 • Ongoing",

    image: "/projects/dinmore.png",

    description:
      "Developing a full-stack restaurant management platform featuring digital menus, table reservations, customer interactions, secure administration, and integrated database-driven operations.",

    tags: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "REST API",
    ],

    githubUrl:
      "https://github.com/Deeghau0816/Dine-Flow.git",

    isUni: false,
    isCurrent: true,
  },

  // =========================================================
  // FDM MINI PROJECT
  // =========================================================

  {
    title: "FDM Mini Project",
    subtitle: "Hotel Booking Cancellation Prediction",
    period: "2026",

    image:
      "/projects/Hotel-Booking-Cancellation-Analytics.png",

    description:
      "Developed a machine learning solution predicting hotel booking cancellations using historical reservation data, feature engineering, classification algorithms, and systematic model evaluation.",

    tags: [
      "Machine Learning",
      "Python",
      "Scikit-learn",
      "Random Forest",
      "Gradient Boosting",
    ],

    githubUrl:
      "https://github.com/KulanyaLisaldi/Hotel-Booking-Cancellation-Prediction.git",

    isUni: true,
    badgeImg: "/sliit-badge.png",
    isCurrent: false,
  },

  // =========================================================
  // BANKGUARD AI
  // =========================================================

  {
    title: "BankGuard AI",
    subtitle: "Agentic AI Banking System",
    period: "2026",

    image: "/projects/bankguard.png",

    description:
      "Developed a multi-agent AI banking assistant integrating retrieval-augmented generation, financial product recommendations, eligibility assessment, and context-aware responses through specialized intelligent agents.",

    tags: [
      "Agentic AI",
      "Multi-Agent",
      "RAG",
      "LLM",
      "Python",
      "FastAPI",
    ],

    githubUrl:
      "https://github.com/KulanyaLisaldi/BankGuard-AI.git",

    isUni: true,
    badgeImg: "/sliit-badge.png",
    isCurrent: false,
  },

  // =========================================================
  // UNIPULSE
  // =========================================================

  {
    title: "UniPulse",
    subtitle: "University Social Platform",
    period: "2026",

    image: "/projects/UniPulse.png",

    description:
      "Developed a university social networking platform integrating secure authentication, role-based access control, OAuth login, notifications, and structured user management features.",

    tags: [
      "Spring Boot",
      "TypeScript",
      "MySQL",
      "JWT",
      "OAuth",
      "RBAC",
    ],

    githubUrl:
      "https://github.com/Deeghau0816/IT3030-paf-2026-smart-campus-Y3S1-WE-120.git",

    isUni: true,
    badgeImg: "/sliit-badge.png",
    isCurrent: false,
  },

  // =========================================================
  // DATA WAREHOUSE
  // =========================================================

  {
    title: "Data Warehouse",
    subtitle: "Retail Orders DWBI Solution",
    period: "2026",

    image: "/projects/dwbi.png",

    description:
      "Designed a retail data warehouse integrating ETL pipelines, dimensional modeling, OLAP analysis, and interactive business intelligence dashboards for sales reporting.",

    tags: [
      "SQL Server",
      "SSIS",
      "SSAS",
      "ETL",
      "Power BI",
      "DWBI",
    ],

    githubUrl:
      "https://github.com/Deeghau0816/DWBI-Data-Warehouse-Project.git",

    isUni: true,
    badgeImg: "/sliit-badge.png",
    isCurrent: false,
  },

  // =========================================================
  // SAFEZONE
  // =========================================================

  {
    title: "SafeZone",
    subtitle: "Disaster Management System",
    period: "2025",

    image: "/projects/SafeZone.png",

    description:
      "Built a full-stack disaster management platform providing district-based emergency alerts, incident reporting, user administration, and centralized dashboards for disaster coordination.",

    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MERN",
    ],

    githubUrl:
      "https://github.com/Deeghau0816/SafeZone_DMS.git",

    isUni: true,
    badgeImg: "/sliit-badge.png",
    isCurrent: false,
  },

  // =========================================================
  // STOCKFLUX
  // =========================================================

  {
    title: "StockFlux",
    subtitle: "Real-time Stock Prediction Dashboard",
    period: "2025",

    image: "/projects/stockflux.png",

    description:
      "Built an interactive stock market dashboard integrating live market data, technical indicators, machine learning predictions, and next-candle forecasting for financial analysis.",

    tags: [
      "Python",
      "Streamlit",
      "yfinance",
      "Machine Learning",
    ],

    githubUrl:
      "https://github.com/Deeghau0816/StockFlux.git",

    isUni: false,
    isCurrent: false,
  },

  // =========================================================
  // WELLTRACK
  // =========================================================

  {
    title: "WellTrack",
    subtitle: "Wellness Tracker App",
    period: "2024",

    image: "/projects/welltrack.png",

    description:
      "Developed an Android wellness tracking application supporting personal health monitoring, offline-first data storage, daily activity management, and accessible mobile interactions.",

    tags: [
      "Kotlin",
      "Android",
      "Local Storage",
      "Mobile App",
    ],

    githubUrl:
      "https://github.com/Deeghau0816/WellTrack_Mobile_Application.git",

    isUni: true,
    badgeImg: "/sliit-badge.png",
    isCurrent: false,
  },

  // =========================================================
  // TRAVELMANIA MOBILE
  // =========================================================

  {
    title: "TravelMania",
    subtitle: "Sri Lanka Tourism Mobile App",
    period: "2025",

    image: "/projects/mobiletravel.png",

    description:
      "Designed an Android tourism application showcasing Sri Lankan travel destinations, destination information, intuitive navigation, and mobile-friendly interfaces for tourism exploration.",

    tags: [
      "Kotlin",
      "Android Studio",
      "Android",
      "Mobile App",
    ],

    githubUrl:
      "https://github.com/Deeghau0816/Travel-Mania-Android-UI.git",

    isUni: true,
    badgeImg: "/sliit-badge.png",
    isCurrent: false,
  },

  // =========================================================
  // TRAVELMANIA WEB
  // =========================================================

  {
    title: "TravelMania",
    subtitle: "Tourism Web Application",
    period: "2025",

    image: "/projects/travelmainia.png",

    description:
      "Developed a full-stack tourism web application featuring Sri Lankan destinations, dynamic travel content, booking-oriented functionality, and database-driven information management.",

    tags: [
      "Java",
      "Servlets",
      "JSP",
      "MySQL",
      "JavaScript",
    ],

    githubUrl:
      "https://github.com/Deeghau0816/Travel-mainia.git",

    isUni: true,
    badgeImg: "/sliit-badge.png",
    isCurrent: false,
  },

  // =========================================================
  // ONLINE PHARMACY
  // =========================================================

  {
    title: "Online Pharmacy",
    subtitle: "E-commerce Web Application",
    period: "2024",

    image: "/projects/pharmacy.png",

    description:
      "Built an online pharmacy e-commerce platform supporting medicine catalog management, customer ordering workflows, shopping cart functionality, and database-integrated checkout operations.",

    tags: [
      "PHP",
      "MySQL",
      "jQuery",
      "JavaScript",
      "HTML/CSS",
    ],

    githubUrl: null,

    isUni: true,
    badgeImg: "/sliit-badge.png",
    isCurrent: false,
  },
];

// ===========================================================
// PROJECTS PAGE
// ===========================================================

export default function Projects() {
  const [count, setCount] = useState(0);

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
    <section className="relative min-h-screen pt-24 pb-16">

      {/* ====================================================== */}
      {/* BACKGROUND */}
      {/* ====================================================== */}

      <PageBackground />

      {/* ====================================================== */}
      {/* SCROLL TARGET */}
      {/* ====================================================== */}

      <div
        id="projects"
        className="scroll-mt-36"
      />

      {/* ====================================================== */}
      {/* MAIN CONTENT */}
      {/* ====================================================== */}

      <motion.div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
          px-4
        "
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

        {/* ==================================================== */}
        {/* HEADER */}
        {/* ==================================================== */}

        <div className="text-left">

          <p className="text-sm font-medium tracking-wide text-slate-700">
            PROJECTS • SELECTED WORK
          </p>

          <h2
            className="
              mt-2
              text-3xl
              font-bold
              tracking-tight
              text-slate-900
              md:text-4xl
            "
          >
            My{" "}
            <span className="text-violet-700">
              Projects
            </span>{" "}
            showcase
          </h2>

          {/* ================================================== */}
          {/* PROJECT COUNT */}
          {/* ================================================== */}

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

          <p
            className="
              mt-3
              max-w-3xl
              text-base
              text-slate-600
              sm:text-lg
            "
          >
            A selection of data science, AI, analytics, software engineering,
            full-stack, and mobile projects built around practical problems
            and real technical implementation.
          </p>

        </div>

        {/* ==================================================== */}
        {/* PROJECT GRID */}
        {/* ==================================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            items-stretch
            gap-8
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
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
