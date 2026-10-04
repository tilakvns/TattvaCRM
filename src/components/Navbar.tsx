// import { useEffect, useState } from "react";
// import { Menu, X, LayoutDashboard } from "lucide-react";

// const links = [
//   { label: "Product", href: "#product" },
//   { label: "Features", href: "#features" },
//   { label: "AI", href: "#ai" },
//   { label: "Integrations", href: "#integrations" },
//   { label: "Pricing", href: "#pricing" },
//   { label: "Customers", href: "#customers" },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 8);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "border-b border-ink-100 bg-white/85 backdrop-blur-xl"
//           : "border-b border-transparent bg-transparent"
//       }`}
//     >
//       <nav className="container-px flex h-16 items-center justify-between">
//         <a href="#top" className="flex items-center gap-2.5">
//           <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white shadow-soft">
//             <LayoutDashboard className="h-5 w-5" strokeWidth={2.5} />
//           </span>
//           <span className="font-display text-lg font-bold tracking-tight text-ink-900">
//             Pulse<span className="text-brand-600">CRM</span>
//           </span>
//         </a>

//         <ul className="hidden items-center gap-8 lg:flex">
//           {links.map((l) => (
//             <li key={l.href}>
//               <a
//                 href={l.href}
//                 className="text-sm font-medium text-ink-600 transition-colors hover:text-ink-900"
//               >
//                 {l.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <div className="hidden items-center gap-3 lg:flex">
//           <a
//             href="#"
//             className="text-sm font-semibold text-ink-700 hover:text-ink-900"
//           >
//             Sign in
//           </a>
//           <a href="#pricing" className="btn-primary">
//             Start free
//           </a>
//         </div>

//         <button
//           onClick={() => setOpen((v) => !v)}
//           className="grid h-10 w-10 place-items-center rounded-lg border border-ink-200 text-ink-700 lg:hidden"
//           aria-label="Toggle menu"
//         >
//           {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//         </button>
//       </nav>

//       {open && (
//         <div className="border-t border-ink-100 bg-white lg:hidden">
//           <ul className="container-px flex flex-col gap-1 py-4">
//             {links.map((l) => (
//               <li key={l.href}>
//                 <a
//                   href={l.href}
//                   onClick={() => setOpen(false)}
//                   className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-ink-50"
//                 >
//                   {l.label}
//                 </a>
//               </li>
//             ))}
//             <li className="mt-2 flex gap-3 px-1">
//               <a href="#" className="btn-ghost flex-1">
//                 Sign in
//               </a>
//               <a
//                 href="#pricing"
//                 className="btn-primary flex-1"
//                 onClick={() => setOpen(false)}
//               >
//                 Start free
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// }
import { useEffect, useState } from "react";
import { Menu, X, LayoutDashboard, ArrowRight, Sparkles } from "lucide-react";

const links = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "AI", href: "#ai" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
  { label: "Customers", href: "#customers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* =========================================================
          NAVBAR
      ========================================================== */}

      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:px-6">
        <nav
          className={`
            relative mx-auto flex h-[68px] max-w-[1440px] items-center
            justify-between rounded-2xl border px-3 transition-all
            duration-500 sm:px-4 lg:px-5

            ${
              scrolled
                ? `
                  border-slate-200/80
                  bg-white/90
                  shadow-[0_12px_45px_rgba(15,23,42,0.10)]
                  backdrop-blur-2xl
                `
                : `
                  border-slate-200/60
                  bg-white/70
                  shadow-[0_8px_35px_rgba(15,23,42,0.06)]
                  backdrop-blur-xl
                `
            }
          `}
        >
          {/* =====================================================
              TOP GLOW
          ====================================================== */}

          <div
            className="
              pointer-events-none absolute inset-x-10 -top-px h-px
              bg-gradient-to-r from-transparent via-teal-400/60
              to-transparent
            "
          />

          {/* =====================================================
              LOGO
          ====================================================== */}

          <a
            href="#top"
            className="group relative flex shrink-0 items-center gap-2.5"
          >
            {/* Logo icon */}
            <span
              className="
                relative grid h-10 w-10 place-items-center
                overflow-hidden rounded-xl
                bg-gradient-to-br from-teal-500 to-emerald-600
                text-white
                shadow-[0_8px_25px_rgba(20,184,166,0.25)]
                transition-all duration-300
                group-hover:scale-105
                group-hover:shadow-[0_10px_30px_rgba(20,184,166,0.40)]
              "
            >
              {/* Shine */}
              <span
                className="
                  absolute inset-0 -translate-x-full
                  bg-gradient-to-r
                  from-transparent via-white/30 to-transparent
                  transition-transform duration-700
                  group-hover:translate-x-full
                "
              />

              <LayoutDashboard className="relative h-5 w-5" strokeWidth={2.5} />
            </span>

            {/* Logo text */}
            <span
              className="
                hidden font-display text-[19px] font-extrabold
                tracking-tight text-slate-900 sm:block
              "
            >
              TATTVAA
              <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
                ERP
              </span>
            </span>
          </a>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="
                    group relative flex items-center gap-1
                    rounded-xl px-3.5 py-2.5
                    text-sm font-semibold text-slate-600
                    transition-all duration-300
                    hover:bg-slate-900/[0.035]
                    hover:text-slate-950
                  "
                >
                  {/* Hover background glow */}
                  <span
                    className="
                      pointer-events-none absolute inset-0
                      rounded-xl bg-gradient-to-r
                      from-teal-500/[0.06]
                      to-cyan-500/[0.04]
                      opacity-0
                      transition-opacity duration-300
                      group-hover:opacity-100
                    "
                  />

                  {/* Text */}
                  <span
                    className="
                      relative transition-transform duration-300
                      group-hover:-translate-y-0.5
                    "
                  >
                    {link.label}
                  </span>

                  {/* Animated underline */}
                  <span
                    className="
                      absolute bottom-1.5 left-3.5 right-3.5
                      h-[2px] origin-left scale-x-0
                      rounded-full
                      bg-gradient-to-r from-teal-500 to-cyan-500
                      transition-transform duration-300
                      group-hover:scale-x-100
                    "
                  />

                  {/* Tiny glow */}
                  <span
                    className="
                      pointer-events-none absolute
                      bottom-0.5 left-1/2
                      h-2 w-8 -translate-x-1/2
                      rounded-full bg-teal-400/40
                      opacity-0 blur-md
                      transition-opacity duration-300
                      group-hover:opacity-100
                    "
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* =====================================================
              DESKTOP ACTIONS
          ====================================================== */}

          <div className="hidden items-center gap-2.5 lg:flex">
            {/* Sign in */}
            <a
              href="#"
              className="
                group relative rounded-xl px-4 py-2.5
                text-sm font-semibold text-slate-600
                transition-all duration-300
                hover:bg-slate-900/[0.035]
                hover:text-slate-950
              "
            >
              <span className="transition-transform duration-300 group-hover:-translate-y-0.5 inline-block">
                Sign in
              </span>
            </a>

            {/* Start free */}
            <a
              href="#pricing"
              className="
                group relative inline-flex items-center
                gap-2 overflow-hidden rounded-xl
                bg-gradient-to-r from-teal-500 to-emerald-500
                px-5 py-2.5
                text-sm font-bold text-white
                shadow-[0_8px_25px_rgba(20,184,166,0.24)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_12px_35px_rgba(20,184,166,0.35)]
              "
            >
              {/* Shine */}
              <span
                className="
                  absolute inset-0 -translate-x-full
                  bg-gradient-to-r
                  from-transparent via-white/30 to-transparent
                  transition-transform duration-700
                  group-hover:translate-x-full
                "
              />

              <span className="relative">Start free</span>

              <ArrowRight
                className="
                  relative h-4 w-4
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ====================================================== */}

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="
              grid h-10 w-10 place-items-center
              rounded-xl border border-slate-200
              bg-white/70 text-slate-700
              shadow-sm
              transition-all duration-300
              hover:border-teal-200
              hover:bg-teal-50
              hover:text-teal-600
              lg:hidden
            "
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* =======================================================
            MOBILE MENU
        ======================================================== */}

        {open && (
          <div
            className="
              mx-auto mt-2 max-w-[1440px]
              overflow-hidden rounded-2xl
              border border-slate-200/80
              bg-white/95
              shadow-[0_20px_50px_rgba(15,23,42,0.12)]
              backdrop-blur-2xl
              lg:hidden
            "
          >
            {/* Mobile header */}
            <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-4">
              <span
                className="
                  grid h-8 w-8 place-items-center rounded-lg
                  bg-gradient-to-br from-teal-500 to-emerald-500
                  text-white
                "
              >
                <Sparkles className="h-4 w-4" />
              </span>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Navigation
                </p>

                <p className="text-sm font-semibold text-slate-800">
                  TATTVAA ERP
                </p>
              </div>
            </div>

            <ul className="space-y-1 p-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="
                      group flex items-center justify-between
                      rounded-xl px-4 py-3.5
                      text-sm font-semibold text-slate-700
                      transition-all duration-300
                      hover:bg-teal-50
                      hover:text-teal-700
                    "
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {link.label}
                    </span>

                    <ArrowRight
                      className="
                        h-4 w-4 text-slate-300
                        transition-all duration-300
                        group-hover:translate-x-1
                        group-hover:text-teal-500
                      "
                    />
                  </a>
                </li>
              ))}

              {/* Mobile actions */}
              <li className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3">
                <a
                  href="#"
                  onClick={() => setOpen(false)}
                  className="
                    flex items-center justify-center
                    rounded-xl border border-slate-200
                    px-4 py-3
                    text-sm font-semibold text-slate-700
                    transition-all duration-300
                    hover:border-teal-200
                    hover:bg-teal-50
                    hover:text-teal-700
                  "
                >
                  Sign in
                </a>

                <a
                  href="#pricing"
                  onClick={() => setOpen(false)}
                  className="
                    flex items-center justify-center gap-2
                    rounded-xl
                    bg-gradient-to-r from-teal-500 to-emerald-500
                    px-4 py-3
                    text-sm font-bold text-white
                    shadow-[0_8px_20px_rgba(20,184,166,0.20)]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:shadow-[0_12px_25px_rgba(20,184,166,0.30)]
                  "
                >
                  Start free
                  <ArrowRight className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
