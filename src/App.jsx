import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    setLoading(true);
    setTimeout(() => {
      setResult({
        verdict: "❌ Usann",
        inaccuracies: [
          "Andre verdenskrig startet ikke i 1942, men 1. september 1939.",
          "Det totale antallet drepte var 70–85 millioner, ikke 20."
        ],
        correct:
          "Andre verdenskrig startet 1. september 1939 og anslagsvis 70–85 millioner mennesker døde.",
        sources: [
          { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/World_War_II" },
          { name: "Britannica", url: "https://www.britannica.com/event/World-War-II" }
        ]
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <main style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>PrezCheck Demo</h1>
      <textarea
        rows={4}
        style={{ width: "100%" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Skriv en påstand her …"
      />
      <br />
      <button
        onClick={handleCheck}
        disabled={loading}
        style={{ marginTop: 8 }}
      >
        {loading ? "Sjekker …" : "Sjekk påstand"}
      </button>
      {result && (
        <div style={{ marginTop: 16, background: "#eee", padding: 12 }}>
          <p><strong>Vurdering:</strong> {result.verdict}</p>
          <ul>
            {result.inaccuracies.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
          <p><strong>Rett versjon:</strong> {result.correct}</p>
          <p><strong>Kilder:</strong></p>
          <ul>
            {result.sources.map((s, i) => (
              <li key={i}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
