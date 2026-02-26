import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
// NOTA: Hemos eliminado import './App.css'; para que los estilos por defecto de Vite no rompan la navbar.

export default function App() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        switch (currentPage) {
            case 'Home': return <Home setCurrentPage={setCurrentPage} />;
            case 'About': return <About />;
            case 'Projects': return <Projects />;
            case 'Contact': return <Contact />;
            default: return <Home setCurrentPage={setCurrentPage} />;
        }
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

            <main className="flex-grow-1">
                <div className="fade-in" style={{ animation: 'fadeIn 0.5s' }}>
                    {renderPage()}
                </div>
            </main>

            <Footer />
        </div>
    );
}
