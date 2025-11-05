import { useMemo } from 'react';
import { ArrowDownTrayIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Hero from './sections/Hero.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Skills from './sections/Skills.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import './styles/app.css';

const App = () => {
  const downloadLink = useMemo(
    () =>
      'https://drive.google.com/uc?export=download&id=1R0l7Hx-portfolio-resume',
    []
  );

  return (
    <div className="app">
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="app__header"
      >
        <div className="app__brand">
          <span className="app__logo">DH</span>
          <span className="app__title">Frontend Developer</span>
        </div>
        <div className="app__actions">
          <a className="button button--ghost" href="#contact">
            <PaperAirplaneIcon />
            Contact
          </a>
          <a className="button" href={downloadLink} target="_blank" rel="noreferrer">
            <ArrowDownTrayIcon />
            이력서 다운로드
          </a>
        </div>
      </motion.header>

      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
