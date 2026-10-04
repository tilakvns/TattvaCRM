import { Workflow, Brain, LineChart, Webhook } from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "No-code automations",
    desc: "Build multi-step workflows with a visual builder. Trigger on any event, branch with conditions, and loop in your team.",
  },
  {
    icon: Brain,
    title: "AI agents",
    desc: "Deploy prebuilt agents that draft emails, enrich contacts, qualify leads, and update pipelines — 24/7.",
  },
  {
    icon: LineChart,
    title: "Live forecasting",
    desc: "Roll up revenue projections by team, quarter, or segment. See the gap-to-quota in real time.",
  },
  {
    icon: Webhook,
    title: "API & webhooks",
    desc: "Two-way REST API, signed webhooks, and Zapier-ready triggers. Connect Tattvaa to anything.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Built for scale</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl text-balance">
            Everything your revenue team needs
          </h2>
          <p className="mt-4 text-lg text-ink-500 text-balance">
            From the first hello to the signed contract, Tattvaa automates the
            busywork so your team can focus on the conversations that matter.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <article
              key={f.title}
              className="card group p-6 hover:-translate-y-1 hover:shadow-glow"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <f.icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-ink-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {f.desc}
              </p>
            </article>
          ))}
        </div>

        <StatsBand />
      </div>
    </section>
  );
}

function StatsBand() {
  const stats = [
    { v: "70%", l: "Faster sales cycles" },
    { v: "3.2x", l: "More pipeline per rep" },
    { v: "180+", l: "Features included" },
    { v: "50+", l: "Native integrations" },
  ];
  return (
    <div className="mt-16 overflow-hidden rounded-3xl bg-ink-900 px-6 py-12 sm:px-12">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <p className="font-display text-4xl font-bold text-white sm:text-5xl">
              {s.v}
            </p>
            <p className="mt-2 text-sm text-ink-400">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
