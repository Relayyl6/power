"use client";

import { motion } from "framer-motion";

const values = [
  {
    num: "01",
    title: "Integrity",
    desc: "Trust is the cornerstone of our service. The rate confirmed on WhatsApp is the exact amount settled into your account.",
  },
  {
    num: "02",
    title: "Transparency",
    desc: "Clear terms and upfront communication before any transaction begins. No unexpected deductions or hidden fees.",
  },
  {
    num: "03",
    title: "Security",
    desc: "Standard verification procedures and strict handling protocols to protect your funds and personal information.",
  },
  {
    num: "04",
    title: "Excellence",
    desc: "Prompt execution and dedicated concierge support ensuring every exchange is smooth from start to finish.",
  },
];

export default function OurValues() {
  return (
    <section className="pt-20 pb-20 w-full relative">
      <div className="px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-text-tertiary text-xs uppercase tracking-widest font-mono mb-2">
            Our Commitment
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Making a Difference
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            We buy Bitcoin, USDT, and gift cards, provide international gift delivery, and offer digital solutions built on personal accountability.
          </p>
        </div>

        {/* Minimal 4-Pillar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {values.map((val) => (
            <div 
              key={val.num}
              className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-text-tertiary block mb-4">
                  {val.num}
                </span>
                
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  {val.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Blurred background watermark spanning full width at the bottom */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center translate-y-1/2 pointer-events-none z-0 overflow-hidden">
        <motion.span 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[14.5vw] md:text-[11.8vw] font-['Elephant',serif] font-bold text-white/[0.04] blur-[2px] whitespace-nowrap tracking-tighter select-none"
        >
          TRADE WITH US
        </motion.span>
      </div>
    </section>
  );
}
