export default function Ecosystem() {
  type Color = "emerald" | "sky" | "indigo" | "slate";
  interface Tile {
    title: string;
    body: string;
    tag: string;
    color: Color;
  }

  const cards: Readonly<Tile[]> = [
    {
      title: "Register OBID",
      body: "Create an identifier and attach metadata. Coming soon on testnet.",
      tag: "Registration",
      color: "emerald",
    },
    {
      title: "For Registries & Platforms",
      body:
        "Bridge and verify records on Solana while maintaining continuity with dynamic metadata.",
      tag: "Interoperability",
      color: "sky",
    },
    {
      title: "Developer Docs",
      body: "Resolve OBIDs, verify attestations, and integrate APIs.",
      tag: "APIs & SDKs",
      color: "indigo",
    },
  ] as const;

  const tileColor: Record<
    Color,
    {
      container: string;
      tag: string;
      title: string;
      body: string;
    }
  > = {
    emerald: {
      container:
        "border-transparent hover:border-emerald-400/50 bg-emerald-200/50 hover:bg-emerald-200/75",
      tag: "text-current/75",
      title: "text-current",
      body: "text-emerald-800/75",
    },
    sky: {
      container:
        "border-transparent hover:border-sky-400/50 bg-sky-200/50 hover:bg-sky-200/75",
      tag: "text-current/75",
      title: "text-current",
      body: "text-sky-800/75",
    },
    indigo: {
      container:
        "border-transparent hover:border-indigo-400/50 bg-indigo-200/50 hover:bg-indigo-200/75",
      tag: "text-current/75",
      title: "text-current",
      body: "text-indigo-800/75",
    },
    slate: {
      container:
        "border-transparent",
      tag: "text-slate-800",
      title: "text-current/75",
      body: "text-slate-800/75",
    },
  };

  return (
    <section className="mx-auto max-w-6xl px-6 pt-24 sm:pt-16">
      <h2 className="text-2xl md:text-4xl font-semibold text-center">Start Where You Are</h2>
      <p className="mt-2 text-lg text-current/65 font-medium text-center">
        Register, integrate, or contribute to OBID.
      </p>

      <div className="mt-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {cards.map((c) => {
          const theme = tileColor [c.color];
          return (
            <article
              key={c.title}
              className={[
                "group rounded-2xl border p-6 shadow transition",
                theme.container,
              ].join(" ")}
            >
              <div className="flex items-center">
                <span
                  className={[
                    "inline-flex items-center text-sm font-medium",
                    theme.tag,
                  ].join(" ")}
                >
                  {c.tag}
                </span>
              </div>

              <h3 className={["mt-2 text-lg font-semibold", theme.title].join(" ")}>{c.title}</h3>
              <p className={["mt-[5px] text-sm font-medium", theme.body].join(" ")}>{c.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
