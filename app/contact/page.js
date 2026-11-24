import ContactForm from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata = { title: "Contact", description: "Get in touch with Md. Zobayer Amin about UI/UX design, product management and developer roles." };

const links = [
  ["Email", site.email, `mailto:${site.email}`],
  ["LinkedIn", "zobayer-amin", site.linkedin],
  ["WhatsApp", site.whatsappDisplay, site.whatsapp],
  ["GitHub", "Sizer13-stack", site.github],
];

export default function Contact() {
  return (
    <section className="wrap py-16">
      <h1 className="display text-[clamp(2.8rem,8vw,6.5rem)]">Contact</h1>
      <p className="mt-6 max-w-xl text-xl leading-snug">I'm open to UI/UX design, product management and developer roles. Email is the fastest way to reach me.</p>
      <div className="mt-14 grid gap-14 lg:grid-cols-12">
        <ul className="border-t border-line lg:col-span-6">
          {links.map(([label, text, href]) => (
            <li key={label} className="border-b border-line">
              <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="group flex items-baseline justify-between gap-4 py-5">
                <span className="text-sm text-muted">{label}</span>
                <span className="display break-all text-[clamp(1.3rem,2.6vw,2rem)] group-hover:text-accent">{text}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:col-span-6"><ContactForm /></div>
      </div>
    </section>
  );
}
