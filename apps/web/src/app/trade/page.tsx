"use client";

import { motion } from "framer-motion";
import TradeCalculator from "@/components/trade/TradeCalculator";
import TradeMarquee from "@/components/home/TradeMarquee";

export default function TradePage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      {/* Inner Page Hero */}
      <section className="relative py-12 px-6 text-center max-w-4xl mx-auto w-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-orange/10 blur-[100px] rounded-full pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-medium text-brand-orange border border-brand-orange/20 rounded-full bg-brand-orange/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            Fast & Secure
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Start <span className="text-gradient-orange">Trading</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Check our estimated rates below. All final rates are locked in securely via our WhatsApp trade desk.
          </p>
        </motion.div>
      </section>

      {/* Calculator Section */}
      <section className="px-6 relative z-20 pb-12">
        <TradeCalculator />
      </section>

      {/* Marquee Section */}
      <TradeMarquee />
    </div>
  );
}
