import React from 'react';
import { Github } from 'lucide-react';
import ProjectCard from '../Components/ProjectCard';

export default function Projects() {
    const myProjects = [
        {
            title: "ODS 2: Hambre Cero",
            description: "Proyecto web enfocado en la concienciación sobre el Objetivo de Desarrollo Sostenible 2 de la ONU. Interfaz responsiva y semántica.",
            techStack: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
            repoLink: "https://github.com/Arturex919/ods2-hambre_cero",
            demoLink: null
        },
        {
            title: "Web para Restaurante",
            description: "Desarrollo de una página web para un restaurante con enfoque en la experiencia de usuario (UX/UI).",
            techStack: ["HTML5", "CSS3", "JavaScript"],
            repoLink: "https://github.com/Arturex919/PAGINA-WEB-RESTAURANTE",
            demoLink: null
        },
        {
            title: "Gestor de Inventario",
            description: "Aplicación para gestionar stock de productos, inspirada en mi experiencia profesional previa en logística.",
            techStack: ["Java", "Springboot", "MySQL"],
            repoLink: "https://github.com/Arturex919",
            demoLink: null
        }
    ];

    return (
        <div className="container py-5 min-vh-100">
            <h2 className="mb-2 text-center fw-bold">Mis Proyectos</h2>
            <p className="text-center text-secondary mb-5 pb-3 border-bottom">Selección de trabajos realizados en mi formación DAW.</p>

            <div className="row">
                {myProjects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>

            <div className="text-center mt-5 bg-light p-4 rounded shadow-sm">
                <Github size={40} className="mb-3 text-dark" />
                <h4>¿Quieres ver más código?</h4>
                <a href="https://github.com/Arturex919" target="_blank" rel="noreferrer" className="btn btn-dark">
                    Ir a mi GitHub
                </a>
            </div>
        </div>
    );
}