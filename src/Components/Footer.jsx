import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
    return (
        <footer className="py-4 border-top border-color">
            <div className="container">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                    <div className="footer-brand">
                        <span className="text-uppercase x-small letter-spacing-1 fw-bold text-dark">
                            {personalInfo.name}
                        </span>
                        <span className="text-muted x-small ms-2">— {personalInfo.title}</span>
                    </div>

                    <div className="footer-socials d-flex gap-4">
                        <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-muted hover-dark transition-fast" aria-label="GitHub">
                            <Github size={16} />
                        </a>
                        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-muted hover-dark transition-fast" aria-label="LinkedIn">
                            <Linkedin size={16} />
                        </a>
                        <a href={`mailto:${personalInfo.email}`} className="text-muted hover-dark transition-fast" aria-label="Email">
                            <Mail size={16} />
                        </a>
                    </div>

                    <div className="footer-copy">
                        <span className="text-muted x-small text-uppercase letter-spacing-1">
                            © {new Date().getFullYear()} Arturo Tuarez
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}