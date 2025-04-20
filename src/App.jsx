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
    <div style={{ fontFamily: "sans-serif", padding: 20, maxWidth: 720, margin: "auto" }}>
      <h1>PrezCheck Demo</h1>

      <textarea
        rows={4}
        style={{ width: "100%", padding: 10, fontSize: 16 }}
        placeholder="Skriv en påstand her …"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleCheck}
        disabled={loading}
        style={{ marginTop: 10, padding: "8px 16px", fontSize: 16 }}
      >
        {loading ? "Sjekker …" : "Sjekk påstand"}
      </button>

      {result && (
        <div style={{ marginTop: 20, background: "#f4f4f4", padding: 20, borderRadius: 8 }}>
          <p><strong>Vurdering:</strong> {result.verdict}</p>
          <p><strong>Feil i påstanden:</strong></p>
          <ul>
            {result.inaccuracies.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p><strong>Rett versjon:</strong> {result.correct}</p>
          <p><strong>Kilder:</strong></p>
          <ul>
            {result.sources.map((src, index) => (
              <li key={index}>
                <a href={src.url} target="_blank" rel="noopener noreferrer">
                  {src.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
