import { Card, SectionHeading } from "./Card";
import { education } from "../data";

export function Education() {
  return (
    <Card id="education">
      <SectionHeading emoji="🎓">Education</SectionHeading>
      <h3 className="text-base font-semibold text-[var(--text-bright)]">{education.school}</h3>
      <p className="text-sm text-[var(--purple)] mt-0.5">
        {education.degree} <span className="text-[var(--text-dim)]">· {education.location}</span>
      </p>
      <p className="text-xs text-[var(--text-dim)] mt-1 mb-3">{education.period}</p>
      <p className="text-sm text-[var(--text)] leading-relaxed">
        <span className="font-semibold text-[var(--text-bright)]">Relevant coursework — </span>
        {education.coursework}
      </p>
    </Card>
  );
}
