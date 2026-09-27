import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { SITE_NAME, getContent, localePath } from "@/content";

const t = getContent("es");
const description = `${t.role} en ${t.location}. ${t.intro}`;

export const metadata: Metadata = {
  description,
  openGraph: { title: SITE_NAME, description, locale: "es_EC" },
  alternates: { canonical: localePath.es, languages: { en: localePath.en, es: localePath.es } },
};

export default function HomeEs() {
  return <HomePage locale="es" />;
}
