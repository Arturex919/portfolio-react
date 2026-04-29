import React, { useState, useMemo } from 'react';
import ProjectCard from '../Components/ProjectCard';
import { projects } from '../data/portfolioData';
import { useParallax } from '../hooks/useParallax';

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');
    const headerOffset = useParallax(0.15);

    const filters = useMemo(() => [
        { id: 'all', label: 'TODOS' },
        { id: 'frontend', label: 'FRONTEND' },
        { id: 'fullstack', label: 'FULL STACK' },
        { id: 'backend', label: 'BACKEND' }
    ], []);

    const filteredProjects = useMemo(() => 
        activeFilter === 'all' 
            ? projects 
            : projects.filter(p => p.category === activeFilter)
    , [activeFilter]);

    return (
        <div className="projects-page py-5">
            <section className="page-hero mb-5 overflow-hidden">
                <div className="container" style={{ transform: `translateY(${headerOffset}px)` }}>
                    <h1 className="display-4 fw-bold mb-3 mt-5">Proyectos</h1>
                    <p className="text-muted small text-uppercase letter-spacing-1 mb-5" style={{ maxWidth: '600px' }}>
                        Una selección curada de trabajos que demuestran mi capacidad para resolver problemas 
                        mediante código limpio y soluciones eficientes orientadas a resultados técnicos.
                    </p>
                </div>
            </section>

            <div className="container">
                <div className="filter-wrapper mb-5 pb-3 border-bottom border-color">
                    <div className="d-flex flex-wrap gap-4">
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`btn-filter ${activeFilter === filter.id ? 'active' : ''}`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="row g-4">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={`${project.title}-${index}`}
                            {...project}
                        />
                    ))}
                </div>
                
                {filteredProjects.length === 0 && (
                    <div className="text-center py-5">
                        <p className="text-muted small">No hay proyectos en esta categoría todavía.</p>
                        <button className="btn-modern btn-outline-modern btn-sm mt-3" onClick={() => setActiveFilter('all')}>
                            VER TODOS
                        </button>
                    </div>
                )}
            </div>

            {/* GitHub Callout */}
            <section className="py-5 mt-5 border-top border-color">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <h3 className="fw-bold h5 mb-2">¿Te interesa ver el proceso detrás del código?</h3>
                            <p className="text-muted small">Explora mis repositorios completos en GitHub para ver la arquitectura y el historial de commits.</p>
                        </div>
                        <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                            <a href="https://github.com/Arturex919" target="_blank" rel="noreferrer" className="btn-modern btn-primary-modern btn-sm">
                                Ver Repositorios
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
