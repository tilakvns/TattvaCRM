// import {
//   Sparkles,
//   Send,
//   Bot,
//   TrendingUp,
//   ShieldAlert,
//   CalendarClock,
// } from "lucide-react";

// const capabilities = [
//   {
//     icon: TrendingUp,
//     title: "Predictive deal scoring",
//     desc: "Every opportunity is scored in real time using historical win patterns, engagement signals, and rep behavior.",
//   },
//   {
//     icon: ShieldAlert,
//     title: "Risk detection",
//     desc: "Pulse flags deals that are stalling, contacts going cold, and accounts likely to churn — before it happens.",
//   },
//   {
//     icon: CalendarClock,
//     title: "Autonomous follow-ups",
//     desc: "AI drafts and schedules the right next step for every deal. You approve, it sends — at the perfect moment.",
//   },
// ];

// export default function AISection() {
//   return (
//     <section
//       id="ai"
//       className="relative overflow-hidden bg-ink-50 py-24 sm:py-28"
//     >
//       <div className="absolute inset-0 bg-dots opacity-60" />
//       <div className="container-px relative">
//         <div className="grid items-center gap-12 lg:grid-cols-2">
//           <div>
//             <span className="eyebrow">
//               <Sparkles className="h-3.5 w-3.5" /> Pulse AI
//             </span>
//             <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl text-balance">
//               Meet your always-on revenue analyst
//             </h2>
//             <p className="mt-4 text-lg text-ink-500 text-balance">
//               Move beyond simple chat. Pulse AI is wired into your data model —
//               it reasons across deals, contacts, and conversations to take
//               action autonomously.
//             </p>

//             <div className="mt-8 space-y-4">
//               {capabilities.map((c) => (
//                 <div key={c.title} className="flex gap-4">
//                   <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-brand-600 shadow-soft">
//                     <c.icon className="h-5 w-5" strokeWidth={2.2} />
//                   </span>
//                   <div>
//                     <h3 className="font-display text-base font-bold text-ink-900">
//                       {c.title}
//                     </h3>
//                     <p className="mt-1 text-sm leading-relaxed text-ink-500">
//                       {c.desc}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <ChatCard />
//         </div>
//       </div>
//     </section>
//   );
// }

// function ChatCard() {
//   return (
//     <div className="relative">
//       <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-brand-200/60 to-accent-200/40 blur-2xl" />
//       <div className="relative overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card">
//         <div className="flex items-center gap-3 border-b border-ink-100 bg-ink-50/60 px-5 py-3.5">
//           <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white">
//             <Bot className="h-5 w-5" />
//             <span className="absolute inset-0 animate-pulse-ring rounded-xl ring-2 ring-brand-400/60" />
//           </span>
//           <div>
//             <p className="text-sm font-bold text-ink-900">Pulse AI</p>
//             <p className="text-[11px] text-brand-600">
//               Online · reasoning across 1,284 deals
//             </p>
//           </div>
//           <span className="ml-auto rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-700">
//             GPT-class
//           </span>
//         </div>

//         <div className="space-y-4 p-5">
//           <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-brand-600 px-4 py-2.5 text-sm text-white">
//             Which deals are at risk this week and what should I do about them?
//           </div>

//           <div className="max-w-[88%] space-y-3">
//             <div className="rounded-2xl rounded-bl-md bg-ink-100 px-4 py-3 text-sm text-ink-700">
//               I found{" "}
//               <span className="font-semibold text-ink-900">
//                 3 deals at risk
//               </span>{" "}
//               totaling{" "}
//               <span className="font-semibold text-ink-900">$84,200</span>.
//               Here's the breakdown:
//             </div>

//             {[
//               {
//                 name: "Northwind Logistics",
//                 amt: "$42,000",
//                 reason: "No reply in 9 days",
//               },
//               {
//                 name: "Acme Corp",
//                 amt: "$28,200",
//                 reason: "Champion left the company",
//               },
//               {
//                 name: "Globex",
//                 amt: "$14,000",
//                 reason: "Stage stalled 21 days",
//               },
//             ].map((d) => (
//               <div
//                 key={d.name}
//                 className="flex items-center justify-between rounded-xl border border-ink-100 bg-white px-3.5 py-2.5"
//               >
//                 <div>
//                   <p className="text-sm font-semibold text-ink-900">{d.name}</p>
//                   <p className="text-[11px] text-ink-500">{d.reason}</p>
//                 </div>
//                 <span className="font-display text-sm font-bold text-ink-900">
//                   {d.amt}
//                 </span>
//               </div>
//             ))}

//             <div className="rounded-2xl rounded-bl-md bg-ink-100 px-4 py-3 text-sm text-ink-700">
//               I drafted a follow-up for Northwind and scheduled a check-in call.
//               Want me to send it?
//             </div>
//           </div>

//           <div className="flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2.5">
//             <input
//               type="text"
//               placeholder="Ask Pulse anything…"
//               className="flex-1 bg-transparent text-sm text-ink-700 placeholder:text-ink-400 focus:outline-none"
//             />
//             <button className="grid h-8 w-8 place-items-center rounded-full bg-brand-600 text-white transition hover:bg-brand-700">
//               <Send className="h-4 w-4" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import {
  Sparkles,
  Send,
  Bot,
  TrendingUp,
  ShieldAlert,
  CalendarClock,
} from "lucide-react";

const capabilities = [
  {
    icon: TrendingUp,
    title: "Predictive deal scoring",
    desc: "Every opportunity is scored in real time using historical win patterns, engagement signals, and rep behavior.",
  },
  {
    icon: ShieldAlert,
    title: "Risk detection",
    desc: "Tattvaa flags deals that are stalling, contacts going cold, and accounts likely to churn — before it happens.",
  },
  {
    icon: CalendarClock,
    title: "Autonomous follow-ups",
    desc: "AI drafts and schedules the right next step for every deal. You approve, it sends — at the perfect moment.",
  },
];

export default function AISection() {
  return (
    <section
      id="ai"
      className="relative overflow-hidden bg-ink-50 py-24 sm:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-60" />

      {/* Soft animated background glow */}
      <div className="ai-bg-glow ai-bg-glow-one" />
      <div className="ai-bg-glow ai-bg-glow-two" />

      <div className="container-px relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="ai-content">
            {/* Eyebrow */}
            <span className="eyebrow ai-eyebrow">
              <Sparkles className="h-3.5 w-3.5 ai-sparkle" />
              Tattvaa AI
            </span>

            {/* Heading */}
            <h2 className="ai-heading mt-4 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl text-balance">
              Meet your always-on{" "}
              <span className="ai-heading-gradient">revenue analyst</span>
            </h2>

            {/* Description */}
            <p className="ai-description mt-4 text-lg text-ink-500 text-balance">
              Move beyond simple chat. Pulse AI is wired into your data model —
              it reasons across deals, contacts, and conversations to take
              action autonomously.
            </p>

            {/* Capabilities */}
            <div className="mt-8 space-y-5">
              {capabilities.map((c, index) => (
                <div key={c.title} className="group flex gap-4">
                  {/* Animated icon */}
                  <span
                    className="relative mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-brand-600 shadow-soft transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-lg"
                    style={{
                      animation: `iconFloat 4s ease-in-out ${index * 0.5}s infinite`,
                    }}
                  >
                    {/* Glow behind icon */}
                    <span
                      className="absolute inset-0 rounded-xl bg-brand-400/20 blur-md"
                      style={{
                        animation: `iconGlow 2.5s ease-in-out ${index * 0.4}s infinite`,
                      }}
                    />

                    {/* Icon */}
                    <c.icon
                      className="relative z-10 h-5 w-5 transition-transform duration-500 group-hover:scale-110"
                      strokeWidth={2.2}
                    />

                    {/* Small animated ring */}
                    <span
                      className="absolute inset-[-3px] rounded-xl border border-brand-400/0 group-hover:border-brand-400/40"
                      style={{
                        animation: `iconRing 3s ease-in-out ${index * 0.6}s infinite`,
                      }}
                    />
                  </span>

                  {/* Content */}
                  <div className="pt-0.5">
                    <h3 className="font-display text-base font-bold text-ink-900 transition-colors duration-300 group-hover:text-brand-700">
                      {c.title}
                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-ink-500">
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CHAT CARD */}
          <ChatCard />
        </div>
      </div>
    </section>
  );
}

function ChatCard() {
  return (
    <div className="ai-chat-wrapper relative">
      {/* Animated glow */}
      <div className="ai-card-glow absolute -inset-5 rounded-[2rem]" />

      {/* Secondary glow */}
      <div className="ai-card-glow-secondary absolute -inset-2 rounded-[2rem]" />

      <div className="ai-chat-card relative overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card">
        {/* Top header */}
        <div className="flex items-center gap-3 border-b border-ink-100 bg-ink-50/60 px-5 py-3.5">
          {/* Bot icon */}
          <span className="ai-bot-icon relative grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white">
            <Bot className="h-5 w-5" />

            <span className="absolute inset-0 rounded-xl ring-2 ring-brand-400/50 ai-pulse-ring" />
          </span>

          <div>
            <p className="text-sm font-bold text-ink-900">Tattvaa AI</p>

            <p className="text-[11px] text-brand-600">
              <span className="ai-online-dot mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-brand-500" />
              Online · reasoning across 1,284 deals
            </p>
          </div>

          <span className="ml-auto rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-700 ai-badge">
            GPT-class
          </span>
        </div>

        {/* Chat body */}
        <div className="space-y-4 p-5">
          {/* User message */}
          <div className="ai-message ai-message-one ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-brand-600 px-4 py-2.5 text-sm text-white">
            Which deals are at risk this week and what should I do about them?
          </div>

          {/* AI response */}
          <div className="ai-message ai-message-two max-w-[88%] space-y-3">
            <div className="rounded-2xl rounded-bl-md bg-ink-100 px-4 py-3 text-sm text-ink-700">
              I found{" "}
              <span className="font-semibold text-ink-900">
                3 deals at risk
              </span>{" "}
              totaling{" "}
              <span className="font-semibold text-ink-900">$84,200</span>.
              Here's the breakdown:
            </div>

            {/* Deal cards */}
            {[
              {
                name: "Northwind Logistics",
                amt: "$42,000",
                reason: "No reply in 9 days",
              },
              {
                name: "Acme Corp",
                amt: "$28,200",
                reason: "Champion left the company",
              },
              {
                name: "Globex",
                amt: "$14,000",
                reason: "Stage stalled 21 days",
              },
            ].map((d, index) => (
              <div
                key={d.name}
                className="ai-deal-card flex items-center justify-between rounded-xl border border-ink-100 bg-white px-3.5 py-2.5"
                style={{
                  animationDelay: `${0.9 + index * 0.15}s`,
                }}
              >
                <div>
                  <p className="text-sm font-semibold text-ink-900">{d.name}</p>

                  <p className="text-[11px] text-ink-500">{d.reason}</p>
                </div>

                <span className="font-display text-sm font-bold text-ink-900">
                  {d.amt}
                </span>
              </div>
            ))}

            {/* AI recommendation */}
            <div className="ai-message ai-message-three rounded-2xl rounded-bl-md bg-ink-100 px-4 py-3 text-sm text-ink-700">
              I drafted a follow-up for Northwind and scheduled a check-in call.
              Want me to send it?
            </div>
          </div>

          {/* Input */}
          <div className="ai-input flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2.5 transition-all duration-300 focus-within:border-brand-400 focus-within:shadow-[0_0_0_4px_rgba(20,184,166,0.08)]">
            <input
              type="text"
              placeholder="Ask Tattvaa anything…"
              className="flex-1 bg-transparent text-sm text-ink-700 placeholder:text-ink-400 focus:outline-none"
            />

            <button
              className="ai-send-button grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-600 text-white transition-all duration-300 hover:scale-110 hover:bg-brand-700"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bottom shine */}
        <div className="ai-card-shine pointer-events-none absolute inset-x-0 bottom-0 h-24" />
      </div>
    </div>
  );
}
