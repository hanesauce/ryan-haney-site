"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#engagements", label: "Engagements" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
];

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sidebar">
      <div className="sb-identity">
        <div className="sb-avatar">RH</div>
        <div>
          <span className="sb-name font-heading">Ryan Haney</span>
          <span className="sb-title">Atlassian Solutions Leader</span>
        </div>
      </div>
      <nav>
        <ul className="sb-nav">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={activeSection === item.href.slice(1) ? "active" : ""}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export function MobileNav() {
  return (
    <div className="mobile-nav">
      <div className="mobile-avatar">RH</div>
      <nav style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase" as const,
              color: "var(--muted-foreground)",
              transition: "color 0.15s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.color = "var(--foreground)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.color = "var(--muted-foreground)")
            }
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
