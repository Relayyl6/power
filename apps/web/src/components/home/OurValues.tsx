"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Integrity",
    desc: "We believe trust is the foundation of every successful digital asset transaction.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18" />
        <path d="M5 8h14" />
        <path d="M5 16h14" />
        <circle cx="12" cy="8" r="2" />
        <circle cx="12" cy="16" r="2" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    desc: "We communicate clearly about rates, requirements, and exact transaction conditions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Security",
    desc: "We implement institutional-grade protocols to safeguard every exchange and payout.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    desc: "We continually refine our processes, speed of delivery, and client satisfaction standards.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function OurValues() {
  return (
    <section className="pt-20 pb-16 w-full relative">
      <div className="px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        
        {/* Header & Manifesto */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-3">
            Our Core Values
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Making a Difference
          </h2>
          
          {/* Manifesto Card Container */}
          <div className="max-w-3xl mx-auto glass-panel p-5 sm:p-8 rounded-2xl md:rounded-3xl border border-white/5 bg-[#0F141E]/60 backdrop-blur-md text-left sm:text-center relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />
            <p className="text-base sm:text-lg md:text-xl font-semibold text-white mb-3 leading-snug">
              Your trusted partner for fast, secure, and reliable digital solutions.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed mb-5">
              We buy Bitcoin, USDT, and gift cards, provide international gift delivery, and offer digital services tailored to your needs. Every transaction represents your money, business, or opportunity—we make each one simple, seamless, and secure.
            </p>
            
            {/* Quick Trust Badges */}
            <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2 pt-3 border-t border-white/[0.06]">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] text-[11px] sm:text-xs text-slate-300 border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Verified Rates
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] text-[11px] sm:text-xs text-slate-300 border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                WhatsApp Concierge
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] text-[11px] sm:text-xs text-slate-300 border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Instant Settlement
              </span>
            </div>
          </div>
        </motion.div>

        {/* 2-Column Mobile Grid / 4-Column Desktop Grid for Values */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
        >
          {values.map((val, i) => (
            <motion.div 
              key={i} 
              variants={cardVariants}
              className="glass-panel p-4 sm:p-6 rounded-2xl bg-[#0F141E]/80 border border-white/5 hover:border-brand-orange/40 transition-all duration-300 group relative flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {val.icon}
                </div>
                <span className="text-[10px] font-mono text-text-tertiary">0{i + 1}</span>
              </div>
              
              <h3 className="font-display text-sm sm:text-base md:text-lg font-bold text-white mb-1.5 group-hover:text-brand-orange transition-colors">
                {val.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed flex-grow">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Blurred background text spanning full width at the bottom */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center translate-y-1/2 pointer-events-none z-0 overflow-hidden">
        <motion.span 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[14.5vw] md:text-[11.8vw] font-['Elephant',serif] font-bold text-white/[0.06] blur-[2px] whitespace-nowrap tracking-tighter select-none"
        >
          TRADE WITH US
        </motion.span>
      </div>
    </section>
  );
}
