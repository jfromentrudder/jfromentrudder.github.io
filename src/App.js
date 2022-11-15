import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';

import './App.css';

function App() {
  return (
    <main className="text-gray-400 bg-zinc-900 body-font">
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
