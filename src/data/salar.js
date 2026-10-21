// =====================================================================
//  SALAR OCH BYGGNADER – texterna som visas på skolans karta
// =====================================================================
//
//  Här kan du ändra rubriker och beskrivningar utan att röra någon annan kod.
//
//  • title       = rubriken som visas ovanför kartbilden
//  • description = texten under rubriken
//  • image       = bildfilen i mappen /public/karta (ändra bara om du byter bild)
//
//  Tänk på:
//  • Behåll citattecknen " " runt texten och kommatecknet efter.
//  • Ändra INTE namnen till vänster (Karta, C, D, Dupp ...). Koden använder dem.
//  • Spara filen. GitHub bygger om sidan automatiskt efter en push.
// =====================================================================

const salar = {
    Karta: {
        image: "karta/Hela_skolan.png",
        title: "SKOLANS KARTA",
        description: "Översikt över skolans byggnader. Välj en byggnad för att se dess planritning.",
    },
    C: {
        image: "karta/C-huset.png",
        title: "C-BYGGNADEN",
        description: "Planritning över C-byggnaden. Här hittar foto & film intriktningen, samt vår foto, film och podd studio.",
    },
    D: {
        image: "karta/D1.png",
        title: "D-BYGGNADEN · FÖRSTA VÅNINGEN",
        description: "Första våningens planritning. Här finns vårt  AI & Webbutvecklings klassrum och bildsal. Välj andra våningen för att fortsätta upp i byggnaden.",
    },
    Dupp: {
        image: "karta/D3.png",
        title: "D-BYGGNADEN · ANDRA VÅNINGEN",
        description: "Planritning över D-byggnadens andra våning. Här finns Grafisk Desing",
    },
    F: {
        image: "karta/Fakiren.png",
        title: "F-BYGGNADEN · FAKIREN",
        description: "Planritning över F-byggnaden (Fakiren).",
    },
    // B-byggnaden: lägg planritningen i public/karta/ och skriv filnamnet nedan,
    // t.ex. image: "karta/B-huset.png". Så länge image är tom händer inget när man trycker på B-knappen.
    B: {
        image: "",
        title: "B-BYGGNADEN",
        description: "Planritning över B-byggnaden.",
    },
    Studion: {
        image: "karta/Musikstudion.png",
        title: "STUDION",
        description: "Översikt över musikstudion och dess lokaler för musik produktion.",
    },
    Aupp: {
        image: "karta/Ovre_vaning_A-huset.png",
        title: "A-BYGGNADEN · TREDJE VÅNINGEN",
        description: "Planritning över A-byggnadens tredje våning. Lobby, administration, elevhälsa och bilioteket ligger här. ",
    },
    Aner: {
        image: "karta/andra_vaning_A-huset.png",
        title: "A-BYGGNADEN · ANDRA VÅNINGEN",
        description: "Planritning över A-byggnadens andra våning. I klassrumet A7 finns Spelutveckling och AI & Webbutveckling i klassrumet A6, Spelgrafik finns i A3. I A5 är det filmvisning av Fotofilm programmet. Välj tredje våningen för att fortsätta.",
    },
};

// Knapparna på översiktskartan.
// label = texten på knappen, room = vilken planritning ovan som öppnas,
// x / y = position på kartbilden i procent (0–100) från vänster / uppifrån.
export const kartknappar = [
    { id: "button-aner", label: "A BYGGNADEN", room: "Aner", x: 25, y: 16 },
    { id: "button-b", label: "B BYGGNADEN", room: "B", x: 78, y: 16.5 },
    { id: "button-studion", label: "Studion", room: "Studion", x: 82, y: 31 },
    { id: "button-c", label: "C BYGGNADEN", room: "C", x: 25, y: 37 },
    { id: "button-d", label: "D BYGGNADEN", room: "D", x: 34, y: 52.5 },
    { id: "button-f", label: "FAKIREN", room: "F", x: 59, y: 89 },
];

export default salar;
