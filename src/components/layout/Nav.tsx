import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../data/profile";
import { ThemeToggle } from "../ThemeToggle";
import { cn } from "../../lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className={cn("site-nav", scrolled && "site-nav-scrolled")}>
      <div className="container-page flex h-[4.75rem] items-center justify-between">
        <a href="#top" className="brand-mark" aria-label="Ahmed Sultan, home">
          <span>AS</span>
          <span className="brand-mark-label">Portfolio</span>
        </a>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map((link, index) => (
            <a key={link.href} href={link.href} className="nav-link">
              <span aria-hidden="true">0{index + 1}</span>
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="icon-button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={cn("mobile-menu lg:hidden", open && "mobile-menu-open")}
        aria-hidden={!open}
      >
        <nav
          className="container-page flex flex-col py-8"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              <span aria-hidden="true">0{index + 1}</span>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
