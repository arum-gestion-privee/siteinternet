import { forwardRef } from "react";
import { Link } from "react-router-dom";
import "./LiquidButton.css";

/**
 * Pastille « liquid glass ».
 * as="link" → <Link to>, as="a" → <a href>, sinon <button>.
 * variant: "glass" (clair translucide) | "navy" (plein) | "ghost" (contour).
 */
const LiquidButton = forwardRef(function LiquidButton(
  {
    as = "button",
    to,
    href,
    variant = "glass",
    size = "md",
    icon = null,
    iconRight = null,
    className = "",
    children,
    ...rest
  },
  ref,
) {
  const cls = `liquid-btn liquid-btn--${variant} liquid-btn--${size} ${className}`.trim();
  const inner = (
    <>
      <span className="liquid-btn__sheen" aria-hidden="true" />
      {icon && <span className="liquid-btn__icon">{icon}</span>}
      <span className="liquid-btn__label">{children}</span>
      {iconRight && <span className="liquid-btn__icon">{iconRight}</span>}
    </>
  );

  if (as === "link") {
    return (
      <Link ref={ref} to={to} className={cls} {...rest}>
        {inner}
      </Link>
    );
  }
  if (as === "a") {
    return (
      <a ref={ref} href={href} className={cls} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <button ref={ref} className={cls} {...rest}>
      {inner}
    </button>
  );
});

export default LiquidButton;
