"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Vertical offset to travel, in px or any CSS length. */
  y?: number | string;
  x?: number | string;
  as?: "div" | "span";
  /** Animate on mount instead of when scrolled into view (above-the-fold content). */
  immediate?: boolean;
} & Pick<HTMLMotionProps<"div">, "aria-hidden">;

const ease = [0.16, 1, 0.3, 1] as const;

/** Single, restrained entrance animation used across the site. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  x = 0,
  as = "div",
  immediate = false,
  ...rest
}: RevealProps) {
  // Same props either way; the cast keeps TypeScript from intersecting the two element types.
  const Component = (as === "span" ? motion.span : motion.div) as typeof motion.div;
  const target = { opacity: 1, x: 0, y: 0 };

  return (
    <Component
      className={className}
      initial={{ opacity: 0, x, y }}
      {...(immediate
        ? { animate: target }
        : { whileInView: target, viewport: { once: true, margin: "0px 0px -10% 0px" } })}
      transition={{ duration: 0.9, ease, delay }}
      {...rest}
    >
      {children}
    </Component>
  );
}
