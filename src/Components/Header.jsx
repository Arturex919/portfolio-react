import React, { useState } from 'react';
import { Home as HomeIcon, User, Briefcase, Mail } from 'lucide-react';

export default function Header({ currentPage, setCurrentPage }) {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavClick = (page) => {
        setCurrentPage(page);
        setIsNavCollapsed(true);
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
                <div className="container">
          <span className="navbar-brand fw-bold" style={{ cursor: 'pointer' }} onClick={() => handleNavClick('Home')}>
            <span className="text-primary"></span> Arturo Tuarez Calle <span className="text-primary"></span>
          </span>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setIsNavCollapsed(!isNavCollapsed)}
                        aria-expanded={!isNavCollapsed}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            {['Home', 'About', 'Projects', 'Contact'].map((page) => (
                                <li className="nav-item" key={page}>
                                    <button
                                        className={`nav-link btn btn-link text-decoration-none d-flex align-items-center gap-2 ${currentPage === page ? 'active fw-bold text-primary' : 'text-light'}`}
                                        onClick={() => handleNavClick(page)}
                                    >
                                        {page === 'Home' && <HomeIcon size={18} />}
                                        {page === 'About' && <User size={18} />}
                                        {page === 'Projects' && <Briefcase size={18} />}
                                        {page === 'Contact' && <Mail size={18} />}
                                        {page === 'Home' ? 'Inicio' : page === 'About' ? 'Sobre Mí' : page === 'Projects' ? 'Proyectos' : 'Contacto'}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}