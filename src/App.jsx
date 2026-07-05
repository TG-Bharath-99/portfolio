import { useState, useEffect } from "react";

import Navbar from "./components/Layout/Navbar";
import ScrollProgress from "./components/Layout/ScrollProgress";
import ScrollToTop from "./components/Layout/ScrollToTop";
import LoadingScreen from "./components/Layout/LoadingScreen";
import Footer from "./components/Layout/Footer";
import AnimatedBackground from "./components/UI/AnimatedBackground";

import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Skills from "./components/Sections/Skills";
import Projects from "./components/Sections/Projects";
import Achievements from "./components/Sections/Achievements";
import Education from "./components/Sections/Education";
import Contact from "./components/Sections/Contact";

import "./App.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Allow loading screen to finish before rendering main content
    const timer = setTimeout(() => setIsLoaded(true), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen />
      <AnimatedBackground />
      <ScrollProgress />

      <div
        className={`transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Education />
          <Contact />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
