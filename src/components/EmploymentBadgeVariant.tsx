import { employment, stackBadgeUrl } from "../data";

export function EmploymentBadgeVariant() {
  return (
    <div className="space-y-8">
      {employment.map((job) => (
        <div key={job.company} className="pb-8 last:pb-0 border-b border-[var(--border)] last:border-0">
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 mb-1">
            <h3 className="text-base sm:text-lg font-semibold text-[var(--text-bright)]">{job.company}</h3>
            <span
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                job.tag === "B2B"
                  ? "bg-[var(--blue)]/15 text-[var(--blue)]"
                  : "bg-[var(--orange)]/15 text-[var(--orange)]"
              }`}
            >
              {job.tag}
            </span>
          </div>
          <p className="text-sm text-[var(--purple)] mb-3">
            {job.role} <span className="text-[var(--text-dim)]">· {job.location}</span>
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {job.stack.map((s) => (
              <img key={s} src={stackBadgeUrl(s)} alt={s} className="h-5 sm:h-6 w-auto" />
            ))}
          </div>
          <ul className="space-y-2.5">
            {job.bullets.map((b, i) => (
              <li
                key={i}
                className="text-sm text-[var(--text)] leading-relaxed pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-[var(--green)]"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
