import { motion } from "framer-motion";
import PageBackground from "../Components/Pagebackground";
import {
  ClipboardCheck,
  Code2,
  Database,
  LineChart,
  Brain,
  Sparkles,
  Wrench,
  Users,
  MessageSquare,
  Target,
  CalendarCheck,
  Lightbulb,
  ShieldCheck,
  Layers,       // ✅ for MERN
  Server,       // ✅ for PHP
  Braces,       // ✅ for Python/R style
} from "lucide-react";

// ✅ Only keep the two react-icons you actually need
import { SiKotlin, SiJavascript } from "react-icons/si";

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
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-sm font-medium tracking-wide text-slate-700">
            SKILLS • HONEST SNAPSHOT
          </p>

          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Skills I am using for my{" "}
            <span className="text-indigo-700">Data Science</span> career
          </h1>

          <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
            This is an honest view of what I can do now and what I’m currently
            improving.
          </p>
        </motion.div>

        {/* CORE + LEVELS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Core Skills */}
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
                <ClipboardCheck className="h-5 w-5 text-blue-700" />
                Core Skills
              </h2>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SkillGroup
                  title="EDA + Visualization"
                  items={[
                    "Pandas",
                    "NumPy",
                    "Matplotlib / Plotly",
                    "Insights + storytelling",
                  ]}
                />
                <SkillGroup
                  title="Python + Projects"
                  items={[
                    "Clean code habits",
                    "APIs to datasets",
                    "Notebook → app",
                  ]}
                />
                <SkillGroup
                  title="ML Basics (Growing)"
                  items={[
                    "Baselines",
                    "Train / test thinking",
                    "Evaluation practice",
                  ]}
                />
                <SkillGroup
                  title="Data Engineering (Learning)"
                  items={[
                    "SQL improving",
                    "Pipelines mindset",
                    "Structured storage",
                  ]}
                />
              </div>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-white/65 p-5">
                <p className="font-semibold text-blue-700 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-blue-700" />
                  Note
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  Data Science is my main path. I’m building skills through real
                  projects and improving week by week.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skill Levels + Languages */}
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
                Skill levels (self-estimate)
              </h3>

              <div className="mt-4 space-y-3">
                <SkillBar label="EDA + Visualization" value={82} />
                <SkillBar label="Dashboards / Reporting" value={74} />
                <SkillBar label="Python + Data Handling" value={78} />
                <SkillBar label="ML Basics" value={66} />
                <SkillBar label="Data Engineering" value={58} />
              </div>

              {/* Languages */}
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white/65 p-4">
                <p className="text-sm font-semibold text-red-600 mb-3">
                  Languages & Stacks
                </p>

                <div className="flex flex-wrap gap-2">
                  {/* ✅ Your exact list with icons (no site crash) */}
                  <LangPill
                    icon={<Layers className="h-4 w-4 text-indigo-700" />}
                    label="MERN"
                  />
                  <LangPill
                    icon={<Server className="h-4 w-4 text-purple-700" />}
                    label="PHP"
                  />
                  <LangPill
                    icon={<Code2 className="h-4 w-4 text-amber-700" />}
                    label="Java"
                  />
                  <LangPill
                    icon={<Braces className="h-4 w-4 text-cyan-700" />}
                    label="Python"
                  />
                  <LangPill
                    icon={<Braces className="h-4 w-4 text-rose-700" />}
                    label="R"
                  />
                  <LangPill
                    icon={<Database className="h-4 w-4 text-emerald-700" />}
                    label="SQL"
                  />

                  {/* ✅ Added like your screenshot style */}
                  <LangPill
                    icon={<SiKotlin className="h-4 w-4 text-violet-700" />}
                    label="Kotlin"
                  />
                  <LangPill
                    icon={<SiJavascript className="h-4 w-4 text-yellow-500" />}
                    label="JavaScript"
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
              Soft skills
            </h2>

            <div className="mt-5 space-y-4">
              <SoftSkillLine
                icon={<ShieldCheck className="h-4 w-4 text-indigo-700" />}
                title="Leadership"
                desc="Guide teams, take ownership of decisions, and ensure goals are achieved."
              />
              <SoftSkillLine
                icon={<Users className="h-4 w-4 text-indigo-700" />}
                title="Team collaboration"
                desc="Support teammates, share progress, and stay aligned."
              />
              <SoftSkillLine
                icon={<MessageSquare className="h-4 w-4 text-cyan-700" />}
                title="Clear communication"
                desc="Explain work simply and clearly."
              />
              <SoftSkillLine
                icon={<Target className="h-4 w-4 text-fuchsia-700" />}
                title="Problem solving"
                desc="Break problems down and iterate."
              />
              <SoftSkillLine
                icon={<CalendarCheck className="h-4 w-4 text-amber-700" />}
                title="Time management"
                desc="Deliver work on deadlines."
              />
              <SoftSkillLine
                icon={<Lightbulb className="h-4 w-4 text-emerald-700" />}
                title="Fast learner"
                desc="Learn by building and experimenting."
              />
              <SoftSkillLine
                icon={<Brain className="h-4 w-4 text-slate-700" />}
                title="Ownership"
                desc="Take responsibility and finish tasks."
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Components ---------- */

function SkillGroup({ title, items }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/65 p-4">
      <p className="font-semibold text-slate-900">{title}</p>
      <ul className="mt-2 space-y-1 text-sm text-slate-700">
        {items.map((i, idx) => (
          <li key={idx}>• {i}</li>
        ))}
      </ul>
    </div>
  );
}

function SkillBar({ label, value }) {
  return (
    <div>
      <div className="flex justify-between text-sm">
        <span className="text-slate-800 font-medium">{label}</span>
        <span className="text-slate-500">{value}%</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-slate-200 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="h-full rounded-full bg-slate-900"
        />
      </div>
    </div>
  );
}

function LangPill({ icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium shadow-sm text-slate-800">
      <span className="text-lg leading-none">{icon}</span>
      {label}
    </div>
  );
}

function SoftSkillLine({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/65 p-4 flex gap-3">
      <div className="p-2 border border-slate-200 rounded-xl bg-white">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-slate-900">{title}</p>
        <p className="text-sm text-slate-700 mt-1">{desc}</p>
      </div>
    </div>
  );
}
