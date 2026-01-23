import React from 'react';
import { Mail, Github, Linkedin, ExternalLink, FileText } from 'lucide-react';
import Section from '../Section';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  return (
    <Section id="contact" title="Let's Connect" centered>
      <div className="contact-container">
        <div className="availability-tag">
          <span className="pulse-dot"></span>
          Open to 2026 Summer Opportunities
        </div>

        <p className="contact-subtitle">
          Feel free to view my resume, contact me via email, or find my other profiles here:
        </p>

        <div className="contact-main">
          {/* Resume Card */}
          <a 
            href="/Isaac_Ong_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-card primary resume-cta"
          >
            <div className="card-icon"><FileText size={24} /></div>
            <div className="card-info">
              <span>Qualifications</span>
              <strong>View My Resume</strong>
            </div>
            <ExternalLink size={18} className="arrow" />
          </a>

          {/* Email Card */}
          <a href="mailto:ong.izo.zh@gmail.com" className="contact-card primary">
            <div className="card-icon"><Mail size={24} /></div>
            <div className="card-info">
              <span>Email Me</span>
              <strong>ong.izo.zh@gmail.com</strong>
            </div>
            <ExternalLink size={18} className="arrow" />
          </a>

          {/* Social Grid */}
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
  );
};

export default ContactSection;