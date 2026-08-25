import { useEffect, useState } from "react";
import { ArrowUpRight, BriefcaseBusiness, Code2, GraduationCap, House, Mail, UserRound, Wrench } from "lucide-react";

const navigationItems = [
  { id: "profile", label: "Profile", icon: House },
  { id: "about", label: "About me", icon: UserRound },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness },
  { id: "stack", label: "Technology", icon: Wrench },
  { id: "projects", label: "Open source", icon: Code2 },
  { id: "education", label: "Education", icon: GraduationCap },
] as const;

export function Navigation() {
  const [activeId, setActiveId] = useState("profile");

  useEffect(() => {
    const sections = navigationItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver((entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visibleEntry) setActiveId(visibleEntry.target.id);
    }, { rootMargin: "-20% 0px -65%", threshold: [0, 0.25, 0.5, 1] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#profile" aria-label="Go to Akshay Kathpal's profile">
          <span className="brand-mark">AK</span>
          <span className="brand-copy"><strong>Akshay Kathpal</strong></span>
        </a>
        <a className="header-contact" href="mailto:akshatkathpal29@hotmail.com"><Mail size={15} aria-hidden="true" /></a>
      </header>
      <nav className="mobile-nav" aria-label="Page navigation">
        {navigationItems.map(({ id, label }) => <a key={id} className={activeId === id ? "active" : ""} href={`#${id}`}>{label}</a>)}
      </nav>
      <aside className="page-outline" aria-label="On this page">
        <p className="outline-label">On this page</p>
        <div className="outline-links">
          {navigationItems.map(({ id, label, icon: Icon }) => (
            <a key={id} className={activeId === id ? "active" : ""} href={`#${id}`} onClick={() => setActiveId(id)}>
              <Icon size={15} strokeWidth={activeId === id ? 2.25 : 1.8} aria-hidden="true" />
              <span>{label}</span>
              {activeId === id && <ArrowUpRight className="active-arrow" size={13} aria-hidden="true" />}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}