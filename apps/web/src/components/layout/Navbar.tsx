"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-center p-4">
        {/* Pill-shaped glass container */}
        <nav className="flex items-center justify-between w-full max-w-5xl px-5 py-3 mx-auto glass-nav rounded-full border border-white/10 shadow-glass bg-[#0F141E]/80 backdrop-blur-md">
          
          {/* Left: Logo */}
          <div className="flex items-center gap-2 z-[100]">
            <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
              <Image 
                src="/logo.png" 
                alt="Power Exchange Logo" 
                width={140} 
                height={40} 
                className="h-8 md:h-10 w-auto object-contain" 
                priority
              />
            </Link>
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-sm font-medium text-text-secondary hover:text-white transition-colors">About</Link>
            <Link href="/services" className="text-sm font-medium text-text-secondary hover:text-white transition-colors">Services</Link>
            <Link href="/trade" className="text-sm font-medium text-text-secondary hover:text-white transition-colors">Trade</Link>
            <Link href="/contact" className="text-sm font-medium text-text-secondary hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Right: CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 z-[100]">
            <Link 
              href="/trade" 
              className="hidden sm:flex items-center justify-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-brand-orange hover:bg-brand-orange-hover rounded-full transition-all shadow-glow hover:scale-105 active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              Trade Now
            </Link>
            
            {/* Hamburger Button (Mobile) */}
            <button 
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[90] md:hidden flex flex-col pt-32 px-6 pb-8 overflow-y-auto"
          >
            {/* Backdrop click layer */}
            <div 
              className="absolute inset-0 bg-[#0F141E]/98 backdrop-blur-md -z-10 cursor-pointer"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            
            <div className="flex flex-col gap-6 text-2xl font-display font-bold relative z-10">
              <Link href="/about" className="text-white hover:text-brand-orange transition-colors py-2 border-b border-white/10" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="/services" className="text-white hover:text-brand-orange transition-colors py-2 border-b border-white/10" onClick={() => setIsOpen(false)}>Services</Link>
              <Link href="/trade" className="text-brand-orange hover:text-brand-orange-hover transition-colors py-2 border-b border-white/10" onClick={() => setIsOpen(false)}>Trade Rates</Link>
              <Link href="/contact" className="text-white hover:text-brand-orange transition-colors py-2 border-b border-white/10" onClick={() => setIsOpen(false)}>Contact Us</Link>
            </div>
            
            <div className="mt-12 flex flex-col gap-4 relative z-10">
              <Link 
                href="/trade" 
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-4 text-lg font-bold text-white bg-brand-orange hover:bg-brand-orange-hover rounded-full transition-all shadow-glow"
              >
                Start Trading Now
              </Link>
              <p className="text-center text-text-tertiary text-xs mt-4">
                Fast, secure, and reliable digital solutions.
              </p>
            </div>
            
            <div className="mt-auto pt-12 pb-4 flex justify-center w-full relative z-10">
              <Image 
                src="/logo.png" 
                alt="Power Exchange Logo" 
                width={140} 
                height={40} 
                className="h-8 w-auto opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" 
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
