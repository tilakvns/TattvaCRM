// import { ArrowRight, Play, Sparkles, Check } from "lucide-react";
// import { motion } from "framer-motion";
// const replaced = [
//   "Spreadsheets",
//   "Email tools",
//   "Help desks",
//   "Dialers",
//   "Forms",
//   "Reports",
// ];

// export default function Hero() {
//   return (
//     <section
//       id="top"
//       className="relative overflow-hidden bg-ink-950 text-white"
//     >
//       <div className="absolute inset-0 bg-grid opacity-[0.07]" />
//       <div className="absolute -left-40 top-[-10%] h-[36rem] w-[36rem] rounded-full bg-brand-600/30 blur-[120px]" />
//       <div className="absolute -right-32 top-1/3 h-[30rem] w-[30rem] rounded-full bg-brand-400/20 blur-[120px]" />

//       <div className="container-px relative pb-20 pt-32 sm:pt-40">
//         <div className="mx-auto max-w-3xl text-center">
//           {/* <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200 backdrop-blur">
//             <Sparkles className="h-3.5 w-3.5" />
//             Introducing TATTVAA AI — your autonomous revenue engine
//           </span> */}
//           <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
//             <Sparkles className="h-3.5 w-3.5 shrink-0 text-brand-300" />

//             <span
//               className="
//       bg-gradient-to-r
//       from-brand-200
//       via-white
//       to-accent-300
//       bg-[length:200%_100%]
//       bg-clip-text
//       text-transparent
//       animate-gradient
//     "
//             >
//               Introducing TATTVAA AI — your autonomous revenue engine
//             </span>
//           </span>
//           {/* <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl">
//             The AI-native ERP that closes deals
//             <span className="bg-gradient-to-r from-brand-300 via-brand-200 to-accent-300 bg-clip-text text-transparent">
//               while you sleep
//             </span>
//           </h1> */}

//           <motion.h1
//             initial={{
//               opacity: 0,
//               y: 35,
//               filter: "blur(10px)",
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//               filter: "blur(0px)",
//             }}
//             transition={{
//               duration: 0.9,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl"
//           >
//             The AI-native ERP that closes deals{" "}
//             <span className="relative inline-block">
//               {/* Soft animated glow behind text */}
//               <motion.span
//                 aria-hidden="true"
//                 className="
//         absolute
//         inset-0
//         bg-gradient-to-r
//         from-brand-300
//         via-brand-100
//         to-accent-300
//         bg-[length:200%_100%]
//         bg-clip-text
//         text-transparent
//         blur-[14px]
//         opacity-40
//       "
//                 animate={{
//                   backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//                   opacity: [0.25, 0.5, 0.25],
//                 }}
//                 transition={{
//                   backgroundPosition: {
//                     duration: 4,
//                     repeat: Infinity,
//                     ease: "linear",
//                   },
//                   opacity: {
//                     duration: 3,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   },
//                 }}
//               >
//                 while you sleep
//               </motion.span>

//               {/* Actual heading text */}
//               <motion.span
//                 className="
//         relative
//         inline-block
//         bg-gradient-to-r
//         from-brand-300
//         via-white
//         to-accent-300
//         bg-[length:200%_100%]
//         bg-clip-text
//         text-transparent
//       "
//                 animate={{
//                   backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//               >
//                 while you sleep
//               </motion.span>
//             </span>
//           </motion.h1>

//           {/* <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-300 text-balance">
//             TATTVAA unifies contacts, pipelines, conversations, and reporting
//             into one intelligent workspace. Replace six disconnected tools with
//             a single platform that thinks, acts, and executes.
//           </p> */}

//           <motion.p
//             initial={{
//               opacity: 0,
//               y: 18,
//               filter: "blur(4px)",
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//               filter: "blur(0px)",
//             }}
//             transition={{
//               duration: 0.8,
//               delay: 0.4,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-300 text-balance"
//           >
//             TATTVAA unifies contacts, pipelines, conversations, and reporting
//             into one intelligent workspace. Replace six disconnected tools with
//             a single platform that thinks, acts, and executes.
//           </motion.p>
//           <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
//             <a href="#pricing" className="btn-primary">
//               Start free — no card needed
//               <ArrowRight className="h-4 w-4" />
//             </a>
//             <a
//               href="#product"
//               className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
//             >
//               <Play className="h-4 w-4" />
//               Watch 2-min demo
//             </a>
//           </div>

//           <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-400">
//             {["Free 14-day trial", "Setup in minutes", "Cancel anytime"].map(
//               (f) => (
//                 <li key={f} className="inline-flex items-center gap-1.5">
//                   <Check className="h-4 w-4 text-brand-400" />
//                   {f}
//                 </li>
//               ),
//             )}
//           </ul>
//         </div>

//         <HeroPreview />

//         <div className="mt-16">
//           <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
//             Replaces 10+ fragmented tools
//           </p>
//           <div className="mask-fade-x mt-5 overflow-hidden">
//             <div className="flex w-max animate-marquee gap-3">
//               {[...replaced, ...replaced, ...replaced].map((t, i) => (
//                 <span
//                   key={i}
//                   className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-ink-300"
//                 >
//                   {t}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function HeroPreview() {
//   return (
//     <div className="relative mx-auto mt-14 max-w-5xl">
//       <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-brand-500/20 via-transparent to-accent-400/10 blur-2xl" />
//       <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-2xl">
//         <div className="flex items-center gap-2 border-b border-white/10 bg-ink-900/80 px-4 py-3">
//           <span className="h-3 w-3 rounded-full bg-rose-400/80" />
//           <span className="h-3 w-3 rounded-full bg-accent-400/80" />
//           <span className="h-3 w-3 rounded-full bg-brand-400/80" />
//           <span className="ml-3 text-xs font-medium text-ink-400">
//             tattvaaerp.com / dashboard
//           </span>
//           <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-brand-500/15 px-2.5 py-1 text-[11px] font-semibold text-brand-300">
//             <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-400" />{" "}
//             Live
//           </span>
//         </div>

//         <div className="grid grid-cols-12 gap-0">
//           <aside className="col-span-3 hidden border-r border-white/10 p-4 sm:block">
//             <div className="space-y-1.5">
//               {[
//                 "Dashboard",
//                 "Contacts",
//                 "Pipeline",
//                 "Conversations",
//                 "Reports",
//                 "Automations",
//               ].map((n, i) => (
//                 <div
//                   key={n}
//                   className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs ${
//                     i === 0 ? "bg-brand-500/15 text-brand-200" : "text-ink-400"
//                   }`}
//                 >
//                   <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
//                   {n}
//                 </div>
//               ))}
//             </div>
//           </aside>

//           <div className="col-span-12 p-5 sm:col-span-9">
//             <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
//               {[
//                 { k: "Revenue", v: "$1.24M", d: "+18%" },
//                 { k: "Deals", v: "342", d: "+12" },
//                 { k: "Win rate", v: "38%", d: "+4 pts" },
//                 { k: "Response", v: "2.1h", d: "-31%" },
//               ].map((m) => (
//                 <div
//                   key={m.k}
//                   className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
//                 >
//                   <p className="text-[11px] uppercase tracking-wide text-ink-500">
//                     {m.k}
//                   </p>
//                   <p className="mt-1 font-display text-lg font-bold text-white">
//                     {m.v}
//                   </p>
//                   <p className="text-[11px] font-semibold text-brand-300">
//                     {m.d}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
//               <div className="mb-3 flex items-center justify-between">
//                 <p className="text-xs font-semibold text-ink-300">
//                   Pipeline this quarter
//                 </p>
//                 <p className="text-[11px] text-ink-500">Q3 2026</p>
//               </div>
//               <div className="space-y-2.5">
//                 {[
//                   { l: "Discovery", w: "82%", c: "bg-brand-400" },
//                   { l: "Qualified", w: "64%", c: "bg-brand-300" },
//                   { l: "Proposal", w: "46%", c: "bg-accent-400" },
//                   { l: "Negotiation", w: "28%", c: "bg-rose-400/80" },
//                 ].map((b) => (
//                   <div key={b.l}>
//                     <div className="mb-1 flex justify-between text-[11px] text-ink-400">
//                       <span>{b.l}</span>
//                       <span>{b.w}</span>
//                     </div>
//                     <div className="h-2 overflow-hidden rounded-full bg-white/10">
//                       <div
//                         className={`h-full rounded-full ${b.c} transition-all duration-700`}
//                         style={{ width: b.w }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="absolute -right-4 top-12 hidden animate-float rounded-2xl border border-white/10 bg-ink-900/90 p-3 shadow-xl backdrop-blur md:block">
//         <div className="flex items-center gap-2">
//           <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-500/20 text-brand-300">
//             <Sparkles className="h-4 w-4" />
//           </span>
//           <div>
//             <p className="text-[11px] font-semibold text-white">AI insight</p>
//             <p className="text-[10px] text-ink-400">3 deals at risk today</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { ArrowRight, Play, Sparkles, Check } from "lucide-react";
import { motion } from "framer-motion";

const replaced = [
  "Spreadsheets",
  "Email tools",
  "Help desks",
  "Dialers",
  "Forms",
  "Reports",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[#f7faf9] text-slate-900"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      {/* Base background */}
      <div className="pointer-events-none absolute inset-0 bg-[#f7faf9]" />

      {/* Soft radial lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(20,184,166,0.08),transparent_32%),radial-gradient(circle_at_0%_40%,rgba(6,182,212,0.08),transparent_30%),radial-gradient(circle_at_100%_45%,rgba(139,92,246,0.07),transparent_30%)]" />

      {/* Subtle grid */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        animate={{
          backgroundPosition: ["0px 0px", "48px 48px"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,23,42,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* =========================================================
          LARGE AMBIENT GLOWS
      ========================================================== */}

      {/* Teal glow - left */}
      <motion.div
        className="pointer-events-none absolute -left-48 -top-40 h-[38rem] w-[38rem] rounded-full bg-teal-300/30 blur-[120px]"
        animate={{
          x: [0, 60, -20, 0],
          y: [0, 30, -20, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Violet glow - right */}
      <motion.div
        className="pointer-events-none absolute -right-48 top-[18%] h-[34rem] w-[34rem] rounded-full bg-violet-300/25 blur-[130px]"
        animate={{
          x: [0, -50, 20, 0],
          y: [0, -30, 25, 0],
          scale: [1, 0.95, 1.06, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cyan glow - bottom */}
      <motion.div
        className="pointer-events-none absolute -bottom-60 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-200/25 blur-[130px]"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.35, 0.7, 0.35],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================================================
          ORBITAL ELEMENT
      ========================================================== */}

      <motion.div
        className="pointer-events-none absolute left-1/2 top-[18rem] hidden h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-teal-400/15 lg:block"
        animate={{
          rotate: 360,
          scale: [1, 1.04, 1],
        }}
        transition={{
          rotate: {
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        {/* Orbital teal light */}
        <span className="absolute -left-2 top-1/2 h-4 w-4 rounded-full bg-teal-400 shadow-[0_0_30px_rgba(20,184,166,0.7)]" />

        {/* Orbital violet light */}
        <span className="absolute -right-2 top-1/2 h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_25px_rgba(139,92,246,0.6)]" />

        {/* Orbital cyan light */}
        <span className="absolute left-1/2 -top-1.5 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.6)]" />
      </motion.div>

      {/* Inner orbital ring */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[22rem] hidden h-[25rem] w-[25rem] -translate-x-1/2 rounded-full border border-slate-900/[0.04] lg:block"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* =========================================================
          FLOATING PARTICLES
      ========================================================== */}

      <motion.span
        className="pointer-events-none absolute left-[14%] top-[24%] h-1.5 w-1.5 rounded-full bg-teal-400/70 shadow-[0_0_12px_rgba(20,184,166,0.5)]"
        animate={{
          y: [0, -20, 0],
          opacity: [0.25, 0.9, 0.25],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.span
        className="pointer-events-none absolute left-[24%] top-[45%] h-1 w-1 rounded-full bg-cyan-400/70"
        animate={{
          x: [0, 15, 0],
          y: [0, -12, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.span
        className="pointer-events-none absolute right-[17%] top-[28%] h-1.5 w-1.5 rounded-full bg-violet-400/70 shadow-[0_0_12px_rgba(139,92,246,0.4)]"
        animate={{
          y: [0, 22, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      <motion.span
        className="pointer-events-none absolute right-[28%] top-[50%] h-1 w-1 rounded-full bg-teal-500/60"
        animate={{
          x: [0, -18, 0],
          opacity: [0.15, 0.7, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* =========================================================
          TOP LIGHT
      ========================================================== */}

      <motion.div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[65%] -translate-x-1/2 bg-gradient-to-r from-transparent via-teal-400/40 to-transparent"
        animate={{
          opacity: [0.2, 0.75, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================================================
          HERO CONTENT
      ========================================================== */}

      <div className="container-px relative pb-20 pt-28 sm:pb-24 sm:pt-36 lg:pt-40">
        <div className="mx-auto max-w-5xl text-center">
          {/* =====================================================
              BADGE
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-teal-200/80 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-700 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl"
              animate={{
                boxShadow: [
                  "0 8px 30px rgba(15,23,42,0.05)",
                  "0 8px 35px rgba(20,184,166,0.16)",
                  "0 8px 30px rgba(15,23,42,0.05)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.span
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="h-3.5 w-3.5 text-teal-500" />
              </motion.span>

              <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-violet-600 bg-clip-text text-transparent">
                Introducing TATTVAA AI — your autonomous revenue engine
              </span>
            </motion.span>
          </motion.div>

          {/* =====================================================
              MAIN HEADING
          ====================================================== */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 35,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto mt-7 max-w-4xl font-display text-4xl font-bold leading-[1.03] tracking-tight text-slate-950 text-balance sm:text-6xl lg:text-7xl"
          >
            The AI-native ERP that closes deals{" "}
            <span className="relative inline-block">
              {/* Glow behind gradient text */}
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-teal-400 via-cyan-400 to-violet-400 bg-[length:200%_100%] bg-clip-text text-transparent blur-[16px]"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  opacity: [0.2, 0.55, 0.2],
                }}
                transition={{
                  backgroundPosition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  opacity: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                while you sleep
              </motion.span>

              {/* Main gradient text */}
              <motion.span
                className="relative inline-block bg-gradient-to-r from-teal-500 via-cyan-500 to-violet-500 bg-[length:200%_100%] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                while you sleep
              </motion.span>
            </span>
          </motion.h1>

          {/* =====================================================
              DESCRIPTION
          ====================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 18,
              filter: "blur(4px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-slate-600 text-balance sm:text-lg"
          >
            TATTVAA unifies contacts, pipelines, conversations, and reporting
            into one intelligent workspace. Replace six disconnected tools with
            a single platform that thinks, acts, and executes.
          </motion.p>

          {/* =====================================================
              CTA BUTTONS
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            {/* Primary CTA */}
            <motion.a
              href="#pricing"
              whileHover={{
                y: -4,
                scale: 1.025,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(20,184,166,0.25)]"
            >
              {/* Shine */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative">Start free — no card needed</span>

              <motion.span
                className="relative"
                animate={{
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="#product"
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/75 px-5 py-3 text-sm font-semibold text-slate-800 shadow-[0_8px_25px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-teal-200 hover:bg-white"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-slate-100 transition-colors duration-300 group-hover:bg-teal-50">
                <Play className="h-3 w-3 fill-current text-slate-700 transition-colors group-hover:text-teal-600" />
              </span>
              Watch 2-min demo
            </motion.a>
          </motion.div>

          {/* =====================================================
              TRUST POINTS
          ====================================================== */}

          <motion.ul
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.8,
            }}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500"
          >
            {["Free 14-day trial", "Setup in minutes", "Cancel anytime"].map(
              (f, index) => (
                <motion.li
                  key={f}
                  whileHover={{
                    y: -2,
                    color: "#334155",
                  }}
                  className="inline-flex items-center gap-1.5 transition-colors"
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    <Check className="h-4 w-4 text-teal-500" />
                  </motion.span>

                  {f}
                </motion.li>
              ),
            )}
          </motion.ul>
        </div>

        {/* =========================================================
            DASHBOARD PREVIEW
        ========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 55,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <HeroPreview />
        </motion.div>

        {/* =========================================================
            REPLACED TOOLS
        ========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-16"
        >
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Replaces 10+ fragmented tools
          </p>

          <div className="mask-fade-x mt-5 overflow-hidden">
            <div className="flex w-max animate-marquee gap-3">
              {[...replaced, ...replaced, ...replaced].map((t, i) => (
                <motion.span
                  key={i}
                  whileHover={{
                    y: -3,
                    borderColor: "rgba(20,184,166,0.3)",
                    backgroundColor: "rgba(255,255,255,0.95)",
                  }}
                  className="whitespace-nowrap rounded-full border border-slate-200 bg-white/60 px-4 py-2 text-sm font-medium text-slate-500 shadow-[0_5px_20px_rgba(15,23,42,0.04)] backdrop-blur transition-colors"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f7faf9] to-transparent" />
    </section>
  );
}

/* ================================================================
   HERO PRODUCT PREVIEW
================================================================ */

function HeroPreview() {
  return (
    <div className="relative mx-auto mt-14 max-w-5xl">
      {/* Outer animated glow */}
      <motion.div
        className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-teal-400/20 via-cyan-300/10 to-violet-400/15 blur-3xl"
        animate={{
          opacity: [0.35, 0.7, 0.35],
          scale: [0.98, 1.02, 0.98],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Dashboard */}
      <motion.div
        whileHover={{
          y: -6,
          rotateX: 1,
          rotateY: -1,
          boxShadow: "0 40px 100px rgba(15,23,42,0.18)",
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="relative overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/90 shadow-[0_30px_90px_rgba(15,23,42,0.13)] backdrop-blur-xl"
      >
        {/* Browser top bar */}
        <div className="flex items-center gap-2 border-b border-slate-200/80 bg-slate-50/80 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-rose-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-teal-400/80" />

          <span className="ml-3 text-xs font-medium text-slate-400">
            tattvaaerp.com / dashboard
          </span>

          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-teal-50 px-2.5 py-1 text-[11px] font-semibold text-teal-600">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-teal-500"
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [0.8, 1.15, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
            Live
          </span>
        </div>

        <div className="grid grid-cols-12 gap-0">
          {/* Sidebar */}
          <aside className="col-span-3 hidden border-r border-slate-200/80 bg-slate-50/50 p-4 sm:block">
            <div className="space-y-1.5">
              {[
                "Dashboard",
                "Contacts",
                "Pipeline",
                "Conversations",
                "Reports",
                "Automations",
              ].map((n, i) => (
                <motion.div
                  key={n}
                  whileHover={{
                    x: 4,
                  }}
                  className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs transition-colors ${
                    i === 0
                      ? "bg-teal-50 font-medium text-teal-700"
                      : "text-slate-500 hover:bg-white hover:text-slate-700"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                  {n}
                </motion.div>
              ))}
            </div>
          </aside>

          {/* Main dashboard */}
          <div className="col-span-12 p-5 sm:col-span-9">
            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                {
                  k: "Revenue",
                  v: "$1.24M",
                  d: "+18%",
                },
                {
                  k: "Deals",
                  v: "342",
                  d: "+12",
                },
                {
                  k: "Win rate",
                  v: "38%",
                  d: "+4 pts",
                },
                {
                  k: "Response",
                  v: "2.1h",
                  d: "-31%",
                },
              ].map((m, index) => (
                <motion.div
                  key={m.k}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 1.25 + index * 0.1,
                  }}
                  whileHover={{
                    y: -4,
                    borderColor: "rgba(20,184,166,0.3)",
                    boxShadow: "0 10px 30px rgba(15,23,42,0.06)",
                  }}
                  className="rounded-xl border border-slate-200 bg-white p-3 transition-colors"
                >
                  <p className="text-[11px] uppercase tracking-wide text-slate-400">
                    {m.k}
                  </p>

                  <p className="mt-1 font-display text-lg font-bold text-slate-900">
                    {m.v}
                  </p>

                  <p className="text-[11px] font-semibold text-teal-600">
                    {m.d}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Pipeline */}
            <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-semibold text-slate-700">
                  Pipeline this quarter
                </p>

                <p className="text-[11px] text-slate-400">Q3 2026</p>
              </div>

              <div className="space-y-2.5">
                {[
                  {
                    l: "Discovery",
                    w: "82%",
                    c: "bg-teal-500",
                  },
                  {
                    l: "Qualified",
                    w: "64%",
                    c: "bg-emerald-400",
                  },
                  {
                    l: "Proposal",
                    w: "46%",
                    c: "bg-cyan-400",
                  },
                  {
                    l: "Negotiation",
                    w: "28%",
                    c: "bg-violet-400",
                  },
                ].map((b, index) => (
                  <div key={b.l}>
                    <div className="mb-1 flex justify-between text-[11px] text-slate-500">
                      <span>{b.l}</span>
                      <span>{b.w}</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        animate={{
                          width: b.w,
                        }}
                        transition={{
                          duration: 1.1,
                          delay: 1.45 + index * 0.15,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`h-full rounded-full ${b.c}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Small activity row */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                {
                  label: "AI actions",
                  value: "1,284",
                },
                {
                  label: "Automation",
                  value: "94%",
                },
                {
                  label: "Saved time",
                  value: "126h",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-200 bg-slate-50/70 p-3"
                >
                  <p className="text-[10px] uppercase tracking-wide text-slate-400">
                    {item.label}
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-800">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* =========================================================
          FLOATING AI INSIGHT CARD
      ========================================================== */}

      <motion.div
        className="absolute -right-3 top-10 hidden rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-[0_18px_50px_rgba(15,23,42,0.14)] backdrop-blur-xl md:block"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.04,
          rotate: 1,
        }}
      >
        <div className="flex items-center gap-2">
          <motion.span
            className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 text-teal-600"
            animate={{
              boxShadow: [
                "0 0 0 rgba(20,184,166,0)",
                "0 0 22px rgba(20,184,166,0.22)",
                "0 0 0 rgba(20,184,166,0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="h-4 w-4" />
          </motion.span>

          <div>
            <p className="text-[11px] font-semibold text-slate-800">
              AI insight
            </p>

            <p className="text-[10px] text-slate-400">3 deals at risk today</p>
          </div>
        </div>
      </motion.div>

      {/* Floating notification */}
      <motion.div
        className="absolute -bottom-5 -left-3 hidden rounded-xl border border-slate-200 bg-white/95 px-3 py-2 shadow-[0_15px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:block"
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />

          <span className="text-[10px] font-medium text-slate-600">
            AI automation completed
          </span>
        </div>
      </motion.div>
    </div>
  );
}
