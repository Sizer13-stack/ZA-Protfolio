"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";

export default function Ledger() {
  const [i, setI] = useState(0);
  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
      <ol>
        {projects.map((p, k) => (
          <li key={p.slug} className="border-t border-line last:border-b" onMouseEnter={() => setI(k)} onFocus={() => setI(k)}>
            <Link href={`/projects/${p.slug}`} className="group block py-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className={`display text-[clamp(2rem,4.6vw,3.6rem)] transition-colors ${k === i ? "text-ink" : "text-ink/40"} group-hover:text-ink`}>{p.name}</h3>
                <ArrowUpRight aria-hidden size={22} className="shrink-0 text-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </div>
              <p className="mt-2 max-w-md text-[15px] leading-snug text-muted">{p.line}</p>
              <p className="mt-3 flex flex-wrap items-center gap-x-3 text-sm">
                <span className="inline-flex items-center gap-2"><span aria-hidden className="h-2 w-2 rounded-full" style={{ background: p.accent }} />{p.status}, {p.kind.toLowerCase()}</span>
                <span className="text-muted">{p.stack.join(", ")}</span>
              </p>
              <Image src={p.image} alt={p.alt} width={1600} height={770} sizes="(max-width:1024px) 100vw, 0px" className="mt-5 h-auto w-full rounded-sm border border-line lg:hidden" />
            </Link>
          </li>
        ))}
      </ol>
      <div className="relative hidden lg:block">
        <div className="sticky top-28 aspect-[1600/770] overflow-hidden rounded-sm border border-line bg-surface">
          <AnimatePresence mode="popLayout">
            <motion.div key={projects[i].slug} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <Image src={projects[i].image} alt={projects[i].alt} fill sizes="45vw" className="object-cover object-top" priority={i === 0} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
