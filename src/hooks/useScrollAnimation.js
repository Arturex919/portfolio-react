import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * @param {Object} options - Intersection Observer options
 * @returns {Array} [ref, isVisible] - ref to attach to element, visibility state
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isVisible];
}

/**
 * Hook for multiple scroll animations with staggered delays
 * @param {number} count - Number of elements to observe
 * @param {Object} options - Intersection Observer options
 * @returns {Array} [refs, isVisible] - refs array and visibility states
 */
export function useScrollAnimations(count = 1, options = {}) {
  const refs = useRef([]);
  const [visibleStates, setVisibleStates] = useState(new Array(count).fill(false));

  useEffect(() => {
    refs.current = refs.current.slice(0, count);

    const observers = refs.current.map((element, index) => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisibleStates(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
          observer.unobserve(entry.target);
        }
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options
      });

      if (element) {
        observer.observe(element);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        const element = refs.current[index];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [count, options]);

  const setRefs = (index) => (el) => {
    refs.current[index] = el;
  };

  return [setRefs, visibleStates];
}
