import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-4 mt-auto">
            <div className="container text-center">
                <div className="mb-3">
                    <a href="https://github.com/Arturex919" target="_blank" rel="noreferrer" className="text-light me-3">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/eduardo-arturo-tuarez-calle-01917b170" target="_blank" rel="noreferrer" className="text-light me-3">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:arturocalle0556@gmail.com" className="text-light">
                        <Mail size={24} />
                    </a>
                </div>
                <p className="mb-0 text-secondary">
                    &copy; {new Date().getFullYear()} Arturo Tuarez Calle.
                </p>
            </div>
        </footer>
    );
}