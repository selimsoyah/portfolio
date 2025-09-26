'use client';

import { useState, useEffect } from 'react';

export function useLazyAnimation(threshold = 0.1) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.disconnect(); // Stop observing once animation is triggered
        }
      },
      { 
        threshold,
        rootMargin: '100px 0px' // Start animation before element is fully visible
      }
    );

    const element = document.querySelector('[data-lazy-animate]');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return shouldAnimate;
}