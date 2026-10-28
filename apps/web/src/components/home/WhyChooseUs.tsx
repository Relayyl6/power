"use client";

import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyChooseUs() {
  return (
    <section className="pt-16 pb-24 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
      
      {/* Header with Fade-In */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mb-10 sm:mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-2.5">
          Why Power Exchange
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Why Choose Us?
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* Left Column: Bento Grid on Mobile & Tablet (Spans 7 cols on desktop) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4"
        >
          {points.map((pt, i) => {
            const isFullWidth = i === 4;

            return (
              <motion.div 
                key={pt.num}
                variants={itemVariants}
                className={`group rounded-2xl bg-[#0F141E]/80 border border-white/[0.08] hover:border-brand-orange/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isFullWidth 
                    ? "col-span-2 p-4 sm:p-6 bg-gradient-to-r from-[#0F141E] via-[#141B28] to-[#0F141E]" 
                    : "col-span-1 p-4 sm:p-5"
                }`}
              >
                {/* Subtle brand orange top border glow on hover */}
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                    <span className="font-mono text-[11px] sm:text-xs font-bold text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded border border-brand-orange/20">
                      {pt.num}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-sm sm:text-base font-semibold text-white mb-1 group-hover:text-brand-orange transition-colors">
                    {pt.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Right Column: Centered Founder Image (Spans 5 cols on desktop) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-5 relative h-[420px] sm:h-[480px] lg:h-auto min-h-[420px] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0A0E17] group"
        >
          <Image 
            src="/founder.jpg"
            alt="Founder of Power Exchange"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            priority
          />

          {/* Understated bottom badge with brand orange accent */}
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto glass-panel bg-[#0F141E]/90 px-4 py-3 rounded-xl border border-white/10 flex items-center gap-3 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-white">Verified Transaction Desk</p>
              <p className="text-[10px] text-text-tertiary">Direct accountability on every trade</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
