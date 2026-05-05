import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ProjectCard({ title, description, techStack, repoLink, demoLink, category }) {
    const { t } = useTranslation();
    
    // Resolve translation if keys are passed
    const translatedTitle = (title && typeof title === 'string' && title.includes('.')) ? t(title) : title;
    const translatedDescription = (description && typeof description === 'string' && description.includes('.')) ? t(description) : description;

    return (
        <div className="col-lg-6 mb-4 reveal">
            <div className="project-card-minimal glass-shine h-100 p-4 border border-color hover-lift transition">
                <div className="d-flex flex-column h-100">
                    <div className="mb-3">
                        <span className="text-accent x-small text-uppercase letter-spacing-1 mb-1 d-block">
                            {category ? t(`projects.categories.${category}`) : t('projects.categories.all')}
                        </span>
                        <h4 className="fw-bold h6 mb-2">{translatedTitle}</h4>
                        <p className="text-muted small leading-relaxed mb-4">{translatedDescription}</p>
                    </div>

                    <div className="mt-auto">
                        <div className="d-flex flex-wrap gap-2 mt-auto">
                        {techStack && Array.isArray(techStack) && techStack.map((tech, idx) => (
                            <span key={idx} className="tech-badge-minimal">
                                {tech}
                            </span>
                        ))}
                    </div>
                        
                        <div className="d-flex gap-4 border-top pt-3">
                            <a href={repoLink} target="_blank" rel="noreferrer" className="text-dark small text-decoration-none d-flex align-items-center gap-1 hover-accent transition">
                                <Github size={14} /> <span>{t('projects.viewRepo')}</span>
                            </a>
                            {demoLink && (
                                <a href={demoLink} target="_blank" rel="noreferrer" className="text-dark small text-decoration-none d-flex align-items-center gap-1 hover-accent transition">
                                    <ExternalLink size={14} /> <span>{t('projects.viewDemo')}</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}