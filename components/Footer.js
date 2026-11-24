import Link from "next/link";
import { nav, site } from "@/content/site";
export default function Footer() {
  return (
    <footer className="mt-32 border-t border-line">
      <div className="wrap grid gap-10 py-12 md:grid-cols-[1fr_auto]">
        <div>
          <p className="display text-2xl">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm text-muted">Developer and UI/UX designer based in {site.location}. Final-year Computer Science and Engineering student at Daffodil International University.</p>
        </div>
        <div className="grid grid-cols-2 gap-x-14 gap-y-2 text-sm">
          <ul className="space-y-2">{nav.map((n) => <li key={n.href}><Link className="link-u" href={n.href}>{n.label}</Link></li>)}</ul>
          <ul className="space-y-2">
            <li><a className="link-u" href={`mailto:${site.email}`}>Email</a></li>
            <li><a className="link-u" href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a className="link-u" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a className="link-u" href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <p className="wrap pb-8 text-xs text-muted">© {new Date().getFullYear()} {site.name}</p>
    </footer>
  );
}
