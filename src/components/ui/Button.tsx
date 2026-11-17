import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: ReactNode;
  /** "glass" = Figma "Button/ White" (on dark), "dark" = "Button/ Black" (on light),
   *  "dim" = see-through dark (Services), "grey" = see-through with dark text (Work Process). */
  variant?: "glass" | "dark" | "dim" | "grey";
  className?: string;
};

function linkProps(href: string) {
  return /^https?:\/\//.test(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

const surface = {
  glass: "bg-[rgba(248,247,245,0.2)] hover:bg-[rgba(248,247,245,0.3)] text-white/90",
  dark: "bg-button hover:bg-[#1e1e1e] text-white/90",
  dim: "bg-[rgba(14,14,14,0.3)] hover:bg-[rgba(14,14,14,0.5)] text-white/90",
  grey: "bg-[rgba(14,14,14,0.3)] hover:bg-[rgba(14,14,14,0.4)] text-ink",
} as const;

/**
 * Pill button with the circular arrow chip — 44px tall, 20/22 Switzer Light.
 * Hover: lifts 2px with a soft shadow, the chip turns lime and the arrow tilts up-right.
 */
export function Button({ href, children, variant = "dark", className }: ButtonProps) {
  return (
    <a
      href={href}
      {...linkProps(href)}
      className={cn(
        "group inline-flex h-11 shrink-0 items-center gap-2 overflow-hidden rounded-full py-2.5 pl-5 pr-1.5",
        "text-[20px] leading-[22px] font-light tracking-[-0.5px] whitespace-nowrap",
        "backdrop-blur-[10px] transition-[background-color,transform,box-shadow] duration-300 ease-out-expo",
        "hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(4,0,47,0.22)] focus-visible:-translate-y-0.5 active:translate-y-0 motion-reduce:hover:translate-y-0",
        surface[variant],
        className,
      )}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className={cn(
          "relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full",
          "shadow-[inset_-2px_-2px_8px_0_rgba(0,0,0,0.1),inset_2px_2px_8px_0_rgba(0,0,0,0.1)]",
          "transition-[background-color,transform] duration-300 ease-out-expo group-hover:scale-[1.06] group-hover:bg-brand-lime group-focus-visible:bg-brand-lime",
          variant === "glass" ? "bg-black/20" : "bg-white/10",
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={variant === "grey" ? "/icons/arrow-right-dark.svg" : "/icons/arrow-right.svg"}
          alt=""
          className="block transition-[transform,filter] duration-500 ease-out-expo group-hover:translate-x-[3px] group-hover:-rotate-45 group-hover:brightness-0 group-focus-visible:brightness-0"
        />
      </span>
    </a>
  );
}

type IconLinkProps = {
  href: string;
  label: string;
  icon: string;
  className?: string;
};

/** 42px glass circle with a 14px icon (nav social links). */
export function IconLink({ href, label, icon, className }: IconLinkProps) {
  const classes = cn(
    "flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full",
    "bg-[rgba(248,247,245,0.2)] backdrop-blur-[2px] transition-colors duration-300",
    href && "hover:bg-[rgba(248,247,245,0.32)]",
    className,
  );
  // eslint-disable-next-line @next/next/no-img-element
  const img = <img src={icon} alt={`${label} icon`} aria-hidden className="block h-3.5 w-3.5" />;

  if (!href) {
    return (
      <span className={classes} role="img" aria-label={label}>
        {img}
      </span>
    );
  }
  return (
    <a href={href} aria-label={label} className={classes} {...linkProps(href)}>
      {img}
    </a>
  );
}
