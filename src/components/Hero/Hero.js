import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      {
        threshold: 0.1
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">
          Welcome to OLT Innovations Private Limited
        </h1>
        <div className="hero-mission">
          <p>
            "To innovate and develop impactful products leveraging AI, IoT, and robotics, addressing real-world challenges"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 