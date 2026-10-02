'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * ScrollReveal — wires up IntersectionObserver + MutationObserver
 * to reliably add `.is-visible` to any `.reveal` element when it enters
 * or is already within the viewport. Re-scans on route changes and hydration.
 */
export function useScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px 80px 0px',
      }
    );

    const scanAndObserve = () => {
      const targets = document.querySelectorAll('.reveal:not(.is-visible)');
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in the viewport or slightly below, reveal it
        if (rect.top < window.innerHeight + 60) {
          el.classList.add('is-visible');
        } else {
          observer.observe(el);
        }
      });
    };

    // Immediate scan
    scanAndObserve();

    // Re-scan after short hydration intervals
    const timer1 = setTimeout(scanAndObserve, 150);
    const timer2 = setTimeout(scanAndObserve, 600);

    // Watch for dynamic DOM changes
    const mutationObserver = new MutationObserver(() => {
      scanAndObserve();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Safety fallback: reveal any near-viewport elements after 1.5s
    const fallbackTimer = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 1.5) {
          el.classList.add('is-visible');
        }
      });
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(fallbackTimer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);
}

/**
 * ScrollRevealProvider — wraps layout children to activate scroll reveals across the app.
 */
export function ScrollRevealProvider({ children }: { children: React.ReactNode }) {
  useScrollReveal();
  return <>{children}</>;
}
