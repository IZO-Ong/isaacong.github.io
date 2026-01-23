import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { Project } from '../types';

interface ProjectRowProps {
  project: Project;
}

const ProjectRow: React.FC<ProjectRowProps> = ({ project }) => {
  const { domRef, isVisible } = useScrollReveal();

  return (
    <div 
      ref={domRef} 
      className={`project-row reveal-element ${isVisible ? 'is-visible' : ''}`}
    >
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="project-row-link"
      >
        <div className="project-details">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tags">
            {project.tags.map(tag => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        
        <div className="project-image-container">
          <img src={project.image} alt={project.title} className="project-image" />
        </div>
      </a>
    </div>
  );
};

export default ProjectRow;