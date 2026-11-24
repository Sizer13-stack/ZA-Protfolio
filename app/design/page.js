import DesignGallery from "@/components/DesignGallery";
import { tasktap } from "@/content/design";

export const metadata = { title: "Design", description: "TaskTap: a work marketplace designed in Figma, from sign-up to payments and disputes." };

export default function Design() {
  return (
    <>
      <section className="wrap pb-16 pt-16">
        <h1 className="display text-[clamp(2.8rem,8vw,6.5rem)]">Design</h1>
        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <p className="max-w-xl text-xl leading-snug lg:col-span-7">{tasktap.line}</p>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-4 text-[15px] lg:col-span-5">
            <div><dt className="text-muted">Type</dt><dd>Personal project</dd></div>
            <div><dt className="text-muted">Tool</dt><dd>Figma</dd></div>
            <div><dt className="text-muted">Format</dt><dd>Desktop web</dd></div>
            <div><dt className="text-muted">Size</dt><dd>{tasktap.count} screens and states</dd></div>
          </dl>
        </div>
        <p className="mt-8 max-w-xl text-[15px] text-muted">The screens below are grouped by journey, not by file order. A few frames still use grey boxes where final images would go, so they show layout and flow, not finished imagery.</p>
      </section>
      <section className="wrap pb-10" aria-label="TaskTap screens"><DesignGallery sections={tasktap.sections} /></section>
    </>
  );
}
