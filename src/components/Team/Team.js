import React, { useState } from 'react';
import './Team.css';

const Team = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(null);

  const teamMembers = [
    {
      name: 'Shaik Md Farooq Ali',
      role: 'Founder & Managing Director',
      description: 'An accomplished technologist with expertise in embedded systems, IoT integration, and product prototyping',
      image: '/images/image-2.jpg',
      linkedin: 'https://www.linkedin.com/in/smd-farooq-ali-34042724a/' // Add LinkedIn URL here
    },
    {
      name: 'Salar Khan Patan',
      role: 'CEO & Co-founder',
      description: 'A Electrical Engineer with hands-on experience in system optimization and innovative technology integration.',
      image: '/images/image-1.jpg',
      linkedin: 'https://www.linkedin.com/in/salarkhan-patan-75365a230/' // Add LinkedIn URL here
    },
    {
      name: 'Pandipati Sai Karthik',
      role: 'Co-founder & CTO',
      description: 'Bridging gap between hardware and software',
      image: '/images/image-3.jpg',
      linkedin: 'https://www.linkedin.com/in/saikarthik-pandipati/' // Add LinkedIn URL here
    },
    {
      name: 'Pavan Kumar',
      role: 'Computer Vision & AI',
      description: '',
      image: '/images/image-8.jpg',
      linkedin: 'https://www.linkedin.com/in/a-pavan-kumar-2815b925b/' // Add LinkedIn URL here
    },
    {
      name: 'Dr.K Narasimha Raju',
      role: 'Director',
      description: 'Professor at KLEF Deemed To Be University',
      image: '/images/image-4.jpg',
      linkedin: 'https://www.linkedin.com/in/dr-kuthuri-narasimha-raju/' // Add LinkedIn URL here
    },
    {
      name: 'Dr.Kalyan D',
      role: 'Director',
      description: 'Professor at KLEF Deemed To Be University.',
      image: '/images/image-7.jpg',
      linkedin: 'https://www.linkedin.com/in/dr-kalyan-dusarlapudi-05a814169/' // Add LinkedIn URL here
    },
    {
      name: 'Srikanth Annamareddy',
      role: 'Operations & Strategies Advisor',
      description: 'Operations Supervisor at Costco Wholesale Conventry, UK.',
      image: '/images/image-6.jpg',
      linkedin: 'https://www.linkedin.com/in/srikanth-a-14b15279/' // Add LinkedIn URL here
    },
    {
      name: 'Madhusudhan',
      role: 'Software & AI Advisor',
      description: "Senior Data Engineer at ASX Sydney, Australia, guiding OLT's software strategies",
      image: '/images/image-5.jpg',
      linkedin: 'https://www.linkedin.com/in/madhusudhan-g-89331a6b/' // Add LinkedIn URL here
    }
  ];

  return (
    <section id="team" className="section team">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="team-card"
              onMouseEnter={() => setActiveTeamMember(index)}
              onMouseLeave={() => setActiveTeamMember(null)}
            >
              <div className="team-member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
              <p className="team-member-description">{member.description}</p>
              <div className={`team-overlay ${activeTeamMember === index ? 'active' : ''}`}>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-btn">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
