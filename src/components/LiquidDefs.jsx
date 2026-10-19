import { useEffect, useRef } from "react";
import useReducedMotion from "../hooks/useReducedMotion.js";

/**
 * Filtre SVG partagé pour l'effet « liquid glass » de la barre de navigation
 * (même principe que le site ERNEST 1895). Une seule turbulence animée en rAF.
 */
export default function LiquidDefs() {
  const turbRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = (now - start) / 1000;
      const bf = 0.009 + Math.sin(t * 0.6) * 0.004;
      turbRef.current?.setAttribute("baseFrequency", `${bf.toFixed(4)} ${(bf * 1.35).toFixed(4)}`);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  return (
    <svg className="svg-defs" aria-hidden="true" focusable="false">
      <defs>
        <filter id="liquid-glass" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            ref={turbRef}
            type="fractalNoise"
            baseFrequency="0.009 0.012"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="1.1" result="soft" />
          <feDisplacementMap in="SourceGraphic" in2="soft" scale="14" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  );
}
