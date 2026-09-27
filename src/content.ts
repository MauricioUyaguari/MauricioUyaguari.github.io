// Everything the site says lives here, so updating the site is mostly
// editing this file.

export const profile = {
  name: "Mauricio Uyaguari",
  role: "Software engineer",
  location: "Queens, New York",
  photo: "/mauricio.webp",
  intro:
    "I turn complex data workflows into clear, usable products, mostly with React and TypeScript. I care about the whole journey: the UX, the code, and getting it deployed.",
  links: {
    github: "https://github.com/MauricioUyaguari",
    linkedin: "https://www.linkedin.com/in/luismauriciouyaguari/",
    email: "mailto:lmauricio12@gmail.com",
    source: "https://github.com/MauricioUyaguari/MauricioUyaguari.github.io",
  },
};

export type Link = { label: string; href: string };

export const now = {
  title: "Legend",
  subtitle: "Open-source data platform · FINOS",
  description:
    "I'm a maintainer of Legend Studio, a browser-based tool for modeling, querying and exploring data. I helped open-source it through FINOS and still work on its React/TypeScript codebase.",
  tags: ["TypeScript", "React", "Open source"],
  links: [
    { label: "legend-studio on GitHub", href: "https://github.com/finos/legend-studio" },
    { label: "Legend docs", href: "https://legend.finos.org" },
    { label: "Tech talk: open-sourcing a monolith", href: "https://www.youtube.com/watch?v=tvJYOTmk53o" },
  ] satisfies Link[],
  recognition: "FINOS Newcomer of the Year (2021)",
};

export type Project = {
  name: string;
  year: string;
  description: string;
  tags: string[];
  links: Link[];
  isNew?: boolean;
};

export const projects: Project[] = [
  {
    name: "Chuchaqui",
    year: "2026",
    description:
      "Bill splitting for family parties, in Spanish and English. Built for my family in Ecuador, and the grown-up successor to SplitIt.",
    tags: ["Next.js", "Turso", "Vercel"],
    links: [{ label: "Live", href: "https://chuchaqui.vercel.app" }],
    isNew: true,
  },
  {
    name: "SplitIt",
    year: "2018",
    description:
      "The original: a single-page app for sharing bills with friends. Rails and PostgreSQL on the backend, React and Redux on the frontend.",
    tags: ["Rails", "PostgreSQL", "React"],
    links: [{ label: "GitHub", href: "https://github.com/MauricioUyaguari/SplitIt" }],
  },
  {
    name: "BitData",
    year: "2018",
    description: "Bitcoin price trends alongside the day's news, visualized with d3.",
    tags: ["d3", "JavaScript"],
    links: [{ label: "GitHub", href: "https://github.com/MauricioUyaguari/BitData" }],
  },
  {
    name: "Eye gaze tracking",
    year: "2016",
    description:
      "A hands-free way to use a computer for people with limited hand mobility, using gaze tracking through image processing. College honors project.",
    tags: ["MATLAB", "Image processing"],
    links: [{ label: "Report (PDF)", href: "/eye-gaze-tracking-report.pdf" }],
  },
];

export const moreProjects = {
  text: "Also: DataTree, which turns SQL tables into Ruby classes with SQL-like methods.",
  link: { label: "More on GitHub", href: "https://github.com/MauricioUyaguari" },
};

export const education = [
  { year: "2022", degree: "M.S. Computer Science", school: "Georgia Tech" },
  {
    year: "2016",
    degree: "B.S. Electrical Engineering (Honors) and Mathematics",
    school: "Trinity College",
  },
];

export const skills = ["React", "TypeScript", "JavaScript", "Java", "Node.js", "Python", "SQL"];

export const offTheClock = [
  { title: "Running", text: "10 marathons finished and counting. Always training for the next one." },
  { title: "Jima, Ecuador", text: "Family roots at the foot of the Huinara. Fluent in Spanish." },
  { title: "History books", text: "Always taking recommendations. Send them my way." },
];
