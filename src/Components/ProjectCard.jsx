import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ title, description, techStack, repoLink, demoLink }) {
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0 bg-light">
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold text-dark">{title}</h5>
                    <p className="card-text text-secondary flex-grow-1">{description}</p>
                    <div className="mb-3">
                        {techStack.map((tech, index) => (
                            <span key={index} className="badge bg-primary me-1 mb-1">{tech}</span>
                        ))}
                    </div>
                    <div className="d-flex gap-2 mt-auto">
                        <a href={repoLink} target="_blank" rel="noreferrer" className="btn btn-outline-dark btn-sm d-flex align-items-center gap-1">
                            <Github size={16} /> Código
                        </a>
                        {demoLink && (
                            <a href={demoLink} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm d-flex align-items-center gap-1">
                                <ExternalLink size={16} /> Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}