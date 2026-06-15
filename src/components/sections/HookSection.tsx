type HookSectionProps =
  | { title: string; paragraphs: string[] }
  | { text: string };

export default function HookSection(props: HookSectionProps) {
  const title = "title" in props ? props.title : "Introduction";
  const paragraphs =
    "paragraphs" in props
      ? props.paragraphs
      : ["text" in props ? props.text : ""];

  return (
    <section id="hook" className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">{title}</h2>
      <div className="space-y-4 text-muted leading-relaxed">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-base leading-[1.85]">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
