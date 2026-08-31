import { ArrowUp } from "lucide-react";
import { profile } from "../../data/profile";

export function Footer() {
  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(new Date());

  return (
    <footer className="site-footer">
      <div className="container-page flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <p>
          © {year} {profile.name}. Built with React and TypeScript.
        </p>
        <a href="#top" className="back-to-top">
          Back to top
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
