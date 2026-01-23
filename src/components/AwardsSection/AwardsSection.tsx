import React from 'react';
import Section from '../Section';
import { AWARDS } from '../../constants/data';
import awardImage from '../../assets/award-photo.jpeg';
import './AwardsSection.css';

const AwardsSection: React.FC = () => {
  return (
    <Section id="awards" title="Honours & Awards">
      <div className="awards-container">
        {/* Left Side */}
        <div className="awards-visual">
          <div className="image-frame-premium">
            <img 
              src={awardImage} 
              alt="Receiving award at NUS" 
              className="award-photo" 
            />
            <div className="ambient-glow"></div>
          </div>
        </div>

        <div className="awards-content">
          
          <div className="awards-list-sleek">
            {AWARDS.map((award, index) => (
              <div key={index} className="award-item">
                <div className="award-details">
                  <div className="award-meta">
                    <span className="award-date">{award.date}</span>
                    <span className="award-issuer"> | {award.issuer}</span>
                  </div>
                  <h3 className="award-title">{award.title}</h3>
                  <p className="award-description">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AwardsSection;