type ProblemSectionProps =
  | { title: string; paragraphs: string[] }
  | { title: string; content: string };

export default function ProblemSection(props: ProblemSectionProps) {
  const { title } = props;
  const paragraphs = "paragraphs" in props ? props.paragraphs : [props.content];

  return (
    <section id="problem" className="mb-10">
      <h2 className="text-2xl font-semibold text-foreground mb-3">{title}</h2>
      <div className="space-y-4 text-muted leading-relaxed">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
