import React from 'react';
import { Link } from 'react-router-dom';
import miFoto from '../foto.jpeg';
import { personalInfo } from '../data/portfolioData';
import { useParallax } from '../hooks/useParallax';

export default function Home() {
    const textOffset = useParallax(0.1);
    const imageOffset = useParallax(-0.05);

    return (
        <div className="home-page parallax-container">
            <section className="hero-section min-vh-100 d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div 
                                className="hero-content animate-fade-in-up"
                                style={{ transform: `translateY(${textOffset}px)` }}
                            >
                                <div className="hero-greeting">
                                    <span className="greeting-text text-uppercase letter-spacing-1 small">Desarrollador Web Full Stack</span>
                                </div>
                                
                                <h1 className="hero-name display-4 fw-bold mt-2 mb-4">{personalInfo.name}</h1>
                                
                                <p className="hero-description text-muted mb-5 leading-relaxed" style={{ maxWidth: '90%' }}>
                                    Especializado en crear soluciones digitales elegantes, funcionales y escalables. 
                                    Transformo ideas complejas en experiencias de usuario intuitivas y minimalistas 
                                    orientadas a la eficiencia tecnológica.
                                </p>
                                
                                <div className="hero-cta d-flex gap-3">
                                    <Link to="/projects" className="btn-modern btn-primary-modern" viewTransition>
                                        Ver Proyectos
                                    </Link>
                                    <Link to="/contact" className="btn-modern btn-outline-modern" viewTransition>
                                        Contactar
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-5 d-none d-lg-block">
                            <div 
                                className="hero-image-minimal animate-fade-in"
                                style={{ transform: `translateY(${imageOffset}px)` }}
                            >
                                <div className="image-frame">
                                    <img
                                        src={miFoto}
                                        alt={personalInfo.name}
                                        className="minimal-profile-image"
                                        width={380}
                                        height={380}
                                        loading="eager"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
