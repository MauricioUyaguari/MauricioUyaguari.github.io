import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { getContent, localePath } from "@/content";

const t = getContent("en");

export const metadata: Metadata = {
  description: `${t.role} in ${t.location}. ${t.intro}`,
  alternates: { canonical: localePath.en, languages: { en: localePath.en, es: localePath.es } },
};

export default function Home() {
  return <HomePage locale="en" />;
}
