'use client';

import { useEffect, useRef } from 'react';

/**
 * ScrollReveal — wires up IntersectionObserver to add `.is-visible`
 * to any `.reveal` element within the container when it enters the viewport.
 * Call once in your layout or per-page.
 */
export function useScrollReveal() {
  const observed = useRef(new Set<Element>());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
            observed.current.delete(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const targets = document.querySelectorAll('.reveal:not(.is-visible)');
    targets.forEach((el) => {
      if (!observed.current.has(el)) {
        observed.current.add(el);
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);
}

/**
 * ScrollRevealProvider — drop anywhere to activate scroll reveals.
 * Re-runs whenever the component mounts so dynamic content is picked up.
 */
export function ScrollRevealProvider({ children }: { children: React.ReactNode }) {
  useScrollReveal();
  return <>{children}</>;
}
