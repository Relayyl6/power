"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#25D366]/5 blur-[150px] rounded-full pointer-events-none" />

      <section className="relative w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center mt-10 md:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left: Typography & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-medium text-[#25D366] border border-[#25D366]/20 rounded-full bg-[#25D366]/10 backdrop-blur-sm self-start">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shadow-[0_0_8px_#25D366]" />
              Trade Desk Online
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
              Ready to <span className="text-gradient-orange">trade?</span>
            </h1>
            
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10">
              We operate a premium concierge desk. No automated bots, no confusing checkouts. You chat directly with our experts on WhatsApp to lock in the best rates and get paid in minutes.
            </p>

            {/* Email Support (Secondary) */}
            <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-white/10">
              <p className="text-sm font-medium text-text-tertiary uppercase tracking-wider">Corporate & Partnerships</p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="mailto:support@powerexchange.ng" className="text-white hover:text-brand-orange text-sm font-medium transition-colors flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  support@powerexchange.ng
                </a>
                <a href="mailto:info@powerexchange.ng" className="text-white hover:text-brand-orange text-sm font-medium transition-colors flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  info@powerexchange.ng
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Massive WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-transparent blur-2xl rounded-[40px] transform rotate-3" />
            
            <div className="relative glass-panel bg-[#0F141E]/80 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-orange/20 transition-colors duration-700" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-brand-orange to-brand-orange-hover flex items-center justify-center shadow-lg shadow-brand-orange/30 mb-8 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 uppercase tracking-wide">Concierge Desk</h2>
                <p className="text-text-secondary text-lg mb-10 max-w-sm">
                  You are being routed to a dedicated exchange agent. We will verify your asset, lock in the best market rate, and secure your transaction.
                </p>

                <Link 
                  href="https://wa.me/2348115580802" 
                  className="flex items-center justify-between w-full p-6 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-orange/50 rounded-2xl transition-all group/btn"
                >
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-lg group-hover/btn:text-brand-orange transition-colors">Connect to Secure Desk</span>
                    <span className="text-text-secondary text-sm flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                      End-to-end encrypted
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange group-hover/btn:scale-110 group-hover/btn:bg-brand-orange group-hover/btn:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
