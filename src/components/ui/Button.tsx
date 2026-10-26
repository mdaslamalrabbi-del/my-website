import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: ReactNode;
  /** "glass" = Figma "Button/ White" (on dark), "dark" = "Button/ Black" (on light). */
  variant?: "glass" | "dark";
  className?: string;
};

function linkProps(href: string) {
  return /^https?:\/\//.test(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

/** Pill button with the circular arrow chip — 44px tall, 20/22 Switzer Light. */
export function Button({ href, children, variant = "dark", className }: ButtonProps) {
  return (
    <a
      href={href}
      {...linkProps(href)}
      className={cn(
        "group inline-flex h-11 shrink-0 items-center gap-2 overflow-hidden rounded-full py-2.5 pl-5 pr-1.5",
        "text-[20px] leading-[22px] font-light tracking-[-0.5px] whitespace-nowrap text-white/90",
        "backdrop-blur-[10px] transition-colors duration-300",
        variant === "glass"
          ? "bg-[rgba(248,247,245,0.2)] hover:bg-[rgba(248,247,245,0.3)]"
          : "bg-button hover:bg-[#1e1e1e]",
        className,
      )}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className={cn(
          "relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full",
          "shadow-[inset_-2px_-2px_8px_0_rgba(0,0,0,0.1),inset_2px_2px_8px_0_rgba(0,0,0,0.1)]",
          variant === "glass" ? "bg-black/20" : "bg-white/10",
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/arrow-right.svg"
          alt=""
          className="block transition-transform duration-500 ease-out-expo group-hover:translate-x-[3px]"
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
  const img = <img src={icon} alt="" className="block h-3.5 w-3.5" />;

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
