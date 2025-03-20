import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const allProjects = [
    {
      id: 1,
      title: 'Track Inspection Robot',
      description: 'AI-powered railway maintenance and theft prevention robot. Advanced sensors and machine learning algorithms for real-time track monitoring and anomaly detection.',
      icon: '🤖',
      status: 'active'
    },
    {
      id: 2,
      title: 'Smart Bike Key Reminder',
      description: 'IoT-based key safety device for bikers. Intelligent reminder system with mobile connectivity and location tracking features.',
      icon: '🔑',
      status: 'active'
    },
   
    {
      id: 6,
      title: 'AI Models for Railway Systems',
      description: 'Advanced AI models for predictive maintenance and safety enhancement in railway operations.',
      icon: '🚂',
      status: 'in-progress'
    },
    {
      id: 7,
      title: 'Enhanced Safety Features for Smart Bike Key Reminders',
      description: 'Next-generation safety features incorporating user feedback and advanced IoT capabilities.',
      icon: '🏍️',
      status: 'in-progress'
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Our Projects</h2>
        
        <div className="projects-grid">
          {allProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.status === 'in-progress' && (
                <span className="progress-badge">In Progress</span>
              )}
              <div className="project-icon">{project.icon}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className={`project-overlay ${activeProject === project.id ? 'active' : ''}`}>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 