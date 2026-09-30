"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative w-full overflow-hidden mt-20">
      
      {/* Full-width edge-to-edge logo placed BEHIND the footer */}
      <div className="absolute -bottom-10 lg:-bottom-20 w-full pointer-events-none h-[200px] md:h-[300px] lg:h-[450px] z-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 0.15, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          <Image 
            src="/logo.png" 
            alt="Power Exchange Logo Background" 
            fill 
            className="object-cover object-bottom opacity-50"
            unoptimized
          />
        </motion.div>
      </div>

      <footer className="relative pb-32 lg:pb-64 px-4 md:px-6 max-w-7xl mx-auto w-full z-10">
        
        {/* Floating Glass Panel */}
        <div className="glass-panel bg-[#0F141E]/60 backdrop-blur-xl rounded-3xl p-5 md:p-8 flex flex-col gap-8 border border-white/10 shadow-2xl relative overflow-hidden">
        
        {/* Subtle top glare */}
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent opacity-50" />

        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-8 md:gap-8">
          
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-4 flex flex-col gap-4">
            <Link href="/">
              <Image 
                src="/logo.png" 
                alt="Power Exchange Logo" 
                width={160} 
                height={45} 
                className="h-10 w-auto object-contain" 
              />
            </Link>
            <p className="text-text-secondary text-base leading-relaxed max-w-sm">
              We buy crypto and gift cards and pay in naira. Trading since 2022.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-1">
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-orange hover:border-brand-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-orange hover:border-brand-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-orange hover:border-brand-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1 lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-white font-display font-bold text-lg">Services</h4>
            <div className="flex flex-col gap-3">
              <Link href="/services/e-currency" className="text-base text-text-secondary hover:text-brand-orange transition-colors">E-currency exchange</Link>
              <Link href="/services/gift-cards" className="text-base text-text-secondary hover:text-brand-orange transition-colors">Gift card trading</Link>
              <Link href="/services/digital" className="text-base text-text-secondary hover:text-brand-orange transition-colors">Digital services</Link>
              <Link href="/services/payouts" className="text-base text-text-secondary hover:text-brand-orange transition-colors">Cross-border payouts</Link>
              <Link href="/services/gifts" className="text-base text-text-secondary hover:text-brand-orange transition-colors">Sending gifts abroad</Link>
            </div>
          </div>

          {/* Company */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-white font-display font-bold text-lg">Company</h4>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-base text-text-secondary hover:text-brand-orange transition-colors">About us</Link>
              <Link href="/why-us" className="text-base text-text-secondary hover:text-brand-orange transition-colors">Why us</Link>
              <Link href="/contact" className="text-base text-text-secondary hover:text-brand-orange transition-colors">Contact</Link>
            </div>
          </div>

          {/* Enquiries */}
          <div className="col-span-2 lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-white font-display font-bold text-lg">Enquiries</h4>
            <p className="text-base text-text-secondary leading-snug">Need a rate, a card check, or a partnership? Start here.</p>
            <div className="flex flex-col gap-3 mt-1">
              <a href="tel:08115580802" className="flex items-center gap-3 text-base text-text-secondary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                08115580802
              </a>
              <a href="mailto:support@powerexchange.ng" className="flex items-center gap-3 text-base text-text-secondary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                support@powerexchange.ng
              </a>
              <a href="mailto:info@powerexchange.ng" className="flex items-center gap-3 text-base text-text-secondary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                info@powerexchange.ng
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-8 border-t border-white/5">
          <h5 className="text-xs font-bold text-text-tertiary uppercase tracking-wider mb-2">Disclaimer</h5>
          <p className="text-[11px] text-text-tertiary leading-relaxed text-justify">
            Services offered, supported currencies, gift cards, rates, transaction limits, and availability may vary from time to time based on market conditions, applicable regulations, and operational requirements. Customers may be required to complete appropriate verification before certain transactions are processed.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 pb-6 border-t border-white/5 gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-xs text-text-secondary text-center md:text-left">
              © 2026 <span className="font-['Elephant',serif] font-normal uppercase tracking-normal text-brand-orange">POWER EXCHANGE</span> <span className="text-brand-orange">& Digital Services</span> — Making a Difference.
            </p>
            <p className="text-[10px] text-text-tertiary/60 font-medium">
              Made by Yemuel — <a href="tel:09064982841" className="hover:text-brand-orange transition-colors">09064982841</a>
            </p>
          </div>

          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white hover:bg-brand-orange-hover hover:scale-110 transition-all shadow-glow"
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
          </button>
        </div>
      </div>
    </footer>
    </div>
  );
}
