import { useEffect, useState } from "react";
import SectionTransition from "./SectionTransition.jsx";

// Den rullande bannern "SKAPA. TESTA. UTVECKLA." ligger fast precis ovanför
// bottenmenyn. Den glider fram när besökaren har scrollat ungefär en skärmhöjd
// och försvinner igen när man scrollar tillbaka upp.
const SHOW_AFTER = 0.8; // andel av skärmhöjden innan bannern visas

export default function ScrollBanner({ variant = "magenta" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      setVisible(window.scrollY > window.innerHeight * SHOW_AFTER);

      // Mät bottenmenyns höjd så att bannern hamnar precis ovanför den
      const nav = document.querySelector(".header .nav");
      const navBox = nav?.getBoundingClientRect();
      const isBottomNav = navBox && navBox.bottom >= window.innerHeight - 2 && navBox.top > window.innerHeight / 2;
      document.documentElement.style.setProperty(
        "--bottom-nav-h",
        isBottomNav ? `${Math.round(navBox.height)}px` : "0px"
      );
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className={`scroll-banner ${visible ? "is-visible" : ""}`} aria-hidden="true">
      <SectionTransition variant={variant} />
    </div>
  );
}
