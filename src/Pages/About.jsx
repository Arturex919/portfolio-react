import React from 'react';
import { skills, education, experience, certifications } from '../data/portfolioData';
import { useParallax } from '../hooks/useParallax';
import CertificationsCarousel from '../Components/CertificationsCarousel';
import { useTranslation } from 'react-i18next';

export default function About() {
    const headerOffset = useParallax(0.12);
    const { t } = useTranslation();

    return (
        <div className="about-page py-4">
            <section className="page-hero mb-3 overflow-hidden">
                <div className="container" style={{ transform: `translateY(${headerOffset}px)` }}>
                    <h1 className="display-4 fw-bold mb-2">{t('about.title')}</h1>
                    <p className="text-muted small text-uppercase letter-spacing-1 mb-3" style={{ maxWidth: '600px' }}>
                        {t('about.text1')}
                    </p>
                </div>
            </section>

            <section className="about-content pb-3">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-lg-8">
                            <p className="text-dark leading-relaxed mb-0 small">
                                {t('about.text2')}
                            </p>
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="row g-4 mb-5 pb-5 border-bottom border-color">
                        {skills.map((skillGroup, idx) => (
                            <div className="col-md-4" key={idx}>
                                <div className="mb-2">
                                    <h3 className="x-small fw-bold text-uppercase letter-spacing-2 text-muted mb-3">{skillGroup.category}</h3>
                                    <div className="d-flex flex-wrap gap-2">
                                        {skillGroup.items.map((skill, i) => (
                                            <span key={i} className="tech-badge-minimal" style={{ fontSize: '0.65rem', padding: '4px 10px' }}>
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Experience & Education */}
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="section-header mb-5">
                                <h2 className="h6 fw-bold text-uppercase letter-spacing-2 mb-0">{t('sections.experience')}</h2>
                                <div className="header-line mt-2" style={{ width: '30px', height: '2px', background: 'var(--primary)' }}></div>
                            </div>
                            
                            <div className="experience-list">
                                {experience.map((exp, idx) => (
                                    <div className="mb-5" key={idx}>
                                        <div className="d-flex justify-content-between align-items-baseline mb-1">
                                            <h3 className="h6 fw-bold mb-0" style={{ fontSize: '0.9rem' }}>{exp.title.includes('.') ? t(exp.title) : exp.title}</h3>
                                            <span className="text-muted xx-small text-uppercase fw-bold letter-spacing-1">{exp.period}</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-2 mb-3">
                                            <span className="text-accent x-small fw-bold">{exp.company}</span>
                                        </div>
                                        <ul className="list-unstyled text-muted x-small leading-relaxed">
                                            {exp.responsibilities.map((resp, i) => (
                                                <li key={i} className="mb-2 d-flex align-items-start">
                                                    <span className="me-2 opacity-50">•</span>
                                                    <span>{resp.includes('.') ? t(resp) : resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="section-header mb-5">
                                <h2 className="h6 fw-bold text-uppercase letter-spacing-2 mb-0">{t('sections.education')}</h2>
                                <div className="header-line mt-2" style={{ width: '30px', height: '2px', background: 'var(--primary)' }}></div>
                            </div>
                            
                            <div className="education-list">
                                {education.map((edu, idx) => (
                                    <div className="mb-5" key={idx}>
                                        <div className="d-flex justify-content-between align-items-baseline mb-1">
                                            <h3 className="h6 fw-bold mb-0" style={{ fontSize: '0.9rem' }}>{edu.title.includes('.') ? t(edu.title) : edu.title}</h3>
                                            <span className="text-muted xx-small text-uppercase fw-bold letter-spacing-1">{edu.period}</span>
                                        </div>
                                        <p className="text-accent x-small fw-bold mb-2">{edu.institution}</p>
                                        <p className="text-muted x-small leading-relaxed mb-0">
                                            {edu.description.includes('.') ? t(edu.description) : edu.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Certifications Carousel Section */}
                    <div className="mt-5 pt-5 border-top border-color">
                        <CertificationsCarousel />
                    </div>
                </div>
            </section>
        </div>
    );
}
