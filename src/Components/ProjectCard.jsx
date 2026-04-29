import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ title, description, techStack, repoLink, demoLink, category }) {
    return (
        <div className="col-lg-6 mb-4 animate-on-scroll">
            <div className="project-card-minimal h-100 p-4 border border-color hover-shadow-soft transition">
                <div className="d-flex flex-column h-100">
                    <div className="mb-3">
                        <span className="text-accent x-small text-uppercase letter-spacing-1 mb-1 d-block">
                            {category || 'Desarrollo'}
                        </span>
                        <h4 className="fw-bold h6 mb-2">{title}</h4>
                        <p className="text-muted small leading-relaxed mb-4">{description}</p>
                    </div>

                    <div className="mt-auto">
                        <div className="d-flex flex-wrap gap-2 mt-auto">
                        {techStack.map((tech, idx) => (
                            <span key={idx} className="tech-badge-minimal">
                                {tech}
                            </span>
                        ))}
                    </div>
                        
                        <div className="d-flex gap-4 border-top pt-3">
                            <a href={repoLink} target="_blank" rel="noreferrer" className="text-dark small text-decoration-none d-flex align-items-center gap-1 hover-accent transition">
                                <Github size={14} /> <span>GitHub</span>
                            </a>
                            {demoLink && (
                                <a href={demoLink} target="_blank" rel="noreferrer" className="text-dark small text-decoration-none d-flex align-items-center gap-1 hover-accent transition">
                                    <ExternalLink size={14} /> <span>En vivo</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}