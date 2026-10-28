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

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function OurValues() {
  return (
    <section className="pt-20 pb-20 w-full relative">
      <div className="px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        
        {/* Header with Fade-In */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-2.5">
            Our Commitment
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2.5">
            Making a Difference
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            We buy Bitcoin, USDT, and gift cards, provide international gift delivery, and offer digital solutions built on personal accountability.
          </p>
        </motion.div>

        {/* 2-Column Mobile Bento / 4-Column Desktop Grid with Staggered Fade-In */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
        >
          {values.map((val) => (
            <motion.div 
              key={val.num}
              variants={cardVariants}
              className="group p-4 sm:p-6 md:p-7 rounded-2xl bg-[#0F141E]/80 border border-white/[0.08] hover:border-brand-orange/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle brand orange top border glow on hover */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="font-mono text-[11px] sm:text-xs font-bold text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded border border-brand-orange/20">
                    {val.num}
                  </span>
                </div>
                
                <h3 className="font-display text-sm sm:text-base md:text-lg font-semibold text-white mb-1.5 sm:mb-2 group-hover:text-brand-orange transition-colors">
                  {val.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
