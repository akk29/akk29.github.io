import { Card, SectionHeading } from "./Card";
import { openSource } from "../data";

export function Projects() {
  return (
    <Card id="projects">
      <SectionHeading emoji="📂">Open Source</SectionHeading>
      <div className="space-y-6">
        {openSource.map((p) => (
          <div key={p.name}>
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm sm:text-base font-semibold text-[var(--blue)] hover:underline"
            >
              {p.name}
            </a>
            <span className="text-[var(--text-dim)] text-sm"> — {p.title}</span>
            <p className="text-sm text-[var(--text)] leading-relaxed mt-1.5">{p.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
