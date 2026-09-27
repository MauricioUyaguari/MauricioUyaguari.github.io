import Image from "next/image";
import NextLink from "next/link";
import { HuinaraMini } from "@/components/huinara-mini";
import {
  EMAIL,
  PHOTO,
  SITE_NAME,
  getContent,
  localePath,
  races,
  socials,
  type Link,
  type Locale,
} from "@/content";

// Set at build time; every deploy refreshes it.
const YEAR = new Date().getFullYear();

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

export function HomePage({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const otherLocale: Locale = locale === "en" ? "es" : "en";
  const resumeRequestHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    t.resume.subject,
  )}&body=${encodeURIComponent(t.resume.body)}`;

  return (
    <div lang={t.htmlLang} className="mx-auto max-w-3xl px-5">
      <nav className="flex items-center justify-between gap-4 py-5 text-sm">
        <a href="#" className="font-semibold tracking-tight">
          mauricio uyaguari
        </a>
        <div className="flex items-center gap-4 text-muted sm:gap-5">
          <a href="#now" className="hidden hover:text-foreground sm:inline">{t.nav.now}</a>
          <a href="#projects" className="hover:text-foreground">{t.nav.projects}</a>
          {races.length > 0 && (
            <a href="#running" className="hover:text-foreground">{t.nav.running}</a>
          )}
          <a href="#about" className="hidden hover:text-foreground sm:inline">{t.nav.about}</a>
          <NextLink
            href={localePath[otherLocale]}
            hrefLang={otherLocale}
            title={t.switchTo.title}
            className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-foreground hover:border-primary"
          >
            {t.switchTo.label}
          </NextLink>
        </div>
      </nav>

      <main>
        <header className="flex flex-col-reverse gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl space-y-5">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{SITE_NAME}</h1>
              <p className="mt-2 text-lg text-muted">
                {t.role} · {t.location}
              </p>
              <p className="mt-1 text-sm text-muted">{t.employer}</p>
            </div>
            <p className="text-lg leading-relaxed">{t.intro}</p>
            <div className="flex flex-wrap gap-2">
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90 dark:text-background"
              >
                {t.buttons.github}
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary"
              >
                {t.buttons.linkedin}
              </a>
              <a
                href={socials.email}
                className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary"
              >
                {t.buttons.email}
              </a>
              <a
                href={resumeRequestHref}
                title={t.resume.title}
                className="rounded-lg border border-dashed border-border px-4 py-2 text-sm font-medium text-muted hover:border-primary hover:text-foreground"
              >
                {t.resume.label} ✉
              </a>
            </div>
          </div>
          <Image
            src={PHOTO}
            alt={SITE_NAME}
            width={176}
            height={176}
            priority
            className="size-32 rounded-full object-cover ring-4 ring-accent sm:size-44"
          />
        </header>

        <Section id="now" title={t.sections.now}>
          <div className="card space-y-3">
            <div>
              <h3 className="text-lg font-semibold">{t.now.title}</h3>
              <p className="text-sm text-muted">{t.now.subtitle}</p>
            </div>
            <p className="leading-relaxed">{t.now.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {t.now.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              {t.now.links.map((l) => (
                <ExternalLink key={l.href} link={l} />
              ))}
            </div>
            <p className="text-sm text-muted">🏅 {t.now.recognition}</p>
          </div>
        </Section>

        <Section id="projects" title={t.sections.projects}>
          <div className="grid gap-3 sm:grid-cols-2">
            {t.projects.map((p) => (
              <article key={p.name} className="card flex flex-col gap-2">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-semibold">{p.name}</h3>
                  {p.isNew ? (
                    <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-stone-900">
                      {t.newBadge}
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
            {t.moreProjects.text} <ExternalLink link={t.moreProjects.link} />
          </p>
        </Section>

        {races.length > 0 && (
          <Section id="running" title={t.sections.running}>
            <p className="mb-4 text-lg">{t.running.summary(races.length)}</p>
            <ol className="grid gap-2 sm:grid-cols-2">
              {races.map((r) => (
                <li
                  key={`${r.name}-${r.year}`}
                  className={`card flex items-center gap-3 py-3 ${r.highlight ? "border-accent border-2" : ""}`}
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-stone-900">
                    {`'${String(r.year).slice(2)}`}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-medium">{r.name}</span>
                    <span className="text-sm text-muted">
                      {(locale === "es" && r.placeEs) || r.place} · {r.year}
                    </span>
                    {r.highlight && (
                      <span className="mt-1 block w-fit rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-stone-900">
                        {r.highlight === "won" ? t.running.won : `${t.running.pb} · ${r.time}`}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ol>
          </Section>
        )}

        <Section id="about" title={t.sections.about}>
          <dl className="grid grid-cols-[4rem_1fr] gap-x-4 gap-y-3">
            {t.education.map((e) => (
              <div key={e.degree} className="contents">
                <dt className="text-muted">{e.year}</dt>
                <dd>
                  {e.degree} · <span className="text-muted">{e.school}</span>
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {t.skills.map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </Section>

        <Section id="off-the-clock" title={t.sections.offTheClock}>
          <div className="grid gap-3 sm:grid-cols-3">
            {t.offTheClock.map((item) => (
              <div key={item.title} className="card">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>

      <footer className="flex items-center justify-between border-t border-border py-6 text-xs text-muted">
        <span>
          © {YEAR} {SITE_NAME} ·{" "}
          <a
            href={socials.source}
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            {t.footer.source}
          </a>
        </span>
        <span className="flex items-center gap-2">
          <HuinaraMini className="h-5 w-auto" />
          {t.footer.place}
        </span>
      </footer>
    </div>
  );
}
