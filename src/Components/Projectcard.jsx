import { Github, ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  const {
    title,
    subtitle,
    period,
    description,
    tags = [],
    githubUrl,
    isUni,
    badgeImg,
  } = project;

  return (
    <article
      className="
        group relative
        flex flex-col
        w-full
        h-auto md:h-[560px]
        overflow-hidden

        rounded-3xl
        border border-slate-200/70
        bg-white/70
        backdrop-blur

        shadow-[0_18px_50px_rgba(2,6,23,0.06)]

        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_24px_70px_rgba(2,6,23,0.10)]
      "
    >
      {/* ====================================================== */}
      {/* BACKGROUND ACCENT GLOWS */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -top-16
          -right-16
          h-44
          w-44
          rounded-full
          bg-indigo-400/15
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-16
          h-44
          w-44
          rounded-full
          bg-sky-400/10
          blur-3xl
        "
      />

      {/* ====================================================== */}
      {/* TOP RIGHT — PERIOD + UNIVERSITY BADGE */}
      {/* ====================================================== */}

      <div className="absolute right-4 top-4 z-20 flex items-center gap-2">
        {period && (
          <span
            className="
              whitespace-nowrap
              rounded-full
              border border-slate-200
              bg-white/90
              px-3 py-1
              text-xs
              font-semibold
              text-slate-600
              shadow-sm
              backdrop-blur
            "
          >
            {period}
          </span>
        )}

        {isUni && badgeImg && (
          <div
            className="
              rounded-2xl
              border border-slate-200
              bg-white/90
              p-2
              shadow-sm
              backdrop-blur
            "
          >
            <img
              src={badgeImg}
              alt="University badge"
              className="h-7 w-7 object-contain"
              loading="lazy"
            />
          </div>
        )}
      </div>

      {/* ====================================================== */}
      {/* CARD CONTENT */}
      {/* ====================================================== */}

      <div className="relative z-10 flex h-full flex-1 flex-col p-7">

        {/* ==================================================== */}
        {/* TITLE */}
        {/* ==================================================== */}

        <div className="pr-20">
          <h3 className="text-xl font-extrabold text-slate-900">
            {title}
          </h3>

          {subtitle && (
            <p
              className="
                mt-1
                text-sm
                font-semibold
                bg-gradient-to-r
                from-indigo-700
                to-sky-700
                bg-clip-text
                text-transparent
              "
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* ==================================================== */}
        {/* DESCRIPTION */}
        {/* ==================================================== */}

        {description && (
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            {description}
          </p>
        )}

        {/* ==================================================== */}
        {/* TAGS */}
        {/* ==================================================== */}

        {tags.length > 0 && (
          <div className="mt-5 flex flex-wrap content-start gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-full
                  border border-slate-200/70
                  bg-slate-50/90
                  px-3 py-1
                  text-xs
                  font-semibold
                  text-slate-700
                "
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* ==================================================== */}
        {/* FOOTER */}
        {/* ==================================================== */}

        <div className="mt-auto pt-6">

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2

                rounded-2xl
                bg-indigo-700
                px-4 py-2.5

                text-sm
                font-semibold
                text-white

                shadow-[0_10px_25px_rgba(79,70,229,0.35)]

                transition-all
                duration-300

                hover:bg-indigo-800
                hover:shadow-[0_14px_35px_rgba(79,70,229,0.45)]
              "
            >
              <Github size={18} />

              GitHub

              <ArrowUpRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          )}

        </div>
      </div>
    </article>
  );
}