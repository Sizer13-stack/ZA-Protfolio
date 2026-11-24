"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { projects } from "@/content/projects";

const kinds = ["All", ...new Set(projects.map((p) => p.kind))];
const techs = ["All", ...new Set(projects.flatMap((p) => p.stack))];

const Chip = ({ active, onClick, children }) => (
  <button onClick={onClick} aria-pressed={active} className={`rounded-full border px-4 py-1.5 text-sm transition ${active ? "border-ink bg-ink text-bg" : "border-line hover:border-ink"}`}>{children}</button>
);

export default function ProjectsExplorer() {
  const [q, setQ] = useState(""); const [kind, setKind] = useState("All"); const [tech, setTech] = useState("All");
  const match = (text) => text.toLowerCase().includes(q.trim().toLowerCase());
  const shown = useMemo(() => projects.filter((p) => (kind === "All" || p.kind === kind) && (tech === "All" || p.stack.includes(tech)) && match([p.name, p.line, p.stack.join(" ")].join(" "))), [q, kind, tech]);
  return (
    <div>
      <div className="relative max-w-md">
        <Search size={17} aria-hidden className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
        <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search projects" aria-label="Search projects" className="w-full rounded-full border border-line bg-surface py-3 pl-11 pr-4 text-[15px] outline-none focus:border-ink" />
      </div>
      <div className="mt-5 space-y-3">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by type">{kinds.map((k) => <Chip key={k} active={kind === k} onClick={() => setKind(k)}>{k}</Chip>)}</div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by technology">{techs.map((t) => <Chip key={t} active={tech === t} onClick={() => setTech(t)}>{t === "All" ? "All technologies" : t}</Chip>)}</div>
      </div>

      <h2 className="display mt-14 text-[clamp(1.8rem,3.4vw,2.6rem)]">Featured</h2>
      {shown.length === 0 ? <p className="mt-6 text-muted">No featured project matches. Clear a filter or change the search.</p> : (
        <ul className="mt-6 grid gap-x-6 gap-y-12 md:grid-cols-2">
          {shown.map((p) => (
            <li key={p.slug}>
              <Link href={`/projects/${p.slug}`} className="group block">
                <div className="overflow-hidden rounded-sm border border-line"><Image src={p.image} alt={p.alt} width={1600} height={770} sizes="(max-width:768px) 100vw, 50vw" className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]" /></div>
                <div className="mt-4 flex items-baseline justify-between gap-3"><h3 className="display text-3xl">{p.name}</h3><ArrowUpRight size={20} aria-hidden className="text-muted group-hover:text-accent" /></div>
              </Link>
              <p className="mt-2 max-w-md text-[15px] leading-snug text-muted">{p.line}</p>
              <p className="mt-3 text-sm"><span className="inline-flex items-center gap-2"><span aria-hidden className="h-2 w-2 rounded-full" style={{ background: p.accent }} />{p.status}, {p.kind.toLowerCase()}</span> <span className="text-muted">· {p.stack.join(", ")}</span></p>
              <p className="mt-3 flex gap-5 text-sm">
                <a className="link-u text-accent" href={p.live} target="_blank" rel="noopener noreferrer">Live site</a>
                <a className="link-u" href={p.github} target="_blank" rel="noopener noreferrer">Code</a>
              </p>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}
