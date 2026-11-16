import { motion } from "framer-motion";
import ProjectCard from "./Projectcard";

export default function ProjectCardCurrent({ project }) {
  return (
    <motion.div
      className="relative h-full"
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
      {/* ANIMATED GLOW BEHIND CARD */}
      {/* ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -inset-[3px]
          rounded-[1.65rem]

          bg-gradient-to-br
          from-violet-500
          via-indigo-400
          to-violet-500

          blur-[7px]
        "
        animate={{
          opacity: [0.16, 0.42, 0.16],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ====================================================== */}
      {/* ANIMATED BORDER */}
      {/* ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -inset-[2px]
          rounded-[1.65rem]
          border-2
          border-violet-400/60
        "
        animate={{
          borderColor: [
            "rgba(139,92,246,0.40)",
            "rgba(99,102,241,0.90)",
            "rgba(139,92,246,0.40)",
          ],
        }}
        transition={{
          duration: 2.8,
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
            text-violet-700

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