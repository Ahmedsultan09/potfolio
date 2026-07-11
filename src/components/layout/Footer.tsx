import { profile } from "../../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React, Three.js &
          motion.
        </p>
        <div className="flex gap-4">
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
          <a href={profile.resumeUrl} className="hover:text-foreground" download>
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
