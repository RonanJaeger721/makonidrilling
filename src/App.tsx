import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutAndWhy from './components/AboutAndWhy';
import Services from './components/Services';
import BoreholeEstimator from './components/BoreholeEstimator';
import ProjectsAndCoverage from './components/ProjectsAndCoverage';
import TestimonialsAndFaq from './components/TestimonialsAndFaq';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll and focus helper
  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset a bit for sticky header
      const offset = 65; 
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Scroll spy to highlight active nav link on scroll
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'estimator', 'projects', 'faq', 'contact'];
    
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 120; // threshold trigger offset

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div id="landing-app-root" className="min-h-screen bg-white text-slate-800 antialiased selection:bg-blue-600/10 selection:text-blue-705">
      {/* Premium Gradient bar top */}
      <div className="h-1.5 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 fixed top-0 left-0 right-0 z-50 pointer-events-none" />
      
      {/* Header / Nav */}
      <Navbar onNavigate={handleNavigation} activeSection={activeSection} />

      {/* Sections layout */}
      <main className="relative">
        <Hero onNavigate={handleNavigation} />
        <AboutAndWhy onNavigate={handleNavigation} />
        <Services />
        <BoreholeEstimator />
        <ProjectsAndCoverage />
        <TestimonialsAndFaq />
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigation} />

      {/* Floating utility nodes (WhatsApp, Scroll to top) */}
      <FloatingButtons />
    </div>
  );
}
