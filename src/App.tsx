import { useState } from 'react';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import ProjectList from "./components/sections/ProjectList";
import ContactSection from "./components/sections/ContactSection";
import UIKit from "./pages/UIKit";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [page, setPage] = useState<'portfolio' | 'uikit'>('portfolio');

  const toggleDark = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors flex flex-col">
        {/* Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50 rounded-br-lg"
        >
          Ana içeriğe atla
        </a>

        <Header 
          darkMode={darkMode} 
          toggleDark={toggleDark} 
          page={page} 
          setPage={setPage} 
        />
        
        <main id="main-content" className="flex-grow">
          {page === 'uikit' ? (
            <UIKit />
          ) : (
            <>
              <Hero />
              <About />
              <Skills />
              <ProjectList />
              <ContactSection />
            </>
          )}
        </main>
        
        <Footer />
      </div>
    </div>
  );
}