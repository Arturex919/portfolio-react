import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { useParallax } from '../hooks/useParallax';

export default function Contact() {
    const [formStatus, setFormStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const headerOffset = useParallax(0.1);

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
                    <h1 className="display-4 fw-bold mb-3 mt-5">Contacto</h1>
                    <p className="text-muted small text-uppercase letter-spacing-1 mb-5" style={{ maxWidth: '600px' }}>
                        ¿Tienes un proyecto en mente o simplemente quieres saludar? 
                        Estoy abierto a nuevas oportunidades y colaboraciones tecnológicas.
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
                                    <h3 className="h6 fw-bold text-uppercase mb-4">Información</h3>
                                    <div className="mb-4">
                                        <span className="text-muted x-small text-uppercase letter-spacing-1 d-block mb-1">Email</span>
                                        <a href={`mailto:${personalInfo.email}`} className="text-dark text-decoration-none hover-accent transition">{personalInfo.email}</a>
                                    </div>
                                    <div className="mb-4">
                                        <span className="text-muted x-small text-uppercase letter-spacing-1 d-block mb-1">LinkedIn</span>
                                        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-dark text-decoration-none hover-accent transition">LinkedIn Profile</a>
                                    </div>
                                    <div>
                                        <span className="text-muted x-small text-uppercase letter-spacing-1 d-block mb-1">Ubicación</span>
                                        <span className="text-dark">{personalInfo.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="col-lg-8">
                            <div className="contact-form-wrapper p-4 p-md-5 border border-color bg-white">
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
                                    <fieldset disabled={isSubmitting} className="border-0 p-0 m-0">
                                        <legend className="visually-hidden">Formulario de contacto</legend>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <label htmlFor="name" className="text-muted x-small text-uppercase letter-spacing-1 mb-2 d-block">Nombre</label>
                                                <input 
                                                    id="name"
                                                    type="text" 
                                                    name="name" 
                                                    className="form-control-minimal" 
                                                    placeholder="Ej. Arturo Tuarez" 
                                                    required 
                                                    autoComplete="name"
                                                    aria-describedby="name-helper"
                                                />
                                                <div id="name-helper" className="x-small text-muted mt-2 opacity-75">Tu nombre completo.</div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <label htmlFor="email" className="text-muted x-small text-uppercase letter-spacing-1 mb-2 d-block">Email</label>
                                                <input 
                                                    id="email"
                                                    type="email" 
                                                    name="email" 
                                                    className="form-control-minimal" 
                                                    placeholder="arturo@ejemplo.com" 
                                                    required 
                                                    autoComplete="email"
                                                    aria-describedby="email-helper"
                                                />
                                                <div id="email-helper" className="x-small text-muted mt-2 opacity-75">Donde recibirás mi respuesta.</div>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="subject" className="text-muted x-small text-uppercase letter-spacing-1 mb-2 d-block">Asunto</label>
                                            <input 
                                                id="subject"
                                                type="text" 
                                                name="subject" 
                                                className="form-control-minimal" 
                                                placeholder="Ej. Propuesta de proyecto" 
                                                aria-describedby="subject-helper"
                                            />
                                            <div id="subject-helper" className="x-small text-muted mt-2 opacity-75">Motivo breve de tu mensaje.</div>
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="message" className="text-muted x-small text-uppercase letter-spacing-1 mb-2 d-block">Mensaje</label>
                                            <textarea 
                                                id="message"
                                                name="message" 
                                                className="form-control-minimal" 
                                                rows="4" 
                                                placeholder="Cuéntame los detalles..." 
                                                required
                                                aria-describedby="message-helper"
                                            ></textarea>
                                            <div id="message-helper" className="x-small text-muted mt-2 opacity-75">Describe cómo puedo ayudarte.</div>
                                        </div>
                                        <button type="submit" className="btn-modern btn-primary-modern w-100 py-3 d-flex align-items-center justify-content-center gap-2" disabled={isSubmitting}>
                                            {isSubmitting ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                    <span>ENVIANDO...</span>
                                                </>
                                            ) : (
                                                'ENVIAR MENSAJE'
                                            )}
                                        </button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
