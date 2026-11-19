export function SectionHeading({
  id,
  children,
  accent,
}: {
  id: string;
  children: string;
  accent: string;
}) {
  return (
    <h2 id={id} className="text-center text-3xl font-bold tracking-tight text-cloud md:text-5xl">
      {children} <span className="text-sky">{accent}</span>
    </h2>
  );
}
