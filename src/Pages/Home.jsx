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
                                <div className="hero-greeting mb-3">
                                    <div className="d-flex flex-column" style={{ gap: '4px' }}>
                                        <span className="greeting-text text-uppercase letter-spacing-2 text-primary fw-bold" style={{ fontSize: '0.75rem' }}>
                                            {t('hero.subtitle')}
                                        </span>
                                        <span className="greeting-text text-uppercase letter-spacing-2 opacity-50 fw-semibold" style={{ fontSize: '0.7rem', color: 'var(--text-color)' }}>
                                            {t('hero.fiverrTitle')}
                                        </span>
                                    </div>
                                </div>
                                
                                <h1 className="hero-name display-3 fw-bold mb-4 text-gradient">{personalInfo.name}</h1>
                                
                                <p className="hero-description text-muted mb-5 leading-relaxed mx-auto mx-lg-0" style={{ maxWidth: '600px', fontSize: '0.95rem' }}>
                                    {t('hero.description')}
                                </p>
                                
                                <div className="hero-cta d-flex gap-3 justify-content-center justify-content-lg-start">
                                    <Link to="/projects" className="btn-modern btn-primary-modern" viewTransition>
                                        {t('hero.cta')}
                                    </Link>
                                    <Link to="/contact" className="btn-modern btn-outline-modern" viewTransition>
                                        {t('nav.contact')}
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
