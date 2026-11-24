import ProjectsExplorer from "@/components/ProjectsExplorer";
export const metadata = { title: "Projects", description: "Full-stack products, a civic-tech prototype and a workspace concept by Md. Zobayer Amin." };
export default function Projects() {
  return (
    <section className="wrap py-16">
      <h1 className="display text-[clamp(2.8rem,8vw,6.5rem)]">Projects</h1>
      <p className="mb-10 mt-6 max-w-xl text-xl leading-snug">Four projects, each with its live site and code.</p>
      <ProjectsExplorer />
    </section>
  );
}
