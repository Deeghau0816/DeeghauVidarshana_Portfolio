
import { motion } from "framer-motion";
import ProjectCard from "./Projectcard";

export default function ProjectCardCurrent({ project }) {
  return (
    <motion.div
      className="relative isolate h-full"
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
      }}
    >
      {/* ====================================================== */}
      {/* GREEN BORDER WITH MOVING LIGHT */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -inset-[2px]
          z-0
          overflow-hidden
          rounded-[1.65rem]
          bg-emerald-500/30
        "
      >
        {/* Rotating green light */}
        <motion.div
          className="absolute inset-[-100%]"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 265deg, rgba(16,185,129,0.25) 290deg, #22c55e 325deg, #bbf7d0 340deg, transparent 360deg)",
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Cover center to create thin border */}
        <div
          className="
            absolute
            inset-[2px]
            rounded-[1.52rem]
            bg-white
          "
        />
      </div>

      {/* ====================================================== */}
      {/* SOFT GREEN GLOW */}
      {/* ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -inset-[3px]
          -z-10
          rounded-[1.65rem]
          bg-emerald-500
          blur-[8px]
        "
        animate={{
          opacity: [0.08, 0.22, 0.08],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ====================================================== */}
      {/* ACTUAL CARD */}
      {/* ====================================================== */}

      <motion.div
        className="
          relative
          z-10
          h-full
          overflow-hidden
          rounded-[1.6rem]
        "
        whileHover={{
          y: -4,
          scale: 1.01,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
      >
        <ProjectCard project={project} />

        {/* ==================================================== */}
        {/* CURRENT PROJECT BADGE */}
        {/* ==================================================== */}

        <motion.div
          className="
            pointer-events-none
            absolute
            left-3
            top-[162px]
            z-30
            flex
            items-center
            gap-2
            whitespace-nowrap
            rounded-full
            border
            border-white/70
            bg-white/95
            px-3
            py-1.5
            text-[9px]
            font-bold
            uppercase
            tracking-[0.06em]
            text-emerald-700
            shadow-[0_6px_18px_rgba(15,23,42,0.12)]
            backdrop-blur-md
          "
          animate={{
            opacity: [0.82, 1, 0.82],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Live indicator */}
          <span className="relative flex h-2 w-2">
            <span
              className="
                absolute
                inline-flex
                h-full
                w-full
                animate-ping
                rounded-full
                bg-emerald-400
                opacity-60
              "
            />

            <span
              className="
                relative
                inline-flex
                h-2
                w-2
                rounded-full
                bg-emerald-500
              "
            />
          </span>

          Currently in Development
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
