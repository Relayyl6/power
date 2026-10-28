"use client";

import Image from "next/image";

const points = [
  {
    num: "01",
    title: "Fast",
    desc: "Prompt responses and efficient execution so your trades settle without unnecessary waiting.",
  },
  {
    num: "02",
    title: "Secure",
    desc: "Responsible processing and transaction verification to protect every exchange.",
  },
  {
    num: "03",
    title: "Reliable",
    desc: "Dependable concierge service with consistent communication and straightforward settlement.",
  },
  {
    num: "04",
    title: "Competitive",
    desc: "Pricing calibrated regularly against prevailing market conditions to deliver fair value.",
  },
  {
    num: "05",
    title: "Customer-Focused",
    desc: "Direct 1-on-1 support on WhatsApp from initial quote to final bank transfer.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="pt-16 pb-24 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="mb-12">
        <p className="text-text-tertiary text-xs uppercase tracking-widest font-mono mb-2">
          Why Power Exchange
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Why Choose Us?
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: 5 Clean Minimal Points */}
        <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-4">
          {points.map((pt) => (
            <div 
              key={pt.num}
              className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-all flex items-start gap-4 sm:gap-5"
            >
              <span className="font-mono text-xs text-text-tertiary pt-0.5 shrink-0">
                {pt.num}
              </span>
              
              <div>
                <h3 className="font-display text-base font-semibold text-white mb-1">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Founder Image Enclosure */}
        <div className="lg:col-span-5 relative h-[440px] sm:h-[500px] lg:h-[540px] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0A0E17]">
          <Image 
            src="/founder.jpg"
            alt="Founder of Power Exchange"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center"
            priority
          />

          {/* Understated bottom badge */}
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto glass-panel bg-[#0F141E]/90 px-4 py-3 rounded-xl border border-white/10 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-white">Verified Transaction Desk</p>
              <p className="text-[10px] text-text-tertiary">Direct accountability on every trade</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
