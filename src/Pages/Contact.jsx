import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { useParallax } from '../hooks/useParallax';
import { useTranslation } from 'react-i18next';

export default function Contact() {
    const [formStatus, setFormStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const headerOffset = useParallax(0.1);
    const { t } = useTranslation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus(null);

        const form = e.target;
        const formData = new FormData(form);

        try {
            const result = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (result.ok) {
                setFormStatus('success');
                confetti({
                    particleCount: 100,
                    spread: 60,
                    origin: { y: 0.7 },
                    colors: ['#1a1a1a', '#d4af37', '#ffffff']
                });
                form.reset();
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            setFormStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page py-5">
            <section className="page-hero mb-5 overflow-hidden">
                <div className="container" style={{ transform: `translateY(${headerOffset}px)` }}>
                    <h1 className="display-4 fw-bold mb-3 mt-5">{t('contact.title')}</h1>
                    <p className="text-muted small text-uppercase letter-spacing-1 mb-5" style={{ maxWidth: '600px' }}>
                        {t('contact.subtitle')}
                    </p>
                </div>
            </section>

            <section className="contact-content pb-5">
                <div className="container">
                    <div className="row g-5">
                        {/* Info Column */}
                        <div className="col-lg-4">
                            <div className="contact-info-minimal">
                                <div className="mb-5">
                                    <h3 className="h6 fw-bold text-uppercase mb-4">{t('contact.info')}</h3>
                                    <div className="mb-4">
                                        <span className="text-muted x-small text-uppercase letter-spacing-1 d-block mb-1">Email</span>
                                        <a href={`mailto:${personalInfo.email}`} className="text-dark text-decoration-none hover-accent transition">{personalInfo.email}</a>
                                    </div>
                                    <div className="mb-4">
                                        <span className="text-muted x-small text-uppercase letter-spacing-1 d-block mb-1">LinkedIn</span>
                                        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-dark text-decoration-none hover-accent transition">
                                            {t('contact.linkedin')}
                                        </a>
                                    </div>
                                    <div>
                                        <span className="text-muted x-small text-uppercase letter-spacing-1 d-block mb-1">{t('contact.location')}</span>
                                        <span className="text-dark">{personalInfo.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="col-lg-8">
                            <div className="contact-form-wrapper p-4 p-md-5 border border-color bg-white shadow-sm">
                                {formStatus === 'success' && (
                                    <div className="alert alert-success border-0 rounded-0 mb-4 p-3 bg-light">
                                        <span className="fw-bold text-dark text-uppercase x-small letter-spacing-1">Mensaje enviado</span>
                                        <p className="small text-muted mb-0 mt-1">Gracias por contactar. Te responderé a la brevedad.</p>
                                    </div>
                                )}

                                {formStatus === 'error' && (
                                    <div className="alert alert-danger border-0 rounded-0 mb-4 p-3 bg-light">
                                        <span className="fw-bold text-dark text-uppercase x-small letter-spacing-1">Error</span>
                                        <p className="small text-muted mb-0 mt-1">Por favor, inténtalo de nuevo o escribe a {personalInfo.email}.</p>
                                    </div>
                                )}

                                <form action="https://formspree.io/f/mbdawwqg" method="POST" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <label htmlFor="name" className="text-muted x-small text-uppercase letter-spacing-1 mb-2 d-block">
                                                {t('contact.name')}
                                            </label>
                                            <input 
                                                id="name"
                                                type="text" 
                                                name="name" 
                                                className="form-control border-0 bg-light p-3" 
                                                placeholder="Tu nombre" 
                                                required 
                                            />
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <label htmlFor="email" className="text-muted x-small text-uppercase letter-spacing-1 mb-2 d-block">
                                                {t('contact.email')}
                                            </label>
                                            <input 
                                                id="email"
                                                type="email" 
                                                name="email" 
                                                className="form-control border-0 bg-light p-3" 
                                                placeholder="tu@email.com" 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="message" className="text-muted x-small text-uppercase letter-spacing-1 mb-2 d-block">
                                            {t('contact.message')}
                                        </label>
                                        <textarea 
                                            id="message"
                                            name="message" 
                                            className="form-control border-0 bg-light p-3" 
                                            rows="5" 
                                            placeholder="Tu mensaje..." 
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-dark w-100 py-3 text-uppercase letter-spacing-2 fw-bold" disabled={isSubmitting}>
                                        {isSubmitting ? 'Enviando...' : t('contact.send')}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
