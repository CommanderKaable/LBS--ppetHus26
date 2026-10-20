# Changelog – Öppet hus-appen (version 2.0)

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
- **F-byggnaden (Fakiren)** från kartan, både knappen och byggnaden på översiktsbilden.
  Originalbilden `Karta_vit.png` finns kvar. Appen använder `Karta_vit_utan_fakiren.png`.
- Programsidan: sektionerna **Projekt**, **Efter gymnasiet** och **Lokaler**, med salskartan
  och bannern "Här kan du hitta … klassrummet"
- Allt i app 2 utom quizet
- Vercel Analytics och Vercel-konfigurationen, som inte fungerar på GitHub Pages
- Oanvända paket: shadcn, base-ui, embla-carousel, cn, class-variance-authority

## Ändrat eller omdöpt (=)
- Programsidan: snabblänken **Innehåll** heter nu **Programfördjupning**
- Den rullande bannern "SKAPA. TESTA. UTVECKLA." ligger nu fast ovanför bottenmenyn. Den glider
  fram när man har scrollat ungefär en skärmhöjd och försvinner när man scrollar upp igen.
- Bottenmenyn (mobil): `HITTA DITT PROGRAM · VÅRA PROGRAM · SKOLANS KARTA · ANMÄL DIG`.
  Kartknappen tar dubbel bredd (1 · 1 · 2 · 1).
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
