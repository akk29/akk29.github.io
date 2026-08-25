import { Card, SectionHeading } from "./Card";
import { techStack } from "../data";

export function TechStack() {
  return (
    <Card id="stack">
      <SectionHeading emoji="🛠️">Technology</SectionHeading>
      <div className="space-y-5">
        {techStack.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold text-[var(--text-bright)] mb-2.5">{group.category}</h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {group.items.map((item) => (
                <img key={item.name} src={item.url} alt={item.name} className="h-6 sm:h-7 w-auto" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
