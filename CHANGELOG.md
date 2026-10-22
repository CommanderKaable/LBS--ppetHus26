# Changelog – Öppet hus-appen

## 2.7
- Ny planritning för D-byggnadens första våning (`public/karta/D1.png`). D1 har inte längre gul fyllning.

## 2.6
- Knapparna på översiktskartan har färg per byggnad: A gul, Musikstudion cyan, C magenta,
  D grön, Fakiren vit, B orange. Färgen ställs in med `color` i `src/data/salar.js`.
- Bannern på startsidan och kartan är grön i stället för magenta. Den använder en ny variant,
  `transition-lbs-green`, eftersom originalets `transition-green` är vit.
- Luften under bannern, bakom bottenmenyn, är mörk i stället för vit.

## 2.5
- Den gula kartknappen (bottenmenyn på mobil, menyn på dator) leder alltid till översiktskartan,
  även när man redan är inne på en planritning.

## 2.4
- Nya texter för alla byggnader och våningar på kartan (`src/data/salar.js`)
- "STUDION" heter nu "MUSIKSTUDION"
- **B-byggnaden** har en egen sida med rubrik och text men ingen kartbild. Knappen öppnar den.
- `\n` i en salstext ger en ny rad. Det används i översiktstexten.

## 2.3
- Fix: startsidans bakgrundsfoto syntes inte på GitHub Pages. Adressen till fotot var relativ och
  tolkades från CSS-filen i `assets/`, så webbläsaren letade efter `assets/lbs-hero.jpg`.
  Nu används en fullständig adress.
- Våningsknapparna ("↑ Tredje våningen" i A och "↑ Andra våningen" i D) ligger ovanför
  planritningen i stället för ovanpå den, så att de inte täcker något på kartan.

## 2.2
- Startsidan har fotot från app 2 (`lbs bild 2.jpg`, förminskat till `public/lbs-hero.jpg`) som bakgrund.
  De flytande programikonerna ligger kvar ovanpå, och en mörk ton gör texten läsbar.
- Alla kartbilder är utbytta mot de nya i `public/karta/`. De gamla kartbilderna är borttagna.
- Översiktskartan (`Hela_skolan.png`) fyller bredden i stället för att krympas till en skärmhöjd.
  Knapparna är mindre och omplacerade efter den nya bilden.
- **Fakiren är tillbaka** med en knapp som öppnar `Fakiren.png`.
- **B-byggnaden** har en knapp, men den gör ingenting förrän en planritning finns. Fyll i `image` för B i `src/data/salar.js`.

## 2.1
- Den gula kartknappen i bottenmenyn ligger i linje med de andra. Cirkeln är 32 px i stället för 42 px och inte längre upplyft.
- Den rullande bannern ligger sist i varje vy i stället för fast ovanför menyn.

## 2.0

Sammanslagning av app 1 (LBS, karta och program) och app 2 (Öppet hus, quiz).
App 1 används som grund. Den grafiska profilen är oförändrad: färger, typsnitt, kort, knappar och animationer.

## Behållet (+)
- Sticky bottenmeny på mobil
- Skolans karta med planritningar
- "Anmäl dig / Elev för en dag" med länk till lbs.se, oförändrad
- Programkorten och programsidorna
- Quizet från app 2. Frågor, svar och poängräkning är oförändrade.

## Borttaget (−)
- **Om oss**, inklusive nyheter, galleri och nyhetsartiklar. Ersätts av quizet.
- **Kontakta oss** (sidfoten). Kontaktuppgifterna finns kvar i "Anmäl dig".
- ~~F-byggnaden (Fakiren) från kartan~~. Den lades tillbaka i 2.2.
- Programsidan: sektionerna **Projekt**, **Efter gymnasiet** och **Lokaler**, med salskartan
  och bannern "Här kan du hitta … klassrummet"
- Allt i app 2 utom quizet
- Vercel Analytics och Vercel-konfigurationen, som inte fungerar på GitHub Pages
- Oanvända paket: shadcn, base-ui, embla-carousel, cn, class-variance-authority

## Ändrat eller omdöpt (=)
- Programsidan: snabblänken **Innehåll** heter nu **Programfördjupning**
- Den rullande bannern "SKAPA. TESTA. UTVECKLA." ligger sist i varje vy, även på programsidorna,
  där sidfoten låg tidigare. Den har originalets storlek och täcker aldrig något innehåll.
- Bottenmenyn (mobil): `HITTA DITT PROGRAM · VÅRA PROGRAM · SKOLANS KARTA · ANMÄL DIG`.
  Kartknappen tar dubbel bredd (1 · 1 · 2 · 1) och har kvar sin gula cirkel, men ligger i linje
  med de andra knapparna: den är inte längre upplyft, och ikoner och texter ligger på samma höjd.
- Startsidans knappar: `HITTA DITT PROGRAM · SKOLANS KARTA · VÅRA PROGRAM · ELEV FÖR EN DAG`
- Programsidorna visar nu samma meny och banner som resten av appen. Tidigare hade de ingen meny.
- "Tillbaka till program" går till programöversikten i stället för webbläsarens bakåt. Det gör
  att knappen fungerar även när någon kommer direkt till sidan via en länk.
- Salstexterna ligger i `src/data/salar.js` och redigeras manuellt. Innehållet är orört.
- Adresser med `#` (HashRouter) och relativa sökvägar för GitHub Pages

## Nytt (+)
- **Vill du veta mer?** längst ner på varje programsida, med en länk till programmets sida på lbs.se
- Quizresultatet har knapparna **Läs mer om [program]**, som öppnar programsidan, och **Gör om quizet**
- Kraftigare zoom på programikonerna vid hover, och vid tryck på mobil
- GitHub Actions-workflow som bygger och publicerar automatiskt
