import React from 'react';
import './App.css';
import { PROJECTS, ACADEMIC_HISTORY } from './constants/data';

const Section = ({ id, title, children, centered = false }: { 
  id: string; 
  title: string; 
  children: React.ReactNode;
  centered?: boolean;
}) => (
  <section id={id} className={`section ${centered ? 'text-center' : ''}`}>
    <div className="container">
      <h2 className="section-title">{title}</h2>
      {children}
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="portfolio-wrapper">
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">Isaac.dev</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#modules">Modules</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        <header className="hero container">
          <h1>Building <span className="highlight">Efficient Systems</span></h1>
          <p className="hero-subtext">
            Computer Science Sophomore at NUS. Passionate about low-level optimization, 
            C++, and scalable data engineering.
          </p>
        </header>

        <Section id="about" title="About Me">
          <p className="max-w-prose">
            Description here
          </p>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid">
            {PROJECTS.map((project, index) => (
              <div key={index} className="card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="modules" title="Academic Roadmap">
          <div className="semester-timeline">
            {ACADEMIC_HISTORY.map((sem, idx) => (
              <div key={idx} className="semester-block">
                <h3 className="semester-term">{sem.term}</h3>
                <div className="module-grid">
                  {sem.modules.map((mod, mIdx) => (
                    <div key={mIdx} className="module-card">
                      <div className="module-info">
                        <span className="module-code">{mod.code}</span>
                        <span className="module-name">{mod.name}</span>
                      </div>
                      <span className="module-grade">{mod.grade}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Get In Touch" centered>
          <p>You can reach out to me at ong.izo.zh@gmail.com, or check out my other profile links.</p>
          <div className="contact-links">
            <a href="mailto:ong.izo.zh@gmail.com" className="contact-button">Email Me</a>
            <div className="social-row">
              <a href="https://github.com/izo-ong" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/isaac-ong-62605a305/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="footer container">
        <p>© 2026 Built with React and Vite | Isaac Ong</p>
      </footer>
    </div>
  );
};

export default App;