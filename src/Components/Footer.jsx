import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
    return (
        <footer className="py-5 border-top border-color">
            <div className="container">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4">
                    <div className="footer-info text-center text-md-start">
                        <span className="fw-bold text-uppercase small letter-spacing-1">{personalInfo.name}</span>
                        <p className="text-muted small mb-0 mt-1">Desarrollador Web Full Stack . Junior</p>
                    </div>

                    <div className="footer-social d-flex gap-4">
                        <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-muted hover-accent transition" aria-label="GitHub">
                            <Github size={18} />
                        </a>
                        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-muted hover-accent transition" aria-label="LinkedIn">
                            <Linkedin size={18} />
                        </a>
                        <a href={`mailto:${personalInfo.email}`} className="text-muted hover-accent transition" aria-label="Email">
                            <Mail size={18} />
                        </a>
                    </div>

                    <div className="footer-copyright text-center text-md-end">
                        <p className="text-muted small mb-0">
                            &copy; {new Date().getFullYear()} Arturo Tuarez.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}