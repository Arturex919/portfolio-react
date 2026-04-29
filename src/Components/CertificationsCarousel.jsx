import React, { useRef } from 'react';
import { certifications } from '../data/portfolioData';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

export default function CertificationsCarousel() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        const scrollAmount = 300;
        if (direction === 'left') {
            current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="cert-carousel-container position-relative py-4">
            <div className="d-flex justify-content-between align-items-center mb-4 px-2">
                <h2 className="h6 fw-bold text-uppercase mb-0 letter-spacing-1">Certificaciones Destacadas</h2>
                <div className="carousel-controls d-flex gap-2">
                    <button onClick={() => scroll('left')} className="btn-carousel" aria-label="Anterior">
                        <ChevronLeft size={18} />
                    </button>
                    <button onClick={() => scroll('right')} className="btn-carousel" aria-label="Siguiente">
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>

            <div 
                className="cert-scroll-wrapper d-flex gap-4 overflow-hidden" 
                ref={scrollRef}
                style={{ scrollSnapType: 'x mandatory' }}
            >
                {certifications.map((cert, idx) => (
                    <div 
                        key={idx} 
                        className="cert-card-minimal flex-shrink-0 animate-on-scroll"
                        style={{ width: '280px', scrollSnapAlign: 'start' }}
                    >
                        <div className="p-4 border border-color h-100 transition hover-shadow-soft">
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <div className="cert-icon-box bg-light p-2 text-accent">
                                    <Award size={20} />
                                </div>
                                <span className="x-small text-muted text-uppercase letter-spacing-1">{cert.icon}</span>
                            </div>
                            <h4 className="small fw-bold mb-1 leading-tight">{cert.name}</h4>
                            <p className="text-muted x-small mb-3">{cert.issuer}</p>
                            <div className="mt-auto border-top pt-2">
                                <span className="x-small text-uppercase text-accent fw-bold">{cert.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
