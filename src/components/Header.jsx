import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-black/70 border-b border-violet-500/20 backdrop-blur sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-violet-100 tracking-wide">
            My Portfolio
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('about')} className="text-slate-200/80 hover:text-violet-200 transition">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-slate-200/80 hover:text-violet-200 transition">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-slate-200/80 hover:text-violet-200 transition">Projects</button>
            <button onClick={() => scrollToSection('publications')} className="text-slate-200/80 hover:text-violet-200 transition">Publications & Achievements</button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-200/80 hover:text-violet-200 transition">Contact</button>
            <a
              href="https://app.contentful.com/spaces/tqeqfmqv1sng/views/entries"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-md border border-violet-400/60 text-violet-200 hover:bg-violet-500/10 transition"
            >
              Admin Panel
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 rounded-lg border border-violet-500/10 bg-black/40 p-3">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-slate-200/80 hover:text-violet-200">About</button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left py-2 text-slate-200/80 hover:text-violet-200">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 text-slate-200/80 hover:text-violet-200">Projects</button>
            <button onClick={() => scrollToSection('publications')} className="block w-full text-left py-2 text-slate-200/80 hover:text-violet-200">Publications & Achievements</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-slate-200/80 hover:text-violet-200">Contact</button>
            <a
              href="https://app.contentful.com/spaces/tqeqfmqv1sng/views/entries"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left py-2 text-violet-200"
            >
              Admin Panel
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
