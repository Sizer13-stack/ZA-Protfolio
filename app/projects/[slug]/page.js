import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { projects, getProject } from "@/content/projects";
import { caseStudies } from "@/content/caseStudies";

export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));
export async function generateMetadata({ params }) {
  const p = getProject((await params).slug);
  return p ? { title: `${p.name}: case study`, description: p.line, openGraph: { title: p.name, description: p.line, images: [p.image] } } : {};
}

const Section = ({ id, title, children }) => (
  <section aria-labelledby={id} className="grid gap-6 border-t border-line py-12 lg:grid-cols-12">
    <h2 id={id} className="display text-[clamp(1.8rem,3.2vw,2.6rem)] lg:col-span-4">{title}</h2>
    <div className="lg:col-span-8">{children}</div>
  </section>
);
const Ext = ({ href, children, primary }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={primary ? "inline-flex items-center gap-1 rounded-full bg-ink px-5 py-2.5 text-[15px] font-medium text-bg transition hover:bg-accent" : "inline-flex items-center gap-1 rounded-full border border-line px-5 py-2.5 text-[15px] transition hover:border-ink"}>
    {children}<ArrowUpRight size={15} aria-hidden />
  </a>
);

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const p = getProject(slug);
  const c = caseStudies[slug];
  if (!p || !c) notFound();
  const i = projects.findIndex((x) => x.slug === slug);
  const next = projects[(i + 1) % projects.length];
  return (
    <article className="wrap py-14">
      <Link href="/projects" className="link-u text-sm text-muted">All projects</Link>
      <h1 className="display mt-6 text-[clamp(3rem,9vw,7rem)]">{p.name}</h1>
      <p className="mt-6 max-w-2xl text-xl leading-snug">{c.overview}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Ext href={p.live} primary>Live site</Ext>
        <Ext href={p.github}>{p.server ? "Client code" : "Code"}</Ext>
        {p.server && <Ext href={p.server}>Server code</Ext>}
      </div>
      {c.notice && <p role="note" className="mt-8 max-w-2xl rounded-sm border border-accent/40 bg-accent/5 px-4 py-3 text-[15px]">{c.notice}</p>}

      <figure className="mt-12">
        <Image src={c.gallery[0].src} alt={c.gallery[0].alt} width={1600} height={770} priority sizes="(max-width:1280px) 100vw, 1200px" className="h-auto w-full rounded-sm border border-line" />
        <figcaption className="mt-2 text-sm text-muted">{c.gallery[0].cap}</figcaption>
      </figure>

      <dl className="mt-12 grid gap-6 border-t border-line pt-8 text-[15px] sm:grid-cols-2 lg:grid-cols-4">
        <div><dt className="text-muted">Status</dt><dd className="mt-1 flex items-center gap-2"><span aria-hidden className="h-2 w-2 rounded-full" style={{ background: p.accent }} />{p.status}, {p.kind.toLowerCase()}</dd></div>
        <div className="sm:col-span-1 lg:col-span-2"><dt className="text-muted">My role</dt><dd className="mt-1">{c.role}</dd></div>
        <div><dt className="text-muted">Built with</dt><dd className="mt-1">{p.stack.join(", ")}</dd></div>
      </dl>

      <div className="mt-12">
        <Section id="problem" title="The problem"><p className="text-lg leading-snug">{c.problem}</p></Section>
        <Section id="goals" title="Goals"><ul className="space-y-3 text-lg leading-snug">{c.goals.map((g) => <li key={g}>{g}</li>)}</ul></Section>
        <Section id="features" title={slug === "raum" ? "What's in it" : "What it does"}>
          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 text-[15px] leading-snug">{c.features.map((f) => <li key={f} className="border-t border-line pt-3">{f}</li>)}</ul>
        </Section>
        <Section id="decisions" title="Technical decisions">
          <dl className="space-y-6">{c.decisions.map(([t, d]) => <div key={t}><dt className="display text-2xl">{t}</dt><dd className="mt-1 max-w-xl text-[15px] leading-snug text-muted">{d}</dd></div>)}</dl>
        </Section>
        <Section id="ux" title="Interface decisions"><ul className="space-y-3 text-[15px] leading-snug">{c.ux.map((u) => <li key={u}>{u}</li>)}</ul></Section>
        {c.gallery.length > 1 && (
          <Section id="screens" title="Screens">
            <ul className="space-y-8">{c.gallery.slice(1).map((g) => (
              <li key={g.src}><Image src={g.src} alt={g.alt} width={1600} height={770} sizes="(max-width:1024px) 100vw, 800px" className="h-auto w-full rounded-sm border border-line" /><p className="mt-2 text-sm text-muted">{g.cap}</p></li>
            ))}</ul>
          </Section>
        )}
        <Section id="limits" title="Limits and honest notes"><ul className="space-y-3 text-[15px] leading-snug">{c.limits.map((l) => <li key={l}>{l}</li>)}</ul></Section>
      </div>

      <Link href={`/projects/${next.slug}`} className="group mt-6 block border-t border-line pt-8">
        <span className="text-sm text-muted">Next project</span>
        <span className="display mt-1 flex items-baseline justify-between text-[clamp(2.2rem,6vw,4.5rem)] group-hover:text-accent">{next.name}<ArrowUpRight aria-hidden size={28} /></span>
      </Link>
    </article>
  );
}
