import React, { useState, useMemo } from 'react';
import ProjectCard from '../Components/ProjectCard';
import { projects } from '../data/portfolioData';
import { useParallax } from '../hooks/useParallax';
import { useTranslation } from 'react-i18next';

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');
    const headerOffset = useParallax(0.15);
    const { t } = useTranslation();

    const filters = useMemo(() => [
        { id: 'all', label: (t('projects.categories.all') || '').toString().toUpperCase() },
        { id: 'frontend', label: (t('projects.categories.frontend') || '').toString().toUpperCase() },
        { id: 'fullstack', label: (t('projects.categories.fullstack') || '').toString().toUpperCase() },
        { id: 'backend', label: (t('projects.categories.backend') || '').toString().toUpperCase() }
    ], [t]);

    const filteredProjects = useMemo(() => {
        const sortedProjects = [...(projects || [])].sort((a, b) => {
            if (a?.featured && !b?.featured) return -1;
            if (!a?.featured && b?.featured) return 1;
            return 0;
        });

        if (activeFilter === 'all') return sortedProjects;
        
        return sortedProjects.filter(project => {
            const projectCat = project?.category?.toString().toLowerCase().replace(/\s+/g, '');
            const filterId = activeFilter.toLowerCase().replace(/\s+/g, '');
            return projectCat === filterId;
        });
    }, [activeFilter, projects]);

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
                        <p className="text-muted small">No projects in this category yet.</p>
                        <button className="btn-modern btn-outline-modern btn-sm mt-3" onClick={() => setActiveFilter('all')}>
                            VIEW ALL
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
