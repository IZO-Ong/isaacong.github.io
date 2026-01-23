import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import Section from '../components/Section';
import ProjectRow from '../components/ProjectRow/ProjectRow';
import HeroText from '../components/TypingSection/TypingSection';
import AboutSection from '../components/AboutSection/AboutSection';
import AwardsSection from '../components/AwardsSection/AwardsSection';
import ContactSection from '../components/ContactSection/ContactSection';
import { PROFILE_IMAGE } from '../constants/data';

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

      <AwardsSection />

      <ContactSection />
    </div>
  );
};

export default Home;

