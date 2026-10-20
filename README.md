# Öppet hus – LBS Kreativa Gymnasiet Lund

Interaktiv mobilapp för öppet hus. Besökarna öppnar den via QR-kod i sin egen mobil.
Den här appen slår ihop två tidigare appar:

- **App 1 (LBS):** skolans karta och programinformation. Den används som grund.
- **App 2 (Öppet hus):** programquizet "Hitta ditt program". Det är flyttat in hit som en React-komponent.

Allt är statiskt och ingen data skickas någonstans. GitHub Pages räcker därför som värd.

## Publicera på GitHub Pages (en gång)

1. Skapa ett nytt repo på GitHub och ladda upp allt innehåll i den här mappen, inklusive den dolda mappen `.github`.
2. Gå till repots **Settings → Pages**.
3. Under **Build and deployment → Source** väljer du **GitHub Actions**.
4. Gå till fliken **Actions** och vänta tills "Publicera på GitHub Pages" blir grön. Det tar ungefär en minut.
5. Sidan ligger nu på `https://ANVÄNDARNAMN.github.io/REPONAMN/`. Gör QR-koden till den adressen.

Varje gång du pushar till `main` byggs och publiceras sidan om automatiskt.

Reponamnet spelar ingen roll. Appen använder relativa sökvägar och adresser med `#`
(t.ex. `…/#/program/spelgrafik`). Därför fungerar omladdning och direktlänkar på GitHub Pages.

## Ändra texter

| Vad | Fil |
|---|---|
| Rubriker och texter för salar och byggnader på kartan | `src/data/salar.js` |
| Kartknapparnas placering | `src/data/salar.js` (`kartknappar`) |
| Quizfrågor, svar och resultattexter | `src/components/ProgramQuiz.jsx` |
| Programsidornas innehåll och länkar till lbs.se | `src/pages/ProgramShow.jsx` (`lbsUrl`) |
| Programkorten på "Våra program" | `src/components/Programs.jsx` |

## Köra lokalt

```bash
npm install
npm run dev
```

## Struktur

- `src/App.jsx` – vyerna Start, Hitta ditt program, Våra program, Skolans karta, Anmäl dig
- `src/pages/ProgramShow.jsx` – programsidorna
- `src/components/SectionTransition.jsx` – den rullande bannern sist i varje vy
- `src/styles.css` – originalets stilar (orörda)
- `src/openhouse.css` – alla nya eller ändrade stilar för den sammanslagna appen

Se `CHANGELOG.md` för vad som har ändrats.
