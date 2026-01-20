import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import Section from '../components/Section';
import ProjectRow from '../components/ProjectRow';
import { PROFILE_IMAGE } from '../constants/data';

const Home: React.FC = () => {
  const projects = useSelector((state: RootState) => state.portfolio.projects);

  return (
    <div id="top">
      <section id="about" className="section hero-about-section">
        <div className="container hero-about-row">
          <div className="hero-image-container">
            <img src={PROFILE_IMAGE} alt="Isaac Ong" className="profile-square" />
          </div>

          <div className="hero-text-container">
            <h1>Isaac <span className="highlight">Ong</span></h1>
            <p className="hero-description">
              I am a year 2 Computer Science student at the National University of Singapore and NUS College. 
              I focus on the intersection of high-performance computing and database systems, 
              leveraging my background in data workflows and programming methodology.
            </p>
          </div>
        </div>
      </section>

      <Section id="experience" title="Experience">
        <div className="experience-list">
          <div className="exp-item">
            <div className="exp-header">
              <strong>Teaching Assistant (CS1010X)</strong>
              <span>Jan 2025 – Jun 2025</span>
            </div>
            <p>Guided students through Programming Methodology at NUS.</p>
          </div>
          <div className="exp-item">
            <div className="exp-header">
              <strong>Republic of Singapore Air Force</strong>
            </div>
            <p>Developed data workflows using Excel Macros to manage information movement.</p>
          </div>
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="projects-container">
          {projects.map((project, index) => (
            <ProjectRow key={index} project={project} />
          ))}
        </div>
      </Section>

      <Section id="contact" title="Get In Touch" centered>
        <div className="contact-links">
          <a href="mailto:ong.izo.zh@gmail.com" className="contact-button">Email Me</a>
          <div className="social-row">
            <a href="https://github.com/izo-ong" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/isaac-ong-62605a305/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;