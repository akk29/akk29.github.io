import { useEffect, useState } from "react";
import { ArrowUpRight, BriefcaseBusiness, Code2, GitFork, GraduationCap, House, Menu, UserRound, Wrench, X } from "lucide-react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function navigateToSection(id: string) {
    const section = document.getElementById(id);
    if (!section) return;

    const stickyOffset = [".site-header", ".mobile-nav"]
      .map((selector) => document.querySelector<HTMLElement>(selector))
      .filter((element): element is HTMLElement => element !== null && getComputedStyle(element).display !== "none")
      .reduce((offset, element) => offset + element.offsetHeight, 16);

    window.scrollTo({
      top: section.getBoundingClientRect().top + window.scrollY - stickyOffset,
      behavior: "smooth",
    });
    window.history.pushState(null, "", `#${id}`);
    setActiveId(id);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [mobileMenuOpen]);

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
        <a className="brand" href="#profile" aria-label="Go to Akshay Kathpal's profile" onClick={(event) => { event.preventDefault(); navigateToSection("profile"); }}>
          <span className="brand-mark">AK</span>
          <span className="brand-copy"><strong>Akshay Kathpal</strong></span>
        </a>
        <a className="header-github" href="https://github.com/akk29" target="_blank" rel="noreferrer" aria-label="Open Akshay Kathpal's GitHub profile" title="GitHub">
          <GitFork size={17} aria-hidden="true" />
        </a>
        <button
          className="mobile-menu-trigger"
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? "Close navigation" : `Open navigation, current section: ${navigationItems.find((item) => item.id === activeId)?.label}`}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <span>{navigationItems.find((item) => item.id === activeId)?.label}</span>
          {mobileMenuOpen ? <X size={17} aria-hidden="true" /> : <Menu size={17} aria-hidden="true" />}
        </button>
      </header>
      {mobileMenuOpen && (
        <div className="mobile-menu" id="mobile-navigation">
          <button className="mobile-menu-backdrop" type="button" aria-label="Close navigation" onClick={() => setMobileMenuOpen(false)} />
          <nav className="mobile-menu-panel" aria-label="Page navigation">
            <p className="mobile-menu-label">Navigate to</p>
            {navigationItems.map(({ id, label, icon: Icon }) => (
              <a key={id} className={activeId === id ? "active" : ""} href={`#${id}`} onClick={(event) => { event.preventDefault(); navigateToSection(id); }}>
                <Icon size={16} aria-hidden="true" />
                <span>{label}</span>
                {activeId === id && <ArrowUpRight className="active-arrow" size={14} aria-hidden="true" />}
              </a>
            ))}
          </nav>
        </div>
      )}
      <aside className="page-outline" aria-label="On this page">
        <p className="outline-label">On this page</p>
        <div className="outline-links">
          {navigationItems.map(({ id, label, icon: Icon }) => (
            <a key={id} className={activeId === id ? "active" : ""} href={`#${id}`} onClick={(event) => { event.preventDefault(); navigateToSection(id); }}>
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