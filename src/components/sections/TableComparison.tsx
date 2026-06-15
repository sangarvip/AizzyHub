interface TableComparisonProps {
  title: string;
  intro?: string; // 👈 optional
  columns: string[];
  rows: string[][];
}

export default function TableComparison({
  title,
  intro,
  columns,
  rows,
}: TableComparisonProps) {
  return (
    <section id="comparison" className="mb-10">
      <h2 className="text-2xl font-semibold text-foreground mb-2">{title}</h2>

      {intro && <p className="text-muted leading-relaxed mb-4">{intro}</p>}

      <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-surface">
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="px-4 py-3 font-semibold text-foreground border-b border-border"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-background" : "bg-surface/50"}
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className="px-4 py-3 border-b border-border text-muted"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
