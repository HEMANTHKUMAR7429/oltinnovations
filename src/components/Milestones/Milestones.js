import React from 'react';
import './Milestones.css';

const Milestones = () => {
  const milestones = [
    {
      year: '2024',
      achievement: 'Received ₹4 Lakhs from Kalpataru CoE, STPI Vizag',
      logo: '/images/kalpataru-logo.png' // Placeholder image path
    },
    {
      year: '2024',
      achievement: 'Secured ₹40,000 from KL University ACIC Incubation Centre',
      logo: '/images/klu-logo.jpg' // Placeholder image path
    },
    {
      year: '2025',
      achievement: 'Secured ₹10 Lakhs from IIT BHILAI INNOVATION AND TECHNOLOGY FOUNDATION (IBITF)',
      logo: '/images/iit@.2551f259842b850fff65.png' // Placeholder image path
    }
  ];

  return (
    <section id="milestones" className="section milestones">
      <div className="container">
        <h2 className="section-title">MILESTONES</h2>
        <div className="milestones-container">
          {milestones.map((milestone, index) => (
            <div key={index} className="milestone-card">
              <div className="milestone-logo">
                <img src={milestone.logo} alt="Company Logo" />
              </div>
              <div className="milestone-year">{milestone.year}</div>
              <div className="milestone-achievement">{milestone.achievement}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
