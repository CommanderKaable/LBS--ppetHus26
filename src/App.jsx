import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Programs from "./components/Programs.jsx";
import Form from "./components/Form.jsx";
import OpenHouseInteractive from "./components/OpenHouseInteractive.jsx";
import ProgramQuiz from "./components/ProgramQuiz.jsx";
import SectionTransition from "./components/SectionTransition.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

// App.jsx bygger huvudsidan. Varje menyval visar en egen vy.
const sectionComponents = {
  quiz: ProgramQuiz,
  programs: Programs,
  form: Form,
  openhouse: OpenHouseInteractive
};

// Färg på den rullande bannern (sist i varje vy)
const bannerVariants = {
  brand: "lbs-green",
  quiz: "cyan",
  programs: "green",
  openhouse: "lbs-green",
  form: "yellow"
};

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const sectionFromPath = location.pathname.slice(1);
  const activeSection = sectionComponents[sectionFromPath] ? sectionFromPath : "brand";
  const [navigationVersion, setNavigationVersion] = useState(0);

  const SelectedSection = sectionComponents[activeSection];
  const handleNavigate = (section) => {
    navigate(section === "brand" ? "/" : `/${section}`);
    setNavigationVersion((version) => version + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const loadingClass = navigationVersion === 0
    ? ""
    : navigationVersion % 2 === 0
      ? "section-loading-b"
      : "section-loading-a";

  return (
    <div className="site">
      <Header onNavigate={handleNavigate} activeSection={activeSection} />
      <main className={`${activeSection === "brand" ? "" : loadingClass} ${SelectedSection ? "single-section-view" : ""}`}>
        {SelectedSection ? (
          <SelectedSection
            // Kartan startas om vid varje klick på kartknappen, så att den
            // alltid visar översiktskartan (även om man redan är inne på en planritning)
            key={activeSection === "openhouse" ? `openhouse-${navigationVersion}` : activeSection}
            onNavigate={handleNavigate}
          />
        ) : (
          <Hero onNavigate={handleNavigate} />
        )}
        {/* Rullande banner sist i varje vy, där sidfoten låg tidigare */}
        <SectionTransition variant={bannerVariants[activeSection]} />
      </main>
    </div>
  );
}
