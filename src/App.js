import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ScrollToTop from './components/ScrollToTop';

import './App.css';

function App() {
  return (
    <main className="text-gray-400 bg-zinc-900 body-font">
      <About />
      <Projects />
      <Skills />
      <Contact />
      <ScrollToTop smooth={true} top={300} color="white" viewBox="-40 0 256 256" className="inline-block bg-cyan-600 rounded-full hover:bg-cyan-700" />
    </main>
  );
}

export default App;
