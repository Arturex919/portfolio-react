import React from 'react';
import { Briefcase, User, Mail } from 'lucide-react';
// Importamos la imagen usando el nombre correcto que aparece en tu VS Code
import miFoto from '../foto.png';

export default function Home({ setCurrentPage }) {
    return (
        <div className="container py-5 d-flex flex-column justify-content-center min-vh-100" style={{ marginTop: '-70px' }}>
            <div className="row align-items-center">
                <div className="col-lg-8 order-2 order-lg-1 text-center text-lg-start">
                    <h2 className="text-secondary mb-2 h4">¡Hola! Soy</h2>
                    <h1 className="display-3 fw-bold text-dark mb-3">Arturo Tuarez Calle</h1>
                    <h3 className="text-primary mb-4 h2">Desarrollador Web en formación</h3>
                    <p className="lead text-secondary mb-4">
                        Estudiante del Grado Superior en Desarrollo de Aplicaciones Web (DAW).
                        Apasionado por la tecnología, con sólida base en HTML, CSS, JavaScript y bases de datos.
                    </p>
                    <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start">
                        <button className="btn btn-primary btn-lg px-4 d-flex align-items-center gap-2" onClick={() => setCurrentPage('Projects')}>
                            <Briefcase size={20} /> Proyectos
                        </button>
                        <button className="btn btn-outline-dark btn-lg px-4 d-flex align-items-center gap-2" onClick={() => setCurrentPage('About')}>
                            <User size={20} /> Sobre Mí
                        </button>
                        <button className="btn btn-dark btn-lg px-4 d-flex align-items-center gap-2" onClick={() => setCurrentPage('Contact')}>
                            <Mail size={20} /> Contactar
                        </button>
                    </div>
                </div>

                <div className="col-lg-4 order-1 order-lg-2 mb-5 mb-lg-0 text-center">
                    <div className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center mx-auto shadow-lg"
                         style={{ width: '250px', height: '250px', overflow: 'hidden', border: '5px solid white' }}>
                        <img
                            src={miFoto}
                            alt="Arturo Tuarez"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}