/**
 * useScrollReveal — IntersectionObserver hook for scroll-triggered animations.
 * Applies `.visible` class to `.reveal`, `.reveal-slide-left`, `.reveal-scale` elements.
 */
import { useEffect, useRef, useCallback } from 'react';

export function useScrollReveal(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const revealClasses = ['.reveal', '.reveal-slide-left', '.reveal-scale'];
    const selector = revealClasses.join(',');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px', ...options }
    );

    // If the container itself has a reveal class, observe it
    if (el.matches(selector)) {
      observer.observe(el);
    }

    // Observe all descendant reveal elements
    el.querySelectorAll(selector).forEach((child) => {
      observer.observe(child);
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * useTiltCard — Mouse-tracking 3D perspective tilt for a card element.
 * Applies CSS transform based on mouse position relative to card center.
 */
export function useTiltCard(intensity = 8) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(var(--perspective-card)) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg) translateY(-4px)`;
  }, [intensity]);

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = '';
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return ref;
}
