import { ArrowRight, Check } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 px-6 py-16 text-center shadow-glow sm:px-16">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-brand-300/20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
              Get Tattvaa. The best of AI and CRM in one place.
            </h2>
            <p className="mt-4 text-lg text-brand-50 text-balance">
              Start for free. Upgrade anytime. Your team will be up and running
              in minutes.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-700 shadow-soft transition hover:bg-brand-50 active:scale-[0.98]"
              >
                Start free — no card needed
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Book a demo
              </a>
            </div>

            <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-brand-50">
              {[
                "14-day free trial",
                "No credit card required",
                "Cancel anytime",
              ].map((f) => (
                <li key={f} className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
