import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Download,
  Expand,
  FileCheck2,
  FileImage,
  Github,
  Linkedin,
  Menu,
  Moon,
  ScanLine,
  SlidersHorizontal,
  Sun,
  X,
} from "lucide-react";
import { Analytics } from "@vercel/analytics/react";
import { useTheme } from "../context/theme";
import { profile } from "../data/profile";
import { experience } from "../data/experience";
import {
  caseStudies,
  getPage,
  type CaseStudy,
  type Evidence,
} from "../data/case-studies";

function TextLink({
  href,
  children,
  external = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`text-link ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {external ? (
        <ArrowUpRight size={17} aria-hidden="true" />
      ) : (
        <ArrowRight size={17} aria-hidden="true" />
      )}
    </a>
  );
}

function Header({ home }: { home: boolean }) {
  const { theme, toggleTheme } = useTheme();
  const menuRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const prefix = home ? "" : "/";
  const links = [
    { href: `${prefix}#projects`, label: "Work" },
    { href: `${prefix}#experience`, label: "Experience" },
    { href: `${prefix}#contact`, label: "Contact" },
  ];
  useEffect(() => {
    const media = window.matchMedia("(min-width: 900px)");
    const close = () => {
      if (media.matches) menuRef.current?.close();
    };
    media.addEventListener("change", close);
    return () => media.removeEventListener("change", close);
  }, []);
  return (
    <header className="header">
      <div className="page-width header-inner">
        <a
          className="brand"
          href={home ? "#top" : "/"}
          aria-label="Ahmed Sultan, home"
        >
          <span className="monogram" aria-hidden="true">
            as<span>.</span>
          </span>
          <span>
            Ahmed Sultan<span className="brand-sub">Frontend developer</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((l) => (
            <a href={l.href} key={l.label}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a href={profile.resumeUrl} download className="nav-cv">
            Download CV <Download size={14} aria-hidden="true" />
          </a>
          <button
            className="theme-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            className="menu-button"
            aria-label="Open navigation"
            aria-expanded={open}
            aria-controls="navigation-dialog"
            onClick={() => {
              menuRef.current?.showModal();
              setOpen(true);
            }}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>
      <dialog
        id="navigation-dialog"
        ref={menuRef}
        className="nav-dialog"
        onClose={() => setOpen(false)}
        aria-label="Mobile navigation"
      >
        <div className="dialog-top">
          <span>Navigation</span>
          <button
            className="icon-control"
            aria-label="Close navigation"
            onClick={() => menuRef.current?.close()}
          >
            <X />
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {links.map((l) => (
            <a
              href={l.href}
              key={l.label}
              onClick={() => menuRef.current?.close()}
            >
              {l.label}
              <ArrowUpRight />
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download
            onClick={() => menuRef.current?.close()}
          >
            Download CV
            <Download />
          </a>
        </nav>
        <p>Cairo, Egypt · Open to opportunities</p>
      </dialog>
    </header>
  );
}

function ProductImage({
  image,
  eager = false,
  className = "",
}: {
  image: Evidence;
  eager?: boolean;
  className?: string;
}) {
  const stem = image.src.replace("/projects/", "/media/").replace(/\.png$/, "");
  return (
    <img
      className={className}
      src={`${stem}-960.webp`}
      srcSet={`${stem}-480.webp 480w, ${stem}-960.webp 960w, ${stem}-1600.webp 1600w`}
      sizes="(max-width: 700px) 92vw, (max-width: 1100px) 85vw, 1100px"
      alt={image.alt}
      width={1600}
      height={1000}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      decoding="async"
    />
  );
}

function ScanfitDiagram({ compact = false }: { compact?: boolean }) {
  const steps = [
    { icon: FileImage, label: "Import", detail: "Photos of your pages" },
    { icon: ScanLine, label: "Correct", detail: "Perspective & corners" },
    { icon: SlidersHorizontal, label: "Fit", detail: "An explicit byte limit" },
    { icon: FileCheck2, label: "Inspect", detail: "Review before export" },
  ];
  return (
    <div
      className={`scanfit-diagram ${compact ? "compact" : ""}`}
      role="img"
      aria-label="ScanFit workflow illustration: import photos, correct perspective, fit the byte limit, inspect, and accept a PDF. Export can also return cannot-fit."
    >
      <div className="diagram-top">
        <span>
          <i /> In your browser
        </span>
        <span>Workflow illustration</span>
      </div>
      <div className="scan-papers" aria-hidden="true">
        <div className="paper-back" />
        <div className="paper-front">
          <ScanLine size={30} strokeWidth={1.3} />
          <span className="paper-line" />
          <span className="paper-line short" />
          <span className="paper-line" />
          <span className="paper-stamp">
            <Check size={12} /> Ready for review
          </span>
        </div>
        <div className="pdf-chip">
          .pdf
          <ArrowDownRight size={20} />
        </div>
      </div>
      <div className="diagram-steps">
        {steps.map(({ icon: Icon, label, detail }, i) => (
          <div key={label}>
            <Icon size={19} strokeWidth={1.5} aria-hidden="true" />
            <span>
              <b>{label}</b>
              <small>{detail}</small>
            </span>
            {i < 3 && (
              <ArrowRight className="step-arrow" size={13} aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
      <div className="diagram-foot">
        <span>Accept the PDF</span>
        <span>Cannot fit? An explicit result.</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="hero page-width">
      <div className="hero-topline">
        <p className="eyebrow">React, TypeScript & Next.js</p>
        <span className="availability">
          <i /> Open to opportunities
        </span>
      </div>
      <div className="hero-layout">
        <div>
          <h1>
            React & TypeScript
            <br className="desktop-break" /> interfaces for
            <br className="desktop-break" /> <em>complex SaaS products.</em>
          </h1>
          <p className="hero-description">
            I build dashboards, multi-step workflows, and English/Arabic
            interfaces.{" "}
            <span>Building production applications since 2023.</span>
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              View selected work <ArrowDownRight size={19} aria-hidden="true" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="button button-outline"
            >
              Download CV <Download size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <aside className="hero-aside">
          <div className="portrait">
            <img
              src="/media/portrait-320.webp"
              srcSet="/media/portrait-320.webp 320w, /media/portrait-640.webp 640w"
              sizes="180px"
              alt="Ahmed Sultan, frontend developer in Cairo"
              width={180}
              height={210}
            />
            <span className="portrait-note">A little about me ↙</span>
          </div>
          <p>
            Frontend work across dashboards, data visualization, and bilingual
            products.
          </p>
          <span className="location">
            Cairo, Egypt <span aria-hidden="true">↗</span>
          </span>
          <a href={`mailto:${profile.email}`} className="hero-email">
            Say hello <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </aside>
      </div>
      <div className="hero-bottom">
        <p>
          Selected experience{" "}
          <span>LeadsMart / TactiSport / Big Data Egypt</span>
        </p>
        <a href="#projects" aria-label="Scroll to selected work">
          <ArrowDown size={17} aria-hidden="true" />
          <span>Explore the work</span>
        </a>
      </div>
    </section>
  );
}

function ProjectFacts({ project }: { project: CaseStudy }) {
  return (
    <ul className="project-facts" aria-label={`${project.title} capabilities`}>
      {project.facts.map((f) => (
        <li key={f}>
          <span aria-hidden="true">↗</span>
          {f}
        </li>
      ))}
    </ul>
  );
}

function SelectedWork() {
  return (
    <section id="projects" className="work-section page-width">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / Selected work</p>
          <h2>
            Complex work.
            <br />
            <em>Clear interfaces.</em>
          </h2>
        </div>
        <p>
          A closer look at the products I’ve worked on, the parts I built, and
          the decisions behind the interfaces. Start with the work most relevant
          to your team.
        </p>
      </div>
      {caseStudies.slice(0, 3).map((p, i) => (
        <article key={p.id} className={`feature feature-${p.id}`}>
          <div className="feature-visual">
            {p.cover ? (
              <a
                href={`/work/${p.id}`}
                aria-label={`Read the ${p.title} case study`}
              >
                <div className="visual-label">
                  <span>{p.title}</span>
                  <span>
                    {i === 0
                      ? "Tactical report / Pressure"
                      : "Product dashboard"}
                  </span>
                </div>
                <ProductImage image={p.cover} />
              </a>
            ) : (
              <ScanfitDiagram compact />
            )}
          </div>
          <div className="feature-content">
            <div className="feature-title-row">
              <p className="eyebrow">{p.category}</p>
              <span className="work-number">0{i + 1}</span>
            </div>
            <h3>
              <a href={`/work/${p.id}`}>
                {p.title}
                <ArrowUpRight aria-hidden="true" />
              </a>
            </h3>
            <p className="feature-headline">{p.headline}</p>
            <p className="feature-summary">{p.summary}</p>
            <p className="contribution">
              <span>My contribution</span>
              {p.contribution}
            </p>
            <ProjectFacts project={p} />
            <div className="tech-list">
              {p.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <TextLink href={`/work/${p.id}`}>Explore the case study</TextLink>
          </div>
        </article>
      ))}
      <div className="more-heading">
        <p className="eyebrow">More ways I build</p>
        <span>Websites & operational tools</span>
      </div>
      <div className="more-work">
        {caseStudies.slice(3).map((p) => (
          <article key={p.id}>
            <a
              className="more-image"
              href={`/work/${p.id}`}
              aria-label={`Read the ${p.title} case study`}
            >
              <ProductImage image={p.cover!} />
            </a>
            <p className="eyebrow">{p.category}</p>
            <h3>
              <a href={`/work/${p.id}`}>
                {p.title}
                <ArrowUpRight size={24} aria-hidden="true" />
              </a>
            </h3>
            <p>
              {p.summary} {p.contribution}
            </p>
            <TextLink href={`/work/${p.id}`}>View project</TextLink>
          </article>
        ))}
      </div>
    </section>
  );
}

const jobs = experience.map((job) => ({
  ...job,
  href: job.caseStudy,
  description: job.summary,
}));

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="page-width experience-layout">
        <div className="experience-intro">
          <p className="eyebrow">02 / Experience</p>
          <h2>
            Built with teams.
            <br />
            <em>Used in real work.</em>
          </h2>
          <p>
            Professional frontend work since December 2023, across advertising,
            football analytics, healthcare, and field service.
          </p>
          <p className="experience-note">
            I work with designers and backend engineers to turn product
            requirements into working interfaces.
          </p>
          <TextLink href={profile.resumeUrl}>Read my CV</TextLink>
        </div>
        <div className="job-list">
          {jobs.map((j) => (
            <article key={j.company}>
              <div className="job-meta">
                <span>{j.period}</span>
                <span>{j.type}</span>
              </div>
              <h3>
                {j.company}
                {j.href && (
                  <a href={j.href} aria-label={`View work at ${j.company}`}>
                    <ArrowUpRight size={24} />
                  </a>
                )}
              </h3>
              <p className="job-title">{j.title}</p>
              <p>{j.description}</p>
            </article>
          ))}
        </div>
      </div>
      <span id="testimonials" className="anchor-alias" />
    </section>
  );
}

function Capabilities() {
  const items = [
    {
      title: "SaaS workflows",
      text: "Campaigns, leads, billing, and service operations. I build the screens and API integrations that connect the steps of a task, with navigation matched to the user’s role.",
      project: "LeadsMart",
      href: "/work/leadsmart",
    },
    {
      title: "Data visualization",
      text: "Pitch renderers, interactive reports, and dashboards. I use spatial context and focused views to help people inspect relationships within complex data.",
      project: "TactiSport",
      href: "/work/tactisport",
    },
    {
      title: "English / Arabic UI",
      text: "Bilingual interfaces need more than translated labels. My work includes right-to-left navigation, responsive layouts, and language-aware presentation across product and website screens.",
      project: "SECTION",
      href: "/work/section",
    },
    {
      title: "Reusable architecture",
      text: "Shared components, deliberate state boundaries, and TypeScript interfaces. ScanFit separates a framework-independent processing core from its optional React components so integration can fit the application.",
      project: "ScanFit",
      href: "/work/scanfit",
    },
  ];
  return (
    <section id="skills" className="capabilities page-width">
      <span id="courses" className="anchor-alias" />
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / How I can help</p>
          <h2>
            The details behind
            <br />
            <em>a useful interface.</em>
          </h2>
        </div>
        <p>
          React and TypeScript are my core tools. These are the problems I use
          them to solve, with a project behind each capability.
        </p>
      </div>
      <div className="capability-grid">
        {items.map((c, i) => (
          <article key={c.title}>
            <span className="capability-number">0{i + 1}</span>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
            <TextLink href={c.href}>See {c.project}</TextLink>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="page-width">
        <div className="contact-top">
          <p className="eyebrow">Let’s talk about your product</p>
          <span className="availability">
            <i /> Open to opportunities
          </span>
        </div>
        <div className="contact-layout">
          <h2>
            Complex product?
            <br />
            <em>Let’s make it clear.</em>
          </h2>
          <div>
            <p>
              I’m looking for frontend developer opportunities where I can
              contribute to a product and work closely with designers,
              engineers, and the people using it.
            </p>
            <p>
              Based in Cairo. Open to roles in Egypt, international remote work
              from Egypt, and relocation with visa sponsorship.
            </p>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}
              <ArrowUpRight aria-hidden="true" />
            </a>
            <div className="contact-links">
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} aria-hidden="true" />
                GitHub
              </a>
              <a href={profile.resumeUrl} download>
                <Download size={16} aria-hidden="true" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery({ project }: { project: CaseStudy }) {
  const [index, setIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const current = project.screenshots[index];
  if (!current) return null;
  return (
    <section id="walkthrough" className="walkthrough">
      <p className="eyebrow">A closer look</p>
      <h2>Walk through the work.</h2>
      <p className="walkthrough-intro">
        Real product screens, with context. No account needed.
      </p>
      <div
        className="gallery-tabs"
        role="group"
        aria-label="Choose a walkthrough step"
      >
        {project.screenshots.map((s, i) => (
          <button
            key={s.src}
            aria-pressed={i === index}
            onClick={() => setIndex(i)}
          >
            <ProductImage image={s} />
            <span>
              <b>0{i + 1}</b>
              {s.title}
            </span>
          </button>
        ))}
      </div>
      <figure className="gallery-main">
        <button
          className="gallery-expand"
          onClick={() => dialog.current?.showModal()}
          aria-label={`Enlarge screenshot: ${current.title}`}
        >
          <ProductImage image={current} />
          <span>
            <Expand size={15} aria-hidden="true" /> Enlarge screenshot
          </span>
        </button>
        <figcaption aria-live="polite">
          <span>
            0{index + 1} / {current.title}
          </span>
          <p>{current.caption}</p>
        </figcaption>
      </figure>
      <dialog ref={dialog} className="image-dialog" aria-label={current.title}>
        <div className="dialog-top">
          <span>{current.title}</span>
          <button
            className="icon-control"
            aria-label="Close enlarged screenshot"
            onClick={() => dialog.current?.close()}
          >
            <X />
          </button>
        </div>
        <div className="full-image" tabIndex={0} role="region" aria-label="Full-resolution screenshot; scroll to explore">
          <img
            src={current.src}
            alt={current.alt}
            width={1600}
            height={1000}
            loading="lazy"
          />
        </div>
        <p>{current.caption}</p>
        <a
          href={current.src}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          Open original image
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </dialog>
    </section>
  );
}

function CaseStudyPage({ project: p }: { project: CaseStudy }) {
  const next = caseStudies[(caseStudies.indexOf(p) + 1) % caseStudies.length];
  return (
    <>
      <section id="top" className="case-hero page-width">
        <a className="back-link" href="/#projects">
          <ArrowLeft size={16} aria-hidden="true" /> Back to selected work
        </a>
        <div className="case-topline">
          <p className="eyebrow">{p.category}</p>
          <span className="case-status">{p.status}</span>
        </div>
        <p className="case-name">{p.title}</p>
        <h1>{p.headline}</h1>
        <p className="case-summary">{p.summary}</p>
        <dl className="case-meta">
          <div>
            <dt>My role</dt>
            <dd>{p.role}</dd>
          </div>
          <div>
            <dt>For</dt>
            <dd>{p.audience}</dd>
          </div>
          <div>
            <dt>Period / stage</dt>
            <dd>{p.period}</dd>
          </div>
        </dl>
        <div className="case-tools">
          <div className="tech-list">
            {p.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <div className="case-external">
            {p.links.map((l) => (
              <TextLink key={l.href} href={l.href} external>
                {l.label}
              </TextLink>
            ))}
          </div>
        </div>
        <div className="case-cover">
          {p.cover ? (
            <ProductImage image={p.cover} eager />
          ) : (
            <ScanfitDiagram />
          )}
        </div>
        <ProjectFacts project={p} />
      </section>
      <div className="case-body page-width">
        <aside className="case-toc">
          <p className="eyebrow">In this case study</p>
          <nav aria-label="Case study sections">
            <a href="#problem">The problem</a>
            <a href="#responsibility">My responsibility</a>
            <a href="#approach">Implementation</a>
            {p.screenshots.length > 0 && <a href="#walkthrough">Walkthrough</a>}
            <a href="#result">Scope & limits</a>
          </nav>
          <a href={`mailto:${profile.email}`} className="toc-contact">
            Ask me about this
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </aside>
        <div className="case-story">
          {p.sections.map((s) => (
            <div key={s.id}>
              {s.id === "result" && <Gallery project={p} />}
              <section id={s.id} className="story-section">
                <p className="eyebrow">
                  {s.id === "problem"
                    ? "The problem"
                    : s.id === "responsibility"
                      ? "My responsibility"
                      : s.id === "approach"
                        ? "Implementation & tradeoffs"
                        : "Scope & limits"}
                </p>
                <h2>{s.title}</h2>
                {s.paragraphs.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </section>
            </div>
          ))}
        </div>
      </div>
      <section className="next-project page-width">
        <p className="eyebrow">Another side of my work</p>
        <a href={`/work/${next.id}`}>
          <span>
            {next.title}
            <small>{next.category}</small>
          </span>
          <ArrowUpRight aria-hidden="true" />
        </a>
      </section>
      <Contact />
    </>
  );
}

export function Portfolio({ pathname }: { pathname: string }) {
  const { project, notFound } = getPage(pathname);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  useEffect(() => {
    setAnalyticsEnabled(
      import.meta.env.PROD &&
        window.location.hostname === "ahmedsultan.is-a.dev",
    );
  }, []);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header home={!project && !notFound} />
      <main id="main-content">
        {notFound ? (
          <section className="not-found page-width" id="top">
            <p className="eyebrow">404 / Page not found</p>
            <h1>
              This page isn’t
              <br />
              <em>part of the portfolio.</em>
            </h1>
            <p>
              The link may have changed. You can find my selected work on the
              homepage.
            </p>
            <a href="/" className="button button-primary">
              Back to the portfolio
              <ArrowRight size={18} />
            </a>
          </section>
        ) : project ? (
          <CaseStudyPage project={project} />
        ) : (
          <>
            <Hero />
            <SelectedWork />
            <Experience />
            <Capabilities />
            <Contact />
          </>
        )}
      </main>
      <footer className="footer page-width">
        <p>© {new Date().getFullYear()} Ahmed Sultan</p>
        <p>Thoughtfully built with React & TypeScript.</p>
        <a href="#top">
          Back to top <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </footer>
      {analyticsEnabled && <Analytics />}
    </>
  );
}
