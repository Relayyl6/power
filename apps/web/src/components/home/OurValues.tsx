"use client";

import { motion } from "framer-motion";

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
    <section className="pt-16 pb-20 w-full relative">
      <div className="px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        
        {/* Section Header & Brand Anchor */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 sm:mb-12"
        >
          {/* Large Editorial Manifesto Card */}
          <div className="glass-panel rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#0F141E] via-[#141B28] to-[#0A0E17] border border-white/10 relative overflow-hidden">
            {/* Subtle curved background lines inspired by graphic bento references */}
            <div className="absolute right-0 top-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full border border-brand-orange/10 pointer-events-none -translate-y-1/3 translate-x-1/3" />
            <div className="absolute right-12 top-12 w-48 sm:w-64 h-48 sm:h-64 rounded-full border border-brand-orange/15 pointer-events-none -translate-y-1/3 translate-x-1/3" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-4">
                Our Foundation
              </div>
              
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Making a Difference.
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl font-medium text-slate-200 mb-3 leading-snug">
                Your trusted partner for fast, secure, and reliable digital solutions—built on trust over hype.
              </p>
              
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6 max-w-2xl">
                Because every transaction represents your hard-earned money, business, or opportunity, we are uncompromising about delivering a clean, concierge experience where what is quoted is what lands in your account.
              </p>

              {/* Trust Pill Bar */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] text-xs font-medium text-slate-300 border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  100% Rate Lock
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] text-xs font-medium text-slate-300 border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  Human Concierge on WhatsApp
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] text-xs font-medium text-slate-300 border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  Direct Bank Settlement
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Diverse, Art-Directed Value Cards (Each with a completely different UI personality) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          
          {/* Card 1: Integrity (The 100% Metric Card - inspired by nue stat tile) */}
          <motion.div 
            variants={cardVariants}
            className="glass-panel p-6 rounded-3xl bg-[#0F141E]/90 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  Zero Hidden Fees
                </span>
                <span className="text-xs font-mono text-text-tertiary">01</span>
              </div>

              {/* Bold Stat Number */}
              <div className="mb-3">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                  100%
                </span>
                <p className="text-xs font-medium text-emerald-400 mt-1">Rate Lock Guarantee</p>
              </div>

              <h3 className="font-display text-base font-bold text-white mb-1.5">
                Integrity First
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                The exact quote confirmed with you on WhatsApp is the exact amount settled into your bank account. No post-trade slippage.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Transparency (The WhatsApp Quote Preview Bubble) */}
          <motion.div 
            variants={cardVariants}
            className="glass-panel p-6 rounded-3xl bg-[#0F141E]/90 border border-white/10 hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold">
                  Direct Communication
                </span>
                <span className="text-xs font-mono text-text-tertiary">02</span>
              </div>

              {/* Stylized WhatsApp Quote Bubble */}
              <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 mb-4">
                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-semibold mb-1">
                  <span>✓✓</span>
                  <span>Quote Confirmed</span>
                </div>
                <p className="text-xs text-white font-medium">1 USDT = ₦1,550 • Agreed</p>
                <p className="text-[10px] text-text-tertiary mt-1">Verified on WhatsApp desk</p>
              </div>

              <h3 className="font-display text-base font-bold text-white mb-1.5">
                Total Transparency
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Clear rates and upfront terms before you release any coin or voucher. Complete clarity every step of the trade.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Security (The Bank-Grade Escrow Shield Tile) */}
          <motion.div 
            variants={cardVariants}
            className="glass-panel p-6 rounded-3xl bg-[#0F141E]/90 border border-white/10 hover:border-blue-400/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
                  Bank-Grade Protection
                </span>
                <span className="text-xs font-mono text-text-tertiary">03</span>
              </div>

              {/* Shield Visual Badge */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-blue-500/[0.05] border border-blue-500/20 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Escrow Settlement</p>
                  <p className="text-[10px] text-emerald-400">● 100% Protected</p>
                </div>
              </div>

              <h3 className="font-display text-base font-bold text-white mb-1.5">
                Institutional Security
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Multi-layer verification protocols protect your identity, account numbers, and capital against operational risk.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Excellence (The Volume Track Record Stat Tile) */}
          <motion.div 
            variants={cardVariants}
            className="glass-panel p-6 rounded-3xl bg-[#0F141E]/90 border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
                  Track Record
                </span>
                <span className="text-xs font-mono text-text-tertiary">04</span>
              </div>

              {/* Volume Stat Number & Trend */}
              <div className="mb-3">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-white group-hover:text-amber-400 transition-colors">
                  ₦2.4B+
                </span>
                <div className="flex items-center gap-1.5 text-xs font-medium text-amber-400 mt-1">
                  <span>↗</span>
                  <span>Volume Settled Safely</span>
                </div>
              </div>

              <h3 className="font-display text-base font-bold text-white mb-1.5">
                Operational Excellence
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Consistent sub-5-minute settlements and thousands of successful client exchanges across Nigeria and overseas.
              </p>
            </div>
          </motion.div>

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
