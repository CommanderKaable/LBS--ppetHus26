// =====================================================================
//  SALAR OCH BYGGNADER – texterna som visas på skolans karta
// =====================================================================
//
//  Här kan du ändra rubriker och beskrivningar utan att röra någon annan kod.
//
//  • title       = rubriken som visas ovanför kartbilden
//  • description = texten under rubriken
//  • image       = bildfilen i mappen /public/karta (ändra bara om du byter bild).
//                  Tom ("") = sidan visar bara rubrik och text, utan karta.
//  • \n i en text = ny rad
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
        description: "Nedan är en översikt över skolans byggnader.\nVälj en byggnad för att se vilken av skolans inriktningar som presenteras där.",
    },
    C: {
        image: "karta/C-huset.png",
        title: "C-BYGGNADEN",
        description: "Här hittar ni inriktningen foto & film. Utöver att ta del av information kan du ta en titt på film-, foto-, och poddstudion.",
    },
    D: {
        image: "karta/D1.png",
        title: "D-BYGGNADEN · FÖRSTA VÅNINGEN",
        description: "Här finns vårt klassrum för AI & Webbutveckling och bildsalen. Välj andra våningen för att fortsätta upp i byggnaden.",
    },
    Dupp: {
        image: "karta/D3.png",
        title: "D-BYGGNADEN · ANDRA VÅNINGEN",
        description: "Här finns inriktningen Grafisk Design. Här pryds väggarna av elevernas fina arbeten.",
    },
    F: {
        image: "karta/Fakiren.png",
        title: "F-BYGGNADEN · FAKIREN",
        description: "Fakiren är belägen på andra sidan Bredgatan. Lokalerna används under skoltid och har fem klassrum för bland annat musikteori, programmering och animation.",
    },
    // B-byggnaden har ingen planritning ännu, så sidan visar bara rubrik och text.
    // Vill ni lägga till en bild: lägg den i public/karta/ och skriv t.ex. image: "karta/B-huset.png".
    B: {
        image: "",
        title: "B-BYGGNADEN",
        description: "I denna byggnad har eleverna naturkunskap, fysik och kemi.",
    },
    Studion: {
        image: "karta/Musikstudion.png",
        title: "MUSIKSTUDION",
        description: "Detta är musikstudion och dess lokaler för musikproduktion.",
    },
    Aupp: {
        image: "karta/Ovre_vaning_A-huset.png",
        title: "A-BYGGNADEN · TREDJE VÅNINGEN",
        description: "Välkommen till tredje våningen. Här finner ni skolans Lobby, administration, elevhälsa och biblioteket. Vill ni veta hur vi arbetar med elevhälsa och andra viktiga frågor har ni kommit helt rätt.",
    },
    Aner: {
        image: "karta/andra_vaning_A-huset.png",
        title: "A-BYGGNADEN · ANDRA VÅNINGEN",
        description: "Detta är A-byggnadens andra våning. I A7 hittar ni Spelutveckling, i A6 finner ni AI & Webbutveckling och Spelgrafik hittar ni i A3. Passa även på att kika in i A5 för att ta del av filmer skapade av våra elever som går inriktningen Foto & film. Välj tredje våningen för att ta reda på mer om skolan och hur vi arbetar.",
    },
};

// Knapparna på översiktskartan.
// label = texten på knappen, room = vilken planritning ovan som öppnas,
// x / y = position på kartbilden i procent (0–100) från vänster / uppifrån,
// color = knappens färg: "yellow", "cyan", "magenta", "green", "orange" eller "white".
export const kartknappar = [
    { id: "button-aner", label: "A BYGGNADEN", room: "Aner", x: 25, y: 16, color: "yellow" },
    { id: "button-b", label: "B BYGGNADEN", room: "B", x: 78, y: 16.5, color: "orange" },
    { id: "button-studion", label: "Studion", room: "Studion", x: 82, y: 31, color: "cyan" },
    { id: "button-c", label: "C BYGGNADEN", room: "C", x: 25, y: 37, color: "magenta" },
    { id: "button-d", label: "D BYGGNADEN", room: "D", x: 34, y: 52.5, color: "green" },
    { id: "button-f", label: "FAKIREN", room: "F", x: 59, y: 89, color: "white" },
];

export default salar;
