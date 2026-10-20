import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowIcon from "./ArrowIcon.jsx";

// ProgramQuiz: "Hitta ditt program" – tre frågor som ger ett förslag på program.
// Flyttat från app 2 (script.js) till React. Frågor, taggar och poängräkning är oförändrade.

const programData = [
    {
        name: "AI & WEBB",
        slug: "aiwebutveckling",
        keywords: ["webb", "ai", "programmera", "teknik", "digitalt"],
        description: "Du verkar gilla teknik, programmering och digitala lösningar."
    },
    {
        name: "FOTO OCH FILM",
        slug: "fotofilm",
        keywords: ["film", "foto", "kamera", "berättelser", "media"],
        description: "Du verkar gilla att berätta historier med bilder och rörligt material."
    },
    {
        name: "GRAFISK DESIGN",
        slug: "grafiskdesign",
        keywords: ["design", "rita", "form", "färger", "illustration"],
        description: "Du verkar gilla visuellt skapande, form och grafiska idéer."
    },
    {
        name: "MUSIKPRODUKTION",
        slug: "musikproduktion",
        keywords: ["musik", "ljud", "producera", "audio", "beats"],
        description: "Du verkar gilla musik, ljud och att skapa egna produktioner."
    },
    {
        name: "SPELGRAFIK",
        slug: "spelgrafik",
        keywords: ["grafik", "rita", "3d", "karaktärer", "världar"],
        description: "Du verkar gilla att skapa karaktärer, miljöer och visuella spelvärldar."
    },
    {
        name: "SPELUTVECKLING",
        slug: "spelutveckling",
        keywords: ["spel", "programmera", "teknik", "kod", "logik"],
        description: "Du verkar gilla spel, problemlösning och hur spel byggs."
    }
];

const quizQuestions = [
    {
        question: "Vad tycker du mest om?",
        answers: [
            { text: "Teknik och programmering", tags: ["webb", "programmera", "teknik"] },
            { text: "Foto, film och media", tags: ["film", "foto", "media"] },
            { text: "Design och visuellt skapande", tags: ["design", "rita", "form"] },
            { text: "Musik och ljud", tags: ["musik", "ljud", "audio"] },
            { text: "Spel och digitala världar", tags: ["spel", "3d", "världar"] }
        ]
    },
    {
        question: "Vad skulle du helst vilja skapa?",
        answers: [
            { text: "En webbplats eller AI-lösning", tags: ["webb", "ai", "digitalt"] },
            { text: "En film eller fotoserie", tags: ["film", "foto", "kamera"] },
            { text: "En logotyp eller illustration", tags: ["design", "illustration", "färger"] },
            { text: "En låt eller egna beats", tags: ["musik", "beats", "producera"] },
            { text: "Ett spel med grafik och kod", tags: ["spel", "kod", "karaktärer"] }
        ]
    },
    {
        question: "Vilket arbetssätt passar dig bäst?",
        answers: [
            { text: "Lösa problem med teknik", tags: ["teknik", "logik", "programmera"] },
            { text: "Planera och berätta en historia", tags: ["berättelser", "film", "media"] },
            { text: "Experimentera med utseende och form", tags: ["form", "design", "3d"] },
            { text: "Testa ljud och skapa musik", tags: ["ljud", "musik", "audio"] },
            { text: "Bygga en egen digital värld", tags: ["spel", "världar", "3d"] }
        ]
    }
];

// Samma poängräkning som i app 2: varje tagg som matchar ett programs nyckelord ger 1 poäng.
function getResult(answersSelected) {
    const scores = Object.fromEntries(programData.map((program) => [program.name, 0]));

    answersSelected.forEach((tags) => {
        programData.forEach((program) => {
            tags.forEach((tag) => {
                if (program.keywords.includes(tag)) scores[program.name]++;
            });
        });
    });

    return [...programData].sort((a, b) => scores[b.name] - scores[a.name])[0];
}

export default function ProgramQuiz({ onNavigate }) {
    const navigate = useNavigate();
    const [questionIndex, setQuestionIndex] = useState(0);
    const [answersSelected, setAnswersSelected] = useState([]);

    const isDone = questionIndex >= quizQuestions.length;
    const result = isDone ? getResult(answersSelected) : null;
    const question = quizQuestions[questionIndex];

    const choose = (answer) => {
        const next = [...answersSelected];
        next[questionIndex] = answer.tags;
        setAnswersSelected(next);
        setQuestionIndex(questionIndex + 1);
    };

    const goBack = () => {
        if (questionIndex > 0) {
            setQuestionIndex(questionIndex - 1);
        } else {
            onNavigate?.("brand");
        }
    };

    const restart = () => {
        setQuestionIndex(0);
        setAnswersSelected([]);
    };

    const openProgram = () => {
        navigate(`/program/${result.slug}`);
        window.scrollTo({ top: 0 });
    };

    return (
        <section className="quiz-section section-dark" id="quiz">
            <div className="program-quiz">
                <div className="quiz-label">[ HITTA DIN RIKTNING ]</div>
                <h3>VILKET PROGRAM<br /><span>PASSAR DIG?</span></h3>
                <p className="quiz-intro">
                    Svara på tre snabba frågor och få ett förslag
                    på vilket program som kan passa dina intressen.
                </p>

                <div className="quiz-progress" aria-live="polite">
                    {isDone ? "DITT RESULTAT" : `FRÅGA ${questionIndex + 1} / ${quizQuestions.length}`}
                </div>

                <div className="quiz-content" key={questionIndex}>
                    {isDone ? (
                        <div className="quiz-result">
                            <span className="result-label">DITT FÖRSLAG</span>
                            <h4>{result.name}</h4>
                            <p>{result.description}</p>
                            <p className="result-note">
                                Det här är bara ett förslag utifrån dina svar.
                                Utforska gärna alla program och se vad som känns rätt för dig.
                            </p>
                            <div className="quiz-result-actions">
                                <button className="button button-light-yellow" type="button" onClick={openProgram}>
                                    LÄS MER OM {result.name} <ArrowIcon size="sm" />
                                </button>
                                <button className="button quiz-restart" type="button" onClick={restart}>
                                    GÖR OM QUIZET ↻
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <h4>{question.question}</h4>
                            <div className="quiz-answers">
                                {question.answers.map((answer, index) => (
                                    <button
                                        key={answer.text}
                                        className="quiz-answer"
                                        type="button"
                                        onClick={() => choose(answer)}
                                    >
                                        <span>0{index + 1}</span>
                                        {answer.text}
                                        <strong aria-hidden="true">↗</strong>
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {!isDone && (
                    <div className="quiz-controls">
                        <button className="button quiz-back" type="button" onClick={goBack}>
                            ← {questionIndex === 0 ? "TILL STARTSIDAN" : "TILLBAKA"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
