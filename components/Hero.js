"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import RoleSelector from "./RoleSelector";
import { site } from "@/content/site";

const up = (d) => ({ initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: d, ease: [0.2, 0.7, 0.2, 1] } });

export default function Hero() {
  return (
    <section className="wrap grid gap-10 pb-20 pt-10 lg:grid-cols-12 lg:gap-8 lg:pt-16">
      <div className="lg:col-span-8">
        <motion.p {...up(0)} className="text-[15px] text-muted">{site.name}, {site.location}</motion.p>
        <motion.h1 {...up(0.08)} className="sr-only">{site.name}: developer, UI/UX designer and product thinker</motion.h1>
        <motion.div {...up(0.14)} className="mt-6"><RoleSelector /></motion.div>
        <motion.p {...up(0.3)} className="mt-10 max-w-lg text-lg leading-snug">
          Final-year Computer Science and Engineering student at Daffodil International University. I build web products and design the interfaces for them.
        </motion.p>
        <motion.div {...up(0.38)} className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/projects" className="rounded-full bg-ink px-6 py-3 text-[15px] font-medium text-bg transition hover:bg-accent">View projects</Link>
          <Link href="/about" className="rounded-full border border-line px-6 py-3 text-[15px] transition hover:border-ink">About me</Link>
          <Link href="/contact" className="link-u px-2 py-3 text-[15px]">Contact</Link>
        </motion.div>
      </div>
      <motion.figure {...up(0.2)} className="lg:col-span-4 lg:pt-4">
        <Image src="/images/portrait.webp" alt="Portrait of Md. Zobayer Amin wearing glasses and a light jacket" width={1100} height={1375} priority sizes="(max-width:1024px) 70vw, 28vw"
          className="mx-auto h-auto w-full max-w-sm rounded-sm lg:max-w-none" />
      </motion.figure>
    </section>
  );
}
