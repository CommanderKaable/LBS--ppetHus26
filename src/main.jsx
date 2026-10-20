import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";
import "./openhouse.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import ProgramShow from "./pages/ProgramShow.jsx";

// main.jsx kopplar React-appen till index.html.
// HashRouter (adresser som #/program/...) används för att GitHub Pages bara
// serverar statiska filer: vanliga adresser ger 404 vid omladdning eller QR-länk.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/program/:programmename" element={<ProgramShow />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
