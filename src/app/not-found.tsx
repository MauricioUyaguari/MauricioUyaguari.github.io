import Link from "next/link";
import { HuinaraMini } from "@/components/huinara-mini";
import { getContent } from "@/content";

// Shown for any unknown URL. Bilingual, since we can't tell which language
// the visitor came from.
export default function NotFound() {
  const en = getContent("en").notFound;
  const es = getContent("es").notFound;

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-6 px-5 text-center">
      <div className="text-6xl" aria-hidden="true">
        🏃
      </div>
      <p className="font-mono text-sm text-muted">404</p>
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{en.title}</h1>
        <p className="text-muted">{en.text}</p>
      </div>
      <div lang="es" className="space-y-1 border-t border-border pt-4">
        <p className="font-medium">{es.title}</p>
        <p className="text-sm text-muted">{es.text}</p>
      </div>
      <div className="flex gap-3 text-sm">
        <Link href="/" className="rounded-lg bg-primary px-4 py-2 font-medium text-white hover:opacity-90 dark:text-background">
          {en.home}
        </Link>
        <Link href="/es" lang="es" className="rounded-lg border border-border px-4 py-2 font-medium hover:border-primary">
          {es.home}
        </Link>
      </div>
      <HuinaraMini className="mt-4 h-6 w-auto text-muted" />
    </main>
  );
}
