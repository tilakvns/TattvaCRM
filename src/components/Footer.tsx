import {
  LayoutDashboard,
  Linkedin,
  Twitter,
  Github,
  Youtube,
} from "lucide-react";

const cols = [
  {
    title: "Product",
    links: [
      "Features",
      "Tattvaa AI",
      "Integrations",
      "Pricing",
      "Changelog",
      "Roadmap",
    ],
  },
  {
    title: "Solutions",
    links: [
      "Sales teams",
      "RevOps",
      "Customer success",
      "Startups",
      "Enterprise",
    ],
  },
  {
    title: "Resources",
    links: [
      "Docs",
      "API reference",
      "Blog",
      "Guides",
      "Webinars",
      "Help center",
    ],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Customers", "Partners", "Contact", "Security"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-50">
      <div className="container-px py-16">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white">
                <LayoutDashboard className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-bold text-ink-900">
                Tattvaa<span className="text-brand-600">CRM</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500">
              The AI-native CRM that unifies contacts, pipelines, and
              conversations into one intelligent workspace.
            </p>
            <div className="mt-5 flex gap-2.5">
              {[Twitter, Linkedin, Github, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-ink-200 bg-white text-ink-500 transition hover:border-brand-300 hover:text-brand-600"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-bold text-ink-900">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-ink-500 transition-colors hover:text-brand-600"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-200 pt-8 sm:flex-row">
          <p className="text-sm text-ink-500">
            © {new Date().getFullYear()} Tattvaa CRM, Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-ink-500">
            <a href="#" className="hover:text-brand-600">
              Privacy
            </a>
            <a href="#" className="hover:text-brand-600">
              Terms
            </a>
            <a href="#" className="hover:text-brand-600">
              Cookies
            </a>
            <a href="#" className="hover:text-brand-600">
              DPA
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
