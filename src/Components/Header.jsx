import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { personalInfo } from '../data/portfolioData';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const location = useLocation();
    const { t, i18n } = useTranslation();

    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const currentProgress = (window.scrollY / totalScroll) * 100;
            setScrollProgress(currentProgress);
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

    const toggleLanguage = () => {
        const nextLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(nextLang);
    };

    const navItems = [
        { path: '/', label: t('nav.home') },
        { path: '/about', label: t('nav.about') },
        { path: '/projects', label: t('nav.projects') },
        { path: '/contact', label: t('nav.contact') }
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
        <header className={`modern-header ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}>
            {/* Scroll Progress Bar */}
            <div 
                className="scroll-progress-bar" 
                style={{ 
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '2px',
                    backgroundColor: 'var(--accent)',
                    width: `${scrollProgress}%`,
                    transition: 'width 0.1s ease-out',
                    zIndex: 100
                }}
            />
            <nav className="navbar-container">
                <div className="container d-flex align-items-center justify-content-between">
                    <Link 
                        to="/" 
                        className="brand-link d-flex" 
                        viewTransition
                        style={{ opacity: isMobileMenuOpen ? 0 : 1, pointerEvents: isMobileMenuOpen ? 'none' : 'auto' }}
                    >
                        <span className="brand-name">{personalInfo.name.split(' ')[0]}</span>
                        <span className="brand-tag ms-1">{personalInfo.name.split(' ')[1]}</span>
                    </Link>

                    <div className="desktop-nav d-flex align-items-center">
                        <div className="d-flex align-items-center gap-4">
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
                            
                            <div className="d-flex align-items-center gap-3 ms-2 ps-4 border-start border-color">
                                <button 
                                    onClick={toggleLanguage} 
                                    className="lang-toggle-btn d-flex align-items-center fw-bold text-uppercase"
                                    aria-label="Toggle language"
                                    style={{ 
                                        fontSize: '0.8rem', 
                                        color: 'var(--text-color)', 
                                        background: 'transparent',
                                        border: 'none',
                                        padding: 0
                                    }}
                                >
                                    <span>{i18n.language.toUpperCase()}</span>
                                </button>

                                <button 
                                    onClick={toggleTheme} 
                                    className="theme-toggle-btn p-0 bg-transparent opacity-75 hover-opacity-100 transition-fast"
                                    aria-label="Toggle theme"
                                    style={{ color: 'var(--text-color)', border: 'none' }}
                                >
                                    {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                                </button>

                                <a 
                                    href={personalInfo.cvUrl} 
                                    download="CV_Arturo_Tuarez_Calle.pdf" 
                                    className="hover-underline text-uppercase x-small letter-spacing-1 fw-bold text-dark text-decoration-none opacity-75 hover-opacity-100"
                                    title={t('hero.cv')}
                                >
                                    CV
                                </a>
                            </div>
                        </div>
                    </div>

                    <button 
                        className={`mobile-menu-btn d-lg-none ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                        style={{ zIndex: 10003 }}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>
            
            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="mobile-overlay" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(8px)',
                        zIndex: 10000
                    }}
                />
            )}
            
            {/* Mobile Menu Sidebar */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <div className="mobile-menu-header">
                    <span className="text-uppercase x-small letter-spacing-2 fw-bold opacity-50">Menu</span>
                </div>
                
                <div className="p-4">
                    <div className="mobile-nav-items text-start">
                        <div className="mb-5 d-flex flex-column gap-3 align-items-start">
                            <button 
                                onClick={toggleLanguage} 
                                className="lang-toggle-btn p-3 rounded border-1 w-100 text-start d-flex align-items-center"
                                style={{ border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-color)' }}
                            >
                                <Globe size={18} className="me-2 opacity-50" />
                                <span className="small fw-bold">{i18n.language === 'en' ? 'Spanish (ES)' : 'Inglés (EN)'}</span>
                            </button>
                            <button 
                                onClick={toggleTheme} 
                                className="theme-toggle-btn p-3 rounded border-1 w-100 text-start d-flex align-items-center"
                                style={{ border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-color)' }}
                            >
                                {theme === 'light' ? 
                                    <><Moon size={18} className="me-2 opacity-50" /> <span className="small fw-bold">Dark Mode</span></> : 
                                    <><Sun size={18} className="me-2 opacity-50" /> <span className="small fw-bold">Light Mode</span></>
                                }
                            </button>
                        </div>
                        
                        <div className="d-flex flex-column gap-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`mobile-nav-link justify-content-start py-3 ${isActive(item.path) ? 'active' : ''}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    viewTransition
                                    style={{ border: 'none', fontSize: '1.1rem' }}
                                >
                                    <span>{item.label}</span>
                                </Link>
                            ))}
                        </div>
                        
                        <a 
                            href={personalInfo.cvUrl} 
                            download="CV_Arturo_Tuarez_Calle.pdf" 
                            className="btn-modern btn-primary-modern mt-5 w-100 text-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{ fontSize: '0.8rem' }}
                        >
                            {t('hero.cv')}
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
