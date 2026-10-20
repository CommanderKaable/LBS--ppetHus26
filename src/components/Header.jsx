import { asset } from "../lib/asset.js";
import { useEffect, useState } from "react";
import ArrowIcon from "./ArrowIcon.jsx";
import { ClipboardList, GraduationCap } from "lucide-react";

// Ikon för quizet "Hitta ditt program" (stjärnor, ritad som SVG)
function QuizIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 3.5 11.6 8.4 16.5 10 11.6 11.6 10 16.5 8.4 11.6 3.5 10 8.4 8.4Z" />
      <path d="M18 14v6M15 17h6" strokeLinecap="round" />
    </svg>
  );
}



// Header: logotyp + meny. På mobil blir menyn en sticky bottenmeny.

// Ordningen här styr menyn. Kartknappen (gul) läggs till sist i koden,
// men placeras som tredje knapp i bottenmenyn på mobil via openhouse.css.
const navItems = [
  ["Hitta ditt program", "#quiz", QuizIcon],
  ["Våra program", "#programs", GraduationCap],
  ["Anmäl dig", "#form", ClipboardList]
];

export default function Header({ onNavigate, activeSection }) {
  const [Transparent, setTransparent] = useState("transparent")
  const [scrollDirection, setScrollDirection] = useState("up");
  const [Width, setWidth] = useState("min(100% - 48px, var(--max))")
  const [Padding, setPadding] = useState("0% 0%")

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setTransparent("var(--dark-cyan)")
      setWidth("101%")
      setPadding("0% 10%")
      if (currentScrollY === 0) {
        setScrollDirection("up");
        previousScrollY = currentScrollY;
        setTransparent("transparent")
        setWidth("min(100% - 48px, var(--max))")
        setPadding("0% 0%")
        return;
      }

    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header ${activeSection === "openhouse" ? "header-openhouse-active" : ""}`}
      style={{
        top: scrollDirection === "down" ? "-50%" : "0%",
        backgroundColor: `${activeSection === "openhouse" ? "var(--dark-cyan)" : Transparent}`,
        width: `${activeSection === "openhouse" ? "100%" : Width}`,
        padding: `${activeSection === "openhouse" ? "0 10%" : Padding}`
      }}
    >
      <a
        className="brand"
        href="#/"
        id="brand"
        aria-label="LBS Kreativa Gymnasiet"
        onClick={(event) => {
          event.preventDefault();
          onNavigate("brand");
        }}
      >
        <span className="brand-box">
          <img src={asset("lbslogosvg.svg")} alt="LBS" />
        </span>

      </a>


      <nav className="nav" aria-label="Huvudmeny">
        {navItems.map(([label, href, Icon]) => (
          <a
            key={label}
            href={`#/${href.slice(1)}`}
            className={activeSection === href.slice(1) ? "is-active" : undefined}
            aria-current={activeSection === href.slice(1) ? "page" : undefined}
            onClick={(event) => {
              event.preventDefault();
              onNavigate(href.slice(1));
            }}
          >
            <Icon className="nav-icon" aria-hidden="true" />
            <span className="nav-label">{label}</span>
          </a>
        ))}
        <a
          href="#/openhouse"
          className="nav-cta"
          aria-current={activeSection === "openhouse" ? "page" : undefined}
          data-active={activeSection === "openhouse" || undefined}
          onClick={(event) => {
            event.preventDefault();
            onNavigate("openhouse");
          }}
        >
          <span className="nav-icon-wrap">
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="M9 3v15m6-12v15" stroke="currentColor" strokeWidth="1.8" />
              <path d="M12 8.5a2 2 0 0 1 4 0c0 1.5-2 3.5-2 3.5s-2-2-2-3.5Z" fill="currentColor" />
              <circle cx="14" cy="8.5" r=".65" fill="var(--black)" />
            </svg>
          </span>
          <span className="nav-label">SKOLANS KARTA</span>
          <span className="nav-cta-arrow"><ArrowIcon size="sm" /></span>
        </a>
      </nav>
    </header>
  );
}