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
        className="grid grid-cols-2 md:grid-cols-4 auto-rows-[minmax(180px,auto)] md:auto-rows-[240px] gap-4 md:gap-6"
      >
        {/* Item 1: 1x1 - Fast Payouts */}
        <motion.div variants={itemVariants} className="order-1 md:order-none col-span-1 md:col-span-1 row-span-1 rounded-3xl bg-[#0F141E] border border-white/10 p-6 flex flex-col justify-between overflow-hidden relative group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <h3 className="text-white font-display font-bold text-xl md:text-2xl mb-2">Lightning Fast</h3>
            <p className="text-text-secondary text-xs md:text-sm leading-relaxed">Payouts processed in minutes, not days.</p>
          </div>
          <div className="relative z-10 self-end text-brand-orange bg-brand-orange/10 p-3 md:p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </div>
        </motion.div>

        {/* Item 2: 2x2 - Large feature block */}
        <motion.div variants={itemVariants} className="order-3 md:order-none col-span-2 md:col-span-2 row-span-1 md:row-span-2 rounded-3xl bg-brand-orange p-8 md:p-10 flex flex-col justify-between overflow-hidden relative group shadow-2xl shadow-brand-orange/20 min-h-[280px] md:min-h-0">
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay group-hover:scale-105 group-hover:opacity-60 transition-all duration-700 pointer-events-none">
            <Image src="/crypto_mobile_bg.jpg" alt="Trading Background" fill className="object-cover object-center" />
          </div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/20 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 z-0 pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-white font-display font-bold text-3xl md:text-5xl mb-3 md:mb-4 leading-tight">Built for every asset.<br/>Running on trust.</h3>
            <p className="text-white/90 text-sm md:text-lg max-w-md leading-relaxed">From Bitcoin to Apple Gift Cards, we ensure maximum value and zero hassle for every single trade you make with us.</p>
          </div>
          <Link href="/trade" className="relative z-10 inline-flex items-center justify-center gap-2 text-brand-orange bg-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold mt-6 hover:bg-white/90 transition-colors self-start">
            Start Trading <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </motion.div>

        {/* Item 3: 1x2 Tall Stats */}
        <motion.div variants={itemVariants} className="order-4 md:order-none col-span-2 md:col-span-1 row-span-1 md:row-span-2 rounded-3xl bg-[#0F141E] border border-white/10 p-6 md:p-8 flex flex-col justify-center items-center text-center overflow-hidden relative shadow-2xl">
          <div className="flex flex-row md:flex-col justify-around md:justify-center items-center w-full gap-4 md:gap-12">
            <div className="group cursor-default flex-1">
              <div className="text-brand-orange mb-2 md:mb-4 flex justify-center group-hover:-translate-y-1 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h4 className="text-white font-display font-bold text-3xl md:text-5xl mb-1 md:mb-2">₦2.4B+</h4>
              <p className="text-text-tertiary text-[10px] md:text-sm font-medium uppercase tracking-wider">Volume Traded</p>
            </div>
            <div className="hidden md:block w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="w-px h-16 md:hidden bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="group cursor-default flex-1">
              <div className="text-brand-orange mb-2 md:mb-4 flex justify-center group-hover:-translate-y-1 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h4 className="text-white font-display font-bold text-3xl md:text-5xl mb-1 md:mb-2">10k+</h4>
              <p className="text-text-tertiary text-[10px] md:text-sm font-medium uppercase tracking-wider">Happy Traders</p>
            </div>
          </div>
        </motion.div>

        {/* Item 4: Instagram Embed 1 */}
        <motion.div variants={itemVariants} className="order-5 md:order-none col-span-2 md:col-span-1 row-span-2 md:row-span-2 rounded-3xl bg-[#0F141E] border border-white/10 overflow-hidden relative group shadow-2xl min-h-[400px] md:min-h-0">
          <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 pointer-events-none">
            <h3 className="text-white font-display font-bold text-2xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-md">Live Trades</h3>
            <p className="text-brand-orange text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 drop-shadow-md bg-black/40 px-3 py-1.5 rounded-full w-fit">
              View on Instagram <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </p>
          </div>
          <div className="absolute inset-0 bg-[#0F141E] flex flex-col items-center group-hover:scale-105 transition-transform duration-700">
             <iframe 
               src="https://www.instagram.com/p/Dd54UaboG4B/embed" 
               className="w-[105%] h-[calc(100%+120px)] -mt-[54px] -ml-[2.5%] border-0 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity" 
               scrolling="no"
               allowTransparency={true}
             />
          </div>
          <Link href="https://www.instagram.com/p/Dd54UaboG4B/?utm_source=ig_web_button_share_sheet&stkn=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20" aria-label="View Instagram Post" />
        </motion.div>

        {/* Item 5: Instagram Embed 2 */}
        <motion.div variants={itemVariants} className="order-6 md:order-none col-span-2 md:col-span-1 row-span-2 md:row-span-1 rounded-3xl bg-[#0F141E] border border-white/10 overflow-hidden relative group shadow-2xl min-h-[400px] md:min-h-0">
          <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <p className="text-white text-sm font-medium flex items-center gap-2 drop-shadow-md bg-black/40 px-3 py-1.5 rounded-full w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              Transaction IG
            </p>
          </div>
          <div className="absolute inset-0 bg-[#0F141E] flex flex-col items-center group-hover:scale-105 transition-transform duration-700">
             <iframe 
               src="https://www.instagram.com/p/DdzMjCviKYL/embed" 
               className="w-[105%] h-[calc(100%+120px)] -mt-[54px] -ml-[2.5%] border-0 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity" 
               scrolling="no"
               allowTransparency={true}
             />
          </div>
          <Link href="https://www.instagram.com/p/DdzMjCviKYL/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20" aria-label="View Instagram Post" />
        </motion.div>

        {/* Item 6: Small Info Block */}
        <motion.div variants={itemVariants} className="order-2 md:order-none col-span-1 md:col-span-1 row-span-1 rounded-3xl bg-[#0F141E] border border-white/10 p-6 flex flex-col justify-between overflow-hidden relative group shadow-2xl">
           <div className="relative z-10 text-white font-display font-bold text-xl md:text-2xl leading-tight">Bank-level<br/>Security</div>
           <p className="relative z-10 text-text-secondary text-xs md:text-sm mt-2">Your funds are completely protected.</p>
           <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 flex items-center justify-center self-end border border-white/10 group-hover:bg-brand-orange group-hover:border-brand-orange group-hover:scale-110 transition-all duration-300 mt-4">
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
           </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
