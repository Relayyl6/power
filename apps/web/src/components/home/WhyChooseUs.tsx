"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyChooseUs() {
  return (
    <section className="pt-12 pb-24 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-3">
          The Power Advantage
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
          Why Choose Us?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-text-secondary max-w-xl">
          Engineered for digital traders, remote earners, and businesses who value transparency and prompt settlement.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* Left Column: Asymmetrical Advantage Bento (Spans 7 cols on desktop) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
        >
          
          {/* Tile 1: Speed (< 5 Mins Live Execution Metric Tile) */}
          <motion.div 
            variants={itemVariants}
            className="glass-panel p-6 rounded-3xl bg-[#0F141E]/90 border border-white/10 hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-semibold">
                  Speed
                </span>
                <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Desk
                </span>
              </div>

              {/* Huge Metric */}
              <div className="mb-3">
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-white group-hover:text-brand-orange transition-colors">
                  &lt; 5 Mins
                </span>
                <p className="text-xs font-medium text-slate-300 mt-1">Average Payout Speed</p>
              </div>

              <h3 className="font-display text-base font-bold text-white mb-1.5">
                Instant Settlement
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Prompt responses with zero queueing. Once your rate is confirmed, payment is transferred directly to your bank.
              </p>
            </div>
          </motion.div>

          {/* Tile 2: Competitive Rates (Rate Peg Visualization Tile) */}
          <motion.div 
            variants={itemVariants}
            className="glass-panel p-6 rounded-3xl bg-[#0F141E]/90 border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
                  Competitive
                </span>
                <span className="text-[10px] font-mono text-text-tertiary">Live Peg</span>
              </div>

              {/* Rate Level Indicator graphic */}
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 mb-3">
                <div className="flex items-end justify-between gap-1 h-8 mb-1.5">
                  <div className="w-1/4 h-[40%] bg-white/10 rounded-t" />
                  <div className="w-1/4 h-[65%] bg-white/20 rounded-t" />
                  <div className="w-1/4 h-[85%] bg-brand-orange/40 rounded-t" />
                  <div className="w-1/4 h-[100%] bg-gradient-to-t from-brand-orange to-amber-400 rounded-t" />
                </div>
                <div className="flex items-center justify-between text-[10px] text-amber-400 font-mono">
                  <span>Market Avg</span>
                  <span className="font-bold">Power Rate ★</span>
                </div>
              </div>

              <h3 className="font-display text-base font-bold text-white mb-1.5">
                Peak Market Rates
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Continuously benchmarked against parallel OTC rates to ensure maximum naira return for your digital assets.
              </p>
            </div>
          </motion.div>

          {/* Tile 3: Customer-Focused (Dedicated 1-on-1 Concierge - Full Width across left col) */}
          <motion.div 
            variants={itemVariants}
            className="sm:col-span-2 glass-panel p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#0F141E] via-[#141B28] to-[#0A0E17] border border-white/10 hover:border-brand-orange/40 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-semibold">
                  Concierge First
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Human Trader On Duty
                </span>
              </div>
              <span className="text-xs font-mono text-text-tertiary">No Bots • No Tickets</span>
            </div>

            <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
              Dedicated 1-on-1 WhatsApp Concierge
            </h3>
            
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-5 max-w-xl">
              You never deal with automated bot loops or waiting on support ticket queues. Every trade is executed directly with a dedicated concierge specialist who verifies your quote, guides your transaction, and confirms your payout.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/[0.06]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] text-xs font-medium text-slate-300 border border-white/5">
                💬 Direct WhatsApp Chat
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] text-xs font-medium text-slate-300 border border-white/5">
                🔒 Confidential & Discreet
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] text-xs font-medium text-slate-300 border border-white/5">
                ⚡ Real-time Settlement Receipts
              </span>
            </div>
          </motion.div>

        </motion.div>

        {/* Right Column: Founder Human Trust Showcase (Spans 5 cols on desktop) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 relative min-h-[440px] sm:min-h-[500px] lg:min-h-full w-full glass-panel rounded-3xl overflow-hidden group border border-white/10 shadow-2xl bg-[#0F141E] flex flex-col justify-between p-6"
        >
          {/* Subtle gradient vignette overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05080F]/95 via-[#05080F]/20 to-[#05080F]/40 z-10 pointer-events-none" />
          
          <Image 
            src="/founder.jpg"
            alt="Founder of Power Exchange"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            priority
          />

          {/* Top Floating Badge */}
          <div className="relative z-20 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-[#0F141E]/80 backdrop-blur-md border border-white/10 text-xs text-slate-200 font-medium">
              Founder & CEO • Power Exchange
            </span>
          </div>

          {/* Bottom Floating Trust Glass Card */}
          <div className="relative z-20 glass-panel bg-[#0F141E]/90 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-white/10 shadow-2xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                  Verified Concierge Desk
                </p>
                <p className="text-sm sm:text-base text-white font-bold">
                  Secure & Guaranteed Settlement
                </p>
              </div>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed pl-13">
              Direct accountability on every trade. Your transactions are backed by real people with a verifiable track record.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
