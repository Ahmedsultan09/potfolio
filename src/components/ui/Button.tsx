import { cn } from "../../lib/utils";

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "ghost";
    as?: "a" | "button";
  };

export function Button({
  className,
  variant = "primary",
  as = "button",
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "btn",
    variant === "primary" && "btn-primary",
    variant === "secondary" && "btn-secondary",
    variant === "ghost" && "btn-ghost",
    className
  );

  if (as === "a") {
    return (
      <a className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
