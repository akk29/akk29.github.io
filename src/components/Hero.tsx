import { Card } from "./Card";
import { socialBadges } from "../data";
import profileImage from "../assets/profile.jpg";
import { FileText } from "lucide-react";

export function Hero() {
  return (
    <Card id="profile" className="text-center">
      <div className="mx-auto mt-5 mb-6 sm:mt-8 sm:mb-7 w-36 h-36 sm:w-48 sm:h-48 overflow-hidden rounded-full border-2 border-dashed border-[var(--gutter)] bg-[var(--bg-elevated)] flex items-center justify-center">
        <img src={profileImage} alt="Akshay Kathpal" className="h-full w-full object-cover object-[center_30%]" />
      </div>

      <p className="text-xl sm:text-2xl font-semibold text-[var(--text-bright)]">
        👋 Hi, I'm Akshay Kathpal
      </p>

      <p className="mt-2 flex justify-center text-sm sm:text-base text-[var(--text)]">
        <span className="inline-flex items-center gap-1.5">
          <span>🤖 Software Engineer · 📍 IND</span>
          <img
            src="https://img.icons8.com/?size=32&id=32584&format=png&color=000000"
            alt=""
            className="h-5 w-5 object-contain"
          />
        </span>
      </p>

      <div className="social-actions flex items-center justify-center gap-2.5 mt-5 flex-wrap px-2">
        {socialBadges.map((b) => (
          <a key={b.label} href={b.href} target="_blank" rel="noreferrer" className={`social-link-${b.label.toLowerCase()}`}>
            <img src={b.url} alt={b.label} className="h-7 sm:h-[26px] w-auto" />
          </a>
        ))}
        <a className="resume-link" href="/resume.pdf" download>
          <FileText size={15} aria-hidden="true" />
          <span>Resume</span>
        </a>
      </div>

      <p className="max-w-lg mx-auto mt-6 text-sm sm:text-[15px] text-[var(--text)] leading-relaxed">
        Software engineer passionate about simple, clean architecture and scalable systems.
      </p>
    </Card>
  );
}
