"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const points = [
  {
    num: "01",
    title: "FAST",
    tag: "Sub-5 Min",
    desc: "Prompt responses and efficient transaction execution so your trades settle without waiting.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "SECURE",
    tag: "Bank-Grade",
    desc: "Rigorous verification and strict confidentiality protocols protect every naira and asset.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "RELIABLE",
    tag: "Consistent",
    desc: "A proven track record of dependability, transparent execution, and professional concierge care.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "COMPETITIVE",
    tag: "Market Peak",
    desc: "Rates regularly benchmarked to prevailing market conditions ensuring maximum trade value.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "CUSTOMER-FOCUSED",
    tag: "1-on-1 Concierge",
    desc: "Every exchange handled with dedicated personal attention, total clarity, and swift resolution.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="16 11 18 13 22 9" />
      </svg>
    ),
  },
];

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyChooseUs() {
  return (
    <section className="pt-12 pb-24 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Left Column: Interactive Feature Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-3">
            Why Power Exchange
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-10">
            Why Choose Us?
          </h2>
          
          {/* 2-Column Mobile & Responsive Desktop Grid */}
          <motion.div 
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-2.5 sm:gap-4"
          >
            {points.map((pt, i) => {
              const isLast = i === 4;

              return (
                <motion.div 
                  key={pt.num} 
                  variants={itemVariants}
                  className={`glass-panel p-3.5 sm:p-5 rounded-2xl border border-white/5 bg-[#0F141E]/70 hover:border-brand-orange/40 transition-all duration-300 group flex flex-col justify-between ${
                    isLast ? "col-span-2 p-4 sm:p-5 bg-gradient-to-r from-[#0F141E] via-[#141B28] to-[#0F141E]" : ""
                  }`}
                >
                  <div>
                    {/* Top row: Icon + Number badge */}
                    <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-brand-orange/15 transition-all">
                        {pt.icon}
                      </div>
                      <span className="font-mono text-[11px] font-bold text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded border border-brand-orange/20">
                        {pt.num}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="font-display text-xs sm:text-sm md:text-base font-bold text-white group-hover:text-brand-orange transition-colors">
                        {pt.title}
                      </h3>
                      <span className="hidden sm:inline-block text-[10px] text-text-tertiary">
                        • {pt.tag}
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] sm:text-xs text-text-secondary leading-relaxed mt-1 line-clamp-3 sm:line-clamp-none">
                    {pt.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Column: Centered Founder Image with floating badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[440px] sm:h-[520px] lg:h-[620px] w-full glass-panel rounded-[28px] sm:rounded-[32px] overflow-hidden group border border-white/10 shadow-2xl bg-[#0F141E]"
        >
          {/* Subtle glow & bottom gradient overlay for badge readability */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/15 to-transparent opacity-40 mix-blend-overlay z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05080F]/90 via-[#05080F]/15 to-transparent z-10 pointer-events-none" />
          
          <Image 
            src="/founder.jpg"
            alt="Founder of Power Exchange"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            priority
          />

          {/* Floating Secure Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute bottom-5 left-5 right-5 sm:right-auto z-20 glass-panel bg-[#0F141E]/90 px-4 sm:px-5 py-3 rounded-2xl flex items-center gap-3 border border-brand-orange/30 shadow-glow backdrop-blur-md"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] text-text-secondary font-medium">Verified</p>
              <p className="text-xs sm:text-sm text-white font-bold">Secure Transaction</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
