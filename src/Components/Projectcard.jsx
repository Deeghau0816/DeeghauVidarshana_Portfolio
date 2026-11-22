
import { Github, ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  const {
    title,
    subtitle,
    period,
    description,
    tags = [],
    githubUrl,
    image,
    isUni,
    badgeImg,
  } = project;

  return (
    <article
      className="
        group relative
        flex h-full w-full flex-col
        overflow-hidden

        rounded-3xl
        border border-slate-200/70
        bg-white/75
        backdrop-blur-md

        shadow-[0_18px_50px_rgba(2,6,23,0.06)]

        transition-all duration-300
        hover:-translate-y-1.5
        hover:shadow-[0_24px_70px_rgba(2,6,23,0.12)]
      "
    >
      {/* ====================================================== */}
      {/* PROJECT IMAGE */}
      {/* ====================================================== */}

      <div
        className="
          relative
          h-[210px]
          w-full
          shrink-0
          overflow-hidden
          bg-slate-100
        "
      >
        {image ? (
          <img
            src={image}
            alt={`${title} project preview`}
            className="
              h-full
              w-full
              object-cover
              object-center

              transition-transform
              duration-500
              group-hover:scale-[1.04]
            "
            loading="lazy"
          />
        ) : (
          <div
            className="
              flex h-full w-full
              items-center justify-center

              bg-gradient-to-br
              from-indigo-50
              via-white
              to-sky-50
            "
          >
            <span className="text-sm font-medium text-slate-400">
              Project Preview
            </span>
          </div>
        )}

        {/* SOFT IMAGE OVERLAY */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-t
            from-black/20
            via-transparent
            to-transparent
          "
        />

        {/* ==================================================== */}
        {/* UNIVERSITY BADGE */}
        {/* ==================================================== */}

        {isUni && badgeImg && (
          <div
            className="
              absolute left-3 top-3
              flex h-11 w-11
              items-center justify-center

              rounded-2xl
              border border-white/60
              bg-white/90
              shadow-sm
              backdrop-blur-md
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

        {/* ==================================================== */}
        {/* PROJECT PERIOD */}
        {/* ==================================================== */}

        {period && (
          <span
            className="
              absolute right-3 top-3
              whitespace-nowrap
              rounded-full

              border border-white/60
              bg-white/90

              px-3 py-1
              text-[11px]
              font-semibold
              text-slate-700

              shadow-sm
              backdrop-blur-md
            "
          >
            {period}
          </span>
        )}
      </div>

      {/* ====================================================== */}
      {/* CARD CONTENT */}
      {/* ====================================================== */}

      <div
        className="
          relative
          flex flex-1 flex-col
          p-5
        "
      >
        {/* ==================================================== */}
        {/* TITLE AND SUBTITLE */}
        {/* ==================================================== */}

        <div className="min-h-[48px]">
          <h3
            className="
              text-lg
              font-extrabold
              leading-tight
              text-slate-900
            "
          >
            {title}
          </h3>

          {subtitle && (
            <p
              className="
                mt-1
                text-xs
                font-semibold
                leading-relaxed

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
        {/* FULL PROJECT DESCRIPTION */}
        {/* ==================================================== */}

        {description && (
          <div
            className="
              mt-3
              min-h-[120px]
              shrink-0
            "
          >
            <p
              className="
                text-sm
                leading-relaxed
                text-slate-600

                whitespace-normal
                break-words
              "
            >
              {description}
            </p>
          </div>
        )}

        {/* ==================================================== */}
        {/* PROJECT TECHNOLOGY TAGS */}
        {/* ==================================================== */}

        {tags.length > 0 && (
          <div
            className="
              mt-4
              flex flex-wrap
              content-start
              gap-1.5
            "
          >
            {tags.slice(0, 6).map((tag) => (
              <span
                key={tag}
                className="
                  h-fit
                  rounded-full

                  border border-slate-200/80
                  bg-slate-50/90

                  px-2.5 py-1

                  text-[10px]
                  font-semibold
                  text-slate-600
                "
              >
                {tag}
              </span>
            ))}

            {tags.length > 6 && (
              <span
                className="
                  h-fit
                  rounded-full

                  border border-slate-200/80
                  bg-slate-50/90

                  px-2.5 py-1

                  text-[10px]
                  font-semibold
                  text-slate-500
                "
              >
                +{tags.length - 6}
              </span>
            )}
          </div>
        )}

        {/* ==================================================== */}
        {/* GITHUB BUTTON */}
        {/* ==================================================== */}

        <div className="mt-auto pt-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2

                rounded-xl
                bg-indigo-700

                px-4 py-2.5

                text-xs
                font-semibold
                text-white

                shadow-[0_8px_20px_rgba(79,70,229,0.28)]

                transition-all
                duration-300

                hover:bg-indigo-800
                hover:shadow-[0_12px_28px_rgba(79,70,229,0.38)]
              "
            >
              <Github size={16} />

              GitHub

              <ArrowUpRight
                size={16}
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
