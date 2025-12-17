export default function Page() {
  return (
    <main>
      <div className="frame">
        <header>
          <nav>
            <div className="tag">cs@utu | third-year</div>
            <div className="nav-links">
              <a href="#about">about</a>
              <a href="#skills">skills</a>
              <a href="#projects">projects</a>
              <a href="#experience">experience</a>
              <a href="#education">education</a>
              <a href="#contact">contact</a>
            </div>
          </nav>
          <div>
            <h1>Tamzid Mahamud</h1>
            <p className="subtitle">
              Third-year Computer Science student at the University of Turku. I build reliable web backends, data-heavy dashboards, and
              small developer tools with a bias for clean architecture.
            </p>
            <div className="meta">
              <div className="meta-card">
                <span>Focus</span>
                <strong>AI &amp; Machine Learning</strong>
              </div>
              <div className="meta-card">
                <span>Current goal</span>
                <strong>Internship / junior developer role for 2025</strong>
              </div>
              <div className="meta-card">
                <span>Location</span>
                <strong>Turku, Finland · open to remote</strong>
              </div>
            </div>
          </div>
        </header>

        <section id="about">
          <h2>About</h2>
          <div className="card">
            <p>
              I like pairing computer science foundations (algorithms, data structures, systems) with practical shipping. Recently I have been
              refining API design, scaling a hobby analytics project, and mentoring peers in algorithms. I enjoy projects where correctness,
              observability, and developer experience intersect.
            </p>
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <div className="card-grid">
            <div className="card">
              <h3>Languages</h3>
              <p>Comfortable shipping in strongly typed and scripting environments.</p>
              <div className="pill-row">
                <span className="pill">TypeScript</span>
                <span className="pill">Python</span>
                <span className="pill">Java</span>
                <span className="pill">C</span>
                <span className="pill">SQL</span>
              </div>
            </div>
            <div className="card">
              <h3>Backend &amp; Infra</h3>
              <p>APIs, background jobs, and observability-first setups.</p>
              <div className="pill-row">
                <span className="pill">Node.js</span>
                <span className="pill">Express/Fastify</span>
                <span className="pill">PostgreSQL</span>
                <span className="pill">Docker</span>
                <span className="pill">Redis</span>
                <span className="pill">REST/GraphQL</span>
              </div>
            </div>
            <div className="card">
              <h3>Data &amp; Analytics</h3>
              <p>Turning raw data into dashboards and experiments.</p>
              <div className="pill-row">
                <span className="pill">Pandas</span>
                <span className="pill">NumPy</span>
                <span className="pill">Jupyter</span>
                <span className="pill">Plotly</span>
                <span className="pill">ETL pipelines</span>
              </div>
            </div>
            <div className="card">
              <h3>Collaboration</h3>
              <p>Docs-first approach and steady delivery in teams.</p>
              <div className="pill-row">
                <span className="pill">Git/GitHub</span>
                <span className="pill">Code Review</span>
                <span className="pill">Agile/Scrum</span>
                <span className="pill">Technical writing</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="card-grid">
            <div className="card">
              <h3>Project 1</h3>
            </div>
            <div className="card">
              <h3>Project 2</h3>
            </div>
            <div className="card">
              <h3>Project 3</h3>
            </div>
          </div>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <div className="timeline">
            <div className="timeline-item card">
              <h3>App Development</h3>
              <p>Bålder Quartet</p>
            </div>
          </div>
        </section>

        <section id="education">
          <h2>Education</h2>
          <div className="card">
            <h3>University of Turku</h3>
            <p>B.Sc. in Computer Science, expected 2026</p>
            <p>Relevant coursework: Algorithms, Operating Systems, Databases, Networks, Distributed Systems, Machine Learning.</p>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <div className="card contact">
            <a className="btn" href="mailto:timppa.suominen@example.com">
              Email
            </a>
            <a className="btn" href="https://github.com/yourhandle" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <div>
              <div className="code-block">
                <div>// drop me a line</div>
                <div>{"{"}</div>
                <div>  email: "timppa.suominen@example.com",</div>
                <div>  location: "Turku, FI",</div>
                <div>  interests: ["backend", "data", "devtools"]</div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer>Built with minimal JS, maximal intent.</footer>
    </main>
  );
}
