import './App.css';

import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import TechStack from './components/TechStack/TechStack';
import Testimony from "./components/Testimony/Testimony";
import { useState, useEffect } from 'react';


function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light")
  }, [darkMode]);


  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Projects />
        <Testimony />
        <Contacts />
      </main>
    </>
  );
}

export default App;
