// =====================================================================
//  SALAR OCH BYGGNADER – texterna som visas på skolans karta
// =====================================================================
//
//  Här kan du ändra rubriker och beskrivningar utan att röra någon annan kod.
//
//  • title       = rubriken som visas ovanför kartbilden
//  • description = texten under rubriken
//  • image       = bildfilen i mappen /public (ändra bara om du byter bild)
//
//  Tänk på:
//  • Behåll citattecknen " " runt texten och kommatecknet efter.
//  • Ändra INTE namnen till vänster (Karta, C, D, Dupp ...). Koden använder dem.
//  • Spara filen. GitHub bygger om sidan automatiskt efter en push.
// =====================================================================

const salar = {
    Karta: {
        image: "Karta_vit_utan_fakiren.png", // originalet med Fakiren: Karta_vit.png
        title: "SKOLANS KARTA",
        description: "Översikt över skolans byggnader. Välj en byggnad för att se dess planritning.",
    },
    C: {
        image: "C_pink_copy.png",
        title: "C-BYGGNADEN",
        description: "Planritning över C-byggnaden, foto & film ligger här.",
    },
    D: {
        image: "D1_och_D2_nr2.png",
        title: "D-BYGGNADEN · FÖRSTA VÅNINGEN",
        description: "Första våningens planritning. Eleverna har AI & webbutveckling och spelgrafik här. Välj andra våningen för att fortsätta upp i byggnaden.",
    },
    Dupp: {
        image: "Map_D3_Recovered_GD.png",
        title: "D-BYGGNADEN · ANDRA VÅNINGEN",
        description: "Planritning över D-byggnadens andra våning. Grafisk Desing våning",
    },
    Studion: {
        image: "Sudion_bla_textt.png",
        title: "STUDION",
        description: "Planritning över studion och dess lokaler för musik produktion.",
    },
    Aupp: {
        image: "Lobbyyyyy_copy.png",
        title: "A-BYGGNADEN · TREDJE VÅNINGEN",
        description: "Planritning över A-byggnadens tredje våning. Lobby, administration och elevhälsa ligger här. ",
    },
    Aner: {
        image: "AnerIMG.png",
        title: "A-BYGGNADEN · ANDRA VÅNINGEN",
        description: "Planritning över A-byggnadens andra våning, Teknik(spelutveckling och AI & Webbutveckling) i klassrum A7, Spelgrafik i A3 och i A5 finns filmer för visning för Fotofilm. Välj tredje våningen för att fortsätta.",
    },
};

// Knapparna på översiktskartan.
// label = texten på knappen, room = vilken planritning ovan som öppnas,
// x / y = position på kartbilden i procent (0–100) från vänster / uppifrån.
export const kartknappar = [
    { id: "button-c", label: "C BYGGNADEN", room: "C", x: 26, y: 45 },
    { id: "button-d", label: "D BYGGNADEN", room: "D", x: 23, y: 73 },
    { id: "button-studion", label: "Studion", room: "Studion", x: 66, y: 40 },
    { id: "button-aner", label: "A BYGGNADEN", room: "Aner", x: 30, y: 16 },
];

export default salar;
