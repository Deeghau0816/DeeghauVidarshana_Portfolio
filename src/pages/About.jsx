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
  Server,
  Cloud,
  Workflow,
  GitBranch,
  Boxes,
  MonitorSmartphone,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-16">

      {/* ================= BACKGROUND ================= */}

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

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6 }}
          className="mb-10"
        >

          <p className="text-sm font-medium tracking-wide text-slate-700">
            ABOUT • DATA SCIENCE • SOFTWARE ENGINEERING • AI
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">

            Building at the intersection of{" "}

            <span className="text-indigo-700">
              Data Science
            </span>

            ,{" "}

            <span className="text-blue-700">
              Software Engineering
            </span>

            {" & "}

            <span className="text-cyan-700">
              Intelligent Systems
            </span>

            .

          </h1>

          <p className="mt-4 max-w-4xl leading-relaxed text-slate-700">

            I’m an Information Technology undergraduate specializing in{" "}

            <span className="font-medium text-slate-900">
              Data Science
            </span>

            , with industry experience as a{" "}

            <span className="font-medium text-slate-900">
              Data Analyst Intern at Michelin Lanka
            </span>

            . My technical background spans both Data Science and Software
            Engineering, allowing me to work from raw data and analytical
            requirements all the way to complete software systems.

            <br />
            <br />

            On the data side, I work with analytics, Power BI, Python, SQL,
            machine learning, data workflows, databases, and data platforms.
            On the software engineering side, I build full-stack applications,
            backend services, REST APIs, database-driven systems, and modern
            responsive web applications.

            <br />
            <br />

            My development experience includes{" "}

            <span className="font-medium text-slate-900">
              React, JavaScript, TypeScript, Python, FastAPI, PostgreSQL,
              MongoDB, REST APIs, Git, GitHub, Docker, and cloud technologies
            </span>

            . I enjoy taking an idea from requirements and architecture through
            development, database integration, APIs, testing, and a usable
            final application.

            <br />
            <br />

            I’m especially interested in{" "}

            <span className="font-medium text-slate-900">
              Machine Learning, Explainable AI, Software Engineering, Data
              Engineering, Big Data, intelligent applications, and
              decision-support systems
            </span>

            . My long-term direction is to combine strong engineering with
            data and AI to build scalable systems that solve meaningful
            real-world problems.

          </p>

          {/* QUICK INFORMATION */}

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
              Data • Software • AI
            </span>

          </div>

          {/* ROLE CHIPS */}

          <div className="mt-5 flex flex-wrap gap-2">

            <RoleChip
              tone="strong"
              icon={<BarChart3 className="h-4 w-4" />}
              text="Data Analytics"
            />

            <RoleChip
              tone="strong"
              icon={<Brain className="h-4 w-4" />}
              text="Data Science & ML"
            />

            <RoleChip
              tone="strong"
              icon={<Code2 className="h-4 w-4" />}
              text="Software Engineering"
            />

            <RoleChip
              tone="strong"
              icon={<MonitorSmartphone className="h-4 w-4" />}
              text="Full-Stack Development"
            />

            <RoleChip
              tone="strong"
              icon={<Server className="h-4 w-4" />}
              text="Backend & APIs"
            />

            <RoleChip
              tone="strong"
              icon={<Database className="h-4 w-4" />}
              text="Databases"
            />

            <RoleChip
              tone="learning"
              icon={<Sparkles className="h-4 w-4" />}
              text="AI & Intelligent Systems"
            />

            <RoleChip
              tone="learning"
              icon={<Cloud className="h-4 w-4" />}
              text="Cloud & Data Engineering"
            />

          </div>

        </motion.div>

        {/* ================================================= */}
        {/* MAIN GRID */}
        {/* ================================================= */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* ================= LEFT SIDE ================= */}

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
                What I build
              </h2>

              <p className="mt-3 leading-relaxed text-slate-700">

                I enjoy working across the complete lifecycle of a technical
                solution—from understanding the problem and designing the
                system to handling data, building APIs, developing interfaces,
                connecting databases, analyzing results, and delivering a
                usable final product.

                <br />
                <br />

                This combination of Data Science and Software Engineering allows
                me to go beyond analysis alone. I can explore data, identify
                useful insights, experiment with intelligent approaches, and
                then engineer applications that make those capabilities
                accessible to real users.

              </p>

              {/* ================= FOCUS CARDS ================= */}

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">

                <MiniCard
                  icon={<BarChart3 className="h-5 w-5 text-indigo-700" />}
                  title="Data Analytics & BI"
                  desc="Exploratory analysis, KPI development, Power BI dashboards, reporting, data preparation, and turning business requirements into actionable insights."
                />

                <MiniCard
                  icon={<Code2 className="h-5 w-5 text-blue-700" />}
                  title="Software Engineering"
                  desc="Designing structured applications with reusable components, clean architecture, object-oriented thinking, maintainable code, debugging, and collaborative development practices."
                />

                <MiniCard
                  icon={<Server className="h-5 w-5 text-cyan-700" />}
                  title="Backend & API Development"
                  desc="Building REST APIs, backend services, database integrations, validation, authentication workflows, and application logic using technologies such as Python and FastAPI."
                />

                <MiniCard
                  icon={<MonitorSmartphone className="h-5 w-5 text-violet-700" />}
                  title="Full-Stack Development"
                  desc="Building responsive applications with modern frontend technologies and connecting them to backend APIs, databases, authentication, and business logic."
                />

                <MiniCard
                  icon={<Database className="h-5 w-5 text-emerald-700" />}
                  title="Databases & Data Engineering"
                  desc="Working with PostgreSQL, MongoDB, SQL, APIs, structured data, migrations, automated workflows, and scalable data-processing concepts."
                />

                <MiniCard
                  icon={<Brain className="h-5 w-5 text-fuchsia-700" />}
                  title="Machine Learning & AI"
                  desc="Developing and evaluating machine learning solutions while exploring Explainable AI, responsible AI, intelligent agents, and decision-support systems."
                />

              </div>

              {/* ================================================= */}
              {/* WHERE I CREATE VALUE */}
              {/* ================================================= */}

              <div className="mt-8">

                <h3 className="text-lg font-semibold text-slate-900">
                  Where I create value
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-700">

                  My strongest advantage is being able to work across multiple
                  layers of a solution instead of viewing data, software,
                  databases, and AI as completely separate areas.

                </p>

                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">

                  <ReadyCard
                    badge="Industry Experience"
                    title="Data Analytics & BI"
                    icon={<BarChart3 className="h-4 w-4 text-indigo-700" />}
                    points={[
                      "Exploratory analysis and data preparation",
                      "Power BI dashboards and reporting",
                      "Business KPI and trend analysis",
                      "Translating requirements into measurable insights",
                    ]}
                  />

                  <ReadyCard
                    badge="Project Experience"
                    title="Software Engineering"
                    icon={<Code2 className="h-4 w-4 text-blue-700" />}
                    points={[
                      "Full-stack application development",
                      "Frontend and backend architecture",
                      "REST APIs and database-driven systems",
                      "Git-based team and individual development",
                    ]}
                  />

                  <ReadyCard
                    badge="Growing Specialization"
                    title="Machine Learning & AI"
                    icon={<Brain className="h-4 w-4 text-fuchsia-700" />}
                    points={[
                      "Machine learning workflows",
                      "Classification and clustering",
                      "Model evaluation and experimentation",
                      "Explainable AI and intelligent systems",
                    ]}
                  />

                  <ReadyCard
                    badge="Growing Specialization"
                    title="Data & Cloud Engineering"
                    icon={<Database className="h-4 w-4 text-amber-700" />}
                    points={[
                      "SQL and structured databases",
                      "Automated data workflows",
                      "Data platforms and processing concepts",
                      "Cloud and scalable architecture foundations",
                    ]}
                  />

                </div>

              </div>

              {/* ================================================= */}
              {/* CURRENT PROGRESS */}
              {/* ================================================= */}

              <div className="mt-8">

                <h3 className="text-lg font-semibold text-slate-900">
                  What I’m doing now
                </h3>

                <ul className="mt-4 space-y-3">

                  <TimelineItem
                    title="Applying Data Analytics in industry"
                    desc="Working as a Data Analyst Intern at Michelin Lanka and gaining practical experience with business analytics, reporting, dashboards, automation, data workflows, and decision-support requirements."
                  />

                  <TimelineItem
                    title="Building production-style software projects"
                    desc="Developing full-stack applications with React, TypeScript, FastAPI, PostgreSQL, MongoDB, REST APIs, authentication, Git, and modern software engineering practices."
                  />

                  <TimelineItem
                    title="Advancing in Machine Learning & Data Science"
                    desc="Strengthening my understanding of machine learning, data mining, optimization, model evaluation, Explainable AI, and responsible data-driven decision making."
                  />

                  <TimelineItem
                    title="Strengthening backend & database engineering"
                    desc="Building APIs, database models, relationships, migrations, authentication flows, CRUD systems, and structured backend architectures."
                  />

                  <TimelineItem
                    title="Exploring Cloud, Docker & scalable systems"
                    desc="Developing practical foundations in Docker, containerization, AWS, cloud computing, distributed processing, Databricks, and scalable system architecture."
                  />

                  <TimelineItem
                    title="Connecting Software, Data & AI"
                    desc="Building projects where software engineering provides the foundation for analytics, machine learning, intelligent agents, and data-driven decision-support capabilities."
                  />

                </ul>

              </div>

            </div>

          </motion.div>

          {/* ================================================= */}
          {/* RIGHT COLUMN */}
          {/* ================================================= */}

          <div className="space-y-6">

            {/* EDUCATION */}

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

                  <Pill>Data Science</Pill>

                  <Pill>Software Engineering</Pill>

                  <Pill>Python</Pill>

                  <Pill>Machine Learning</Pill>

                  <Pill>Data Mining</Pill>

                  <Pill>SQL</Pill>

                  <Pill>Web Development</Pill>

                  <Pill>Databases</Pill>

                  <Pill>Cloud Computing</Pill>

                  <Pill>Big Data</Pill>

                </div>

              </div>

            </motion.div>

            {/* ================================================= */}
            {/* SKILLS SNAPSHOT */}
            {/* ================================================= */}

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

                  <SkillBar
                    label="Data Analytics & Visualization"
                    value={88}
                  />

                  <SkillBar
                    label="Software Development"
                    value={84}
                  />

                  <SkillBar
                    label="Power BI / BI Reporting"
                    value={84}
                  />

                  <SkillBar
                    label="Python & Data Handling"
                    value={84}
                  />

                  <SkillBar
                    label="Frontend Development"
                    value={82}
                  />

                  <SkillBar
                    label="Backend & REST APIs"
                    value={80}
                  />

                  <SkillBar
                    label="SQL & Databases"
                    value={78}
                  />

                  <SkillBar
                    label="Machine Learning"
                    value={73}
                  />

                  <SkillBar
                    label="Cloud / Data Engineering"
                    value={68}
                  />

                </div>

                <p className="mt-4 text-sm text-slate-700">

                  I strengthen these areas continuously through industry
                  experience, university work, and end-to-end software and data
                  projects.

                </p>

              </div>

            </motion.div>

            {/* ================================================= */}
            {/* TECH STACK */}
            {/* ================================================= */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.08 }}
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

                  <Layers3 className="h-5 w-5 text-slate-700" />

                  Current stack

                </h3>

                <div className="mt-4 flex flex-wrap gap-2">

                  <Pill>Python</Pill>

                  <Pill>React</Pill>

                  <Pill>JavaScript</Pill>

                  <Pill>TypeScript</Pill>

                  <Pill>FastAPI</Pill>

                  <Pill>PostgreSQL</Pill>

                  <Pill>MongoDB</Pill>

                  <Pill>SQL</Pill>

                  <Pill>Power BI</Pill>

                  <Pill>Git</Pill>

                  <Pill>GitHub</Pill>

                  <Pill>Docker</Pill>

                  <Pill>AWS</Pill>

                </div>

              </div>

            </motion.div>

            {/* ================================================= */}
            {/* ADVANTAGE */}
            {/* ================================================= */}

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
                      I can understand a business or user problem before jumping
                      directly into code or analysis.
                    </span>

                  </li>

                  <li className="flex gap-2">

                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />

                    <span>
                      I can move from frontend interfaces to APIs, backend
                      logic, databases, and complete application workflows.
                    </span>

                  </li>

                  <li className="flex gap-2">

                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-600" />

                    <span>
                      I can move from raw data to analysis, dashboards, machine
                      learning, APIs, and usable applications.
                    </span>

                  </li>

                  <li className="flex gap-2">

                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-600" />

                    <span>
                      I combine Data Science with Software Engineering instead
                      of treating them as completely separate disciplines.
                    </span>

                  </li>

                  <li className="flex gap-2">

                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />

                    <span>
                      Communication, presentation, leadership, and creative
                      experience help me explain technical ideas clearly and
                      work effectively with teams.
                    </span>

                  </li>

                </ul>

              </div>

            </motion.div>

          </div>

        </div>

        {/* ================================================= */}
        {/* HOW I CREATE VALUE */}
        {/* ================================================= */}

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

                From an idea to a complete solution

              </h3>

              <p className="mt-3 leading-relaxed text-slate-700">

                Whether I am working on a software system, analytical problem,
                or intelligent application, I approach it end to end:
                understand the requirement, design the solution, organize the
                data and architecture, build the system, and deliver something
                people can actually use.

              </p>

            </div>

            {/* WORKFLOW */}

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <WorkflowStep
                number="01"
                icon={
                  <ClipboardCheck className="h-5 w-5 text-indigo-700" />
                }
                title="Understand"
                desc="Understand the real problem, user needs, business requirements, constraints, and expected outcome."
              />

              <WorkflowStep
                number="02"
                icon={
                  <Layers3 className="h-5 w-5 text-blue-700" />
                }
                title="Design"
                desc="Plan the application architecture, data model, APIs, workflows, interfaces, and technical approach."
              />

              <WorkflowStep
                number="03"
                icon={
                  <Code2 className="h-5 w-5 text-fuchsia-700" />
                }
                title="Build"
                desc="Develop the frontend, backend, database, analytics, automation, or intelligent components required."
              />

              <WorkflowStep
                number="04"
                icon={
                  <Sparkles className="h-5 w-5 text-emerald-700" />
                }
                title="Deliver"
                desc="Integrate, test, improve, and transform the solution into something practical, understandable, and usable."
              />

            </div>

            {/* END QUOTE */}

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

                My goal is not simply to write code or analyze data — it is to
                engineer useful systems where software, data, and intelligence
                work together to solve real problems.

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

/* ========================================================= */
/* MINI CARD */
/* ========================================================= */

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

          <p className="font-semibold text-slate-900">
            {title}
          </p>

          <p className="mt-1 text-sm leading-relaxed text-slate-700">
            {desc}
          </p>

        </div>

      </div>

    </div>
  );
}

/* ========================================================= */
/* READY CARD */
/* ========================================================= */

function ReadyCard({ badge, title, points, icon }) {

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

/* ========================================================= */
/* TIMELINE ITEM */
/* ========================================================= */

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

      <p className="font-semibold text-slate-900">
        {title}
      </p>

      <p className="mt-1 text-sm leading-relaxed text-slate-700">
        {desc}
      </p>

    </li>
  );
}

/* ========================================================= */
/* PILL */
/* ========================================================= */

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

/* ========================================================= */
/* ROLE CHIP */
/* ========================================================= */

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

      <span className="text-slate-700">
        {icon}
      </span>

      {text}

    </span>
  );
}

/* ========================================================= */
/* SKILL BAR */
/* ========================================================= */

function SkillBar({ label, value }) {
  return (
    <div>

      <div className="flex items-center justify-between text-sm">

        <span className="font-medium text-slate-800">
          {label}
        </span>

        <span className="text-slate-500">
          {value}%
        </span>

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

/* ========================================================= */
/* WORKFLOW STEP */
/* ========================================================= */

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