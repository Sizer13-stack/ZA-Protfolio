export default function PageStub({ title, children }) {
  return (
    <section className="wrap py-20">
      <h1 className="display text-[clamp(2.8rem,8vw,6rem)]">{title}</h1>
      <p className="mt-6 max-w-lg text-lg text-muted">{children}</p>
    </section>
  );
}
