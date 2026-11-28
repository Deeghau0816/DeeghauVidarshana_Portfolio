// src/pages/About.jsx

import { motion } from "framer-motion";
import PageBackground from "../Components/Pagebackground";
import {
  Brain,
  BarChart3,
  Database,
  Code2,
  Sparkles,
  MapPin,
  Layers3,
  ClipboardCheck,
  Briefcase,
  Cloud,
  MonitorSmartphone,
  Bot,
  ShieldCheck,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section className="relative min-h-screen pt-24 pb-16">

      {/* SAME BACKGROUND VIDEO */}
      <PageBackground />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5">

        {/* ======================================================= */}
        {/* HEADER                                                  */}
        {/* ======================================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-sm font-medium tracking-wide text-slate-700">
            ABOUT • AI & MACHINE LEARNING • DATA SCIENCE • SOFTWARE ENGINEERING
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Engineering{" "}
            <span className="text-indigo-700">
              AI & Machine Learning
            </span>
            {" "}systems, backed by{" "}
            <span className="text-blue-700">
              Data Science
            </span>
            {" & "}
            <span className="text-cyan-700">
              Software Engineering
            </span>
            .
          </h1>

          <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
            Data Science undergraduate and{" "}
            <span className="font-medium text-slate-900">
              Data Analyst Intern at Michelin Lanka
            </span>
            . I build AI and machine learning systems that work on real data,
            from predictive models and multi-agent AI to dashboards, APIs,
            and full-stack applications.
          </p>

          {/* ===================================================== */}
          {/* QUICK INFORMATION                                     */}
          {/* ===================================================== */}

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-700">

            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1">
              <MapPin className="h-4 w-4 text-slate-600" />
              Sri Lanka
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1">
              <Briefcase className="h-4 w-4 text-slate-600" />
              Data Analyst Intern • Michelin Lanka
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1">
              <Sparkles className="h-4 w-4 text-slate-600" />
              AI • ML • Data • Software
            </span>

          </div>

          {/* ===================================================== */}
          {/* ROLE CHIPS                                            */}
          {/* ===================================================== */}

          <div className="mt-5 flex flex-wrap gap-2">

            <RoleChip
              icon={<Bot className="h-4 w-4" />}
              text="AI & Agentic Systems"
            />

            <RoleChip
              icon={<Brain className="h-4 w-4" />}
              text="Machine Learning"
            />

            <RoleChip
              icon={<ShieldCheck className="h-4 w-4" />}
              text="Explainable AI"
            />

            <RoleChip
              icon={<BarChart3 className="h-4 w-4" />}
              text="Data Analytics"
            />

            <RoleChip
              icon={<MonitorSmartphone className="h-4 w-4" />}
              text="Full-Stack Development"
            />

            <RoleChip
              tone="learning"
              icon={<Cloud className="h-4 w-4" />}
              text="Cloud & Data Engineering"
            />

          </div>

        </motion.div>

        {/* ======================================================= */}
        {/* WHAT I DO                                               */}
        {/* ======================================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mb-10
            overflow-hidden
            rounded-3xl
            border border-indigo-100
            bg-white/70
            shadow-sm
            backdrop-blur-md
          "
        >
          <div className="h-1.5 w-full bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-cyan-500" />

          <div className="p-6 md:p-8">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
              What I do
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
              AI, data, and software in one skill set
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">

              <ReadyCard
                badge="Industry Experience"
                title="AI & Machine Learning"
                icon={
                  <Brain className="h-4 w-4 text-fuchsia-700" />
                }
                points={[
                  "Predictive ML on manufacturing data at Michelin Lanka",
                  "Agentic and multi-agent AI with LLMs and RAG",
                  "Time-series forecasting and Explainable AI",
                ]}
              />

              <ReadyCard
                badge="Industry Experience"
                title="Data Analytics & BI"
                icon={
                  <BarChart3 className="h-4 w-4 text-indigo-700" />
                }
                points={[
                  "Power BI dashboards and multi-plant reporting",
                  "Power Automate workflows and automated data refresh",
                  "Data preparation with Excel, Power Query, and SQL",
                ]}
              />

              <ReadyCard
                badge="Project Experience"
                title="Software Engineering"
                icon={
                  <Code2 className="h-4 w-4 text-blue-700" />
                }
                points={[
                  "Full-stack apps with React, TypeScript, and FastAPI",
                  "REST APIs and database-driven systems",
                  "Git-based team development",
                ]}
              />

              <ReadyCard
                badge="Growing Specialization"
                title="Data & Cloud Engineering"
                icon={
                  <Database className="h-4 w-4 text-amber-700" />
                }
                points={[
                  "Data warehousing and ETL with SQL Server",
                  "Docker, AWS, and Databricks foundations",
                  "Data pipelines and scalable architecture concepts",
                ]}
              />

            </div>

          </div>
        </motion.div>

        {/* ======================================================= */}
        {/* WHAT I'M DOING NOW                                      */}
        {/* ======================================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mb-10
            rounded-3xl
            border border-slate-200
            bg-white/70
            shadow-sm
            backdrop-blur-md
          "
        >
          <div className="p-6 md:p-8">

            <h2 className="text-xl font-semibold text-slate-900">
              What I’m doing now
            </h2>

            <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">

              <TimelineItem
                title="Data Analyst Intern, Michelin Lanka"
                desc="Building Power BI dashboards and Power Automate workflows, and developing a predictive ML model for tyre defect analysis (through December 2026)."
              />

              <TimelineItem
                title="Building agentic AI"
                desc="BankGuard AI: a four-person team project, a multi-agent banking system with explainable risk analysis and human-approved escalation."
              />

              <TimelineItem
                title="Designing Verity"
                desc="A new forecasting pipeline project, currently in design and setup."
              />

            </ul>

          </div>
        </motion.div>

        {/* ======================================================= */}
        {/* HOW I WORK                                              */}
        {/* ======================================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            overflow-hidden
            rounded-3xl
            border border-slate-200
            bg-white/70
            shadow-sm
            backdrop-blur-md
          "
        >
          <div className="p-6 md:p-8">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
              How I work
            </p>

            <h3 className="mt-2 text-2xl font-bold text-slate-900">
              From an idea to a complete solution
            </h3>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <WorkflowStep
                number="01"
                icon={
                  <ClipboardCheck className="h-5 w-5 text-indigo-700" />
                }
                title="Understand"
                desc="The real problem, users, and constraints."
              />

              <WorkflowStep
                number="02"
                icon={
                  <Layers3 className="h-5 w-5 text-blue-700" />
                }
                title="Design"
                desc="Architecture, data model, and APIs."
              />

              <WorkflowStep
                number="03"
                icon={
                  <Code2 className="h-5 w-5 text-fuchsia-700" />
                }
                title="Build"
                desc="Frontend, backend, data, and ML components."
              />

              <WorkflowStep
                number="04"
                icon={
                  <Sparkles className="h-5 w-5 text-emerald-700" />
                }
                title="Deliver"
                desc="Test, improve, and ship something usable."
              />

            </div>

            <div
              className="
                mt-7
                rounded-2xl
                border border-indigo-100
                bg-gradient-to-r
                from-indigo-50/90
                via-white/80
                to-cyan-50/90
                px-5
                py-4
              "
            >
              <p className="text-center font-medium text-slate-800">
                Data and software are how I make AI usable — the goal is
                intelligent systems that are reliable, explainable, and
                useful in the real world.
              </p>
            </div>

          </div>
        </motion.div>

      </div>

    </section>
  );
}

/* ============================================================= */
/* READY CARD                                                    */
/* ============================================================= */

function ReadyCard({
  badge,
  title,
  points,
  icon,
}) {
  const badgeStyle =
    badge === "Industry Experience"
      ? "bg-slate-900 text-white"
      : badge === "Project Experience"
        ? "bg-blue-700 text-white"
        : badge === "Growing Specialization"
          ? "bg-indigo-700 text-white"
          : "bg-slate-700 text-white";

  return (
    <div
      className="
        rounded-2xl
        border border-slate-200
        bg-white/65
        p-4
        backdrop-blur-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      <div className="flex items-start justify-between gap-3">

        <div>

          <p className="flex items-center gap-2 font-semibold text-slate-900">

            <span className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-1.5">
              {icon}
            </span>

            {title}

          </p>

          <span
            className={`
              mt-2
              inline-flex
              rounded-full
              px-3
              py-1
              text-[11px]
              font-semibold
              ${badgeStyle}
            `}
          >
            {badge}
          </span>

        </div>

      </div>

      <ul className="mt-3 space-y-2 text-sm text-slate-700">

        {points.map((point, index) => (
          <li
            key={index}
            className="flex gap-2"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900/70" />

            <span>
              {point}
            </span>
          </li>
        ))}

      </ul>

    </div>
  );
}

/* ============================================================= */
/* TIMELINE ITEM                                                 */
/* ============================================================= */

function TimelineItem({
  title,
  desc,
}) {
  return (
    <li
      className="
        rounded-2xl
        border border-slate-200
        bg-white/65
        p-4
        backdrop-blur-md
      "
    >
      <p className="font-semibold text-slate-900">
        {title}
      </p>

      <p className="mt-1 text-sm leading-relaxed text-slate-700">
        {desc}
      </p>
    </li>
  );
}

/* ============================================================= */
/* ROLE CHIP                                                     */
/* ============================================================= */

function RoleChip({
  icon,
  text,
  tone = "strong",
}) {
  const className =
    tone === "learning"
      ? "border-slate-200 bg-white/70 text-slate-700"
      : "border-slate-200 bg-white/80 text-slate-800";

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        px-3
        py-1
        text-xs
        font-semibold
        ${className}
      `}
    >
      <span className="text-slate-700">
        {icon}
      </span>

      {text}

    </span>
  );
}

/* ============================================================= */
/* WORKFLOW STEP                                                 */
/* ============================================================= */

function WorkflowStep({
  number,
  icon,
  title,
  desc,
}) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border border-slate-200
        bg-white/75
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-indigo-200
        hover:shadow-[0_16px_35px_rgba(15,23,42,0.09)]
      "
    >
      <span className="absolute top-3 right-4 text-3xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-indigo-100">
        {number}
      </span>

      <div className="relative">

        <div
          className="
            inline-flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border border-slate-200
            bg-white
            shadow-sm
          "
        >
          {icon}
        </div>

        <h4 className="mt-4 font-semibold text-slate-900">
          {title}
        </h4>

        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          {desc}
        </p>

      </div>
    </div>
  );
}