import React from 'react';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';

export default function Contact() {
    return (
        <div className="container py-5 min-vh-100">
            <h2 className="mb-5 text-center fw-bold border-bottom pb-3">Contacto</h2>
            <div className="row justify-content-center">
                <div className="col-lg-5 mb-5 mb-lg-0">
                    <div className="card border-0 shadow-sm bg-primary text-white h-100">
                        <div className="card-body p-4 p-md-5">
                            <h3 className="fw-bold mb-4">Hablemos</h3>
                            <div className="d-flex align-items-center mb-4">
                                <Phone className="me-3" size={24} />
                                <div>
                                    <h6 className="mb-0 fw-bold">Teléfono</h6>
                                    <p className="mb-0 opacity-75">642-83-09-14 </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-4">
                                <Mail className="me-3" size={24} />
                                <div>
                                    <h6 className="mb-0 fw-bold">Email</h6>
                                    <a href="mailto:arturocalle0556@gmail.com" className="text-white text-decoration-none opacity-75">arturocalle0556@gmail.com </a>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-4">
                                <MapPin className="me-3" size={24} />
                                <div>
                                    <h6 className="mb-0 fw-bold">Ubicación</h6>
                                    <p className="mb-0 opacity-75">Almassora, Castellón </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <Linkedin className="me-3" size={24} />
                                <div>
                                    <h6 className="mb-0 fw-bold">LinkedIn</h6>
                                    <a href="https://www.linkedin.com/in/eduardo-arturo-tuarez-calle-01917b170" target="_blank" rel="noreferrer" className="text-white text-decoration-none opacity-75 text-break">
                                        Perfil Profesional
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body p-4 p-md-5">
                            <h3 className="fw-bold mb-4 text-dark">Envíame un mensaje</h3>
                            <form action="https://formspree.io/f/mbdawwqg" method="POST">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <input type="text" name="name" className="form-control bg-light" placeholder="Tu nombre" required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input type="email" name="email" className="form-control bg-light" placeholder="tu@email.com" required />
                                    </div>
                                </div>
                                <textarea name="message" className="form-control bg-light mb-4" rows="5" placeholder="¿En qué puedo ayudarte?" required></textarea>
                                <button type="submit" className="btn btn-primary btn-lg w-100 fw-bold">Enviar Mensaje</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}