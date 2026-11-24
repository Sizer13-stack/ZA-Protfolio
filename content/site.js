export const site = {
  name: "Md. Zobayer Amin",
  short: "Zobayer Amin",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: "zobayeramin13@gmail.com",
  github: "https://github.com/Sizer13-stack",
  linkedin: "https://www.linkedin.com/in/zobayer-amin-301784309/",
  location: "Dhaka, Bangladesh",
  whatsapp: "https://wa.me/8801797850002",
  whatsappDisplay: "+880 1797 850002",
  title: "Developer, UI/UX designer, product thinker",
  description:
    "Final-year CSE student in Dhaka building full-stack web products and designing the interfaces for them. Next.js, React, Node.js, Figma.",
};

export const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/design", label: "Design" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export const roles = [
  {
    id: "developer",
    label: "Developer",
    text: "I build full-stack products with Next.js, Express and MongoDB: sign-in, roles, payments, dashboards.",
    proof: [{ slug: "mentorlagbe", note: "Three roles, Stripe checkout" }, { slug: "booknook", note: "Borrowing with live copy counts" }],
  },
  {
    id: "designer",
    label: "UI/UX designer",
    text: "I design in Figma from first screen to last: sign-up, job search, payments and disputes.",
    proof: [{ href: "/design", note: "A work marketplace in 47 screens and states" }],
  },
  {
    id: "product",
    label: "Product thinker",
    text: "I start with the person's problem: how a citizen finds the right government service, or why hybrid work is spread over five tools.",
    proof: [{ slug: "nagorik-sohay", note: "Civic service guide, bilingual" }, { slug: "raum", note: "A spatial workspace concept" }],
  },
];

export const tools = ["JavaScript", "React", "Next.js", "Node.js", "Tailwind CSS", "Figma"];
export const alsoUsed = ["Express", "MongoDB", "BetterAuth", "Stripe"];
