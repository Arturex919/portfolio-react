import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollReveal() {
    const location = useLocation();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { 
            threshold: 0.05,
            rootMargin: '0px 0px -20px 0px' 
        });

        // Delay slightly to ensure DOM is ready after route change
        const timeoutId = setTimeout(() => {
            const elements = document.querySelectorAll('.animate-on-scroll');
            elements.forEach(el => observer.observe(el));
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, [location.pathname]);
}
