import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Theme logic
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const navItems = [
        { path: '/', label: 'Inicio' },
        { path: '/about', label: 'Sobre Mí' },
        { path: '/projects', label: 'Proyectos' },
        { path: '/contact', label: 'Contacto' }
    ];

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    // Toggle scroll lock when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    return (
        <header className={`modern-header ${isScrolled || isMobileMenuOpen ? 'scrolled' : ''}`}>
            <nav className="navbar-container">
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        {/* Brand removed as requested */}
                    </div>

                    <div className="desktop-nav d-flex align-items-center gap-4">
                        <div className="nav-menu-desktop d-flex gap-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`nav-link-modern ${isActive(item.path) ? 'active' : ''}`}
                                    viewTransition
                                >
                                    <span>{item.label}</span>
                                </Link>
                            ))}
                        </div>
                        
                        <button 
                            onClick={toggleTheme} 
                            className="theme-toggle-btn p-2 rounded-circle border-0 bg-transparent"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>

                        <a 
                            href={personalInfo.cvUrl} 
                            download 
                            className="btn-modern btn-outline-modern btn-sm"
                            title="Descargar CV"
                        >
                            <span>CV</span>
                        </a>
                    </div>

                    <button 
                        className={`mobile-menu-btn d-lg-none ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>
            
            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <div className="container">
                    <div className="mobile-nav-items text-center">
                        <div className="mb-4">
                            <button 
                                onClick={toggleTheme} 
                                className="theme-toggle-btn p-3 rounded-circle border-1 mb-3"
                                style={{ border: '1px solid var(--border-color)' }}
                            >
                                {theme === 'light' ? <><Moon size={20} className="me-2" /> Modo Oscuro</> : <><Sun size={20} className="me-2" /> Modo Claro</>}
                            </button>
                        </div>
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`mobile-nav-link justify-content-center ${isActive(item.path) ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                viewTransition
                            >
                                <span>{item.label}</span>
                            </Link>
                        ))}
                        <a 
                            href={personalInfo.cvUrl} 
                            download 
                            className="btn-modern btn-primary-modern mt-4 w-100"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Descargar CV
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
