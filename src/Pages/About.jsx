import React from 'react';
import { skills, education, experience, certifications } from '../data/portfolioData';
import { useParallax } from '../hooks/useParallax';
import CertificationsCarousel from '../Components/CertificationsCarousel';

export default function About() {
    const headerOffset = useParallax(0.12);

    return (
        <div className="about-page py-5">
            <section className="page-hero mb-5 overflow-hidden">
                <div className="container" style={{ transform: `translateY(${headerOffset}px)` }}>
                    <h1 className="display-4 fw-bold mb-3 mt-5">Sobre Mí</h1>
                    <p className="text-muted small text-uppercase letter-spacing-1 mb-5" style={{ maxWidth: '600px' }}>
                        Desarrollador apasionado por la simplicidad y la eficacia. 
                        Mi enfoque se centra en crear código limpio y experiencias de usuario que eliminan lo innecesario.
                    </p>
                </div>
            </section>

            <section className="about-content pb-5">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-8">
                            <p className="text-dark leading-relaxed mb-0">
                                Destaco por mi actitud proactiva, capacidad de aprendizaje continuo y compromiso con el trabajo en equipo. 
                                Busco desarrollarme como programador junior aportando valor en entornos tecnológicos innovadores 
                                donde la calidad del diseño y la arquitectura del software sean primordiales.
                            </p>
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="row g-4 mb-5 pb-5 border-bottom border-color">
                        {skills.map((skillGroup, idx) => (
                            <div className="col-md-4" key={idx}>
                                <h3 className="h6 fw-bold text-uppercase mb-4">{skillGroup.category}</h3>
                                <div className="d-flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill, i) => (
                                        <span key={i} className="tech-badge-minimal small text-muted">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Experience & Education */}
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <h2 className="h5 fw-bold text-uppercase mb-5 letter-spacing-1">Experiencia</h2>
                            <div className="timeline-minimal">
                                {experience.map((exp, idx) => (
                                    <div className="mb-5 animate-on-scroll" key={idx}>
                                        <div className="d-flex justify-content-between align-items-start mb-2">
                                            <h3 className="h6 fw-bold mb-0">{exp.title}</h3>
                                            <span className="text-muted x-small text-uppercase">{exp.period}</span>
                                        </div>
                                        <p className="text-accent small mb-3">{exp.company}</p>
                                        <ul className="list-unstyled text-muted small leading-relaxed">
                                            {exp.responsibilities.map((resp, i) => (
                                                <li key={i} className="mb-1">— {resp}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <h2 className="h5 fw-bold text-uppercase mb-5 letter-spacing-1">Educación</h2>
                            <div className="timeline-minimal">
                                {education.map((edu, idx) => (
                                    <div className="mb-5 animate-on-scroll" key={idx}>
                                        <div className="d-flex justify-content-between align-items-start mb-2">
                                            <h3 className="h6 fw-bold mb-0">{edu.title}</h3>
                                            <span className="text-muted x-small text-uppercase">{edu.period}</span>
                                        </div>
                                        <p className="text-accent small mb-3">{edu.institution}</p>
                                        <p className="text-muted small leading-relaxed">{edu.description}</p>
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
