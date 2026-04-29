import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import BackToTop from './Components/BackToTop';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import { useScrollReveal } from './hooks/useScrollReveal';

function ScrollToTop() {
    const location = useLocation();
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);
    
    return null;
}

export default function App() {
    useScrollReveal();

    return (
        <div className="d-flex flex-column min-vh-100">
            <ScrollToTop />
            <Header />
            <BackToTop />

            <main className="flex-grow-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}
