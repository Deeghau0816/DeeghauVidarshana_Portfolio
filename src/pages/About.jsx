// src/pages/About.jsx

import { motion } from "framer-motion";
import PageBackground from "../Components/Pagebackground";
import {
  GraduationCap,
  Brain,
  BarChart3,
  Database,
  Code2,
  Sparkles,
  MapPin,
  Layers3,
  ClipboardCheck,
  Briefcase,
  Server,
  Cloud,
  MonitorSmartphone,
  Bot,
  Search,
  ShieldCheck,
  TrendingUp,
  Factory,
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
        {/* HEADER */}
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

          <p className="mt-4 max-w-4xl leading-relaxed text-slate-700">
            I’m an Information Technology undergraduate specializing in{" "}
            <span className="font-medium text-slate-900">
              Data Science
            </span>
            , focused on building{" "}
            <span className="font-medium text-slate-900">
              AI and machine learning systems
            </span>
            {" "}that work on real data. I bring industry experience as a{" "}
            <span className="font-medium text-slate-900">
              Data Analyst Intern at Michelin Lanka
            </span>
            , where I build Power BI dashboards and Power Automate workflows
            and develop a predictive machine learning model for tyre defect
            analysis.

            <br />
            <br />

            On the AI side, I work with machine learning, predictive and
            time-series modelling, agentic and multi-agent systems,
            LLM-based applications with retrieval (RAG), and Explainable AI.
            On the data side, I work with analytics, Power BI, Power
            Automate, Python, SQL, data workflows, databases, and data
            platforms. On the software engineering side, I build full-stack
            applications, backend services, REST APIs, database-driven
            systems, and modern responsive web applications.

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
              Machine Learning, Agentic AI, Explainable AI, Software
              Engineering, Data Engineering, Big Data, intelligent
              applications, and decision-support systems
            </span>
            . My long-term direction is to combine strong engineering with
            data and AI to build scalable systems that solve meaningful
            real-world problems.
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
              icon={
                <Bot className="h-4 w-4" />
              }
              text="AI & Agentic Systems"
            />

            <RoleChip
              icon={
                <Brain className="h-4 w-4" />
              }
              text="Machine Learning"
            />

            <RoleChip
              icon={
                <ShieldCheck className="h-4 w-4" />
              }
              text="Explainable AI"
            />

            <RoleChip
              icon={
                <TrendingUp className="h-4 w-4" />
              }
              text="Forecasting & Predictive ML"
            />

            <RoleChip
              icon={
                <BarChart3 className="h-4 w-4" />
              }
              text="Data Analytics"
            />

            <RoleChip
              icon={
                <Code2 className="h-4 w-4" />
              }
              text="Software Engineering"
            />

            <RoleChip
              icon={
                <MonitorSmartphone className="h-4 w-4" />
              }
              text="Full-Stack Development"
            />

            <RoleChip
              icon={
                <Server className="h-4 w-4" />
              }
              text="Backend & APIs"
            />

            <RoleChip
              icon={
                <Database className="h-4 w-4" />
              }
              text="Databases"
            />

            <RoleChip
              tone="learning"
              icon={
                <Cloud className="h-4 w-4" />
              }
              text="Cloud & Data Engineering"
            />

          </div>

        </motion.div>

        {/* ======================================================= */}
        {/* AI & MACHINE LEARNING (FEATURED)                        */}
        {/* ======================================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.1,
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

            <div className="max-w-3xl">

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
                AI & Machine Learning
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
                AI that reasons, retrieves, explains, and works on real data
              </h2>

              <p className="mt-3 leading-relaxed text-slate-700">
                AI is shifting from models that only predict to systems that
                understand requests, retrieve knowledge, take action, and
                explain their decisions. My work follows that shift: agentic
                and LLM-based systems, predictive modelling on industrial and
                financial data, and Explainable AI that people can trust.
              </p>

            </div>

            {/* =================================================== */}
            {/* TREND TAGS                                          */}
            {/* =================================================== */}

            <div className="mt-5 flex flex-wrap gap-2">

              <Pill>Agentic AI</Pill>

              <Pill>Multi-Agent Systems</Pill>

              <Pill>LLMs & NLP</Pill>

              <Pill>RAG</Pill>

              <Pill>Explainable AI</Pill>

              <Pill>Responsible AI</Pill>

              <Pill>Human-in-the-Loop</Pill>

              <Pill>Predictive ML</Pill>

              <Pill>Time-Series Forecasting</Pill>

            </div>

            {/* =================================================== */}
            {/* AI FOCUS AREAS                                      */}
            {/* =================================================== */}

            <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

              <ReadyCard
                badge="Project Experience"
                title="Agentic & Multi-Agent AI"
                icon={
                  <Bot className="h-4 w-4 text-indigo-700" />
                }
                points={[
                  "Multi-agent workflows with clearly defined roles",
                  "Agent coordination over REST APIs",
                  "Human-approved escalation and decision logic",
                  "Designing agent frameworks inspired by human cognition",
                ]}
              />

              <ReadyCard
                badge="Project Experience"
                title="LLMs, NLP & RAG"
                icon={
                  <Search className="h-4 w-4 text-blue-700" />
                }
                points={[
                  "LLM-based intent and entity extraction",
                  "Retrieval-augmented generation over knowledge bases",
                  "Information retrieval and web analytics foundations",
                  "Structured self-learning in ML and LLMs",
                ]}
              />

              <ReadyCard
                badge="Growing Specialization"
                title="Explainable & Responsible AI"
                icon={
                  <ShieldCheck className="h-4 w-4 text-emerald-700" />
                }
                points={[
                  "Explainable risk indicators in decision systems",
                  "Human-in-the-loop, transparent decisions",
                  "Interpreting model behaviour beyond accuracy scores",
                  "Trustworthy, data-driven decision making",
                ]}
              />

              <ReadyCard
                badge="Industry Experience"
                title="Predictive ML in Industry"
                icon={
                  <Factory className="h-4 w-4 text-cyan-700" />
                }
                points={[
                  "Predictive model for tyre defect analysis",
                  "Preprocessing, feature engineering, and training",
                  "Evaluation with ROC AUC and feature importance",
                  "Model pipelines built in Dataiku",
                ]}
              />

              <ReadyCard
                badge="Project Experience"
                title="Time-Series & Forecasting"
                icon={
                  <TrendingUp className="h-4 w-4 text-violet-700" />
                }
                points={[
                  "Real-time ensemble stock forecasting (StockFlux)",
                  "Financial APIs and time-series analysis",
                  "Ensemble modelling and model comparison",
                  "New forecasting pipeline in design (Verity)",
                ]}
              />

              <ReadyCard
                badge="Project Experience"
                title="Machine Learning & Data Mining"
                icon={
                  <Brain className="h-4 w-4 text-fuchsia-700" />
                }
                points={[
                  "End-to-end data mining workflow: validation, EDA, modelling",
                  "Classification and clustering",
                  "Model evaluation, tuning, and experimentation",
                  "Prediction systems with backend and frontend",
                ]}
              />

            </div>

            {/* =================================================== */}
            {/* SELECTED AI WORK                                    */}
            {/* =================================================== */}

            <div className="mt-8">

              <h3 className="text-lg font-semibold text-slate-900">
                Selected AI & ML work
              </h3>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">

                <MiniCard
                  icon={
                    <Brain className="h-5 w-5 text-fuchsia-700" />
                  }
                  title="AI & Machine Learning"
                  desc="Building and evaluating machine learning models, agentic and LLM-based systems, and predictive solutions on real data, while exploring Explainable AI, responsible AI, and decision-support systems."
                />

                <MiniCard
                  icon={
                    <Bot className="h-5 w-5 text-indigo-700" />
                  }
                  title="BankGuard AI"
                  desc="A 4-agent banking system that helps customers investigate suspicious transactions: it understands the request, analyses risk with explainable indicators, retrieves banking knowledge, and escalates to a support ticket with customer approval. Team project built with Python, FastAPI, React, and MongoDB."
                />

                <MiniCard
                  icon={
                    <TrendingUp className="h-5 w-5 text-blue-700" />
                  }
                  title="StockFlux"
                  desc="Real-time ensemble machine learning stock forecasting using financial APIs and time-series analysis."
                />

                <MiniCard
                  icon={
                    <Factory className="h-5 w-5 text-cyan-700" />
                  }
                  title="Tyre Defect Prediction"
                  desc="A predictive machine learning model built during my Michelin Lanka internship to understand and predict tyre defects: preprocessing, feature engineering, training, and evaluation in Dataiku."
                />

                <MiniCard
                  icon={
                    <Sparkles className="h-5 w-5 text-violet-700" />
                  }
                  title="Verity"
                  desc="A new forecasting pipeline project, currently in design and setup."
                />

              </div>

            </div>

            {/* =================================================== */}
            {/* AI CLOSING LINE                                     */}
            {/* =================================================== */}

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

        {/* ======================================================= */}
        {/* MAIN GRID                                               */}
        {/* ======================================================= */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* ===================================================== */}
          {/* LEFT SIDE                                             */}
          {/* ===================================================== */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.6,
            }}
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

                This combination of Data Science and Software Engineering
                allows me to go beyond analysis alone. I can explore data,
                identify useful insights, experiment with intelligent
                approaches, and then engineer applications that make those
                capabilities accessible to real users.
              </p>

              {/* ================================================= */}
              {/* FOCUS CARDS                                       */}
              {/* ================================================= */}

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">

                <MiniCard
                  icon={
                    <BarChart3 className="h-5 w-5 text-indigo-700" />
                  }
                  title="Data Analytics & BI"
                  desc="Exploratory analysis, KPI development, Power BI dashboards, Power Automate workflows, reporting, data preparation, and turning business requirements into actionable insights."
                />

                <MiniCard
                  icon={
                    <Code2 className="h-5 w-5 text-blue-700" />
                  }
                  title="Software Engineering"
                  desc="Designing structured applications with reusable components, clean architecture, object-oriented thinking, maintainable code, debugging, and collaborative development practices."
                />

                <MiniCard
                  icon={
                    <Server className="h-5 w-5 text-cyan-700" />
                  }
                  title="Backend & API Development"
                  desc="Building REST APIs, backend services, database integrations, validation, authentication workflows, and application logic using technologies such as Python and FastAPI."
                />

                <MiniCard
                  icon={
                    <MonitorSmartphone className="h-5 w-5 text-violet-700" />
                  }
                  title="Full-Stack Development"
                  desc="Building responsive applications with modern frontend technologies and connecting them to backend APIs, databases, authentication, and business logic."
                />

                <MiniCard
                  icon={
                    <Database className="h-5 w-5 text-emerald-700" />
                  }
                  title="Databases & Data Engineering"
                  desc="Working with PostgreSQL, MongoDB, SQL, APIs, structured data, migrations, automated workflows, and scalable data-processing concepts."
                />

              </div>

              {/* ================================================= */}
              {/* WHERE I CREATE VALUE                              */}
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
                    badge="Growing Specialization"
                    title="AI & Machine Learning"
                    icon={
                      <Brain className="h-4 w-4 text-fuchsia-700" />
                    }
                    points={[
                      "Machine learning and predictive modelling workflows",
                      "Agentic and LLM-based systems",
                      "Model evaluation and experimentation",
                      "Explainable AI and intelligent systems",
                    ]}
                  />

                  <ReadyCard
                    badge="Industry Experience"
                    title="Data Analytics & BI"
                    icon={
                      <BarChart3 className="h-4 w-4 text-indigo-700" />
                    }
                    points={[
                      "Exploratory analysis and data preparation",
                      "Power BI dashboards, KPI and trend reporting across plants",
                      "Power Automate workflows and automated data refresh",
                      "Predictive ML for manufacturing quality analysis",
                    ]}
                  />

                  <ReadyCard
                    badge="Project Experience"
                    title="Software Engineering"
                    icon={
                      <Code2 className="h-4 w-4 text-blue-700" />
                    }
                    points={[
                      "Full-stack application development",
                      "Frontend and backend architecture",
                      "REST APIs and database-driven systems",
                      "Git-based team and individual development",
                    ]}
                  />

                  <ReadyCard
                    badge="Growing Specialization"
                    title="Data & Cloud Engineering"
                    icon={
                      <Database className="h-4 w-4 text-amber-700" />
                    }
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
              {/* CURRENT PROGRESS                                  */}
              {/* ================================================= */}

              <div className="mt-8">

                <h3 className="text-lg font-semibold text-slate-900">
                  What I’m doing now
                </h3>

                <ul className="mt-4 space-y-3">

                  <TimelineItem
                    title="Building agentic AI systems"
                    desc="Working on BankGuard AI as part of a four-person team: a multi-agent banking system combining LLM-based understanding, explainable risk analysis, retrieval over a knowledge base, and human-approved escalation, built with Python, FastAPI, React, and MongoDB."
                  />

                  <TimelineItem
                    title="Building a predictive model for tyre defect analysis"
                    desc="Developing and improving a machine learning model on manufacturing data in Dataiku, covering preprocessing, feature engineering, model training, and evaluation to understand and predict tyre defects."
                  />

                  <TimelineItem
                    title="Advancing in Machine Learning, LLMs & Data Science"
                    desc="Strengthening my understanding of machine learning, LLMs, data mining, optimization, model evaluation, Explainable AI, and responsible data-driven decision making."
                  />

                  <TimelineItem
                    title="Designing a new forecasting pipeline"
                    desc="Setting up Verity, a forecasting pipeline project that builds on my work with real-time ensemble forecasting in StockFlux."
                  />

                  <TimelineItem
                    title="Applying Data Analytics in industry"
                    desc="Completing my Data Analyst Intern role at Michelin Lanka (through December 2026), building Power BI dashboards, Power Automate workflows, and automated data syncing with Office Scripts and Power Query for multi-plant reporting."
                  />

                  <TimelineItem
                    title="Building production-style software projects"
                    desc="Developing full-stack applications with React, TypeScript, FastAPI, PostgreSQL, MongoDB, REST APIs, authentication, Git, and modern software engineering practices."
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

          {/* ===================================================== */}
          {/* RIGHT COLUMN                                          */}
          {/* ===================================================== */}

          <div className="space-y-6">

            {/* =================================================== */}
            {/* EDUCATION                                           */}
            {/* =================================================== */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.6,
              }}
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

                  <Pill>Agentic AI</Pill>

                  <Pill>LLMs & RAG</Pill>

                  <Pill>Explainable AI</Pill>

                  <Pill>Data Mining</Pill>

                  <Pill>SQL</Pill>

                  <Pill>Web Development</Pill>

                  <Pill>Databases</Pill>

                  <Pill>Cloud Computing</Pill>

                  <Pill>Big Data</Pill>

                </div>

              </div>
            </motion.div>

            {/* =================================================== */}
            {/* SKILLS SNAPSHOT                                     */}
            {/* =================================================== */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.6,
                delay: 0.05,
              }}
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
                  experience, university work, and end-to-end software and
                  data projects.
                </p>

              </div>
            </motion.div>

            {/* =================================================== */}
            {/* CURRENT STACK                                       */}
            {/* =================================================== */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.6,
                delay: 0.08,
              }}
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

                  <Pill>Power Automate</Pill>

                  <Pill>Dataiku</Pill>

                  <Pill>Git</Pill>

                  <Pill>GitHub</Pill>

                  <Pill>Docker</Pill>

                  <Pill>AWS</Pill>

                </div>

              </div>
            </motion.div>

            {/* =================================================== */}
            {/* MY ADVANTAGE                                        */}
            {/* =================================================== */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
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

                  <Bullet color="bg-indigo-600">
                    I can understand a business or user problem before jumping
                    directly into code or analysis.
                  </Bullet>

                  <Bullet color="bg-blue-600">
                    I can move from frontend interfaces to APIs, backend logic,
                    databases, and complete application workflows.
                  </Bullet>

                  <Bullet color="bg-cyan-600">
                    I can move from raw data to analysis, dashboards, machine
                    learning, agentic and LLM-based systems, APIs, and usable
                    applications.
                  </Bullet>

                  <Bullet color="bg-fuchsia-600">
                    I combine Data Science with Software Engineering instead of
                    treating them as completely separate disciplines.
                  </Bullet>

                  <Bullet color="bg-amber-600">
                    Communication, presentation, leadership, and creative
                    experience help me explain technical ideas clearly and
                    work effectively with teams.
                  </Bullet>

                </ul>

              </div>
            </motion.div>

          </div>

        </div>

        {/* ======================================================= */}
        {/* HOW I CREATE VALUE                                      */}
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

            {/* =================================================== */}
            {/* WORKFLOW                                            */}
            {/* =================================================== */}

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

            {/* =================================================== */}
            {/* FINAL MESSAGE                                       */}
            {/* =================================================== */}

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

/* ============================================================= */
/* MINI CARD                                                     */
/* ============================================================= */

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
/* PILL                                                          */
/* ============================================================= */

function Pill({
  children,
}) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        border border-slate-200
        bg-white/70
        px-3
        py-1
        text-xs
        font-medium
        text-slate-800
      "
    >
      {children}
    </span>
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
/* SKILL BAR                                                     */
/* ============================================================= */

function SkillBar({
  label,
  value,
}) {
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
          initial={{
            width: 0,
          }}
          whileInView={{
            width: `${value}%`,
          }}
          viewport={{
            once: true,
          }}
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

/* ============================================================= */
/* BULLET                                                        */
/* ============================================================= */

function Bullet({
  children,
  color = "bg-indigo-600",
}) {
  return (
    <li className="flex gap-2">

      <span
        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${color}`}
      />

      <span>
        {children}
      </span>

    </li>
  );
}