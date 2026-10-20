// Bygger sökvägen till en fil i /public så att den fungerar på GitHub Pages,
// oavsett vad repot heter (sidan ligger då på användarnamn.github.io/reponamn/).
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
