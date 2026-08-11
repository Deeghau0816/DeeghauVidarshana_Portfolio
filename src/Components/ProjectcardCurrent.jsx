import { motion } from "framer-motion";
import ProjectCard from "./Projectcard";

export default function ProjectCardCurrent({ project }) {
  return (
    <motion.div
      className="relative h-full"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
    >
      {/* Subtle breathing glow BEHIND the card */}
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
          opacity: [0.18, 0.5, 0.18],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Thin animated border */}
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
            "rgba(99,102,241,0.85)",
            "rgba(139,92,246,0.40)",
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Actual card */}
      <motion.div
        className="relative h-full rounded-[1.6rem]"
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

        {/* Small CURRENT status beside GitHub */}
        <motion.div
          className="
            absolute
            bottom-[33px]
            right-5
            z-30
            flex
            items-center
            gap-1.5
            whitespace-nowrap
            rounded-full
            border
            border-violet-200
            bg-white/95
            px-2.5
            py-2
            text-[7.5px]
            font-bold
            tracking-[0.04em]
            text-violet-600
            shadow-sm
            backdrop-blur
          "
          animate={{
            opacity: [0.75, 1, 0.75],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Live dot */}
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>

          CURRENTLY IN DEVELOPMENT
        </motion.div>
      </motion.div>
    </motion.div>
  );
}