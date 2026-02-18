import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
