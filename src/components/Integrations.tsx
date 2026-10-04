import {
  Slack,
  Mail,
  Calendar,
  MessageCircle,
  FileText,
  Cloud,
  Github,
  Chrome,
} from "lucide-react";

const integrations = [
  { name: "Slack", icon: Slack },
  { name: "Gmail", icon: Mail },
  { name: "Calendar", icon: Calendar },
  { name: "WhatsApp", icon: MessageCircle },
  { name: "Docs", icon: FileText },
  { name: "Drive", icon: Cloud },
  { name: "GitHub", icon: Github },
  { name: "Chrome", icon: Chrome },
];

export default function Integrations() {
  return (
    <section
      id="integrations"
      className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-28"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]" />

      <div className="container-px relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
            Integrations
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
            Connects with everything you use
          </h2>
          <p className="mt-4 text-lg text-ink-300 text-balance">
            50+ native integrations and a full API. Bring your favorite tools
            into Tattvaa and stop switching tabs.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {integrations.map((it) => (
            <div
              key={it.name}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/[0.06]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-brand-300 transition-colors group-hover:bg-brand-500/20">
                <it.icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <span className="text-sm font-semibold text-ink-200">
                {it.name}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink-400">
          Don't see your tool?{" "}
          <a
            href="#"
            className="font-semibold text-brand-300 underline-offset-4 hover:underline"
          >
            Request an integration
          </a>
        </p>
      </div>
    </section>
  );
}
