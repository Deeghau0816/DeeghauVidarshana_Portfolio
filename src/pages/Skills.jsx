// src/pages/Skills.jsx

import { motion } from "framer-motion";
import PageBackground from "../Components/Pagebackground";

import {
  Brain,
  Code2,
  Database,
  BarChart3,
  Cloud,
  Server,
  Workflow,
  Boxes,
  Sparkles,
  Layers,
  GitBranch,
  Users,
  MessageSquare,
  Target,
  Lightbulb,
  ShieldCheck,
  Table,
  Binary,
  Sigma,
  Cpu,
  Zap,
  Search,
  Bot,
  Coffee,
  RefreshCw,
  FileSpreadsheet,
  ArrowRightLeft,
  Waves,
  Network,
  HardDrive,
  PieChart,
  Globe,
  Palette,
  Wind,
  Rocket,
  Braces,
  Terminal,
  Send,
  BookOpen,
  FlaskConical,
  Share2,
  AppWindow,
  Repeat,
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

const cls = "h-4 w-4";

/* ========================================================= */
/* SKILL DATA                                                */
/* Order: Data Science / AI first, then Data Engineering     */
/* ========================================================= */

const categories = [
  {
    title: "Data Science, ML & AI",
    icon: <Brain className="h-5 w-5 text-fuchsia-700" />,
    featured: true,
    items: [
      { label: "Pandas", icon: <Table className={`${cls} text-indigo-700`} /> },
      { label: "NumPy", icon: <Binary className={`${cls} text-blue-700`} /> },
      { label: "Scikit-learn", icon: <Brain className={`${cls} text-orange-600`} /> },
      { label: "XGBoost", icon: <Zap className={`${cls} text-emerald-700`} /> },
      { label: "TensorFlow", icon: <Cpu className={`${cls} text-amber-600`} /> },
      { label: "SHAP", icon: <ShieldCheck className={`${cls} text-violet-700`} /> },
      { label: "LLMs", icon: <Sparkles className={`${cls} text-fuchsia-700`} /> },
      { label: "RAG", icon: <Search className={`${cls} text-cyan-700`} /> },
      { label: "Agentic AI", icon: <Bot className={`${cls} text-indigo-700`} /> },
      { label: "LangChain / LangGraph", icon: <Workflow className={`${cls} text-teal-700`} /> },
      { label: "Dataiku", icon: <Boxes className={`${cls} text-cyan-700`} /> },
    ],
  },
  {
    title: "BI, Data Engineering & Warehousing",
    icon: <BarChart3 className="h-5 w-5 text-indigo-700" />,
    featured: true,
    items: [
      { label: "Power BI", icon: <BarChart3 className={`${cls} text-yellow-600`} /> },
      { label: "Power Automate", icon: <RefreshCw className={`${cls} text-blue-700`} /> },
      { label: "Microsoft Excel", icon: <FileSpreadsheet className={`${cls} text-emerald-700`} /> },
      { label: "SSIS", icon: <ArrowRightLeft className={`${cls} text-red-600`} /> },
      { label: "SSAS", icon: <Layers className={`${cls} text-red-600`} /> },
      { label: "ETL / ELT", icon: <ArrowRightLeft className={`${cls} text-indigo-700`} /> },
      { label: "Data Warehousing", icon: <Database className={`${cls} text-blue-700`} /> },
      { label: "Data Lakes", icon: <Waves className={`${cls} text-cyan-700`} /> },
      { label: "Apache Hadoop", icon: <Network className={`${cls} text-amber-600`} /> },
      { label: "HDFS", icon: <HardDrive className={`${cls} text-slate-700`} /> },
      { label: "Data Pipelines", icon: <GitBranch className={`${cls} text-violet-700`} /> },
      { label: "Data Visualization", icon: <PieChart className={`${cls} text-fuchsia-700`} /> },
    ],
  },
  {
    title: "Languages",
    icon: <Code2 className="h-5 w-5 text-blue-700" />,
    items: [
      { label: "Python", icon: <SiPython className={`${cls} text-blue-700`} /> },
      { label: "SQL", icon: <Database className={`${cls} text-emerald-700`} /> },
      { label: "JavaScript", icon: <SiJavascript className={`${cls} text-yellow-500`} /> },
      { label: "TypeScript", icon: <SiTypescript className={`${cls} text-blue-600`} /> },
      { label: "Java", icon: <Coffee className={`${cls} text-amber-700`} /> },
      { label: "Kotlin", icon: <SiKotlin className={`${cls} text-violet-700`} /> },
      { label: "R", icon: <Sigma className={`${cls} text-rose-700`} /> },
    ],
  },
  {
    title: "Backend & Frontend",
    icon: <Server className="h-5 w-5 text-cyan-700" />,
    items: [
      { label: "React.js", icon: <SiReact className={`${cls} text-cyan-700`} /> },
      { label: "FastAPI", icon: <SiFastapi className={`${cls} text-teal-700`} /> },
      { label: "Node.js", icon: <Server className={`${cls} text-green-700`} /> },
      { label: "Express.js", icon: <Braces className={`${cls} text-slate-700`} /> },
      { label: "REST APIs", icon: <Globe className={`${cls} text-indigo-700`} /> },
      { label: "HTML5", icon: <Code2 className={`${cls} text-orange-600`} /> },
      { label: "CSS3", icon: <Palette className={`${cls} text-blue-600`} /> },
      { label: "Tailwind CSS", icon: <Wind className={`${cls} text-cyan-600`} /> },
      { label: "Vite", icon: <Rocket className={`${cls} text-violet-700`} /> },
    ],
  },
  {
    title: "Databases",
    icon: <Database className="h-5 w-5 text-emerald-700" />,
    items: [
      { label: "PostgreSQL", icon: <SiPostgresql className={`${cls} text-blue-700`} /> },
      { label: "MongoDB", icon: <SiMongodb className={`${cls} text-green-700`} /> },
      { label: "MySQL", icon: <Database className={`${cls} text-sky-700`} /> },
      { label: "Microsoft SQL Server", icon: <Server className={`${cls} text-red-600`} /> },
    ],
  },
  {
    title: "Tools, Cloud & DevOps",
    icon: <Cloud className="h-5 w-5 text-orange-600" />,
    items: [
      { label: "Git", icon: <SiGit className={`${cls} text-orange-600`} /> },
      { label: "GitHub", icon: <SiGithub className={`${cls} text-slate-800`} /> },
      { label: "Docker", icon: <SiDocker className={`${cls} text-blue-600`} /> },
      { label: "CI/CD", icon: <Repeat className={`${cls} text-emerald-700`} /> },
      { label: "AWS", icon: <Cloud className={`${cls} text-orange-500`} /> },
      { label: "Databricks", icon: <Layers className={`${cls} text-red-600`} /> },
      { label: "VS Code", icon: <Terminal className={`${cls} text-blue-700`} /> },
      { label: "Postman", icon: <Send className={`${cls} text-orange-600`} /> },
      { label: "Jupyter Notebook", icon: <BookOpen className={`${cls} text-orange-500`} /> },
      { label: "Google Colab", icon: <FlaskConical className={`${cls} text-amber-600`} /> },
      { label: "Microsoft SharePoint", icon: <Share2 className={`${cls} text-blue-700`} /> },
      { label: "Power Apps", icon: <AppWindow className={`${cls} text-purple-700`} /> },
    ],
  },
];

/* ========================================================= */
/* SELF-ASSESSED SKILL LEVELS                                */
/* ========================================================= */

const skillLevels = [
  { label: "Machine Learning", value: 73 },
  { label: "Data Analysis & Visualization", value: 88 },
  { label: "Power BI / Reporting", value: 84 },
  { label: "Python", value: 84 },
  { label: "SQL & Databases", value: 78 },
  { label: "Software Development", value: 84 },
  { label: "Frontend Development", value: 82 },
  { label: "Backend / REST APIs", value: 80 },
  { label: "Cloud / DevOps", value: 68 },
];

const featured = categories.filter((c) => c.featured);
// Pair similarly sized cards in each row so heights stay balanced
const otherOrder = ["Languages", "Databases", "Backend & Frontend", "Tools, Cloud & DevOps"];
const others = otherOrder.map((t) => categories.find((c) => c.title === t));

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

          <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
            The technologies I use across my internship, academic, and
            project work: AI and machine learning, data engineering and BI,
            and full-stack software.
          </p>
        </motion.div>

        {/* CORE FOCUS — two equal cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {featured.map((category, index) => (
            <CategoryCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* OTHER CATEGORIES — equal-height grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {others.map((category, index) => (
            <CategoryCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* SKILL LEVELS — full width, 3 columns of bars */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur-md"
        >
          <div className="h-1.5 w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-600" />

          <div className="p-6 md:p-8">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Current Skill Levels
              </h2>
              <p className="text-xs text-slate-500">
                Self-assessed from academic, professional, and project experience.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
              {skillLevels.map((skill) => (
                <SkillBar key={skill.label} label={skill.label} value={skill.value} />
              ))}
            </div>
          </div>
        </motion.div>

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

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">

              <SoftSkillLine
                icon={<ShieldCheck className="h-4 w-4 text-indigo-700" />}
                title="Leadership & Ownership"
                desc="Leading teams and owning project outcomes."
              />

              <SoftSkillLine
                icon={<Users className="h-4 w-4 text-indigo-700" />}
                title="Team Collaboration"
                desc="Working across technical and creative teams."
              />

              <SoftSkillLine
                icon={<MessageSquare className="h-4 w-4 text-cyan-700" />}
                title="Communication & Presentation"
                desc="Explaining technical ideas clearly."
              />

              <SoftSkillLine
                icon={<Target className="h-4 w-4 text-fuchsia-700" />}
                title="Problem Solving"
                desc="Breaking complex requirements into practical solutions."
              />

              <SoftSkillLine
                icon={<Lightbulb className="h-4 w-4 text-emerald-700" />}
                title="Continuous Learning"
                className="sm:col-span-2 lg:col-span-1"
                desc="Picking up new technologies through real projects."
              />

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

function CategoryCard({ category, index }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.06 }}
      className={`flex h-full flex-col overflow-hidden rounded-3xl border bg-white/70 shadow-sm backdrop-blur-md ${
        category.featured ? "border-indigo-100" : "border-slate-200"
      }`}
    >
      <div
        className={`h-1.5 w-full ${
          category.featured
            ? "bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-cyan-500"
            : "bg-slate-100"
        }`}
      />

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-center justify-between gap-3">
          <h2 className="flex items-center gap-3 text-base font-semibold text-slate-900 md:text-lg">
            <span className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
              {category.icon}
            </span>
            {category.title}
          </h2>

          {category.featured && (
            <span className="shrink-0 rounded-full bg-indigo-700 px-3 py-1 text-[11px] font-semibold text-white">
              Core Focus
            </span>
          )}
        </div>

        <div className="mt-5 flex flex-wrap content-start gap-2">
          {category.items.map((item) => (
            <TechPill key={item.label} icon={item.icon} label={item.label} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function TechPill({ icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-[13px] font-medium text-slate-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md">

      <span className="leading-none">
        {icon}
      </span>

      {label}

    </div>
  );
}

function SkillBar({ label, value }) {
  return (
    <div>

      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-slate-800">
          {label}
        </span>

        <span className="rounded-full bg-slate-900/90 px-2 py-0.5 text-[11px] font-semibold text-white">
          {value}%
        </span>
      </div>

      <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-cyan-500"
        />

      </div>

    </div>
  );
}

function SoftSkillLine({ icon, title, desc, className = "" }) {
  return (
    <div className={`${className} flex h-full flex-col rounded-2xl border border-slate-200 bg-white/65 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}>
      <div className="h-fit w-fit rounded-xl border border-slate-200 bg-white p-2">
        {icon}
      </div>

      <p className="mt-3 font-semibold leading-snug text-slate-900">{title}</p>

      <p className="mt-1 text-sm leading-relaxed text-slate-700">{desc}</p>
    </div>
  );
}