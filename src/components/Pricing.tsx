import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: { monthly: 0, yearly: 0 },
    blurb: "For solo founders and tiny teams getting organized.",
    features: [
      "Up to 3 seats",
      "1,000 contacts",
      "2 pipelines",
      "Email & calendar sync",
      "Basic dashboards",
      "Community support",
    ],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Growth",
    price: { monthly: 29, yearly: 24 },
    blurb: "For scaling sales teams that need automation and AI.",
    features: [
      "Unlimited seats",
      "25,000 contacts",
      "Unlimited pipelines",
      "Tattvaa AI assistant",
      "Automations & sequences",
      "Advanced reporting",
      "Priority support",
    ],
    cta: "Start 14-day trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: { monthly: null, yearly: null },
    blurb: "For organizations with advanced security and scale needs.",
    features: [
      "Everything in Growth",
      "Unlimited contacts",
      "SSO & SCIM",
      "Audit logs & DLP",
      "Dedicated CSM",
      "99.9% uptime SLA",
      "Custom contracts",
    ],
    cta: "Talk to sales",
    highlight: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="bg-ink-50 py-24 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Pricing</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl text-balance">
            Simple pricing that scales with you
          </h2>
          <p className="mt-4 text-lg text-ink-500 text-balance">
            Start free, upgrade when you're ready. No hidden fees, no
            per-feature add-ons.
          </p>

          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-ink-200 bg-white p-1 shadow-soft">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                !yearly
                  ? "bg-ink-900 text-white"
                  : "text-ink-600 hover:text-ink-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                yearly
                  ? "bg-ink-900 text-white"
                  : "text-ink-600 hover:text-ink-900"
              }`}
            >
              Yearly
              <span className="ml-1.5 rounded-full bg-brand-100 px-1.5 py-0.5 text-[10px] font-bold text-brand-700">
                -17%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`relative rounded-2xl border bg-white p-7 shadow-card transition-all duration-300 ${
                t.highlight
                  ? "border-brand-300 ring-2 ring-brand-400 lg:-translate-y-3"
                  : "border-ink-100 hover:-translate-y-1"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-soft">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-lg font-bold text-ink-900">
                {t.name}
              </h3>
              <p className="mt-1.5 text-sm text-ink-500">{t.blurb}</p>

              <div className="mt-5 flex items-end gap-1">
                {t.price.monthly === null ? (
                  <span className="font-display text-3xl font-bold text-ink-900">
                    Custom
                  </span>
                ) : (
                  <>
                    <span className="font-display text-4xl font-bold text-ink-900">
                      ${yearly ? t.price.yearly : t.price.monthly}
                    </span>
                    <span className="mb-1 text-sm text-ink-500">
                      /user / mo
                    </span>
                  </>
                )}
              </div>

              <a
                href="#"
                className={`mt-6 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                  t.highlight
                    ? "bg-brand-600 text-white hover:bg-brand-700"
                    : "border border-ink-200 text-ink-800 hover:bg-ink-50"
                }`}
              >
                {t.cta}
                <ArrowRight className="h-4 w-4" />
              </a>

              <ul className="mt-6 space-y-2.5">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-ink-600"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                      strokeWidth={2.5}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
