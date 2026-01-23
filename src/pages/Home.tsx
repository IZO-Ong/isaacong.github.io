import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import Section from '../components/Section';
import ProjectRow from '../components/ProjectRow';
import HeroText from '../components/HeroText';
import AboutSection from '../components/AboutSection/AboutSection';
import { PROFILE_IMAGE } from '../constants/data';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const Home: React.FC = () => {
  const projects = useSelector((state: RootState) => state.portfolio.projects);

  return (
    <div id="top">
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-image-wrapper">
            <img src={PROFILE_IMAGE} alt="Isaac Ong" className="profile-image-large" />
          </div>

          <div className="hero-content">
            <HeroText />
          </div>
        </div>
      </section>

      <AboutSection />

      <Section id="projects" title="Projects">
        <div className="projects-container">
          {projects.map((project, index) => (
            <ProjectRow key={index} project={project} />
          ))}
        </div>
      </Section>

      <Section id="contact" title="Let's Connect" centered>
        <div className="contact-container">
          <div className="availability-tag">
            <span className="pulse-dot"></span>
            Open to 2026 Summer Opportunities
          </div>

          <p className="contact-subtitle">
            Feel free to contact me via email, or find my other profiles here:
          </p>

          <div className="contact-main">
            <a href="mailto:ong.izo.zh@gmail.com" className="contact-card primary">
              <div className="card-icon"><Mail size={24} /></div>
              <div className="card-info">
                <span>Email Me</span>
                <strong>ong.izo.zh@gmail.com</strong>
              </div>
              <ExternalLink size={18} className="arrow" />
            </a>

            <div className="social-grid">
              <a href="https://github.com/izo-ong" target="_blank" rel="noreferrer" className="contact-card secondary">
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/isaac-ong-62605a305/" target="_blank" rel="noreferrer" className="contact-card secondary">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;

