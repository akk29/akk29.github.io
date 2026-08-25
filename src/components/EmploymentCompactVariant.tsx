import { employment } from "../data";

export function EmploymentCompactVariant() {
  return (
    <div className="space-y-7">
      {employment.map((job) => (
        <div key={job.company}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-3">
            <h3 className="text-[15px] sm:text-base font-semibold text-[var(--text-bright)]">
              {job.company}
              <span className="font-normal text-[var(--text-dim)] text-sm"> — {job.location}</span>
            </h3>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-dim)]">
              {job.tag}
            </span>
          </div>
          <p className="text-sm italic text-[var(--text)] mt-0.5">{job.role}</p>
          <p className="text-xs text-[var(--text-dim)] mt-1 mb-2.5">{job.stack.join(", ")}</p>
          <ul className="space-y-1.5">
            {job.bullets.map((b, i) => (
              <li key={i} className="text-[13.5px] text-[var(--text)] leading-relaxed pl-3.5 relative before:content-['•'] before:absolute before:left-0 before:text-[var(--text-dim)]">
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
