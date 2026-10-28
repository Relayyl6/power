"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { ease: [0.16, 1, 0.3, 1], duration: 0.5 }
  },
};

export default function ServicesGrid() {
  return (
    <section className="pt-14 pb-20 w-full relative">
      <div className="px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-3">
            What We Trade
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Our Services
          </h2>
          <p className="mt-3 text-sm md:text-base text-text-secondary max-w-xl mx-auto">
            Concierge-driven digital exchanges tailored for speed, liquidity, and discretion.
          </p>
        </motion.div>

        {/* Art-Directed Bento Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5"
        >
          
          {/* Card 1: E-Currency (Wide Hero Bento Tile - spans 7 cols on desktop) */}
          <motion.div 
            variants={cardVariants}
            className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#0F141E] via-[#151D2C] to-[#0A0E17] border border-white/10 hover:border-brand-orange/40 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
          >
            {/* Background radiant ambient glow */}
            <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-orange/25 transition-all duration-500" />
            
            <div>
              {/* Top Bar with Live Indicator */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-medium text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Instant Liquidity Desk
                </div>
                <span className="text-[11px] font-mono text-brand-orange bg-brand-orange/10 px-2.5 py-0.5 rounded-full border border-brand-orange/20 font-bold">
                  01 • CORE
                </span>
              </div>

              {/* Headline */}
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                E-Currency & Stablecoins
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed max-w-lg mb-6">
                Seamlessly swap popular digital assets at competitive market-benchmarked rates with instant payout directly to your Nigerian bank.
              </p>

              {/* Floating Token Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/5 hover:border-emerald-500/30 transition-colors">
                  <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center">₮</span>
                  <div>
                    <p className="text-xs font-bold text-white">USDT</p>
                    <p className="text-[10px] text-text-tertiary">TRC / ERC</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/5 hover:border-amber-500/30 transition-colors">
                  <span className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center">₿</span>
                  <div>
                    <p className="text-xs font-bold text-white">Bitcoin</p>
                    <p className="text-[10px] text-text-tertiary">BTC</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/5 hover:border-blue-500/30 transition-colors">
                  <span className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 font-bold text-xs flex items-center justify-center">Ξ</span>
                  <div>
                    <p className="text-xs font-bold text-white">Ethereum</p>
                    <p className="text-[10px] text-text-tertiary">ETH</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/5 hover:border-purple-500/30 transition-colors">
                  <span className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 font-bold text-xs flex items-center justify-center">◎</span>
                  <div>
                    <p className="text-xs font-bold text-white">Solana</p>
                    <p className="text-[10px] text-text-tertiary">SOL</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action Link */}
            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs text-text-tertiary">Settlement speed: &lt; 5 mins</span>
              <Link 
                href="/services/e-currency" 
                className="text-brand-orange text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
              >
                <span>Explore Exchange</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Gift Cards (Vibrant Voucher Showcase - spans 5 cols on desktop) */}
          <motion.div 
            variants={cardVariants}
            className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-7 bg-[#0F141E]/90 border border-white/10 hover:border-amber-400/40 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
                  Instant Cash-Out
                </span>
                <span className="text-[11px] font-mono text-text-tertiary">02 • CARDS</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                Global Gift Cards
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-5">
                Trade unused gift cards from global retailers for instant local cash with safe, verified processing.
              </p>

              {/* Visual Voucher Cards Stack */}
              <div className="flex flex-col gap-2 mb-6">
                <div className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20">
                  <div className="flex items-center gap-2.5">
                    <span className="font-bold text-amber-400 text-xs">AMZN</span>
                    <span className="text-xs text-white font-medium">Amazon Cards (US / UK / CA)</span>
                  </div>
                  <span className="text-[10px] text-amber-400/90 font-mono font-semibold">Top Rates</span>
                </div>

                <div className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-gradient-to-r from-slate-400/10 via-slate-400/5 to-transparent border border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span className="font-bold text-slate-300 text-xs">APPL</span>
                    <span className="text-xs text-white font-medium">Apple & iTunes Store</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Instant Payout</span>
                </div>

                <div className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent border border-blue-500/20">
                  <div className="flex items-center gap-2.5">
                    <span className="font-bold text-blue-400 text-xs">STAM</span>
                    <span className="text-xs text-white font-medium">Steam, Razer, Walmart</span>
                  </div>
                  <span className="text-[10px] text-blue-400 font-mono">Verified</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs text-text-tertiary">Codes & Physical cards</span>
              <Link 
                href="/services/gift-cards" 
                className="text-amber-400 text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
              >
                <span>Trade Cards</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Card 3: Cross-Border Payouts (Transfer Route - spans 4 cols on desktop) */}
          <motion.div 
            variants={cardVariants}
            className="lg:col-span-4 glass-panel rounded-3xl p-6 bg-[#0F141E]/80 border border-white/10 hover:border-brand-orange/40 transition-all duration-300 relative group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
                  Global Remittance
                </span>
                <span className="text-[11px] font-mono text-text-tertiary">03</span>
              </div>

              {/* Transfer Route Pathway graphic */}
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 mb-4">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-white mb-1.5">
                  <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">USD • GBP • EUR</span>
                  <span className="text-brand-orange animate-pulse">➔</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">NGN Direct</span>
                </div>
                <p className="text-[10px] text-text-tertiary text-center">Zero third-party hold • Direct account credit</p>
              </div>

              <h3 className="font-display text-lg font-bold text-white mb-1.5">
                Cross-Border Payouts
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                Assisting customers with international digital settlements, simplifying cross-border transfers.
              </p>
            </div>

            <Link 
              href="/services/cross-border" 
              className="text-brand-orange text-xs font-semibold flex items-center gap-1.5 group-hover:gap-2 transition-all pt-2 border-t border-white/[0.04]"
            >
              <span>Explore Cross-Border</span>
              <span>→</span>
            </Link>
          </motion.div>

          {/* Card 4: Digital Services (Freelancer Hub - spans 4 cols on desktop) */}
          <motion.div 
            variants={cardVariants}
            className="lg:col-span-4 glass-panel rounded-3xl p-6 bg-[#0F141E]/80 border border-white/10 hover:border-brand-orange/40 transition-all duration-300 relative group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
                  Remote & Web3
                </span>
                <span className="text-[11px] font-mono text-text-tertiary">04</span>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="px-2 py-1 rounded-lg bg-white/[0.04] text-[11px] text-slate-300 border border-white/5">
                  💼 Freelance Revenue
                </span>
                <span className="px-2 py-1 rounded-lg bg-white/[0.04] text-[11px] text-slate-300 border border-white/5">
                  🌍 Global Invoicing
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-white mb-1.5">
                Digital Solutions
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                Comprehensive solutions tailored for digital nomads and remote professionals managing global earnings.
              </p>
            </div>

            <Link 
              href="/services/digital-services" 
              className="text-brand-orange text-xs font-semibold flex items-center gap-1.5 group-hover:gap-2 transition-all pt-2 border-t border-white/[0.04]"
            >
              <span>View Nomad Solutions</span>
              <span>→</span>
            </Link>
          </motion.div>

          {/* Card 5: Sending Gifts Abroad (Concierge Touch - spans 4 cols on desktop) */}
          <motion.div 
            variants={cardVariants}
            className="lg:col-span-4 glass-panel rounded-3xl p-6 bg-gradient-to-br from-[#0F141E] to-[#1C1525] border border-white/10 hover:border-pink-500/40 transition-all duration-300 relative group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold">
                  Loved Ones & Care
                </span>
                <span className="text-[11px] font-mono text-text-tertiary">05</span>
              </div>

              <div className="p-3 rounded-2xl bg-pink-500/[0.05] border border-pink-500/20 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 text-sm">🎁</span>
                <div>
                  <p className="text-xs font-bold text-white">Doorstep & Digital Delivery</p>
                  <p className="text-[10px] text-text-tertiary">UK, US, Canada, EU & Africa</p>
                </div>
              </div>

              <h3 className="font-display text-lg font-bold text-white mb-1.5">
                Sending Gifts Abroad
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                Effortlessly send value, essentials, and surprise gifts across borders to your family and loved ones.
              </p>
            </div>

            <Link 
              href="/services/gifts-abroad" 
              className="text-pink-400 text-xs font-semibold flex items-center gap-1.5 group-hover:gap-2 transition-all pt-2 border-t border-white/[0.04]"
            >
              <span>Send a Gift Now</span>
              <span>→</span>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
