import { useState } from "react";
import { Card, SectionHeading } from "./Card";
import { EmploymentBadgeVariant } from "./EmploymentBadgeVariant";
import { EmploymentCompactVariant } from "./EmploymentCompactVariant";

export function Employment() {
  const [variant, setVariant] = useState<"badge" | "compact">("badge");

  return (
    <Card id="experience">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-1">
        <SectionHeading emoji="💼">
          <span className="mb-0">Employment History</span>
        </SectionHeading>
      </div>

      <div className="inline-flex rounded-lg border border-[var(--border-bright)] p-0.5 mb-6 -mt-2">
        <button
          onClick={() => setVariant("badge")}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
            variant === "badge"
              ? "bg-[var(--bg-elevated)] text-[var(--text-bright)]"
              : "text-[var(--text-dim)] hover:text-[var(--text)]"
          }`}
        >
          Badge style
        </button>
        <button
          onClick={() => setVariant("compact")}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
            variant === "compact"
              ? "bg-[var(--bg-elevated)] text-[var(--text-bright)]"
              : "text-[var(--text-dim)] hover:text-[var(--text)]"
          }`}
        >
          Compact style
        </button>
      </div>

      {variant === "badge" ? <EmploymentBadgeVariant /> : <EmploymentCompactVariant />}
    </Card>
  );
}
