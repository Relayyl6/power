"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-20">
      
      {/* Main About Section (Split Layout) */}
      <section className="relative px-6 w-full max-w-7xl mx-auto mb-32 z-10">
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Image & Floating Badges */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/4.5] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/founder.jpg" 
                alt="Founder of Power Exchange" 
                fill 
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F141E] via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Badge Top-Left */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 md:-left-8 top-24 glass-panel bg-[#0F141E]/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-xl"
            >
              <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <div>
                <p className="text-white font-bold">4+ Years</p>
                <p className="text-xs text-text-secondary">Of Experience</p>
              </div>
            </motion.div>

            {/* Floating Badge Bottom-Right */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-4 md:-right-10 bottom-32 glass-panel bg-[#0F141E]/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-xl"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <p className="text-white font-bold">100% Secure</p>
                <p className="text-xs text-text-secondary">Transactions</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 text-xs font-medium text-brand-orange border border-brand-orange/20 rounded-full bg-brand-orange/5 backdrop-blur-sm self-start">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              Our Story
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              We didn't just start trading. <br/>
              <span className="text-gradient-orange">We built trust.</span>
            </h1>
            
            <div className="space-y-4 text-base md:text-lg text-text-secondary leading-relaxed mb-6">
              <p>
                <span className="font-['Elephant',serif] font-normal uppercase tracking-normal text-white">POWER EXCHANGE</span> & Digital Services is a digital financial services company focused on providing fast, secure, and reliable solutions for individuals and businesses dealing with digital currencies, gift cards, and international digital transactions.
              </p>
              <p>
                With over 4 years of experience, we have built our operations around transparency, convenience, competitive rates, and responsive customer service. Our goal is simple: to make digital transactions easier, safer, and more accessible.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/10 mb-8">
              <div className="flex flex-col gap-1 text-center border-r border-white/10">
                <span className="text-3xl font-display font-bold text-white">4+</span>
                <span className="text-xs text-text-tertiary uppercase tracking-wider">Years Active</span>
              </div>
              <div className="flex flex-col gap-1 text-center border-r border-white/10">
                <span className="text-3xl font-display font-bold text-white">10k+</span>
                <span className="text-xs text-text-tertiary uppercase tracking-wider">Trades</span>
              </div>
              <div className="flex flex-col gap-1 text-center">
                <span className="text-3xl font-display font-bold text-white">99%</span>
                <span className="text-xs text-text-tertiary uppercase tracking-wider">Satisfaction</span>
              </div>
            </div>

            {/* Action Row */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link 
                href="/trade" 
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-brand-orange hover:bg-brand-orange-hover rounded-xl shadow-glow transition-all flex items-center justify-center gap-2"
              >
                Start Trading
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
              <div className="flex flex-col">
                <span className="text-white font-bold">Management Team</span>
                <span className="text-sm font-['Elephant',serif] font-normal uppercase tracking-normal text-text-secondary">POWER EXCHANGE</span>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
}
