import { useMemo, useState } from "react";
import "./App.css";

const PROJECTS = [
  {
    title: "Mini Portfolio (Vite + React + Docker)",
    description:
      "En lille portfolio-side med sektioner, projekter og kontaktformular. Kører i Docker Compose med hot reload.",
    tags: ["React", "Vite", "Docker"],
    link: "#projekter",
  },
  {
    title: "To-do app (øvelse)",
    description:
      "CRUD: tilføj, fuldfør og slet opgaver. Fokus på state og komponenter.",
    tags: ["useState", "Components"],
    link: "#projekter",
  },
  {
    title: "Dashboard (øvelse)",
    description:
      "Søgning og filtrering over data. Fokus på rendering og UI-logik.",
    tags: ["Filter", "UI"],
    link: "#projekter",
  },
];

function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

function ProjectCard({ title, description, tags, link }) {
  return (
    <a className="card" href={link}>
      <div className="cardTop">
        <h3>{title}</h3>
        <span className="arrow">↗</span>
      </div>
      <p className="muted">{description}</p>
      <div className="badges">
        {tags.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </a>
  );
}

export default function App() {
  const [name] = useState("Sarah Nymann"); // <- ret her
  const [role] = useState("Frontend-studerende"); // <- ret her
  const [email] = useState("sarah@example.com"); // <- ret her

  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const year = useMemo(() => new Date().getFullYear(), []);

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
    // Ingen backend her — vi simulerer “sendt”
    setTimeout(() => setSent(false), 2200);
    setMessage("");
  }

  return (
    <div className="page">
      <header className="header" id="top">
        <nav className="nav">
          <a className="brand" href="#top">
            {name.split(" ")[0]}
            <span className="dot">.</span>
          </a>
          <div className="navLinks">
            <a href="#om">Om</a>
            <a href="#projekter">Projekter</a>
            <a href="#kontakt">Kontakt</a>
          </div>
        </nav>

        <section className="hero">
          <div className="heroText">
            <h1>
              Hej, jeg er <span className="accent">{name}</span> 👋
            </h1>
            <p className="lead">
              {role}. Jeg bygger små webapps med React — og jeg kan køre dem i
              Docker.
            </p>

            <div className="ctaRow">
              <a className="btn primary" href="#projekter">
                Se projekter
              </a>
              <a className="btn" href="#kontakt">
                Kontakt mig
              </a>
            </div>

            <div className="quickFacts">
              <div className="fact">
                <div className="factLabel">Stack</div>
                <div className="factValue">React · Vite · Docker</div>
              </div>
              <div className="fact">
                <div className="factLabel">Email</div>
                <div className="factValue">{email}</div>
              </div>
            </div>
          </div>

          <div className="heroCard">
            <div className="avatar">{name.slice(0, 1)}</div>
            <div>
              <div className="heroName">{name}</div>
              <div className="muted">{role}</div>
            </div>
            <div className="divider" />
            <div className="miniList">
              <div className="miniRow">
                <span className="miniDot" />
                Hot reload i Docker Compose
              </div>
              <div className="miniRow">
                <span className="miniDot" />
                Komponenter + state
              </div>
              <div className="miniRow">
                <span className="miniDot" />
                Klar struktur (sections)
              </div>
            </div>
          </div>
        </section>
      </header>

      <main className="main">
        <section className="section" id="om">
          <h2>Om mig</h2>
          <p className="muted">
            Skriv 3–5 linjer om dig selv her. Fx hvad du læser, hvad du kan lide
            at bygge, og hvad du gerne vil blive bedre til.
          </p>

          <div className="grid3">
            <div className="infoCard">
              <h3>Det jeg øver lige nu</h3>
              <p className="muted">React state, komponenter, og styling.</p>
            </div>
            <div className="infoCard">
              <h3>Jeg kan allerede</h3>
              <p className="muted">HTML/CSS, JavaScript basics, React basics.</p>
            </div>
            <div className="infoCard">
              <h3>Mål</h3>
              <p className="muted">Bygge flere projekter og lære deployment.</p>
            </div>
          </div>
        </section>

        <section className="section" id="projekter">
          <div className="sectionTop">
            <h2>Projekter</h2>
            <p className="muted">Klik på et projekt for at se mere (demo-link kan tilføjes).</p>
          </div>

          <div className="cards">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>

        <section className="section" id="kontakt">
          <div className="sectionTop">
            <h2>Kontakt</h2>
            <p className="muted">
              Denne formular har ingen backend endnu — men den viser hvordan du
              håndterer input og submit.
            </p>
          </div>

          <form className="form" onSubmit={onSubmit}>
            <label>
              Besked
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Skriv en kort besked..."
                rows={5}
                required
              />
            </label>

            <div className="formRow">
              <button className="btn primary" type="submit">
                Send
              </button>
              {sent && <span className="sent">✅ Besked sendt (simuleret)</span>}
            </div>
          </form>
        </section>
      </main>

      <footer className="footer">
        <span className="muted">© {year} {name}</span>
        <a href="#top">Til toppen ↑</a>
      </footer>
    </div>
  );
}
