"use client";

import { useState, useEffect, useMemo } from 'react';

export function useScrollSpy(
  selectors: string[],
  options?: IntersectionObserverInit
): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
          // Do not break; allow multiple intersecting entries to update, the last one will be the active one.
        }
      }
    }, options);

    const elements = selectors
      .map((selector) => document.getElementById(selector))
      .filter((element): element is HTMLElement => element !== null);

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [selectors, options]);

  return activeId;
}
