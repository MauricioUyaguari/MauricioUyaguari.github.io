import Image from "next/image";
import { HuinaraMini } from "@/components/huinara-mini";
import {
  education,
  moreProjects,
  now,
  offTheClock,
  profile,
  projects,
  skills,
  type Link,
} from "@/content";

function ExternalLink({ link }: { link: Link }) {
  const isExternal = link.href.startsWith("http");
  return (
    <a
      href={link.href}
      {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
      className="text-sm font-medium text-primary underline-offset-4 hover:underline"
    >
      {link.label} ↗
    </a>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-16 border-t border-border py-10">
      <h2 className="eyebrow">{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-5">
      <nav className="flex items-center justify-between py-5 text-sm">
        <a href="#" className="font-semibold tracking-tight">
          mauricio uyaguari
        </a>
        <div className="flex gap-5 text-muted">
          <a href="#now" className="hover:text-foreground">Now</a>
          <a href="#projects" className="hover:text-foreground">Projects</a>
          <a href="#about" className="hover:text-foreground">About</a>
        </div>
      </nav>

      <main>
        <header className="flex flex-col-reverse gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl space-y-5">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{profile.name}</h1>
              <p className="mt-2 text-lg text-muted">
                {profile.role} · {profile.location}
              </p>
            </div>
            <p className="text-lg leading-relaxed">{profile.intro}</p>
            <div className="flex flex-wrap gap-2">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90 dark:text-background"
              >
                GitHub
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary"
              >
                LinkedIn
              </a>
              <a
                href={profile.links.email}
                className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary"
              >
                Email
              </a>
            </div>
          </div>
          <Image
            src={profile.photo}
            alt={profile.name}
            width={176}
            height={176}
            priority
            className="size-32 rounded-full object-cover ring-4 ring-accent sm:size-44"
          />
        </header>

        <Section id="now" title="Now">
          <div className="card space-y-3">
            <div>
              <h3 className="text-lg font-semibold">{now.title}</h3>
              <p className="text-sm text-muted">{now.subtitle}</p>
            </div>
            <p className="leading-relaxed">{now.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {now.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              {now.links.map((l) => (
                <ExternalLink key={l.href} link={l} />
              ))}
            </div>
            <p className="text-sm text-muted">🏅 {now.recognition}</p>
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-3 sm:grid-cols-2">
            {projects.map((p) => (
              <article key={p.name} className="card flex flex-col gap-2">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-semibold">{p.name}</h3>
                  {p.isNew ? (
                    <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-stone-900">
                      New
                    </span>
                  ) : (
                    <span className="text-xs text-muted">{p.year}</span>
                  )}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4 pt-1">
                  {p.links.map((l) => (
                    <ExternalLink key={l.href} link={l} />
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            {moreProjects.text} <ExternalLink link={moreProjects.link} />
          </p>
        </Section>

        <Section id="about" title="Education and skills">
          <dl className="grid grid-cols-[4rem_1fr] gap-x-4 gap-y-3">
            {education.map((e) => (
              <div key={e.degree} className="contents">
                <dt className="text-muted">{e.year}</dt>
                <dd>
                  {e.degree} · <span className="text-muted">{e.school}</span>
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {skills.map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </Section>

        <Section id="off-the-clock" title="Off the clock">
          <div className="grid gap-3 sm:grid-cols-3">
            {offTheClock.map((item) => (
              <div key={item.title} className="card">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>

      <footer className="flex items-center justify-between border-t border-border py-6 text-xs text-muted">
        <span>Built with Next.js · Deployed on Vercel</span>
        <span className="flex items-center gap-2">
          <HuinaraMini className="h-5 w-auto" />
          Jima, Ecuador
        </span>
      </footer>
    </div>
  );
}
