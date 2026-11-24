"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function DesignGallery({ sections }) {
  const flat = sections.flatMap((s) => s.screens.map((x) => ({ ...x, section: s.title })));
  const [open, setOpen] = useState(null);
  const [expanded, setExpanded] = useState({});
  const closeRef = useRef(null);
  const step = useCallback((d) => setOpen((i) => (i === null ? i : (i + d + flat.length) % flat.length)), [flat.length]);
  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(null); if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); };
    document.body.style.overflow = "hidden"; window.addEventListener("keydown", onKey); closeRef.current?.focus();
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [open, step]);
  const cur = open !== null ? flat[open] : null;
  return (
    <div className="space-y-24">
      {sections.map((sec) => {
        const all = expanded[sec.id]; const list = all ? sec.screens : sec.screens.slice(0, 4);
        return (
          <section key={sec.id} aria-labelledby={`s-${sec.id}`}>
            <div className="grid gap-4 lg:grid-cols-12">
              <h3 id={`s-${sec.id}`} className="display text-[clamp(2rem,4vw,3.2rem)] lg:col-span-5">{sec.title}</h3>
              <p className="max-w-lg text-lg leading-snug lg:col-span-7">{sec.blurb}</p>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
              {list.map((sc) => {
                const idx = flat.findIndex((f) => f.n === sc.n);
                return (
                  <li key={sc.n}>
                    <button onClick={() => setOpen(idx)} className="group block w-full text-left" aria-label={`Open ${sc.label}`}>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-line bg-surface">
                        <Image src={`/images/design/tt-${sc.n}.webp`} alt={`TaskTap: ${sc.label}`} fill sizes="(max-width:768px) 50vw, 25vw" loading="lazy" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
                      </div>
                      <span className="mt-2 block text-sm text-muted group-hover:text-ink">{sc.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            {sec.screens.length > 4 && (
              <button onClick={() => setExpanded({ ...expanded, [sec.id]: !all })} className="link-u mt-6 text-[15px] text-accent" aria-expanded={!!all}>
                {all ? "Show fewer" : `Show all ${sec.screens.length} screens`}
              </button>
            )}
          </section>
        );
      })}
      {cur && (
        <div role="dialog" aria-modal="true" aria-label={`${cur.section}: ${cur.label}`} className="fixed inset-0 z-50 flex flex-col bg-bg/95 backdrop-blur-sm">
          <div className="wrap flex h-16 shrink-0 items-center justify-between gap-4">
            <p className="truncate text-[15px]"><span className="text-muted">{cur.section} / </span>{cur.label}</p>
            <div className="flex items-center gap-2">
              <button onClick={() => step(-1)} aria-label="Previous screen" className="grid h-10 w-10 place-items-center rounded-full border border-line"><ChevronLeft size={18} aria-hidden /></button>
              <button onClick={() => step(1)} aria-label="Next screen" className="grid h-10 w-10 place-items-center rounded-full border border-line"><ChevronRight size={18} aria-hidden /></button>
              <button ref={closeRef} onClick={() => setOpen(null)} aria-label="Close" className="grid h-10 w-10 place-items-center rounded-full border border-line"><X size={18} aria-hidden /></button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto px-3 pb-10 sm:px-8" onClick={(e) => e.target === e.currentTarget && setOpen(null)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/images/design/tt-${cur.n}.webp`} alt={`TaskTap: ${cur.label}, full screen`} className="mx-auto h-auto w-full max-w-[1200px] rounded-sm border border-line" />
          </div>
        </div>
      )}
    </div>
  );
}
