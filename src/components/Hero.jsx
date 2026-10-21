import ArrowIcon from "./ArrowIcon.jsx";
import { asset } from "../lib/asset.js";

import { IoGameController } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { RiGame2Fill } from "react-icons/ri";
import { PiFilmSlateFill } from "react-icons/pi";
import { IoMusicalNotesSharp } from "react-icons/io5";
// Hero: startsidan med de fyra huvudknapparna.
// Fullständig adress till fotot. En relativ adress i en CSS-variabel tolkas
// relativt CSS-filen (som hamnar i assets/ vid bygget) och hittar då inte bilden.
const heroPhoto = new URL(asset("lbs-hero.jpg"), document.baseURI).href;

export default function Hero({ onNavigate }) {
  return (
    <section className="hero hero--photo" id="open-house" style={{ "--hero-photo": `url("${heroPhoto}")` }}>
      <div className="icons-floating">
        <IoGameController></IoGameController>
        <IoMusicalNotesSharp></IoMusicalNotesSharp>
        <FaCode></FaCode>
        <MdDesignServices></MdDesignServices>
        <RiGame2Fill></RiGame2Fill>
        <PiFilmSlateFill></PiFilmSlateFill>
        <IoGameController></IoGameController>
        <IoMusicalNotesSharp></IoMusicalNotesSharp>
        <FaCode></FaCode>
        <MdDesignServices></MdDesignServices>
        <RiGame2Fill></RiGame2Fill>
        <PiFilmSlateFill></PiFilmSlateFill>
        <IoGameController></IoGameController>
        <IoMusicalNotesSharp></IoMusicalNotesSharp>
        <FaCode></FaCode>
        <MdDesignServices></MdDesignServices>
        <RiGame2Fill></RiGame2Fill>
        <PiFilmSlateFill></PiFilmSlateFill>
        <IoGameController></IoGameController>
        <IoMusicalNotesSharp></IoMusicalNotesSharp>
        <FaCode></FaCode>
        <MdDesignServices></MdDesignServices>
        <RiGame2Fill></RiGame2Fill>
        <PiFilmSlateFill></PiFilmSlateFill>
        <IoGameController></IoGameController>
        <IoMusicalNotesSharp></IoMusicalNotesSharp>
        <FaCode></FaCode>
        <MdDesignServices></MdDesignServices>
        <RiGame2Fill></RiGame2Fill>
        <PiFilmSlateFill></PiFilmSlateFill>
        <IoGameController></IoGameController>
        <IoMusicalNotesSharp></IoMusicalNotesSharp>
        <FaCode></FaCode>
        <MdDesignServices></MdDesignServices>
        <RiGame2Fill></RiGame2Fill>
        <MdDesignServices></MdDesignServices>
        <PiFilmSlateFill></PiFilmSlateFill>
        <IoGameController></IoGameController>
        <IoMusicalNotesSharp></IoMusicalNotesSharp>
        <FaCode></FaCode>
        <MdDesignServices></MdDesignServices>
        <RiGame2Fill></RiGame2Fill>
        <PiFilmSlateFill></PiFilmSlateFill>
        <MdDesignServices></MdDesignServices>
        <MdDesignServices></MdDesignServices>
        <MdDesignServices></MdDesignServices>
        <MdDesignServices></MdDesignServices>
        <MdDesignServices></MdDesignServices>
        <MdDesignServices></MdDesignServices>
        <PiFilmSlateFill></PiFilmSlateFill>
      </div>

      <div className="hero-pixels hero-pixels-left" />
      <div className="hero-pixels hero-pixels-right" />
      <div className="hero-grid">
        <div className="hero-content">
          <p className="mono-label">[ KREATIVITET + TEKNIK + FRAMTID ]</p>
          <h1>LBS KREATIVA<br />GYMNASIET</h1>
          <p className="hero-copy">Gymnasieutbildningar för dig som vill skapa utifrån dina idéer och utvecklas inom dagens kreativa branscher.</p>
          <div className="hero-actions">
            <a className="button button-light" href="#/quiz" onClick={(event) => { event.preventDefault(); onNavigate("quiz"); }}>HITTA DITT PROGRAM <ArrowIcon size="sm" /></a>
            <a className="button button-light-yellow" href="#/openhouse" onClick={(event) => { event.preventDefault(); onNavigate("openhouse"); }}>SKOLANS KARTA <ArrowIcon size="sm" /></a>
            <a className="button button-light-green" href="#/programs" onClick={(event) => { event.preventDefault(); onNavigate("programs"); }}>VÅRA PROGRAM <ArrowIcon size="sm" /></a>
            <a className="button button-light-orange" href="#/form" onClick={(event) => { event.preventDefault(); onNavigate("form"); }}>ELEV FÖR EN DAG <ArrowIcon size="sm" /></a>
          </div>
        </div>

      </div>
      <div className="hero-bottom"></div>
    </section>
  );
}
