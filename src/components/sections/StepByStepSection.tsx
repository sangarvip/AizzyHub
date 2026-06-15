import { Lightbulb } from "lucide-react";

interface Step {
  title: string;
  desc?: string;
}

interface StepByStepSectionProps {
  title: string;
  intro?: string;
  items: Step[];
}

export default function StepByStepSection({
  title,
  intro,
  items,
}: StepByStepSectionProps) {
  return (
    <section id="steps" className="mb-10">
      {/* Section Title */}
      <h2 className="text-2xl font-semibold text-foreground mb-2">{title}</h2>

      {/* Intro paragraph */}
      <p className="text-muted leading-relaxed mb-5">{intro}</p>

      {/* Step List */}
      <ol className="space-y-4">
        {items.map((step, i) => (
          <li key={i} className="flex items-start gap-3">
            {/* Icon */}
            <Lightbulb className="w-5 h-5 text-primary mt-0.5 shrink-0" />

            {/* Step content */}
            <div>
              <p className="font-medium text-foreground">{step.title}</p>
              {step.desc && <p className="text-muted text-sm">{step.desc}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
