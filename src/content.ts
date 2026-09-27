// Everything the site says lives here, in English and Spanish, so updating
// the site is mostly editing this file. Shared facts (links, years, tags)
// are defined once; only the words are translated.

export type Locale = "en" | "es";
export const localePath: Record<Locale, string> = { en: "/", es: "/es" };

export type Link = { label: string; href: string };

export const SITE_NAME = "Mauricio Uyaguari";
export const PHOTO = "/mauricio.webp";

export const EMAIL = "lmauricio12@gmail.com";

export const socials = {
  github: "https://github.com/MauricioUyaguari",
  linkedin: "https://www.linkedin.com/in/luismauriciouyaguari/",
  email: `mailto:${EMAIL}`,
  source: "https://github.com/MauricioUyaguari/MauricioUyaguari.github.io",
};

// Marathons for the running section, newest first. The section is hidden
// while this list is empty. `placeEs` is only needed when the Spanish name differs.
export type Race = {
  name: string;
  place: string;
  placeEs?: string;
  year: number;
  time?: string;
  highlight?: "won" | "pb";
};
export const races: Race[] = [
  { name: "BMW Dallas Marathon", place: "Dallas, TX", year: 2024 },
  { name: "Buffalo Marathon", place: "Buffalo, NY", year: 2024 },
  { name: "TCS New York City Marathon", place: "New York, NY", placeEs: "Nueva York, NY", year: 2023 },
  { name: "Zurich Marató Barcelona", place: "Barcelona, Spain", placeEs: "Barcelona, España", year: 2023 },
  { name: "Life Time Miami Marathon", place: "Miami, FL", year: 2023 },
  { name: "Amica Newport Marathon", place: "Newport, RI", year: 2022, time: "3:16", highlight: "pb" },
  { name: "Maratón Medellín", place: "Medellín, Colombia", year: 2022 },
  { name: "Millbrook Marathon", place: "Millbrook, NY", year: 2022, highlight: "won" },
  { name: "Adirondack Marathon", place: "Schroon Lake, NY", year: 2021 },
  { name: "Yonkers Marathon", place: "Yonkers, NY", year: 2019 },
];

const LEGEND_LINKS = {
  github: "https://github.com/finos/legend-studio",
  docs: "https://legend.finos.org",
  talk: "https://www.youtube.com/watch?v=tvJYOTmk53o",
};

type Project = {
  name: string;
  year: string;
  tags: string[];
  links: { href: string; label: Record<Locale, string> }[];
  description: Record<Locale, string>;
  isNew?: boolean;
};

const projects: Project[] = [
  {
    name: "Chuchaqui",
    year: "2026",
    tags: ["Next.js", "Turso", "Vercel"],
    links: [{ href: "https://chuchaqui.vercel.app", label: { en: "Live", es: "Ver en vivo" } }],
    isNew: true,
    description: {
      en: "Bill splitting for family parties, in Spanish and English. Built for my family in Ecuador, and the grown-up successor to SplitIt.",
      es: "Para dividir los gastos de las fiestas familiares, en español e inglés. Hecha para mi familia en Ecuador: la versión adulta de SplitIt.",
    },
  },
  {
    name: "SplitIt",
    year: "2018",
    tags: ["Rails", "PostgreSQL", "React"],
    links: [{ href: "https://github.com/MauricioUyaguari/SplitIt", label: { en: "GitHub", es: "GitHub" } }],
    description: {
      en: "The original: a single-page app for sharing bills with friends. Rails and PostgreSQL on the backend, React and Redux on the frontend.",
      es: "La original: una app de una sola página para dividir cuentas con amigos. Rails y PostgreSQL en el backend, React y Redux en el frontend.",
    },
  },
  {
    name: "BitData",
    year: "2018",
    tags: ["d3", "JavaScript"],
    links: [{ href: "https://github.com/MauricioUyaguari/BitData", label: { en: "GitHub", es: "GitHub" } }],
    description: {
      en: "Bitcoin price trends alongside the day's news, visualized with d3.",
      es: "Tendencias del precio de bitcoin junto a las noticias del día, visualizadas con d3.",
    },
  },
  {
    name: "Eye gaze tracking",
    year: "2016",
    tags: ["MATLAB", "Image processing"],
    links: [
      { href: "/eye-gaze-tracking-report.pdf", label: { en: "Report (PDF)", es: "Informe (PDF)" } },
    ],
    description: {
      en: "A hands-free way to use a computer for people with limited hand mobility, using gaze tracking through image processing. College honors project.",
      es: "Una forma de usar la computadora sin las manos, para personas con movilidad limitada, siguiendo la mirada con procesamiento de imágenes. Proyecto de honores de la universidad.",
    },
  },
];

const skills = ["React", "TypeScript", "JavaScript", "Java", "Node.js", "Python", "SQL"];

const en = {
  htmlLang: "en",
  switchTo: { label: "ES", title: "Ver en español" },
  role: "Software Engineer",
  location: "Queens, New York",
  intro:
    "I turn complex data workflows into clear, usable products, mostly with React and TypeScript. I care about the whole journey: the UX, the code, and getting it deployed.",
  buttons: { github: "GitHub", linkedin: "LinkedIn", email: "Email" },
  resume: {
    label: "Resume on request",
    title: "Opens an email to request my resume",
    subject: "Resume request",
    body: "Hi Mauricio,\n\nI came across your website and would like to request a copy of your resume.\n\nThanks,\n",
  },
  nav: { now: "Now", projects: "Projects", running: "Running", about: "About" },
  sections: {
    now: "Now",
    projects: "Projects",
    running: "Running",
    about: "Education and skills",
    offTheClock: "Off the clock",
  },
  now: {
    title: "Legend",
    subtitle: "Open-source data platform · FINOS",
    description:
      "I'm a maintainer of Legend Studio, a browser-based tool for modeling, querying and exploring data. I helped open-source it through FINOS and still work on its React/TypeScript codebase.",
    tags: ["TypeScript", "React", "Open source"],
    links: [
      { label: "legend-studio on GitHub", href: LEGEND_LINKS.github },
      { label: "Legend docs", href: LEGEND_LINKS.docs },
      { label: "Tech talk: open-sourcing a monolith", href: LEGEND_LINKS.talk },
    ] as Link[],
    recognition: "FINOS Newcomer of the Year (2021)",
  },
  newBadge: "New",
  moreProjects: {
    text: "Also: DataTree, which turns SQL tables into Ruby classes with SQL-like methods.",
    link: { label: "More on GitHub", href: socials.github } as Link,
  },
  running: {
    summary: (count: number) =>
      `${count} marathons across three countries, and counting. One win, and a 3:16 personal best.`,
    won: "🏆 Winner",
    pb: "Personal best",
  },
  education: [
    { year: "2022", degree: "M.S. Computer Science", school: "Georgia Tech" },
    { year: "2016", degree: "B.S. Electrical Engineering (Honors) and Mathematics", school: "Trinity College" },
  ],
  offTheClock: [
    { title: "Travel", text: "New countries, new people. Barcelona and Medellín doubled as marathon trips." },
    { title: "Jima, Ecuador", text: "Family roots at the foot of the Huinara. Fluent in Spanish." },
    { title: "History books", text: "Always taking recommendations. Send them my way." },
  ],
  footer: { source: "Source", place: "Jima, Ecuador" },
  notFound: {
    title: "This page went for a long run.",
    text: "It hasn't come back yet. Probably somewhere past mile 20.",
    home: "Back to the homepage",
  },
};

type Words = typeof en;

const es: Words = {
  htmlLang: "es",
  switchTo: { label: "EN", title: "View in English" },
  role: "Ingeniero de software",
  location: "Queens, Nueva York",
  intro:
    "Convierto flujos de datos complejos en productos claros y fáciles de usar, sobre todo con React y TypeScript. Me importa todo el recorrido: la experiencia de usuario, el código y ponerlo en producción.",
  buttons: { github: "GitHub", linkedin: "LinkedIn", email: "Correo" },
  resume: {
    label: "CV a pedido",
    title: "Abre un correo para pedir mi CV",
    subject: "Solicitud de CV",
    body: "Hola Mauricio,\n\nVi tu sitio web y me gustaría pedirte una copia de tu CV.\n\nGracias,\n",
  },
  nav: { now: "Ahora", projects: "Proyectos", running: "Maratones", about: "Sobre mí" },
  sections: {
    now: "Ahora",
    projects: "Proyectos",
    running: "Maratones",
    about: "Educación y habilidades",
    offTheClock: "Fuera del trabajo",
  },
  now: {
    title: "Legend",
    subtitle: "Plataforma de datos de código abierto · FINOS",
    description:
      "Soy mantenedor de Legend Studio, una herramienta en el navegador para modelar, consultar y explorar datos. Ayudé a publicarla como código abierto a través de FINOS y sigo trabajando en su código React/TypeScript.",
    tags: ["TypeScript", "React", "Código abierto"],
    links: [
      { label: "legend-studio en GitHub", href: LEGEND_LINKS.github },
      { label: "Documentación de Legend", href: LEGEND_LINKS.docs },
      { label: "Charla técnica (en inglés)", href: LEGEND_LINKS.talk },
    ],
    recognition: "FINOS Newcomer of the Year (2021)",
  },
  newBadge: "Nuevo",
  moreProjects: {
    text: "También: DataTree, que convierte tablas SQL en clases de Ruby con métodos al estilo SQL.",
    link: { label: "Más en GitHub", href: socials.github },
  },
  running: {
    summary: (count: number) =>
      `${count} maratones en tres países, y contando. Una victoria y una mejor marca personal de 3:16.`,
    won: "🏆 Ganador",
    pb: "Mejor marca personal",
  },
  education: [
    { year: "2022", degree: "Maestría en Ciencias de la Computación", school: "Georgia Tech" },
    { year: "2016", degree: "Ingeniería Eléctrica (con honores) y Matemáticas", school: "Trinity College" },
  ],
  offTheClock: [
    { title: "Viajar", text: "Nuevos países, gente nueva. Barcelona y Medellín también fueron viajes de maratón." },
    { title: "Jima, Ecuador", text: "Mis raíces familiares, a los pies del Huinara." },
    { title: "Libros de historia", text: "Siempre acepto recomendaciones. ¡Mándenmelas!" },
  ],
  footer: { source: "Código", place: "Jima, Ecuador" },
  notFound: {
    title: "Esta página salió a correr un maratón.",
    text: "Todavía no regresa. Debe andar por el kilómetro 35.",
    home: "Volver al inicio",
  },
};

export type Content = Words & {
  projects: (Omit<Project, "description" | "links"> & { description: string; links: Link[] })[];
  skills: string[];
};

export function getContent(locale: Locale): Content {
  const words = locale === "es" ? es : en;
  return {
    ...words,
    projects: projects.map((p) => ({
      ...p,
      description: p.description[locale],
      links: p.links.map((l) => ({ href: l.href, label: l.label[locale] })),
    })),
    skills,
  };
}
