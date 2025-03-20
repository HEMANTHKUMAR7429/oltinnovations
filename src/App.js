import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Milestones from './components/Milestones/Milestones';
import Team from './components/Team/Team';
import ReachUs from './components/ReachUs/ReachUs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Milestones />
        <Team />
        <ReachUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
