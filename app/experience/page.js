import { education, work, alsoWork } from "@/content/experience";

export const metadata = { title: "Experience", description: "Education and work experience of Md. Zobayer Amin: IT coordination, freelance web design, technical support, video and graphic design." };

const Row = ({ when, title, sub, children }) => (
  <li className="grid gap-2 border-t border-line py-8 lg:grid-cols-12 lg:gap-8">
    <p className="text-[15px] text-muted lg:col-span-3">{when}</p>
    <div className="lg:col-span-9">
      <h3 className="display text-[clamp(1.6rem,3vw,2.4rem)]">{title}</h3>
      {sub && <p className="mt-1 text-[15px] text-muted">{sub}</p>}
      <div className="mt-3 max-w-xl text-[15px] leading-snug">{children}</div>
    </div>
  </li>
);

export default function Experience() {
  return (
    <section className="wrap py-16">
      <h1 className="display text-[clamp(2.8rem,8vw,6.5rem)]">Experience</h1>
      <p className="mt-6 max-w-xl text-xl leading-snug">Study first, with work in IT coordination, design and video alongside it.</p>

      <h2 className="display mb-4 mt-16 text-[clamp(1.8rem,3.4vw,2.6rem)]">Education</h2>
      <ul className="border-b border-line">
        <Row when={education.when} title={education.degree} sub={education.school}><p>{education.note}</p></Row>
      </ul>

      <h2 className="display mb-4 mt-16 text-[clamp(1.8rem,3.4vw,2.6rem)]">Work</h2>
      <ul className="border-b border-line">
        {work.map((w) => (
          <Row key={w.role} when={w.when} title={w.role} sub={w.org}>
            <ul className="space-y-1">{w.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </Row>
        ))}
      </ul>

      <h2 className="display mb-4 mt-16 text-[clamp(1.8rem,3.4vw,2.6rem)]">Also</h2>
      <ul className="border-b border-line">
        {alsoWork.map((w) => (
          <Row key={w.role} when="Freelance and support work" title={w.role} sub={w.org}>
            <ul className="space-y-1">{w.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </Row>
        ))}
      </ul>
    </section>
  );
}
