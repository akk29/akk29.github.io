import type { ReactNode } from "react";

export function Card({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`reveal scroll-mt-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-7 md:p-9 mb-6 md:mb-8 ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionHeading({ emoji, children }: { emoji: string; children: ReactNode }) {
  return (
    <h2 className="md-heading text-xl md:text-2xl flex items-center gap-2.5">
      <span aria-hidden>{emoji}</span>
      {children}
    </h2>
  );
}
