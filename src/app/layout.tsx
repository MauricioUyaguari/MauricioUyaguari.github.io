import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { profile } from "@/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const description = `${profile.role} in ${profile.location}. ${profile.intro}`;

export const metadata: Metadata = {
  title: profile.name,
  description,
  openGraph: {
    title: profile.name,
    description,
    images: [{ url: profile.photo, width: 800, height: 800, alt: profile.name }],
    type: "profile",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
