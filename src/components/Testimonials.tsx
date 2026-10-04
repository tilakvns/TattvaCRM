import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Tattvaa replaced three tools and gave us our first accurate forecast. Our reps actually use it — which says everything.",
    name: "Sarah Chen",
    role: "VP Sales, Northwind",
    img: "https://images.pexels.com/photos/7717254/pexels-photo-7717254.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
  },
  {
    quote:
      "The AI agent drafts follow-ups that are better than what I was writing manually. I close more deals in less time.",
    name: "Marcus Reid",
    role: "Account Executive, Acme",
    img: "https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
  },
  {
    quote:
      "We cut our sales cycle by 40% in a quarter. The automations alone paid for the platform in the first month.",
    name: "Priya Nair",
    role: "Head of RevOps, Globex",
    img: "https://images.pexels.com/photos/35681211/pexels-photo-35681211.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
  },
];

const logos = [
  "Northwind",
  "Acme",
  "Globex",
  "Initech",
  "Umbrella",
  "Soylent",
  "Hooli",
  "Pied Piper",
];

export default function Testimonials() {
  return (
    <section id="customers" className="py-24 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Customers</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl text-balance">
            Loved by revenue teams everywhere
          </h2>
          <div className="mt-5 inline-flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-accent-400 text-accent-400"
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-ink-700">4.9/5</span>
            <span className="text-sm text-ink-400">
              · 2,400+ reviews on G2 & Capterra
            </span>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card flex flex-col p-6">
              <Quote className="h-7 w-7 text-brand-300" />
              <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-700">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-brand-100"
                />
                <div>
                  <p className="text-sm font-bold text-ink-900">{t.name}</p>
                  <p className="text-xs text-ink-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
            Trusted by 12,000+ teams
          </p>
          <div className="mask-fade-x mt-6 overflow-hidden">
            <div className="flex w-max animate-marquee gap-12">
              {[...logos, ...logos].map((l, i) => (
                <span
                  key={i}
                  className="font-display text-xl font-bold tracking-tight text-ink-300"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
