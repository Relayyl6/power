"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const [isMessaging, setIsMessaging] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    const text = encodeURIComponent(`Hello Power Exchange! ${message}`);
    window.open(`https://wa.me/2348115580802?text=${text}`, '_blank');
    setIsMessaging(false);
    setMessage("");
  };

  return (
    <section className="relative pt-24 pb-10 md:pt-40 md:pb-16 px-4 w-full flex flex-col items-center justify-center min-h-[85svh] md:min-h-[90vh]">
      
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[400px] md:h-[800px] bg-brand-orange/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto mt-[-2rem] md:mt-[-4rem]"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-semibold uppercase tracking-wider text-brand-orange border border-brand-orange/30 rounded-full bg-brand-orange/10 backdrop-blur-md shadow-glow"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
          </span>
          Fast • Secure • Reliable
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-display text-[42px] sm:text-5xl md:text-7xl lg:text-[85px] xl:text-[100px] font-extrabold tracking-tight text-white mb-4 md:mb-6 leading-[1.1] md:leading-[1.05]"
        >
          <span className="whitespace-normal sm:whitespace-nowrap">Trade digital assets</span> <br className="hidden md:block" />
          <span className="text-gradient-orange">with confidence</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-xl text-sm sm:text-base md:text-lg text-text-secondary mb-8 md:mb-10 leading-relaxed px-2"
        >
          Your premium concierge exchange desk. Swap crypto and gift cards at the best rates—confirmed securely via WhatsApp.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative group flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0"
        >
          <div className="relative w-full sm:w-auto h-[60px] md:h-[68px]">
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-orange to-brand-gold rounded-full blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
            
            <AnimatePresence mode="wait" initial={false}>
              {!isMessaging ? (
                <motion.button 
                  key="btn"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsMessaging(true)}
                  className="relative flex items-center justify-center w-full sm:w-[300px] h-full gap-3 px-6 md:px-10 text-lg md:text-xl font-bold text-white bg-brand-orange hover:bg-brand-orange-hover rounded-full shadow-2xl transition-all hover:scale-[1.02] whitespace-nowrap"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                  Start trading now
                </motion.button>
              ) : (
                <motion.div 
                  key="input"
                  initial={{ opacity: 0, scale: 0.95, width: "300px" }}
                  animate={{ opacity: 1, scale: 1, width: "100%" }}
                  exit={{ opacity: 0, scale: 0.95, width: "300px" }}
                  transition={{ duration: 0.2 }}
                  className="relative flex items-center w-full sm:min-w-[400px] h-full bg-[#0F141E]/90 backdrop-blur-md border border-brand-orange/50 focus-within:border-brand-orange rounded-full shadow-2xl transition-colors pl-2"
                >
                  <input 
                    type="text" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="E.g., I want to trade $500 Apple card..."
                    className="flex-1 h-full bg-transparent text-white px-4 outline-none placeholder:text-text-tertiary text-sm md:text-base min-w-0"
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && message.trim()) handleSend();
                    }}
                  />
                  <button
                    onClick={() => setIsMessaging(false)}
                    className="h-full px-3 text-text-tertiary hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </button>
                  <button 
                    onClick={handleSend}
                    disabled={!message.trim()}
                    className="h-[80%] aspect-square mr-2 flex items-center justify-center bg-brand-orange text-white rounded-full hover:bg-brand-orange-hover disabled:opacity-50 transition-colors shadow-glow shrink-0"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Social Proof */}
          <div className="flex flex-row items-center gap-3 bg-white/5 border border-white/10 px-4 py-2.5 md:px-5 md:py-3 rounded-full backdrop-blur-sm">
            <div className="flex -space-x-3">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-brand-orange to-brand-gold border-2 border-[#0F141E] flex items-center justify-center text-[9px] md:text-[10px] font-bold text-white">JD</div>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-2 border-[#0F141E] flex items-center justify-center text-[9px] md:text-[10px] font-bold text-white">OA</div>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 border-2 border-[#0F141E] flex items-center justify-center text-[9px] md:text-[10px] font-bold text-white">MK</div>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 border-2 border-[#0F141E] flex items-center justify-center text-[9px] md:text-[10px] font-bold text-white">+</div>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white font-bold text-[10px] md:text-xs">Trusted by 10,000+ traders</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Image Left */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[280px] sm:w-[320px] opacity-15 blur-[6px] z-0 lg:top-[40%] lg:translate-x-0 lg:left-0 xl:left-12 2xl:left-[3%] lg:w-56 xl:w-72 lg:opacity-90 lg:blur-none lg:z-20 aspect-[3/4] rounded-3xl lg:rounded-2xl border-4 border-[#0F141E] shadow-2xl overflow-hidden pointer-events-none"
      >
        <Image 
          src="/founder.jpg" 
          alt="Founder"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#0F141E]/30 to-transparent pointer-events-none" />
      </motion.div>
      
      {/* Blurred background text spanning full width at the bottom of the viewport */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center translate-y-1/2 md:translate-y-1/3 pointer-events-none z-0">
        <motion.span 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[13.8vw] md:text-[11vw] font-['Elephant',serif] font-bold text-white/[0.06] blur-[2px] whitespace-nowrap tracking-tighter select-none"
        >
          POWER EXCHANGE
        </motion.span>
      </div>

    </section>
  );
}
