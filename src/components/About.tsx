import { Card, SectionHeading } from "./Card";

const points = [
  { emoji: "🏗️", text: "I enjoy designing simple, maintainable software architectures." },
  { emoji: "⚙️", text: "Focused on backend systems, APIs, distributed systems and full-stack applications." },
  { emoji: "📈", text: "Interested in building systems that remain reliable as complexity and traffic grow." },
  { emoji: "🧰", text: "Prefer battle-tested tools, minimal unnecessary dependencies and pragmatic engineering." },
  { emoji: "🌱", text: "Continuously learning about system design, cloud infrastructure and developer tooling." },
];

export function About() {
  return (
    <Card id="about">
      <SectionHeading emoji="🧑‍💻">About Me</SectionHeading>
      <ul className="space-y-3">
        {points.map((p) => (
          <li key={p.text} className="flex gap-2.5 text-sm sm:text-[15px] text-[var(--text)] leading-relaxed">
            <span aria-hidden>{p.emoji}</span>
            <span>{p.text}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
