"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

export default function BentoGrid() {
  return (
    <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto w-full relative z-10">
      <div className="mb-16 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
          The <span className="font-['Elephant',serif] font-normal uppercase tracking-normal text-white">POWER EXCHANGE</span> <span className="text-gradient-orange">Experience</span>
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          See how we're making digital transactions faster, safer, and more reliable across the globe.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[240px] gap-4 md:gap-6"
      >
        {/* Item 1: 1x1 - Fast Payouts (Top Left) */}
        <motion.div variants={itemVariants} className="col-span-1 row-span-1 rounded-3xl bg-[#0F141E] border border-white/10 p-6 flex flex-col justify-between overflow-hidden relative group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <h3 className="text-white font-display font-bold text-2xl mb-2">Lightning Fast</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Payouts processed in minutes, not days.</p>
          </div>
          <div className="relative z-10 self-end text-brand-orange bg-brand-orange/10 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </div>
        </motion.div>

        {/* Item 2: 2x2 - Large feature block (Top Center) */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 rounded-3xl bg-brand-orange p-8 md:p-10 flex flex-col justify-between overflow-hidden relative group shadow-2xl shadow-brand-orange/20">
          
          {/* AI Generated Background */}
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay group-hover:scale-105 group-hover:opacity-60 transition-all duration-700 pointer-events-none">
            <Image 
              src="/crypto_mobile_bg.jpg" 
              alt="Trading Background" 
              fill 
              className="object-cover object-center"
            />
          </div>

          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/20 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 z-0 pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-white font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">Built for every asset.<br/>Running on trust.</h3>
            <p className="text-white/90 text-lg max-w-md leading-relaxed">From Bitcoin to Apple Gift Cards, we ensure maximum value and zero hassle for every single trade you make with us.</p>
          </div>
          <Link href="/trade" className="relative z-10 inline-flex items-center justify-center gap-2 text-brand-orange bg-white px-8 py-4 rounded-xl font-bold mt-4 hover:bg-white/90 transition-colors self-start">
            Start Trading <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </motion.div>

        {/* Item 3: 1x2 Tall Stats (Top Right) */}
        <motion.div variants={itemVariants} className="col-span-1 row-span-1 md:row-span-2 rounded-3xl bg-[#0F141E] border border-white/10 p-8 flex flex-col justify-center items-center text-center overflow-hidden relative shadow-2xl">
          <div className="space-y-12 w-full">
            <div className="group cursor-default">
              <div className="text-brand-orange mb-4 flex justify-center group-hover:-translate-y-1 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h4 className="text-white font-display font-bold text-5xl mb-2">₦2.4B+</h4>
              <p className="text-text-tertiary text-sm font-medium uppercase tracking-wider">Volume Traded</p>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="group cursor-default">
              <div className="text-brand-orange mb-4 flex justify-center group-hover:-translate-y-1 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h4 className="text-white font-display font-bold text-5xl mb-2">10k+</h4>
              <p className="text-text-tertiary text-sm font-medium uppercase tracking-wider">Happy Traders</p>
            </div>
          </div>
        </motion.div>

        {/* Item 4: Instagram Placeholder 1 (Tall, Bottom Left) */}
        <motion.div variants={itemVariants} className="col-span-1 row-span-1 md:row-span-2 rounded-3xl bg-white/5 border border-white/10 overflow-hidden relative group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F141E] via-[#0F141E]/40 to-transparent z-10 flex flex-col justify-end p-8">
            <h3 className="text-white font-display font-bold text-2xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Live Trades</h3>
            <p className="text-brand-orange text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
              View on Instagram <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a24] to-[#0a0a0f] flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
             <div className="text-white/20 flex flex-col items-center">
               <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
               <span className="text-xs tracking-widest uppercase font-semibold">IG Placeholder</span>
             </div>
          </div>
          <Link href="https://www.instagram.com/p/Dd54UaboG4B/?utm_source=ig_web_button_share_sheet&stkn=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20" aria-label="View Instagram Post" />
        </motion.div>

        {/* Item 5: Instagram Placeholder 2 (Square, Bottom Center Left) */}
        <motion.div variants={itemVariants} className="col-span-1 row-span-1 rounded-3xl bg-white/5 border border-white/10 overflow-hidden relative group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F141E] via-transparent to-transparent z-10 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-sm font-medium flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              Transaction IG
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a24] to-[#0a0a0f] flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
             <div className="text-white/20 flex flex-col items-center">
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
               <span className="text-[10px] tracking-widest uppercase font-semibold">Placeholder</span>
             </div>
          </div>
          <Link href="https://www.instagram.com/p/DdzMjCviKYL/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20" aria-label="View Instagram Post" />
        </motion.div>

        {/* Item 6: Small Info Block (Square, Bottom Center Right) */}
        <motion.div variants={itemVariants} className="col-span-1 row-span-1 rounded-3xl bg-[#0F141E] border border-white/10 p-6 flex flex-col justify-between overflow-hidden relative group shadow-2xl">
           <div className="relative z-10 text-white font-display font-bold text-2xl leading-tight">Bank-level<br/>Security</div>
           <p className="relative z-10 text-text-secondary text-sm mt-2">Your funds are completely protected.</p>
           <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center self-end border border-white/10 group-hover:bg-brand-orange group-hover:border-brand-orange group-hover:scale-110 transition-all duration-300 mt-4">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
           </div>
           <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-orange/10 blur-2xl rounded-full group-hover:bg-brand-orange/20 transition-colors" />
        </motion.div>
        
        {/* Item 7: Supported Assets Graphic (Square, Bottom Right) */}
        <motion.div variants={itemVariants} className="col-span-1 row-span-1 rounded-3xl bg-gradient-to-br from-[#1a1a24] to-[#0a0a0f] border border-white/10 overflow-hidden relative group shadow-2xl p-6 flex flex-col items-center justify-center text-center">
           <div className="absolute inset-0 bg-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
           <div className="relative z-10 flex gap-[-10px] mb-4">
             {/* Mock Asset Icons */}
             <div className="w-10 h-10 rounded-full bg-[#f2a900] flex items-center justify-center border-2 border-[#0F141E] shadow-lg z-30 transform group-hover:-translate-y-2 transition-transform duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 13.5l-3.5-2.5-3.5 2.5V6l3.5 2.5L15.5 6v9.5z"/></svg>
             </div>
             <div className="w-10 h-10 rounded-full bg-[#26a17b] flex items-center justify-center border-2 border-[#0F141E] shadow-lg z-20 -ml-3 transform group-hover:-translate-y-1 transition-transform duration-300 delay-75">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
             </div>
             <div className="w-10 h-10 rounded-full bg-[#627eea] flex items-center justify-center border-2 border-[#0F141E] shadow-lg z-10 -ml-3 transform group-hover:-translate-y-2 transition-transform duration-300 delay-150">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 22h20L12 2zm0 3.5l6.5 13h-13L12 5.5z"/></svg>
             </div>
           </div>
           <h3 className="relative z-10 text-white font-display font-bold text-lg mb-1">50+ Assets</h3>
           <p className="relative z-10 text-text-secondary text-xs">Always expanding.</p>
        </motion.div>

      </motion.div>
    </section>
  );
}
