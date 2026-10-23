import { useEffect } from "react";

/**
 * Fait arriver en fondu, vers le haut, les éléments choisis quand on les atteint en défilant
 * (classes .arrive / .is-in, styles dans PageHero.css). Sans effet si l'appareil réduit les animations.
 */
export function useArrive(selector) {
  useEffect(() => {
    const items = document.querySelectorAll(selector);
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    items.forEach((el) => el.classList.add("arrive"));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -15% 0px" },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}
