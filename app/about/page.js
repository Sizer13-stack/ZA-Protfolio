import Image from "next/image";
import Link from "next/link";
import { site, tools, alsoUsed } from "@/content/site";
import { research } from "@/content/experience";

export const metadata = { title: "About", description: "Md. Zobayer Amin: final-year CSE student in Dhaka who builds full-stack web products and designs the interfaces for them." };

const steps = [
  ["Plan", "Work out who uses it, what it has to do and what can go wrong, before opening the editor."],
  ["Break it down", "Split the product into small parts: data, API, screens, edge cases."],
  ["Build one part at a time", "Finish a piece, see it work, then move to the next. There is always something running."],
  ["Check the edges", "Empty states, errors, loading, duplicate clicks. The parts users actually hit."],
];
const soft = [
  ["Thinker", "I think a problem through before I touch it, and I like to understand why something works."],
  ["Hardworking", "I keep going until the work is properly done, not just done."],
  ["Calm under pressure", "I get the work done when time is short and a lot is riding on it."],
  ["Good with people", "I work well in a team, listen to the people I work with, and keep communication easy."],
];
const Block = ({ id, title, children }) => (
  <section aria-labelledby={id} className="grid gap-6 border-t border-line py-12 lg:grid-cols-12">
    <h2 id={id} className="display text-[clamp(1.8rem,3.2vw,2.6rem)] lg:col-span-4">{title}</h2>
    <div className="max-w-xl space-y-4 text-lg leading-snug lg:col-span-8">{children}</div>
  </section>
);

export default function About() {
  return (
    <div className="wrap py-16">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h1 className="display text-[clamp(2.8rem,8vw,6.5rem)]">About</h1>
          <p className="mt-8 max-w-xl text-xl leading-snug">
            I'm a final-year Computer Science and Engineering student at Daffodil International University in Dhaka. I build web products end to end, and I draw the interfaces for them.
          </p>
          <p className="mt-5 max-w-xl text-xl leading-snug">
            I'm a thinker and a hard worker. I plan before I build, I stay steady when the pressure is high, and I work well with teams and with people.
          </p>
          <p className="mt-5 max-w-xl text-lg leading-snug text-muted">
            Four projects on this site show the range: a tuition marketplace with payments, a library that keeps its copy counts right, a bilingual civic-service prototype, and a workspace concept for hybrid teams. A fifth piece, TaskTap, is a 47-screen marketplace I designed in Figma.
          </p>
        </div>
        <figure className="lg:col-span-4">
          <Image src="/images/portrait.webp" alt="Portrait of Md. Zobayer Amin" width={1100} height={1375} sizes="(max-width:1024px) 70vw, 28vw" className="mx-auto h-auto w-full max-w-sm rounded-sm lg:max-w-none" />
        </figure>
      </div>

      <div className="mt-16">
        <section aria-labelledby="how" className="border-t border-line py-12">
          <h2 id="how" className="display text-[clamp(1.8rem,3.2vw,2.6rem)]">How I work</h2>
          <p className="mt-4 max-w-xl text-lg leading-snug">I plan first, then I execute in small pieces. A big product is just a list of small things done in the right order.</p>
          <ol className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([t, d], k) => (
              <li key={t} className="border-t border-ink pt-4">
                <span className="display text-5xl text-accent" aria-hidden>{k + 1}</span>
                <h3 className="display mt-3 text-2xl">{t}</h3>
                <p className="mt-2 text-[15px] leading-snug text-muted">{d}</p>
              </li>
            ))}
          </ol>
        </section>
        <Block id="soft" title="Soft skills">
          <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {soft.map(([t, d]) => (
              <li key={t} className="border-t border-line pt-3">
                <h3 className="display text-2xl">{t}</h3>
                <p className="mt-1 text-[15px] leading-snug text-muted">{d}</p>
              </li>
            ))}
          </ul>
        </Block>
        <Block id="stack" title="Tools">
          <p>{tools.join(", ")}. In projects I have also used {alsoUsed.join(", ")}.</p>
        </Block>
        <Block id="interests" title="What I'm interested in">
          <p>UI/UX design, product management, and frontend and full-stack development: turning a user's problem into a working digital product.</p>
        </Block>
        <Block id="research" title="Research on the side">
          <p>{research.thesis}</p>
          <p>My paper on corporate bankruptcy prediction has been accepted at {research.venue}: <em>{research.paper}</em>.</p>
          <p className="text-[15px] text-muted">Research is a side track. My day-to-day work, and what I'm looking for, is design, product and web development.</p>
        </Block>
        <Block id="languages" title="Languages"><p>Bengali (native) and English (fluent).</p></Block>
      </div>

      <div className="mt-6 flex flex-wrap gap-3 border-t border-line pt-10">
        <Link href="/experience" className="rounded-full border border-line px-6 py-3 text-[15px] transition hover:border-ink">Experience</Link>
        <Link href="/contact" className="rounded-full bg-ink px-6 py-3 text-[15px] font-medium text-bg transition hover:bg-accent">Contact me</Link>
      </div>
    </div>
  );
}
