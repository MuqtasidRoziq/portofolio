"use client";

import { useLayoutEffect } from "react";

/**
 * Reveals every [data-reveal] element as it enters the viewport.
 * The hidden state is added by JS, so content stays visible if the script fails.
 */
export function ScrollReveal() {
  useLayoutEffect(() => {
    const items = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (!items.length) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const order = new Map<Element, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    for (const item of items) {
      const group = item.closest("section") ?? document.body;
      const index = order.get(group) ?? 0;
      order.set(group, index + 1);

      item.style.transitionDelay = `${Math.min(index, 5) * 70}ms`;
      item.classList.add("reveal");
      observer.observe(item);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
