import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import BlobCursor from './components/BlobCursor';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-900 to-secondary-800 text-white">
      <BlobCursor />
      <ParticleBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <TechStack />
        <Projects />
        <Certifications />
        <Education />
        <Hobbies />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;