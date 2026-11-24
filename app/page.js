import Link from "next/link";
import Hero from "@/components/Hero";
import Ledger from "@/components/Ledger";
import DesignStrip from "@/components/DesignStrip";
import { site, tools, alsoUsed } from "@/content/site";

export const metadata = { title: { absolute: `${site.name} · Developer, UI/UX designer, product thinker` }, alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <Hero />
      <section className="wrap py-20" aria-labelledby="work">
        <div className="mb-10 flex items-end justify-between gap-6">
          <h2 id="work" className="display text-[clamp(2.4rem,5.4vw,4.4rem)]">Selected work</h2>
          <Link href="/projects" className="link-u shrink-0 pb-2 text-[15px]">All projects</Link>
        </div>
        <Ledger />
      </section>
      <section className="wrap py-20" aria-labelledby="design"><div id="design"><DesignStrip /></div></section>
      <section className="wrap py-20" aria-labelledby="tools">
        <div className="grid gap-8 lg:grid-cols-12">
          <h2 id="tools" className="display text-[clamp(2rem,4vw,3.2rem)] lg:col-span-4">What I work with</h2>
          <div className="lg:col-span-8">
            <ul className="grid grid-cols-2 gap-x-6 border-t border-line sm:grid-cols-3">
              {tools.map((t) => <li key={t} className="border-b border-line py-4 text-xl">{t}</li>)}
            </ul>
            <p className="mt-4 text-sm text-muted">Also used in projects: {alsoUsed.join(", ")}.</p>
          </div>
        </div>
      </section>
      <section className="wrap py-20" aria-labelledby="contact">
        <h2 id="contact" className="display max-w-3xl text-[clamp(2.4rem,6vw,5rem)]">Open to UI/UX design, product management and developer roles.</h2>
        <p className="mt-6 max-w-md text-lg leading-snug">Designing the product, planning it, or building it. Email is the fastest way to reach me.</p>
        <a href={`mailto:${site.email}`} className="display mt-8 inline-block break-all text-[clamp(1.6rem,4vw,3rem)] text-accent link-u">{site.email}</a>
        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-[15px]">
          <li><a className="link-u" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a className="link-u" href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp {site.whatsappDisplay}</a></li>
          <li><a className="link-u" href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </section>
    </>
  );
}
