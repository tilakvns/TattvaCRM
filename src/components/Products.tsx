// import {
//   Users,
//   GitBranch,
//   MessageSquare,
//   BarChart3,
//   Zap,
//   ShieldCheck,
// } from "lucide-react";

// const products = [
//   {
//     icon: Users,
//     title: "Contacts & Accounts",
//     desc: "A unified record for every person and company. Auto-enriched with email activity, calls, and deal history.",
//     points: [
//       "360° contact profiles",
//       "Smart deduplication",
//       "Custom fields & segments",
//     ],
//   },
//   {
//     icon: GitBranch,
//     title: "Pipelines & Deals",
//     desc: "Visual kanban pipelines that adapt to your process. Drag, drop, and forecast revenue in real time.",
//     points: [
//       "Unlimited pipelines",
//       "Weighted forecasting",
//       "Stage automations",
//     ],
//   },
//   {
//     icon: MessageSquare,
//     title: "Conversations",
//     desc: "Email, chat, SMS, and calls in one shared inbox. Every message tied to the right deal automatically.",
//     points: [
//       "Unified inbox",
//       "Sequence templates",
//       "Call recording & transcripts",
//     ],
//   },
//   {
//     icon: BarChart3,
//     title: "Reports & Dashboards",
//     desc: "Live dashboards that pull from every corner of your CRM. No exports, no spreadsheets, no guesswork.",
//     points: ["Drag-and-drop builder", "Revenue analytics", "Team scorecards"],
//   },
//   {
//     icon: Zap,
//     title: "Automations",
//     desc: "Trigger workflows on any event. Assign leads, send sequences, update fields — all without code.",
//     points: [
//       "Visual workflow builder",
//       "200+ triggers & actions",
//       "Time-based rules",
//     ],
//   },
//   {
//     icon: ShieldCheck,
//     title: "Permissions & Security",
//     desc: "Granular roles, SSO, and audit logs built in. SOC 2 Type II and GDPR ready out of the box.",
//     points: ["Role-based access", "SSO & SCIM", "Full audit history"],
//   },
// ];

// export default function Products() {
//   return (
//     <section id="product" className="relative py-24 sm:py-28">
//       <div className="container-px">
//         <div className="mx-auto max-w-2xl text-center">
//           <span className="eyebrow">One platform</span>
//           <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl text-balance">
//             Six products. One unified CRM.
//           </h2>
//           <p className="mt-4 text-lg text-ink-500 text-balance">
//             Stop stitching together a dozen point solutions. Pulse brings every
//             customer-facing workflow into a single, intelligent workspace.
//           </p>
//         </div>

//         <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           {products.map((p) => (
//             <article
//               key={p.title}
//               className="card group p-6 hover:-translate-y-1 hover:shadow-glow"
//             >
//               <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
//                 <p.icon className="h-5 w-5" strokeWidth={2.2} />
//               </span>
//               <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
//                 {p.title}
//               </h3>
//               <p className="mt-2 text-sm leading-relaxed text-ink-500">
//                 {p.desc}
//               </p>
//               <ul className="mt-4 space-y-1.5">
//                 {p.points.map((pt) => (
//                   <li
//                     key={pt}
//                     className="flex items-center gap-2 text-sm text-ink-600"
//                   >
//                     <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
//                     {pt}
//                   </li>
//                 ))}
//               </ul>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import {
  Users,
  GitBranch,
  MessageSquare,
  BarChart3,
  Zap,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const products = [
  {
    icon: Users,
    number: "01",
    title: "Contacts & Accounts",
    desc: "A unified record for every person and company. Auto-enriched with email activity, calls, and deal history.",
    points: [
      "360° contact profiles",
      "Smart deduplication",
      "Custom fields & segments",
    ],
  },
  {
    icon: GitBranch,
    number: "02",
    title: "Pipelines & Deals",
    desc: "Visual kanban pipelines that adapt to your process. Drag, drop, and forecast revenue in real time.",
    points: [
      "Unlimited pipelines",
      "Weighted forecasting",
      "Stage automations",
    ],
  },
  {
    icon: MessageSquare,
    number: "03",
    title: "Conversations",
    desc: "Email, chat, SMS, and calls in one shared inbox. Every message tied to the right deal automatically.",
    points: [
      "Unified inbox",
      "Sequence templates",
      "Call recording & transcripts",
    ],
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Reports & Dashboards",
    desc: "Live dashboards that pull from every corner of your CRM. No exports, no spreadsheets, no guesswork.",
    points: ["Drag-and-drop builder", "Revenue analytics", "Team scorecards"],
  },
  {
    icon: Zap,
    number: "05",
    title: "Automations",
    desc: "Trigger workflows on any event. Assign leads, send sequences, update fields — all without code.",
    points: [
      "Visual workflow builder",
      "200+ triggers & actions",
      "Time-based rules",
    ],
  },
  {
    icon: ShieldCheck,
    number: "06",
    title: "Permissions & Security",
    desc: "Granular roles, SSO, and audit logs built in. SOC 2 Type II and GDPR ready out of the box.",
    points: ["Role-based access", "SSO & SCIM", "Full audit history"],
  },
];

export default function Products() {
  return (
    <section
      id="product"
      className="
        relative overflow-hidden
        bg-gradient-to-b from-white via-slate-50/70 to-white
        py-24 sm:py-28 lg:py-32
      "
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top teal glow */}
        <div
          className="
            absolute left-1/2 top-0
            h-[500px] w-[700px]
            -translate-x-1/2
            rounded-full
            bg-teal-400/[0.07]
            blur-[120px]
          "
        />

        {/* Left glow */}
        <div
          className="
            absolute -left-40 top-1/3
            h-[350px] w-[350px]
            rounded-full
            bg-cyan-400/[0.06]
            blur-[100px]
          "
        />

        {/* Right glow */}
        <div
          className="
            absolute -right-40 bottom-10
            h-[400px] w-[400px]
            rounded-full
            bg-emerald-400/[0.06]
            blur-[110px]
          "
        />

        {/* Subtle grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.025]
            [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />
      </div>

      <div className="container-px relative">
        {/* =======================================================
            SECTION HEADER
        ======================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-teal-200/80
              bg-teal-50/80
              px-4 py-1.5
              shadow-[0_4px_20px_rgba(20,184,166,0.08)]
            "
          >
            <span
              className="
                grid h-5 w-5 place-items-center
                rounded-full
                bg-teal-500
                text-white
              "
            >
              <Sparkles className="h-3 w-3" />
            </span>

            <span
              className="
                text-[11px] font-bold uppercase
                tracking-[0.18em]
                text-teal-700
              "
            >
              One Platform
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-5
              font-display
              text-4xl font-extrabold
              leading-[1.08]
              tracking-[-0.035em]
              text-slate-950
              sm:text-5xl
              lg:text-[3.5rem]
            "
          >
            Six products.
            <br className="hidden sm:block" />
            <span
              className="
                bg-gradient-to-r
                from-slate-950
                via-slate-800
                to-teal-700
                bg-clip-text
                text-transparent
              "
            >
              One unified CRM.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto mt-6
              max-w-2xl
              text-base leading-7
              text-slate-500
              sm:text-lg sm:leading-8
            "
          >
            Stop stitching together a dozen point solutions. TATTVAA brings
            every customer-facing workflow into one intelligent workspace.
          </p>
        </div>

        {/* =======================================================
            PRODUCT GRID
        ======================================================== */}

        <div
          className="
            mt-14 grid gap-5
            sm:grid-cols-2
            lg:mt-16 lg:grid-cols-3
          "
        >
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <article
                key={product.title}
                className="
                  group relative
                  overflow-hidden
                  rounded-[1.5rem]
                  border border-slate-200/80
                  bg-white/90
                  p-6
                  shadow-[0_8px_30px_rgba(15,23,42,0.045)]
                  backdrop-blur-xl

                  transition-all
                  duration-500
                  ease-out

                  hover:-translate-y-2
                  hover:border-teal-200
                  hover:bg-white
                  hover:shadow-[0_24px_60px_rgba(15,23,42,0.10),0_0_35px_rgba(20,184,166,0.08)]
                "
              >
                {/* =================================================
                    HOVER GRADIENT BORDER
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    rounded-[1.5rem]
                    bg-gradient-to-br
                    from-teal-400/0
                    via-teal-400/0
                    to-emerald-400/0
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* =================================================
                    TOP SHINE
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute -top-20 -right-20
                    h-40 w-40
                    rounded-full
                    bg-teal-400/10
                    blur-3xl
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* =================================================
                    CARD HEADER
                ================================================== */}

                <div className="relative flex items-start justify-between">
                  {/* Icon */}
                  <div
                    className="
                      relative
                      grid h-12 w-12
                      place-items-center
                      overflow-hidden
                      rounded-2xl
                      border border-teal-100
                      bg-gradient-to-br
                      from-teal-50
                      to-emerald-50
                      text-teal-600
                      shadow-[0_6px_18px_rgba(20,184,166,0.08)]
                      transition-all
                      duration-500

                      group-hover:scale-110
                      group-hover:rotate-3
                      group-hover:border-teal-200
                      group-hover:bg-gradient-to-br
                      group-hover:from-teal-500
                      group-hover:to-emerald-500
                      group-hover:text-white
                      group-hover:shadow-[0_10px_25px_rgba(20,184,166,0.25)]
                    "
                  >
                    {/* Icon shine */}
                    <span
                      className="
                        pointer-events-none
                        absolute inset-0
                        -translate-x-full
                        bg-gradient-to-r
                        from-transparent
                        via-white/40
                        to-transparent
                        transition-transform
                        duration-700
                        group-hover:translate-x-full
                      "
                    />

                    <Icon className="relative h-5 w-5" strokeWidth={2.2} />
                  </div>

                  {/* Number */}
                  <span
                    className="
                      font-mono
                      text-[10px]
                      font-bold
                      tracking-[0.18em]
                      text-slate-300
                      transition-colors
                      duration-300
                      group-hover:text-teal-500
                    "
                  >
                    {product.number}
                  </span>
                </div>

                {/* =================================================
                    TITLE
                ================================================== */}

                <div className="relative mt-5">
                  <h3
                    className="
                      font-display
                      text-xl
                      font-bold
                      tracking-tight
                      text-slate-950
                      transition-colors
                      duration-300
                      group-hover:text-teal-700
                    "
                  >
                    {product.title}
                  </h3>

                  {/* Animated title line */}
                  <div
                    className="
                      mt-3
                      h-[2px]
                      w-8
                      origin-left
                      rounded-full
                      bg-gradient-to-r
                      from-teal-500
                      to-emerald-400
                      transition-all
                      duration-500
                      group-hover:w-16
                    "
                  />
                </div>

                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                <p
                  className="
                    relative
                    mt-4
                    text-sm
                    leading-6
                    text-slate-500
                    transition-colors
                    duration-300
                    group-hover:text-slate-600
                  "
                >
                  {product.desc}
                </p>

                {/* =================================================
                    FEATURES
                ================================================== */}

                <ul className="relative mt-5 space-y-2.5">
                  {product.points.map((point, index) => (
                    <li
                      key={point}
                      className="
                        flex items-center gap-2.5
                        text-sm
                        text-slate-600
                        transition-all
                        duration-300
                      "
                    >
                      {/* Bullet */}
                      <span
                        className="
                          relative
                          flex h-4 w-4
                          shrink-0
                          items-center
                          justify-center
                        "
                      >
                        <span
                          className="
                            h-1.5 w-1.5
                            rounded-full
                            bg-teal-500
                            shadow-[0_0_8px_rgba(20,184,166,0.25)]
                            transition-all
                            duration-300
                            group-hover:h-2
                            group-hover:w-2
                          "
                        />
                      </span>

                      <span
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-0.5
                        "
                        style={{
                          transitionDelay: `${index * 35}ms`,
                        }}
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* =================================================
                    BOTTOM ACTION
                ================================================== */}

                <div
                  className="
                    relative mt-6
                    flex items-center
                    border-t border-slate-100
                    pt-5
                  "
                >
                  <span
                    className="
                      text-xs font-semibold
                      text-slate-400
                      transition-colors
                      duration-300
                      group-hover:text-teal-600
                    "
                  >
                    Explore capability
                  </span>

                  <span
                    className="
                      ml-auto
                      grid h-8 w-8
                      place-items-center
                      rounded-full
                      border border-slate-200
                      bg-white
                      text-slate-400
                      transition-all
                      duration-300
                      group-hover:border-teal-200
                      group-hover:bg-teal-50
                      group-hover:text-teal-600
                      group-hover:translate-x-1
                    "
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                {/* Bottom gradient accent */}
                <div
                  className="
                    absolute bottom-0 left-6 right-6
                    h-px
                    scale-x-0
                    bg-gradient-to-r
                    from-transparent
                    via-teal-400
                    to-transparent
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                />
              </article>
            );
          })}
        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================== */}

        <div
          className="
            mx-auto mt-12
            flex max-w-2xl
            flex-col items-center
            justify-center gap-3
            text-center
            sm:flex-row
          "
        >
          <span
            className="
              h-2 w-2
              rounded-full
              bg-teal-500
              shadow-[0_0_12px_rgba(20,184,166,0.5)]
            "
          />

          <p className="text-sm font-medium text-slate-500">
            One workspace. One source of truth. Zero context switching.
          </p>
        </div>
      </div>
    </section>
  );
}
