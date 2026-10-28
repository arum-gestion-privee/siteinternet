import { useEffect } from "react";

/**
 * Fait arriver en fondu, vers le haut, les éléments choisis quand on les atteint en défilant
 * (classes .arrive / .is-in, styles dans PageHero.css). Sans effet si l'appareil réduit les animations.
 * afterScroll : rien n'apparaît avant que l'on ait commencé à défiler, même si c'est déjà à l'écran.
 */
export function useArrive(selector, { afterScroll = false } = {}) {
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
    const start = () => items.forEach((el) => io.observe(el));
    if (afterScroll && window.scrollY < 10) {
      window.addEventListener("scroll", start, { once: true, passive: true });
    } else start();
    return () => {
      window.removeEventListener("scroll", start);
      io.disconnect();
    };
  }, [selector, afterScroll]);
}

/**
 * Éclaire les éléments choisis quand ils passent au milieu de l'écran (classe .is-lit), et les ramène
 * en retrait quand ils en sortent (classe .will-light posée par le script : sans script, tout reste éclairé).
 */
export function useLight(selector) {
  useEffect(() => {
    const items = document.querySelectorAll(selector);
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    items.forEach((el) => el.classList.add("will-light"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("is-lit", e.isIntersecting)),
      { rootMargin: "-35% 0px -35% 0px" },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}
