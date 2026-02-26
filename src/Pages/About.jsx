import React from 'react';
import { Code2, Server, Wrench, GraduationCap, Briefcase } from 'lucide-react';

export default function About() {
    const skills = [
        { category: 'Frontend', icon: <Code2 size={20}/>, items: ['HTML5', 'CSS3', 'JavaScript', 'React (Básico)', 'Bootstrap'] },
        { category: 'Backend & BD', icon: <Server size={20}/>, items: ['Java', 'Python (En curso)', 'Springboot', 'MySQL', 'MongoDB'] },
        { category: 'Herramientas', icon: <Wrench size={20}/>, items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'AWS', 'AutoCAD'] }
    ];

    return (
        <div className="container py-5">
            <h2 className="mb-5 text-center fw-bold border-bottom pb-3">Sobre Mí</h2>

            <div className="row mb-5">
                <div className="col-lg-8 mx-auto text-center">
                    <p className="lead text-secondary">
                        Destaco por mi actitud proactiva, capacidad de aprendizaje continuo y compromiso con el trabajo en equipo. Busco desarrollarme como programador junior aportando valor en entornos tecnológicos innovadores.
                    </p>
                </div>
            </div>

            <h3 className="mb-4 h4 fw-bold text-primary"><Wrench className="me-2"/> Habilidades Técnicas</h3>
            <div className="row mb-5">
                {skills.map((skillGroup, idx) => (
                    <div className="col-md-4 mb-4" key={idx}>
                        <div className="card h-100 border-0 shadow-sm bg-light">
                            <div className="card-body">
                                <h5 className="card-title d-flex align-items-center gap-2 mb-3 text-dark">
                                    {skillGroup.icon} {skillGroup.category}
                                </h5>
                                <div className="d-flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill, i) => (
                                        <span key={i} className="badge bg-white text-dark border border-secondary">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row">
                <div className="col-md-6 mb-4">
                    <h3 className="mb-4 h4 fw-bold text-primary"><GraduationCap className="me-2"/> Educación</h3>
                    <div className="timeline-item mb-4 border-start border-primary border-3 ps-3">
                        <h5 className="fw-bold mb-1">Grado Superior en DAW</h5>
                        <p className="text-primary fw-bold mb-1">IES Alvaro Falomir | 2024 - Actualidad</p>
                        <p className="text-secondary small">Desarrollo de Aplicaciones Web</p>
                    </div>
                    <div className="timeline-item mb-4 border-start border-secondary border-3 ps-3">
                        <h5 className="fw-bold mb-1">Ciclo Superior en Mecánica Naval</h5>
                        <p className="text-secondary fw-bold mb-1">IST Luis Arboleda Martínez | 2020 - 2023</p>
                        <p className="text-secondary small">Ecuador</p>
                    </div>
                    <div className="timeline-item border-start border-secondary border-3 ps-3">
                        <h5 className="fw-bold mb-1">Formación Adicional</h5>
                        <ul className="text-secondary small mb-0 ps-3">
                            <li>Ciberseguridad (Google) - En curso</li>
                            <li>Data Science (IBM/Coursera) - En curso</li>
                            <li>Desarrollo Web con Python (IBM) - En curso</li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-6 mb-4">
                    <h3 className="mb-4 h4 fw-bold text-primary"><Briefcase className="me-2"/> Experiencia Laboral</h3>
                    <div className="timeline-item mb-4 border-start border-primary border-3 ps-3">
                        <h5 className="fw-bold mb-1">Reposición y Atención en Caja</h5>
                        <p className="text-primary fw-bold mb-1">Charter (Almassora) | Jul 2025 - Oct 2025</p>
                        <ul className="text-secondary small mb-0 ps-3">
                            <li>Gestión de inventario y control de stocks.</li>
                            <li>Apoyo en almacén y recepción de mercancía.</li>
                        </ul>
                    </div>
                    <div className="timeline-item border-start border-secondary border-3 ps-3">
                        <h5 className="fw-bold mb-1">Asistente Técnico</h5>
                        <p className="text-secondary fw-bold mb-1">Smart Net (Ecuador) | Feb 2024 - May 2024</p>
                        <ul className="text-secondary small mb-0 ps-3">
                            <li>Instalación y mantenimiento de redes de fibra óptica.</li>
                            <li>Soporte técnico y atención al cliente.</li>
                            <li>Armado de NAPs y configuración de troncales.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
