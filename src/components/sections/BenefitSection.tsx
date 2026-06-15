type BenefitSectionProps =
  | {
      title: string;
      intro: string;
      benefits: { title: string; desc: string }[];
      conclusion?: string;
    }
  | {
      title: string;
      content: string;
    };

export default function BenefitSection(props: BenefitSectionProps) {
  if ("content" in props) {
    // Legacy format fallback
    return (
      <section id="benefit" className="mb-10">
        <h2 className="text-2xl font-semibold text-foreground mb-3">
          {props.title}
        </h2>
        <p className="text-muted leading-relaxed">{props.content}</p>
      </section>
    );
  }

  // New structured version
  return (
    <section id="benefit" className="mb-10">
      <h2 className="text-2xl font-semibold text-foreground mb-3">
        {props.title}
      </h2>
      <p className="text-muted leading-relaxed mb-4">{props.intro}</p>
      <ul className="list-disc ml-5 space-y-2 text-muted">
        {props.benefits.map((b, i) => (
          <li key={i}>
            <span className="font-semibold text-foreground">{b.title}</span>:{" "}
            {b.desc}
          </li>
        ))}
      </ul>
      {props.conclusion && (
        <p className="text-muted leading-relaxed mt-4">{props.conclusion}</p>
      )}
    </section>
  );
}
