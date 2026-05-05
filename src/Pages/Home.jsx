import React from 'react';
import { Link } from 'react-router-dom';
import miFoto from '../foto.jpeg';
import { personalInfo } from '../data/portfolioData';
import { useParallax } from '../hooks/useParallax';
import { useTranslation } from 'react-i18next';

export default function Home() {
    const textOffset = useParallax(0.1);
    const imageOffset = useParallax(-0.05);
    const { t } = useTranslation();

    return (
        <div className="home-page parallax-container">
            <section className="hero-section min-vh-100 d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-7 order-2 order-lg-1">
                            <div 
                                className="hero-content animate-fade-in-up"
                                style={{ transform: `translateY(${textOffset}px)` }}
                            >
                                <h1 className="hero-name display-3 fw-bold mb-4 text-gradient reveal reveal-delay-1">
                                    {personalInfo.name}
                                </h1>
                                <h2 className="h4 mb-4 opacity-75 fw-light reveal reveal-delay-2" style={{ letterSpacing: '2px' }}>
                                    JAVA · SPRING BOOT · REACT · MYSQL
                                </h2>
                                
                                <p className="hero-description text-muted mb-5 leading-relaxed mx-auto mx-lg-0 reveal reveal-delay-3" style={{ maxWidth: '600px', fontSize: '0.95rem' }}>
                                    {t('hero.description')}
                                </p>
                                
                                <div className="hero-cta d-flex gap-3 justify-content-center justify-content-lg-start reveal reveal-delay-4">
                                    <Link to="/projects" className="btn-modern btn-primary-modern" viewTransition>
                                        Explorar Proyectos
                                    </Link>
                                    <Link to="/contact" className="btn-modern btn-outline-modern" viewTransition>
                                        Hablemos de tu proyecto
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-12 col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0">
                            <div 
                                className="hero-image-minimal animate-fade-in d-flex justify-content-center"
                                style={{ transform: `translateY(${imageOffset * 1.5}px)` }}
                            >
                                <div className="image-frame">
                                    <img
                                        src={miFoto}
                                        alt={personalInfo.name}
                                        className="minimal-profile-image img-fluid"
                                        style={{ maxWidth: '300px', height: 'auto', borderRadius: '4px' }}
                                        loading="lazy"
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
