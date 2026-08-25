import { Card } from "./Card";
import { socialBadges } from "../data";

export function Hero() {
  return (
    <Card id="profile" className="text-center">
      <div className="mx-auto mb-5 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-dashed border-[var(--gutter)] bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--text-dim)] font-mono text-[10px] uppercase tracking-wide">
        photo.jpg
      </div>

      <p className="text-xl sm:text-2xl font-semibold text-[var(--text-bright)]">
        👋 Hi, I'm Akshay Kathpal
      </p>

      <p className="mt-2 text-sm sm:text-base text-[var(--text)]">
        <span>  🤖 Software Engineer · 📍 IND <img src="https://img.icons8.com/?size=32&id=32584&format=png&color=000000" alt="" /> </span>
      </p>

      <div className="flex items-center justify-center gap-2.5 mt-5 flex-wrap px-2">
        {socialBadges.map((b) => (
          <a key={b.label} href={b.href} target="_blank" rel="noreferrer">
            <img src={b.url} alt={b.label} className="h-7 sm:h-[26px] w-auto" />
          </a>
        ))}
      </div>

      <p className="max-w-lg mx-auto mt-6 text-sm sm:text-[15px] text-[var(--text)] leading-relaxed">
        Software engineer passionate about simple, clean architecture and scalable systems.
      </p>
    </Card>
  );
}
