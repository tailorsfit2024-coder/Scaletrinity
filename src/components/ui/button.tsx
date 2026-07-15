import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ButtonBaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  showArrow?: boolean;
};

const variantClasses: Record<NonNullable<ButtonBaseProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-r from-electric-500 to-cyan-500 text-white shadow-glow hover:shadow-glow-cyan hover:brightness-110",
  secondary:
    "glass text-mist-100 hover:bg-white/[0.08] hover:border-white/20",
  ghost: "text-mist-200 hover:text-white",
};

const sizeClasses: Record<NonNullable<ButtonBaseProps["size"]>, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-out active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 cursor-pointer";

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  showArrow = true,
  ...rest
}: ButtonBaseProps & { href: string }) {
  return (
    <Link
      href={href}
      className={cn(base, variantClasses[variant], sizeClasses[size], className)}
      {...rest}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </Link>
  );
}

export function ButtonEl({
  children,
  variant = "primary",
  size = "md",
  className,
  showArrow = false,
  type = "button",
  ...rest
}: ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={cn(base, variantClasses[variant], sizeClasses[size], className)}
      {...rest}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </button>
  );
}
