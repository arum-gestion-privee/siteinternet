import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Fil de lecture : un trait court à gauche de l'écran, un point par partie de la page (éléments marqués
 * data-step="Nom de la partie"), le point de la partie en cours allumé. Un clic sur un point y mène.
 * Absent de Nos décryptages (liste et articles) et des pages de moins de deux parties.
 */
export default function ReadingRail() {
  const { pathname } = useLocation();
  const [steps, setSteps] = useState([]);
  const [active, setActive] = useState(0);
  const skip = /^\/(actualites|articles)(\/|$)/.test(pathname.replace(import.meta.env.BASE_URL.replace(/\/$/, ""), ""));

  useEffect(() => {
    if (skip) return setSteps([]);
    const els = [...document.querySelectorAll("main [data-step]")];
    setSteps(els.map((el) => el.dataset.step));
    let frame = 0;
    const update = () => {
      frame = 0;
      const mid = window.innerHeight / 2;
      let i = 0;
      els.forEach((el, k) => {
        if (el.getBoundingClientRect().top <= mid) i = k;
      });
      setActive(i);
    };
    const onScroll = () => frame || (frame = requestAnimationFrame(update));
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [pathname, skip]);

  if (steps.length < 2) return null;
  const go = (i) => document.querySelectorAll("main [data-step]")[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <nav className="rail" aria-label="Parties de la page" style={{ "--n": steps.length }}>
      {steps.map((label, i) => (
        <button
          key={label + i}
          type="button"
          className={"rail__dot" + (i === active ? " is-on" : "")}
          aria-label={label}
          aria-current={i === active ? "step" : undefined}
          title={label}
          onClick={() => go(i)}
        />
      ))}
    </nav>
  );
}
