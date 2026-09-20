import { motion } from "framer-motion";
import PageBackground from "../Components/Pagebackground";

import {
  ClipboardCheck,
  Code2,
  Database,
  Brain,
  Sparkles,
  Users,
  MessageSquare,
  Target,
  CalendarCheck,
  Lightbulb,
  ShieldCheck,
  Layers,
  Server,
  Braces,
  BarChart3,
  Cloud,
  Workflow,
  BriefcaseBusiness,
  GitBranch,
  MonitorSmartphone,
  Cpu,
  Boxes,
  LockKeyhole,
} from "lucide-react";

import {
  SiKotlin,
  SiJavascript,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiReact,
  SiFastapi,
  SiTypescript,
  SiGit,
  SiGithub,
} from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen scroll-mt-28 pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <PageBackground />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-sm font-medium tracking-wide text-slate-700">
            SKILLS • CURRENT PROFILE
          </p>

          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Building across{" "}
            <span className="text-indigo-700">Data Science</span>
            {" & "}
            <span className="text-blue-700">Software Engineering</span>
          </h1>

          <p className="mt-4 max-w-4xl text-slate-700 leading-relaxed">
            My skill set combines Data Science, analytics, machine learning,
            full-stack software engineering, backend development, databases,
            cloud technologies, and real-world problem solving through
            professional, academic, and independent projects.
          </p>
        </motion.div>

        {/* CORE SKILLS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-md shadow-sm"
          >
            <div className="p-6 md:p-8">

              <h2 className="text-xl font-semibold text-blue-700 flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5" />
                Core Technical Skills
              </h2>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* DATA SCIENCE */}
                <SkillGroup
                  icon={<BarChart3 className="h-5 w-5 text-indigo-700" />}
                  title="Data Analytics & Visualization"
                  items={[
                    "Pandas & NumPy",
                    "Power BI",
                    "Matplotlib & Plotly",
                    "Data cleaning & transformation",
                    "Exploratory Data Analysis",
                    "KPI reporting & storytelling",
                  ]}
                />

                <SkillGroup
                  icon={<Brain className="h-5 w-5 text-fuchsia-700" />}
                  title="Machine Learning & Data Science"
                  items={[
                    "Supervised learning",
                    "Unsupervised learning",
                    "Classification & clustering",
                    "Model evaluation",
                    "Feature preparation",
                    "ML experimentation",
                  ]}
                />

                {/* SOFTWARE ENGINEERING */}
                <SkillGroup
                  icon={<Code2 className="h-5 w-5 text-blue-700" />}
                  title="Software Engineering"
                  items={[
                    "Object-Oriented Programming",
                    "Modular application design",
                    "Reusable components",
                    "Clean code practices",
                    "Debugging & testing",
                    "Git-based development workflows",
                  ]}
                />

                <SkillGroup
                  icon={<MonitorSmartphone className="h-5 w-5 text-cyan-700" />}
                  title="Frontend Development"
                  items={[
                    "React",
                    "JavaScript",
                    "TypeScript",
                    "Vite",
                    "Tailwind CSS",
                    "Responsive web interfaces",
                  ]}
                />

                <SkillGroup
                  icon={<Server className="h-5 w-5 text-purple-700" />}
                  title="Backend Development"
                  items={[
                    "Python & FastAPI",
                    "REST API development",
                    "SQLAlchemy",
                    "Alembic migrations",
                    "Request validation",
                    "Backend architecture",
                  ]}
                />

                <SkillGroup
                  icon={<LockKeyhole className="h-5 w-5 text-red-600" />}
                  title="Authentication & Application Security"
                  items={[
                    "JWT / session concepts",
                    "Password hashing",
                    "Protected API routes",
                    "Role-based access concepts",
                    "CORS configuration",
                    "Secure application workflows",
                  ]}
                />

                <SkillGroup
                  icon={<Database className="h-5 w-5 text-emerald-700" />}
                  title="Databases"
                  items={[
                    "PostgreSQL",
                    "MongoDB",
                    "SQL",
                    "Relational data modeling",
                    "Database relationships",
                    "CRUD operations",
                  ]}
                />

                <SkillGroup
                  icon={<Layers className="h-5 w-5 text-violet-700" />}
                  title="Full-Stack Development"
                  items={[
                    "React + FastAPI",
                    "MERN Stack",
                    "Frontend / backend integration",
                    "API consumption",
                    "State-driven interfaces",
                    "End-to-end project development",
                  ]}
                />

                <SkillGroup
                  icon={<GitBranch className="h-5 w-5 text-orange-600" />}
                  title="Version Control & Collaboration"
                  items={[
                    "Git",
                    "GitHub",
                    "Branches",
                    "Merge workflows",
                    "Repository management",
                    "Team-based development",
                  ]}
                />

                <SkillGroup
                  icon={<MonitorSmartphone className="h-5 w-5 text-violet-700" />}
                  title="Mobile Development"
                  items={[
                    "Kotlin",
                    "Android development",
                    "Fragments",
                    "Navigation Component",
                    "SharedPreferences",
                    "WorkManager",
                  ]}
                />

                {/* CLOUD / DEVOPS */}
                <SkillGroup
                  icon={<Cloud className="h-5 w-5 text-cyan-700" />}
                  title="Cloud & Infrastructure"
                  items={[
                    "AWS fundamentals",
                    "EC2 concepts",
                    "Cloud databases",
                    "Storage concepts",
                    "Load balancing",
                    "Auto scaling fundamentals",
                  ]}
                />

                <SkillGroup
                  icon={<Boxes className="h-5 w-5 text-blue-600" />}
                  title="DevOps & Containerization"
                  items={[
                    "Docker",
                    "Docker Compose",
                    "Containerized development",
                    "Environment isolation",
                    "Deployment foundations",
                    "WSL 2",
                  ]}
                />

                {/* DATA WORKFLOW */}
                <SkillGroup
                  icon={<Workflow className="h-5 w-5 text-orange-600" />}
                  title="Automation & Data Workflows"
                  items={[
                    "Power Automate",
                    "Data refresh workflows",
                    "Excel-based pipelines",
                    "Data validation",
                    "Reporting automation",
                    "Workflow design",
                  ]}
                />

                <SkillGroup
                  icon={<Cpu className="h-5 w-5 text-teal-700" />}
                  title="Data Platforms & Engineering"
                  items={[
                    "Databricks exposure",
                    "Dataiku exposure",
                    "Data pipeline concepts",
                    "Structured storage",
                    "Cloud data concepts",
                    "Scalable processing fundamentals",
                  ]}
                />

                {/* REAL EXPERIENCE */}
                <SkillGroup
                  icon={
                    <BriefcaseBusiness className="h-5 w-5 text-slate-700" />
                  }
                  title="Applied Project Experience"
                  items={[
                    "Business data analysis",
                    "Full-stack applications",
                    "REST API systems",
                    "ML & AI projects",
                    "Database-driven applications",
                    "Team project leadership",
                  ]}
                />

                <SkillGroup
                  icon={<Sparkles className="h-5 w-5 text-amber-600" />}
                  title="AI & Intelligent Systems"
                  items={[
                    "Machine Learning",
                    "Agentic AI concepts",
                    "Multi-agent systems",
                    "Decision support systems",
                    "Explainable AI interest",
                    "Responsible AI concepts",
                  ]}
                />
              </div>

              {/* CURRENT DIRECTION */}
              <div className="mt-8 rounded-2xl border border-slate-200 bg-white/65 p-5">
                <p className="font-semibold text-blue-700 flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  My Technical Direction
                </p>

                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  I am developing at the intersection of Data Science and
                  Software Engineering. My goal is not only to analyze data or
                  train models, but also to design the APIs, databases,
                  interfaces, and systems required to turn intelligent ideas
                  into complete real-world applications.
                </p>
              </div>

            </div>
          </motion.div>

          {/* SKILL LEVELS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-md shadow-sm"
          >
            <div className="p-6 md:p-8">

              <h3 className="text-lg font-semibold text-teal-700">
                Current Skill Levels
              </h3>

              <p className="mt-2 text-xs text-slate-500">
                Self-assessed from academic, professional, and project
                experience.
              </p>

              <div className="mt-5 space-y-4">

                <SkillBar
                  label="Data Analysis & Visualization"
                  value={88}
                />

                <SkillBar
                  label="Software Development"
                  value={84}
                />

                <SkillBar
                  label="Python"
                  value={84}
                />

                <SkillBar
                  label="Frontend Development"
                  value={82}
                />

                <SkillBar
                  label="Backend / REST APIs"
                  value={80}
                />

                <SkillBar
                  label="SQL & Databases"
                  value={78}
                />

                <SkillBar
                  label="Power BI / Reporting"
                  value={84}
                />

                <SkillBar
                  label="Machine Learning"
                  value={73}
                />

                <SkillBar
                  label="Cloud / DevOps"
                  value={68}
                />

              </div>

              {/* TECHNOLOGIES */}
              <div className="mt-7 rounded-2xl border border-slate-200 bg-white/65 p-4">

                <p className="text-sm font-semibold text-red-600 mb-3">
                  Languages & Technologies
                </p>

                <div className="flex flex-wrap gap-2">

                  <LangPill
                    icon={<SiPython className="h-4 w-4 text-blue-700" />}
                    label="Python"
                  />

                  <LangPill
                    icon={<SiJavascript className="h-4 w-4 text-yellow-500" />}
                    label="JavaScript"
                  />

                  <LangPill
                    icon={<SiTypescript className="h-4 w-4 text-blue-600" />}
                    label="TypeScript"
                  />

                  <LangPill
                    icon={<Code2 className="h-4 w-4 text-amber-700" />}
                    label="Java"
                  />

                  <LangPill
                    icon={<SiKotlin className="h-4 w-4 text-violet-700" />}
                    label="Kotlin"
                  />

                  <LangPill
                    icon={<Braces className="h-4 w-4 text-rose-700" />}
                    label="R"
                  />

                  <LangPill
                    icon={<Database className="h-4 w-4 text-emerald-700" />}
                    label="SQL"
                  />

                  <LangPill
                    icon={<SiReact className="h-4 w-4 text-cyan-700" />}
                    label="React"
                  />

                  <LangPill
                    icon={<SiFastapi className="h-4 w-4 text-teal-700" />}
                    label="FastAPI"
                  />

                  <LangPill
                    icon={<Layers className="h-4 w-4 text-indigo-700" />}
                    label="MERN"
                  />

                  <LangPill
                    icon={<SiPostgresql className="h-4 w-4 text-blue-700" />}
                    label="PostgreSQL"
                  />

                  <LangPill
                    icon={<SiMongodb className="h-4 w-4 text-green-700" />}
                    label="MongoDB"
                  />

                  <LangPill
                    icon={<SiDocker className="h-4 w-4 text-blue-600" />}
                    label="Docker"
                  />

                  <LangPill
                    icon={<Cloud className="h-4 w-4 text-orange-500" />}
                    label="AWS"
                  />

                  <LangPill
                    icon={<BarChart3 className="h-4 w-4 text-yellow-600" />}
                    label="Power BI"
                  />

                  <LangPill
                    icon={<SiGit className="h-4 w-4 text-orange-600" />}
                    label="Git"
                  />

                  <LangPill
                    icon={<SiGithub className="h-4 w-4 text-slate-800" />}
                    label="GitHub"
                  />

                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* SOFT SKILLS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-md shadow-sm"
        >
          <div className="p-6 md:p-8">

            <h2 className="text-xl font-semibold text-orange-600">
              Professional & Soft Skills
            </h2>

            <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

              <div className="space-y-4">

                <SoftSkillLine
                  icon={<ShieldCheck className="h-4 w-4 text-indigo-700" />}
                  title="Leadership & Ownership"
                  desc="Lead teams, coordinate responsibilities, make decisions, and take ownership of project outcomes."
                />

                <SoftSkillLine
                  icon={<Users className="h-4 w-4 text-indigo-700" />}
                  title="Team Collaboration"
                  desc="Work effectively across technical and creative teams while keeping communication and responsibilities aligned."
                />

                <SoftSkillLine
                  icon={<MessageSquare className="h-4 w-4 text-cyan-700" />}
                  title="Communication & Presentation"
                  desc="Communicate ideas clearly through presentations, discussions, technical explanations, and public speaking."
                />

                <SoftSkillLine
                  icon={<Target className="h-4 w-4 text-fuchsia-700" />}
                  title="Problem Solving"
                  desc="Analyze complex requirements, break problems into manageable components, and develop practical solutions."
                />

                <SoftSkillLine
                  icon={<CalendarCheck className="h-4 w-4 text-amber-700" />}
                  title="Project & Time Management"
                  desc="Balance internship work, university responsibilities, software projects, and deadlines."
                />

                <SoftSkillLine
                  icon={<Lightbulb className="h-4 w-4 text-emerald-700" />}
                  title="Continuous Learning"
                  desc="Adapt to new technologies quickly and strengthen skills through real development and experimentation."
                />

                <SoftSkillLine
                  icon={<Brain className="h-4 w-4 text-slate-700" />}
                  title="Creative Thinking"
                  desc="Combine technical problem solving with communication, media, design, and storytelling experience."
                />

              </div>

              {/* TALENT IMAGE */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm min-h-[570px]">

                <img
                  src="/talent.jpeg"
                  alt="Media, leadership and creative experience"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">

                  <div className="rounded-2xl bg-white/85 backdrop-blur-md border border-white/70 p-4 shadow-sm">

                    <p className="text-sm font-semibold text-slate-900">
                      Beyond Engineering
                    </p>

                    <p className="mt-1 text-xs text-slate-700 leading-relaxed">
                      Leadership, announcing, media production, photography,
                      event involvement, and creative work have strengthened my
                      communication, confidence, teamwork, and ability to
                      present ideas effectively.
                    </p>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* ========================================================= */
/* COMPONENTS */
/* ========================================================= */

function SkillGroup({ icon, title, items }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/65 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

      <div className="flex items-center gap-2">
        {icon}

        <p className="font-semibold text-slate-900">
          {title}
        </p>
      </div>

      <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
        {items.map((item, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-indigo-600">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

    </div>
  );
}

function SkillBar({ label, value }) {
  return (
    <div>

      <div className="flex justify-between text-sm">
        <span className="text-slate-800 font-medium">
          {label}
        </span>

        <span className="text-slate-500">
          {value}%
        </span>
      </div>

      <div className="mt-2 h-2 rounded-full bg-slate-200 overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-slate-900"
        />

      </div>

    </div>
  );
}

function LangPill({ icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium shadow-sm text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">

      <span className="text-lg leading-none">
        {icon}
      </span>

      {label}

    </div>
  );
}

function SoftSkillLine({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/65 p-4 flex gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

      <div className="p-2 border border-slate-200 rounded-xl bg-white h-fit">
        {icon}
      </div>

      <div>
        <p className="font-semibold text-slate-900">
          {title}
        </p>

        <p className="text-sm text-slate-700 mt-1 leading-relaxed">
          {desc}
        </p>
      </div>

    </div>
  );
}