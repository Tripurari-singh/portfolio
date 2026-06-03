import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Full Stack & DevOps Engineer" },
      { name: "description", content: "Engineer shipping real-time collaborative platforms, scalable APIs, and Kubernetes-ready infrastructure." },
      { property: "og:title", content: "Portfolio — Full Stack & DevOps Engineer" },
      { property: "og:description", content: "Engineer shipping real-time collaborative platforms, scalable APIs, and Kubernetes-ready infrastructure." },
    ],
  }),
  component: Index,
});

const SKILLS = {
  Languages: ["TypeScript", "JavaScript", "C++", "SQL"],
  Frontend: ["React.js", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "REST APIs", "WebSockets"],
  Databases: ["PostgreSQL", "Prisma", "MongoDB"],
  DevOps: ["Docker", "Kubernetes", "Linux", "CI/CD", "AWS"],
  Tools: ["Git", "GitHub", "Turborepo"],
};

const PROJECTS = [
  {
    name: "Drawspace",
    tag: "Real-Time Collaborative Diagramming",
    date: "Feb 2026 — Present",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "WebSockets", "Kubernetes"],
    bullets: [
      "Real-time collaborative whiteboard inside a Turborepo monorepo.",
      "WebSocket-based room sync with canvas persistence and JWT/RBAC + Zod-validated REST APIs.",
      "GitHub Actions CI/CD; frontend on Vercel, backend on Railway.",
      "Kubernetes-ready: deployed locally on Kind with Deployments, Services, Ingress, ConfigMaps & Secrets.",
    ],
    accent: "from-emerald-400 to-cyan-400",
  },
  {
    name: "Threadly",
    tag: "Full-Stack Social Media Platform",
    date: "Jan 2026 — Mar 2026",
    stack: ["Next.js", "PostgreSQL", "Prisma", "Clerk", "shadcn/ui", "Docker"],
    bullets: [
      "Posts, comments, likes and follows on a scalable relational schema.",
      "Auth with Clerk, protected routes and role-based access.",
      "Responsive UI with Tailwind + shadcn/ui, containerized with Docker.",
      "Deployed on a local Kind cluster with full Kubernetes primitives.",
    ],
    accent: "from-cyan-400 to-sky-400",
  },
  {
    name: "Teachio",
    tag: "Full-Stack Course Selling Platform",
    date: "Oct 2025 — Nov 2025",
    stack: ["MERN", "TypeScript", "MongoDB", "Tailwind CSS", "shadcn/ui"],
    bullets: [
      "MERN app with modular TypeScript backend and 7–8 normalized MongoDB schemas.",
      "Secure auth, role-based authorization and end-to-end CRUD workflows.",
      "20+ reusable React components powering instructor & student dashboards.",
    ],
    accent: "from-sky-400 to-emerald-400",
  },
];

function useMouseGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);
  return ref;
}

function TypedRole() {
  const roles = ["Full Stack Engineer", "DevOps Engineer", "Real-Time Systems Builder", "Cloud Native Tinkerer"];
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = roles[i];
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDel(false); setI((i + 1) % roles.length); }
      }
    }, del ? 40 : 75);
    return () => clearTimeout(t);
  }, [text, del, i]);
  return (
    <span className="text-gradient">
      {text}
      <span className="animate-blink text-primary">▍</span>
    </span>
  );
}

function Index() {
  const heroRef = useMouseGlow();
  const allSkills = Object.values(SKILLS).flat();

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-mono text-sm flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary animate-glow" />
            <span className="text-gradient font-bold">~/tripurari</span>
          </a>
          <div className="hidden md:flex gap-8 text-sm text-muted-foreground font-mono">
            {["about", "education", "stack", "work", "contact"].map((s, n) => (
              <a key={s} href={`#${s}`} className="hover:text-primary transition-colors">
                <span className="text-primary/60">0{n + 1}.</span> {s}
              </a>
            ))}
          </div>
          <a href="mailto:tripurari5821@gmail.com" className="font-mono text-xs px-4 py-2 rounded border border-primary/40 text-primary hover:bg-primary/10 transition">
            let's talk →
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" ref={heroRef} className="relative min-h-screen flex items-center grid-bg overflow-hidden"
        style={{
          backgroundImage: `radial-gradient(circle 400px at var(--mx,50%) var(--my,50%), oklch(0.82 0.18 155 / 0.18), transparent 70%), linear-gradient(oklch(0.82 0.18 155 / 0.07) 1px, transparent 1px), linear-gradient(90deg, oklch(0.82 0.18 155 / 0.07) 1px, transparent 1px)`,
          backgroundSize: "auto, 40px 40px, 40px 40px",
        }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative">
          <div className="font-mono text-sm text-primary mb-6 flex items-center gap-2">
            <span className="inline-block h-px w-12 bg-primary" />
            hello world, I'm
          </div>
          <h1 className="font-[Space_Grotesk] text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.9] tracking-tight">
            Tripurari<br />
            <span className="text-gradient">Singh.</span>
          </h1>
          <div className="mt-8 text-2xl md:text-3xl font-mono h-10">
            <TypedRole />
          </div>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Full Stack & DevOps Engineer. I design and ship production systems — from React/Next.js interfaces down
            to Dockerized, Kubernetes-ready backends on Linux. Real-time sync, secure APIs, CI/CD that just works.
          </p>

          {/* contact strip */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
            <a href="mailto:tripurari5821@gmail.com" className="hover:text-primary transition">✉ tripurari5821@gmail.com</a>
            <a href="tel:+918126172122" className="hover:text-primary transition">☎ +91 81261 72122</a>
            <a href="https://www.linkedin.com/in/tripurari-singh-aa793b251/" target="_blank" rel="noreferrer" className="hover:text-primary transition">in/ linkedin</a>
            <a href="https://github.com/Tripurari-singh" target="_blank" rel="noreferrer" className="hover:text-primary transition">gh/ Tripurari-singh</a>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#work" className="group relative px-8 py-4 rounded-md bg-primary text-primary-foreground font-mono text-sm font-semibold overflow-hidden animate-glow">
              <span className="relative z-10">View Projects →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition" />
            </a>
            <a href="#contact" className="px-8 py-4 rounded-md border border-border hover:border-primary font-mono text-sm transition">
              Get in touch
            </a>
          </div>

          {/* floating tech chips */}
          <div className="mt-20 grid grid-cols-3 md:grid-cols-6 gap-4 max-w-3xl">
            {["Next.js", "Node.js", "Docker", "K8s", "Postgres", "AWS"].map((t, i) => (
              <div key={t} className="font-mono text-xs px-3 py-2 rounded-md bg-card/60 border border-border backdrop-blur text-center animate-float"
                style={{ animationDelay: `${i * 0.2}s` }}>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-muted-foreground flex flex-col items-center gap-2">
          <span>scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* MARQUEE */}
      

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-32">
        <SectionHeader num="01" title="About" />
        <div className="grid md:grid-cols-5 gap-12 mt-12">
          <div className="md:col-span-3 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a <span className="text-foreground font-medium">Full Stack & DevOps Engineer</span> who likes
              shipping the whole vertical — a clean UI, a strict typed API behind it, and the boring-but-critical
              infrastructure that keeps it alive at 3am.
            </p>
            <p>
              Most recently at <span className="text-primary font-medium">Launchit.today</span>, I built features
              across Next.js and Node/Express, designed JWT-secured REST APIs with RBAC, containerized services with
              Docker and ran them on Linux-based cloud infra with CI/CD pipelines.
            </p>
            <p>
              On the side I build things like <span className="text-foreground">real-time collaborative whiteboards</span>,
              social platforms, and course marketplaces — usually as an excuse to play with Kubernetes (Kind, kubectl,
              Ingress, ConfigMaps, the works).
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="rounded-xl border border-border bg-card p-6 font-mono text-xs space-y-2">
              <div className="flex gap-2 mb-4">
                <span className="h-3 w-3 rounded-full bg-destructive/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-primary/70" />
                <span className="ml-2 text-muted-foreground">~/whoami.sh</span>
              </div>
              <p><span className="text-primary">$</span> cat profile.json</p>
              <pre className="text-foreground leading-relaxed">{`{
  "role": "Full Stack + DevOps",
  "focus": ["realtime", "infra"],
  "shipping_at": "Launchit.today",
  "stack_depth": "frontend → k8s",
  "loves": ["typed APIs", "tiny PRs"]
}`}</pre>
              <p><span className="text-primary">$</span> <span className="animate-blink">_</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* STACK */}
      {/* EDUCATION */}
      <section id="education" className="max-w-7xl mx-auto px-6 py-32">
        <SectionHeader num="02" title="Education" />
        <div className="mt-12 relative rounded-2xl border border-border bg-card p-8 md:p-10 overflow-hidden group hover:border-primary/40 transition">
          <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <div className="font-mono text-xs text-primary mb-2">B.Tech · CSE</div>
              <h3 className="font-[Space_Grotesk] text-2xl md:text-3xl font-bold">
                Computer Science & Engineering
              </h3>
              <div className="text-muted-foreground mt-1">
                Specialization in <span className="text-foreground">Cyber Security & Digital Forensics</span>
              </div>
              <div className="mt-4 text-lg">VIT Bhopal University</div>
            </div>
            <div className="md:text-right space-y-3 shrink-0">
              <div className="font-mono text-xs text-muted-foreground">October 2022 — May 2026</div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border border-primary/30 bg-primary/5">
                <span className="font-mono text-xs text-muted-foreground">CGPA</span>
                <span className="font-[Space_Grotesk] text-2xl font-bold text-gradient">8.24<span className="text-muted-foreground text-base">/10</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="max-w-7xl mx-auto px-6 py-32">
        <SectionHeader num="03" title="Stack" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {Object.entries(SKILLS).map(([cat, items], i) => (
            <div key={cat}
              className="group relative rounded-xl border border-border bg-card p-6 overflow-hidden hover:border-primary/50 transition">
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition" />
              <div className="font-mono text-xs text-primary mb-2">0{i + 1}</div>
              <h3 className="font-[Space_Grotesk] text-2xl font-bold mb-4">{cat}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map(s => (
                  <span key={s} className="text-xs font-mono px-2.5 py-1 rounded bg-secondary border border-border text-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" className="max-w-7xl mx-auto px-6 py-32">
        <SectionHeader num="04" title="Selected Work" />
        <div className="mt-16 space-y-32">
          {PROJECTS.map((p, i) => (
            <div key={p.name} className="grid md:grid-cols-12 gap-8 items-center">
              <div className={`md:col-span-5 ${i % 2 ? "md:order-2" : ""}`}>
                <div className={`relative aspect-[4/3] rounded-2xl border border-border overflow-hidden bg-gradient-to-br ${p.accent} p-1`}>
                  <div className="h-full w-full rounded-xl bg-card grid-bg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-radial opacity-50" />
                    <div className="font-[Space_Grotesk] text-6xl md:text-7xl font-bold text-gradient relative">
                      {p.name}
                    </div>
                    <div className="absolute bottom-4 left-4 font-mono text-xs text-muted-foreground">
                      // {p.tag.toLowerCase()}
                    </div>
                  </div>
                </div>
              </div>
              <div className={`md:col-span-7 ${i % 2 ? "md:order-1" : ""}`}>
                <div className="font-mono text-xs text-primary mb-2">{p.date}</div>
                <h3 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold mb-2">{p.name}</h3>
                <div className="text-muted-foreground italic mb-6">{p.tag}</div>
                <ul className="space-y-3 text-muted-foreground">
                  {p.bullets.map(b => (
                    <li key={b} className="flex gap-3">
                      <span className="text-primary mt-1.5">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map(s => (
                    <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-7xl mx-auto px-6 py-32">
        <SectionHeader num="05" title="Experience" />
        <div className="mt-12 relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
          <div className="pl-14 relative">
            <div className="absolute left-2.5 top-2 h-3 w-3 rounded-full bg-primary animate-glow" />
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="font-[Space_Grotesk] text-3xl font-bold">
                Launchit.today
              </h3>
              <span className="font-mono text-sm text-muted-foreground">March 2024 — Jan 2026</span>
            </div>
            <div className="text-primary italic mb-6">Full Stack & DevOps Engineer</div>
            <ul className="space-y-3 text-muted-foreground max-w-3xl">
              <li className="flex gap-3"><span className="text-primary mt-1.5">▸</span>Developed and shipped production features across Next.js frontend and Node.js/Express backend, owning core user-facing workflows end to end.</li>
              <li className="flex gap-3"><span className="text-primary mt-1.5">▸</span>Designed RESTful APIs with JWT-based authentication, input validation and role-based access control for secure data handling.</li>
              <li className="flex gap-3"><span className="text-primary mt-1.5">▸</span>Containerized services with Docker and managed cloud deployments on Linux-based infrastructure, ensuring consistent dev/prod environments.</li>
              <li className="flex gap-3"><span className="text-primary mt-1.5">▸</span>Collaborated in an agile team — triaged production bugs, reviewed PRs and maintained CI/CD pipelines for automated delivery.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-32 text-center">
        <div className="font-mono text-sm text-primary mb-4">06. what's next</div>
        <h2 className="font-[Space_Grotesk] text-5xl md:text-7xl font-bold mb-6">
          Let's build <span className="text-gradient">something</span>.
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
          I'm open to full-stack and platform/DevOps roles, freelance gigs, and weird real-time experiments.
          The fastest way to reach me is email.
        </p>
        <a href="mailto:tripurari5821@gmail.com"
          className="inline-block px-10 py-5 rounded-md bg-primary text-primary-foreground font-mono font-semibold animate-glow hover:scale-105 transition">
          say hello →
        </a>
      </section>

      <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted-foreground">
        designed & built — running on caffeine, kubectl and curiosity.
      </footer>
    </div>
  );
}

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-primary text-lg">{num}.</span>
      <h2 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold whitespace-nowrap">{title}</h2>
      <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
    </div>
  );
}
