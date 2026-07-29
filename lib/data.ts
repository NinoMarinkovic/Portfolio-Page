export const profile = {
  name: "Nino Marinkovic",
  role: "Student",
  location: "Reutte, Tyrol, Austria",
  school: "HTL Reutte — Industrial Engineering & Business Informatics",
  tagline:
    "I build backend systems and deploy them like they have to survive production — because I make them.",
  summary:
    "Student at HTL Reutte studying Industrial Engineering and Business Informatics, building full-stack applications end to end: schema design, auth, CI/CD, and hardened cloud deployment. Preparing for a career as a Software Developer/ Software Engineer.",
  // TODO: replace with your real contact details before deploying
  email: "marinkovic.nino@outlook.com",
  github: "https://github.com/NinoMarinkovic",
  linkedin: "www.linkedin.com/in/ninomarinkovic",
};

export const nav = [
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Path", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
];

export type Project = {
  slug: string;
  name: string;
  status: "deployed" | "in-development";
  pitch: string;
  description: string;
  stack: string[];
  highlights: string[];
  // TODO: swap in your real repo / live URLs
  repoUrl: string;
  liveUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "wm-predictor-2026",
    name: "WM Predictor 2026",
    status: "deployed",
    pitch: "A full-stack World Cup prediction platform, deployed and hardened for real users.",
    description:
      "Full-stack World Cup prediction web app built as my flagship project — from schema to security hardening to production deployment. Users predict match outcomes, track a live leaderboard, and follow the tournament through an auto-progressing knockout bracket.",
    stack: ["Flask", "MySQL (Aiven)", "Docker", "Render", "GitHub Actions CI"],
    highlights: [
      "Knockout bracket visualizer covering R32 through the Final and third-place match, built as its own Flask blueprint with auto-progression logic",
      "Admin panel for result submission that drives the bracket forward automatically",
      "Auth system with rate-limiting and XSS protection",
      "Leaderboard and user profile pages",
      "Deployed on Render against a managed Aiven MySQL instance, with CI running on every push",
      "Rewrote Git history to remove a sensitive .env commit after an early mistake",
    ],
    repoUrl: "https://github.com/NinoMarinkovic/World-Cup-2026-Prediciton-App",
    featured: true,
  },
  {
    slug: "finance-tracker",
    name: "Finance Tracker",
    status: "deployed",
    pitch: "A production-configured personal finance tracker with a real deployment pipeline.",
    description:
      "Flask-based finance tracker taken through a full production setup rather than left as a local script: gunicorn as the app server, environment-based config, and SSL correctly configured against a managed Aiven MySQL database.",
    stack: ["Flask", "MySQL (Aiven)", "Render", "Gunicorn"],
    highlights: [
      "Full production deployment: gunicorn, dotenv-based config, environment variables",
      "Aiven MySQL with SSL configured correctly for a managed cloud database",
      "Professionalized README and MIT license for public visibility",
    ],
    repoUrl: "https://github.com/NinoMarinkovic/finance-tracker",
    featured: true,
  },
  {
    slug: "gamblers-luck",
    name: "Gambler's Luck",
    status: "deployed",
    pitch: "A Java OOP project focused on clean architecture over feature count.",
    description:
      "Java project built around a deliberate three-class architecture and procedural generation, used to practice object-oriented design principles rather than just shipping features.",
    stack: ["Java", "OOP"],
    highlights: [
      "Three-class architecture separating concerns cleanly",
      "Procedural generation logic",
      "Professionalized README and MIT license",
    ],
    repoUrl: "https://github.com/NinoMarinkovic/GamblersLuck",
    featured: false,
  },
  {
    slug: "tic-tac-toe-minimax",
    name: "Tic Tac Toe — Minimax AI",
    status: "deployed",
    pitch: "An unbeatable Tic Tac Toe opponent, built to understand game-tree search.",
    description:
      "Tic Tac Toe implementation with a minimax-based AI opponent, built to understand adversarial search rather than to reinvent a solved game.",
    stack: ["Python", "Minimax"],
    highlights: [
      "Unbeatable AI via minimax game-tree evaluation",
      "Professionalized README and MIT license",
    ],
    repoUrl: "https://github.com/NinoMarinkovic/tictactoe-minimax",
    featured: false,
  },
];

export type StackCategory = {
  label: string;
  items: string[];
};

export const stack: StackCategory[] = [
  {
    label: "Languages",
    items: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    label: "Backend & Data",
    items: ["Flask", "MySQL", "REST APIs", "Auth & rate-limiting"],
  },
  {
    label: "Cloud & DevOps",
    items: ["Docker", "Render", "Aiven", "GitHub Actions CI", "Linux (fundamentals)"],
  },
  {
    label: "Tooling",
    items: ["Git", "Bootstrap"],
  },
];

export type RoadmapEntry = {
  tag: string;
  date: string;
  title: string;
  description: string;
  status: "done" | "in-progress" | "planned";
};

// Framed as a commit/branch log — a format that fits how the work actually happened.
export const roadmap: RoadmapEntry[] = [
  {
    tag: "main",
    date: "2025",
    title: "CS50",
    description: "Completed Harvard's CS50 — computer science fundamentals.",
    status: "done",
  },
  {
    tag: "main",
    date: "2025",
    title: "IBM SkillsBuild — Cloud Computing Fundamentals",
    description: "Completed the cloud fundamentals track, added to LinkedIn.",
    status: "done",
  },
  {
    tag: "main",
    date: "2025",
    title: "AWS SimuLearn — Cloud Practitioner",
    description: "Completed the AWS Cloud Practitioner simulation track.",
    status: "done",
  },
  {
    tag: "feature/wm-predictor",
    date: "2025–2026",
    title: "WM Predictor 2026 shipped to production",
    description:
      "Built, hardened, and deployed the flagship project — Flask, Aiven MySQL, Docker, Render, GitHub Actions CI.",
    status: "done",
  },
  {
    tag: "feature/internship",
    date: "Summer 2026",
    title: "Internship — Plansee Group / IBF Solutions",
    description: "Targeting a summer 2026 internship to build production experience.",
    status: "planned",
  },
];
