// src/pages/About.jsx

import { motion } from "framer-motion";
import {
  GraduationCap,
  Brain,
  BarChart3,
  LineChart,
  Database,
  Code2,
  Sparkles,
  MapPin,
  Layers3,
  ClipboardCheck,
  Briefcase,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-16">
      {/* Background video */}
      <div className="pointer-events-none absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src="/videos/BackgroundVideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />

        <div className="absolute inset-0 bg-white/40" />
        <div className="absolute inset-0 bg-slate-200/20" />
      </div>

      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl" />

        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-cyan-500/12 blur-3xl" />

        <div className="absolute -bottom-24 left-1/3 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5">
        {/* Top header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-sm font-medium tracking-wide text-slate-700">
            ABOUT • DATA SCIENCE PATH
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            My <span className="text-indigo-700">Data Science</span> journey —
            learning, building, and improving with{" "}
            <span className="text-cyan-700">real data</span>.
          </h1>

          <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
            I’m an IT undergraduate specializing in{" "}
            <span className="font-medium text-slate-900">Data Science</span>,
            focused on building practical, data-driven systems. I strengthen my
            foundations through hands-on projects in{" "}
            <span className="font-medium text-slate-900">
              Exploratory Data Analysis
            </span>
            ,{" "}
            <span className="font-medium text-slate-900">Visualization</span>,{" "}
            <span className="font-medium text-slate-900">
              Predictive Modeling
            </span>
            , and{" "}
            <span className="font-medium text-slate-900">
              Dashboard Development
            </span>
            .
            <br />
            <br />
            I actively work with real-world datasets to understand patterns,
            engineer features, and apply machine learning techniques. Alongside
            analytics, I’m developing strong data engineering fundamentals by
            learning how to structure, manage, and prepare data efficiently for
            scalable solutions.
            <br />
            <br />
            My goal is to bridge analytics and engineering to build impactful,
            intelligent systems.
          </p>

          {/* Quick information */}
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-700">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1">
              <MapPin className="h-4 w-4 text-slate-600" />
              Sri Lanka
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1">
              <Briefcase className="h-4 w-4 text-slate-600" />
              Data Analyst Intern at Michelin Lanka
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1">
              <Sparkles className="h-4 w-4 text-slate-600" />
              Data-first • Practical projects
            </span>
          </div>

          {/* Role chips */}
          <div className="mt-5 flex flex-wrap gap-2">
            <RoleChip
              tone="strong"
              icon={<BarChart3 className="h-4 w-4" />}
              text="Data Analyst"
            />

            <RoleChip
              tone="strong"
              icon={<LineChart className="h-4 w-4" />}
              text="BI / Dashboarding"
            />

            <RoleChip
              tone="strong"
              icon={<Brain className="h-4 w-4" />}
              text="Data Science"
            />

            <RoleChip
              tone="learning"
              icon={<Database className="h-4 w-4" />}
              text="Data Engineering"
            />

            <RoleChip
              tone="learning"
              icon={<Database className="h-4 w-4" />}
              text="Cloud + Big Data Foundations"
            />
          </div>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="
              rounded-3xl
              border border-slate-200
              bg-white/70
              shadow-sm
              backdrop-blur-md
              lg:col-span-2
            "
          >
            <div className="p-6 md:p-8">
              <h2 className="text-xl font-semibold text-slate-900">
                My Data Science focus
              </h2>

              <p className="mt-3 leading-relaxed text-slate-700">
                I enjoy working on problems where data tells a story. My goal is
                to build skills that make me useful in a real team—not just
                theory. I focus on clean analysis, clear insights, and practical
                outputs such as dashboards and machine learning solutions.
              </p>

              {/* Focus cards */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <MiniCard
                  icon={<Layers3 className="h-5 w-5 text-indigo-700" />}
                  title="EDA + Visualization"
                  desc="Cleaning data, identifying patterns, creating charts, and presenting clear summaries."
                />

                <MiniCard
                  icon={<LineChart className="h-5 w-5 text-cyan-700" />}
                  title="Insights + Reporting"
                  desc="Building dashboards, defining KPIs, analyzing trends, and communicating findings."
                />

                <MiniCard
                  icon={<Brain className="h-5 w-5 text-fuchsia-700" />}
                  title="Machine Learning"
                  desc="Building baseline models, evaluating results, and improving solutions through iteration."
                />

                <MiniCard
                  icon={<Code2 className="h-5 w-5 text-amber-700" />}
                  title="Build + Deliver"
                  desc="Turning analytical results into practical applications, dashboards, and systems."
                />
              </div>

              {/* Roles */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-slate-900">
                  Roles I’m building towards
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  These areas represent what I can contribute now and the skills
                  I am continuously developing.
                </p>

                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <ReadyCard
                    badge="Strong fit now"
                    title="Data Analytics"
                    icon={<BarChart3 className="h-4 w-4 text-indigo-700" />}
                    points={[
                      "Data cleaning and exploratory analysis",
                      "Business-focused KPIs and trend analysis",
                      "Presenting insights clearly and simply",
                    ]}
                  />

                  <ReadyCard
                    badge="Strong fit now"
                    title="BI / Dashboarding"
                    icon={<LineChart className="h-4 w-4 text-cyan-700" />}
                    points={[
                      "Professional dashboard layouts",
                      "Visual storytelling for decision-making",
                      "Transforming complex data into clear views",
                    ]}
                  />

                  <ReadyCard
                    badge="Growing"
                    title="Data Science"
                    icon={<Brain className="h-4 w-4 text-fuchsia-700" />}
                    points={[
                      "Developing practical ML workflows",
                      "Model evaluation and experimentation",
                      "Improving solutions through iteration",
                    ]}
                  />

                  <ReadyCard
                    badge="Learning"
                    title="Data Engineering"
                    icon={<Database className="h-4 w-4 text-amber-700" />}
                    points={[
                      "Working with APIs and structured datasets",
                      "Understanding reliable data pipelines",
                      "Improving SQL and data organization",
                    ]}
                  />
                </div>
              </div>

              {/* Current progress */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-slate-900">
                  What I’m doing now
                </h3>

                <ul className="mt-4 space-y-3">
                  <TimelineItem
                    title="Gaining real industry experience"
                    desc="Working as a Data Analyst Intern at Michelin Lanka and applying analytical thinking to real business requirements."
                  />

                  <TimelineItem
                    title="Deepening Data Science foundations"
                    desc="Improving my knowledge of statistics, exploratory analysis, feature engineering, and model evaluation."
                  />

                  <TimelineItem
                    title="Building projects that demonstrate value"
                    desc="Creating dashboards, analytical systems, data applications, and machine learning experiments."
                  />
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Education */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="
                rounded-3xl
                border border-slate-200
                bg-white/70
                shadow-sm
                backdrop-blur-md
              "
            >
              <div className="p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                  <GraduationCap className="h-5 w-5 text-slate-700" />
                  Education
                </h3>

                <p className="mt-3 leading-relaxed text-slate-700">
                  BSc (Hons) in Information Technology, specializing in Data
                  Science at SLIIT.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Pill>Python</Pill>
                  <Pill>EDA</Pill>
                  <Pill>Machine Learning</Pill>
                  <Pill>SQL</Pill>
                  <Pill>Dashboards</Pill>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="
                rounded-3xl
                border border-slate-200
                bg-white/70
                shadow-sm
                backdrop-blur-md
              "
            >
              <div className="p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                  <ClipboardCheck className="h-5 w-5 text-slate-700" />
                  Skills snapshot
                </h3>

                <div className="mt-4 space-y-3">
                  <SkillBar label="EDA + Visualization" value={82} />

                  <SkillBar label="Dashboards / Reporting" value={78} />

                  <SkillBar label="Python + Data Handling" value={78} />

                  <SkillBar label="Machine Learning" value={66} />

                  <SkillBar label="Data Engineering Foundations" value={58} />
                </div>

                <p className="mt-4 text-sm text-slate-700">
                  I continuously strengthen these skills through practical
                  projects and real-world experience.
                </p>
              </div>
            </motion.div>

            {/* Advantage */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="
                rounded-3xl
                border border-slate-200
                bg-white/70
                shadow-sm
                backdrop-blur-md
              "
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  My advantage
                </h3>

                <ul className="mt-4 space-y-3 text-slate-700">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />

                    <span>
                      I explain insights clearly instead of only presenting
                      graphs.
                    </span>
                  </li>

                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-600" />

                    <span>
                      I build clean, professional dashboards that are easy to
                      understand.
                    </span>
                  </li>

                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-600" />

                    <span>
                      I combine analytical thinking, technical skills, and
                      communication.
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* How I create value */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="
            mt-10
            overflow-hidden
            rounded-3xl
            border border-slate-200
            bg-white/70
            shadow-sm
            backdrop-blur-md
          "
        >
          <div className="p-6 md:p-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
                How I create value
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                From raw data to clear decisions
              </h3>

              <p className="mt-3 leading-relaxed text-slate-700">
                I approach data problems as a complete journey—from
                understanding the real requirement to delivering an insight
                that people can understand and use.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <WorkflowStep
                number="01"
                icon={
                  <ClipboardCheck className="h-5 w-5 text-indigo-700" />
                }
                title="Understand"
                desc="Identify the real problem, business requirement, and expected outcome."
              />

              <WorkflowStep
                number="02"
                icon={<Database className="h-5 w-5 text-cyan-700" />}
                title="Prepare"
                desc="Clean, organize, validate, and explore the available data."
              />

              <WorkflowStep
                number="03"
                icon={<Brain className="h-5 w-5 text-fuchsia-700" />}
                title="Analyze"
                desc="Discover patterns, test ideas, and build meaningful analytical solutions."
              />

              <WorkflowStep
                number="04"
                icon={<LineChart className="h-5 w-5 text-emerald-700" />}
                title="Communicate"
                desc="Present the result through clear insights, dashboards, and recommendations."
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
                px-5 py-4
              "
            >
              <p className="text-center font-medium text-slate-800">
                My goal is simple: make data easier to understand and easier to
                act on.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MiniCard({ icon, title, desc }) {
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
      <div className="flex items-start gap-3">
        <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
          {icon}
        </div>

        <div>
          <p className="font-semibold text-slate-900">{title}</p>

          <p className="mt-1 text-sm leading-relaxed text-slate-700">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

function ReadyCard({ badge, title, points, icon }) {
  const badgeStyle =
    badge === "Strong fit now"
      ? "bg-slate-900 text-white"
      : badge === "Growing"
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
              px-3 py-1
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
          <li key={index} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900/70" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TimelineItem({ title, desc }) {
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
      <p className="font-semibold text-slate-900">{title}</p>

      <p className="mt-1 text-sm leading-relaxed text-slate-700">{desc}</p>
    </li>
  );
}

function Pill({ children }) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        border border-slate-200
        bg-white/70
        px-3 py-1
        text-xs
        font-medium
        text-slate-800
      "
    >
      {children}
    </span>
  );
}

function RoleChip({ icon, text, tone = "strong" }) {
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
        px-3 py-1
        text-xs
        font-semibold
        ${className}
      `}
    >
      <span className="text-slate-700">{icon}</span>
      {text}
    </span>
  );
}

function SkillBar({ label, value }) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-slate-800">{label}</span>
        <span className="text-slate-500">{value}%</span>
      </div>

      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-200">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-slate-900/80"
        />
      </div>
    </div>
  );
}

function WorkflowStep({ number, icon, title, desc }) {
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
            h-11 w-11
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

        <h4 className="mt-4 font-semibold text-slate-900">{title}</h4>

        <p className="mt-2 text-sm leading-relaxed text-slate-700">{desc}</p>
      </div>
    </div>
  );
}