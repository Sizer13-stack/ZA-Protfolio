import Image from "next/image";
import Link from "next/link";
import { tasktap } from "@/content/design";
export default function DesignStrip() {
  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-end">
        <h2 className="display text-[clamp(2.4rem,5.4vw,4.4rem)]">{tasktap.name}, drawn end to end</h2>
        <p className="max-w-lg text-lg leading-snug">{tasktap.line} {tasktap.count} screens and states, from sign-up to disputes.</p>
      </div>
      <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {tasktap.preview.map((s, k) => (
          <li key={s.n} className={k % 2 ? "md:mt-10" : ""}>
            <figure>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-line bg-surface">
                <Image src={`/images/design/tt-${s.n}.webp`} alt={s.alt} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover object-top" />
              </div>
              <figcaption className="mt-2 text-sm text-muted">{s.label}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <Link href="/design" className="link-u mt-8 inline-block text-[15px] font-medium text-accent">See the design work</Link>
    </div>
  );
}
