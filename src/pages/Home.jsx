import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  ArrowRight,
  Briefcase,
  MapPin,
  CalendarDays,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageBackground from "../Components/Pagebackground";

export default function Home() {
  const navigate = useNavigate();

  const fullText = useMemo(() => "I am Deeghau\nVidarshana", []);

  const [text, setText] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    if (i >= fullText.length) return;

    const timer = setTimeout(() => {
      setText(fullText.slice(0, i + 1));
      setI((previousIndex) => previousIndex + 1);
    }, 70);

    return () => clearTimeout(timer);
  }, [i, fullText]);

  const hasBreak = text.includes("\n");
  const [line1 = "", line2 = ""] = text.split("\n");

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden scroll-mt-28 pt-24 pb-16"
    >
      <PageBackground />

      <div
        className="
          relative z-10
          mx-auto
          grid max-w-6xl
          items-center
          gap-14
          px-6
          text-sm
          lg:grid-cols-2
        "
      >
        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          {/* Animated name */}
          <h1
            className="
              text-4xl
              font-extrabold
              leading-[1.05]
              text-slate-900
              sm:text-5xl
              lg:text-6xl
            "
          >
            <span className="block">
              {line1}

              {!hasBreak && (
                <span className="typingCursor" aria-hidden="true" />
              )}
            </span>

            <span className="mt-2 block">
              <span className="nameSoftGradient">{line2}</span>

              {hasBreak && (
                <span className="typingCursor" aria-hidden="true" />
              )}
            </span>
          </h1>

          {/* Introduction */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600">
            <span className="font-semibold text-slate-800">
              Third-year IT Undergraduate
            </span>{" "}
            focused on{" "}
            <span className="dsHighlight font-semibold">Data Science</span>,{" "}
            <span className="mlHighlight font-semibold">
              Machine Learning
            </span>
            , and building{" "}
            <span className="sysHighlight font-semibold">
              practical data-driven systems
            </span>
            . I also enjoy crafting clean, user-friendly web experiences when
            needed.
          </p>

          {/* Internship card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
              ease: "easeOut",
            }}
            className="
              mt-7
              max-w-xl
              overflow-hidden
              rounded-2xl
              border border-white/70
              bg-white/70
              shadow-[0_14px_35px_rgba(15,23,42,0.09)]
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_20px_45px_rgba(15,23,42,0.13)]
            "
          >
            <div className="flex flex-col sm:flex-row">
              {/* Internship information */}
              <div className="flex flex-1 items-start gap-4 p-5">
                <div
                  className="
                    flex
                    h-11 w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border border-blue-100
                    bg-blue-50
                    text-blue-600
                  "
                >
                  <Briefcase size={21} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.14em]
                        text-emerald-600
                      "
                    >
                      Currently Interning
                    </span>

                    <span
                      className="
                        flex
                        items-center
                        gap-1.5
                        text-xs
                        font-medium
                        text-emerald-600
                      "
                    >
                      <span
                        className="
                          h-2 w-2
                          animate-pulse
                          rounded-full
                          bg-emerald-500
                        "
                      />

                      Active
                    </span>
                  </div>

                  <h2 className="mt-1 text-base font-bold text-slate-900">
                    Data Analyst Intern
                  </h2>

                  <p className="mt-0.5 font-semibold text-blue-700">
                    Michelin Lanka
                  </p>

                  <div
                    className="
                      mt-3
                      flex
                      flex-wrap
                      gap-x-4
                      gap-y-2
                      text-xs
                      text-slate-500
                    "
                  >
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      Ekala, Ja-Ela
                    </span>

                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={14} />
                      June 2026 – Present
                    </span>
                  </div>
                </div>
              </div>

              {/* Michelin logo */}
              <div
                className="
                  flex
                  items-center
                  justify-center
                  border-t
                  border-slate-200/70
                  bg-[#07569c]
                  px-5 py-4
                  sm:w-[185px]
                  sm:border-l
                  sm:border-t-0
                "
              >
                <img
                  src="/Michelin.jpg"
                  alt="Michelin logo"
                  className="
                    h-20
                    w-full
                    max-w-[140px]
                    rounded-lg
                    object-cover
                    object-center
                  "
                />
              </div>
            </div>
          </motion.div>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => navigate("/projects")}
              className="
                btnLift
                group
                flex
                items-center
                gap-3
                rounded-xl
                bg-emerald-500
                px-6 py-2.5
                font-semibold
                text-white
                shadow-[0_12px_30px_rgba(16,185,129,0.14)]
                transition-all
                duration-300
                hover:bg-emerald-600
                hover:shadow-[0_16px_36px_rgba(16,185,129,0.18)]
                active:scale-[0.98]
              "
            >
              View Projects

              <ArrowRight
                size={18}
                className="
                  text-white/90
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>

            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="
                btnLift
                flex
                items-center
                gap-3
                rounded-xl
                border border-indigo-500/25
                bg-white/70
                px-6 py-2.5
                font-semibold
                text-indigo-700
                shadow-[0_12px_28px_rgba(15,23,42,0.08)]
                transition-all
                duration-300
                hover:border-indigo-500/30
                hover:bg-indigo-50/50
                active:scale-[0.98]
              "
            >
              <Mail size={18} className="text-indigo-700" />
              Contact Me
            </button>

            <a
              href="/Deeghau_CV.pdf"
              download
              className="
                btnLift
                inline-flex
                items-center
                gap-3
                rounded-xl
                border border-rose-400/30
                bg-white/70
                px-6 py-2.5
                font-semibold
                text-rose-600
                shadow-[0_12px_28px_rgba(15,23,42,0.08)]
                transition-all
                duration-300
                hover:border-rose-400/35
                hover:bg-rose-50/50
                active:scale-[0.98]
              "
            >
              <Download size={18} className="text-rose-600" />
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="flex justify-center lg:justify-end"
        >
          <div
            className="
              h-[500px]
              w-full
              max-w-[420px]
              overflow-hidden
              rounded-3xl
              shadow-[0_22px_60px_rgba(15,23,42,0.16)]
              sm:h-[460px]
              sm:max-w-[520px]
              lg:h-[520px]
              lg:max-w-[420px]
            "
          >
            <img
              src="/contactPhoto.jpg"
              alt="Deeghau Vidarshana"
              className="h-full w-full object-cover object-[50%_35%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}