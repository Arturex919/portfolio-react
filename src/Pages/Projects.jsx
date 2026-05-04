import React, { useState, useMemo } from 'react';
import ProjectCard from '../Components/ProjectCard';
import { projects } from '../data/portfolioData';
import { useParallax } from '../hooks/useParallax';
import { useTranslation } from 'react-i18next';

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');
    const headerOffset = useParallax(0.15);
    const { t } = useTranslation();

    const filters = [
        { id: 'all', label: (t('projects.categories.all') || 'All').toUpperCase() },
        { id: 'frontend', label: (t('projects.categories.frontend') || 'Frontend').toUpperCase() },
        { id: 'fullstack', label: (t('projects.categories.fullstack') || 'Full Stack').toUpperCase() },
        { id: 'backend', label: (t('projects.categories.backend') || 'Backend').toUpperCase() }
    ];

    // Simple and direct filtering
    const displayProjects = (projects || [])
        .filter(p => activeFilter === 'all' || p.category === activeFilter)
        .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

    return (
        <div className="projects-page py-5">
            <section className="page-hero mb-5 overflow-hidden">
                <div className="container" style={{ transform: `translateY(${headerOffset}px)` }}>
                    <h1 className="display-4 fw-bold mb-3 mt-5">{t('nav.projects')}</h1>
                    <p className="text-muted small text-uppercase letter-spacing-1 mb-5" style={{ maxWidth: '600px' }}>
                        {t('projects.description')}
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
                                type="button"
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="row g-4">
                    {displayProjects.map((project, index) => (
                        <ProjectCard
                            key={`${project.title || index}-${index}`}
                            {...project}
                        />
                    ))}
                </div>
                
                {displayProjects.length === 0 && (
                    <div className="text-center py-5">
                        <p className="text-muted small">No hay proyectos en esta categoría todavía.</p>
                        <button 
                            className="btn-modern btn-outline-modern btn-sm mt-3" 
                            onClick={() => setActiveFilter('all')}
                        >
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
                            <h3 className="fw-bold h5 mb-2">{t('projects.githubTitle')}</h3>
                            <p className="text-muted small">{t('projects.githubText')}</p>
                        </div>
                        <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                            <a href="https://github.com/Arturex919" target="_blank" rel="noreferrer" className="btn-modern btn-primary-modern btn-sm">
                                {t('projects.viewRepo')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
