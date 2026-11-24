"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { roles } from "@/content/site";
import { getProject } from "@/content/projects";

export default function RoleSelector() {
  const [i, setI] = useState(0);
  const role = roles[i];
  return (
    <div>
      <ul role="tablist" aria-label="What I do" className="space-y-1">
        {roles.map((r, k) => (
          <li key={r.id}>
            <button role="tab" id={`tab-${r.id}`} aria-selected={k === i} aria-controls="role-panel"
              onMouseEnter={() => setI(k)} onFocus={() => setI(k)} onClick={() => setI(k)}
              className={`display block text-left text-[clamp(2.6rem,8.4vw,6.6rem)] transition-colors ${k === i ? "text-ink" : "text-ink/25 hover:text-ink/60"}`}>
              {r.label}
            </button>
          </li>
        ))}
      </ul>
      <div id="role-panel" role="tabpanel" aria-labelledby={`tab-${role.id}`} className="mt-8 min-h-[9.5rem] max-w-xl">
        <AnimatePresence mode="wait">
          <motion.div key={role.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }}>
            <p className="text-lg leading-snug">{role.text}</p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm">
              {role.proof.map((p) => {
                const proj = p.slug ? getProject(p.slug) : null;
                return (
                  <li key={p.note}>
                    <Link href={proj ? `/projects/${proj.slug}` : p.href} className="link-u text-accent">{proj ? proj.name : "TaskTap"}</Link>
                    <span className="text-muted"> — {p.note}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
