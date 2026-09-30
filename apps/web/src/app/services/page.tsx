"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      {/* Inner Page Hero */}
      <section className="relative py-20 px-6 text-center max-w-4xl mx-auto w-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-orange/10 blur-[100px] rounded-full pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-medium text-brand-orange border border-brand-orange/20 rounded-full bg-brand-orange/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-orange" />
            What we do
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Our <span className="text-gradient-orange">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Everything you need for seamless digital transactions.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="px-6 max-w-7xl mx-auto w-full relative z-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* E-Currency */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-6 rounded-[24px] border border-white/5 shadow-glass flex flex-col h-full hover:border-brand-orange/30 transition-colors group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h2 className="font-display text-xl font-bold text-white tracking-wide uppercase">E-Currency</h2>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-grow">
              We facilitate the buying and selling of major digital currencies and other supported currencies, providing customers with convenient conversion and settlement services.
            </p>
            <div>
              <p className="text-sm font-semibold text-white mb-3">Supported services include:</p>
              <ul className="flex flex-col gap-2">
                {['Bitcoin (BTC)', 'Ethereum (ETH)', 'USDT', 'Other supported digital currencies'].map(item => (
                  <li key={item} className="flex items-start gap-2 text-xs text-text-secondary">
                    <span className="text-brand-orange mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/services/e-currency" className="mt-6 flex items-center justify-between text-brand-orange hover:text-brand-orange-hover font-bold group/link">
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </motion.div>

          {/* Gift Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel p-6 rounded-[24px] border border-white/5 shadow-glass flex flex-col h-full hover:border-brand-orange/30 transition-colors group relative"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
              </div>
              <h2 className="font-display text-xl font-bold text-white tracking-wide uppercase">Gift Cards</h2>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
              We buy and process a wide range of international gift cards, providing convenient local settlement for eligible cards.
            </p>
            <div className="mb-4">
              <p className="text-sm font-semibold text-white mb-3">Supported categories may include:</p>
              <ul className="flex flex-col gap-2">
                {['Apple / iTunes', 'Google Play', 'Amazon', 'Walmart', 'Steam', 'Other supported gift cards'].map(item => (
                  <li key={item} className="flex items-start gap-2 text-xs text-text-secondary">
                    <span className="text-brand-orange mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[10px] text-text-tertiary mt-auto pt-4 border-t border-white/5">
              Rates and acceptance depend on card type, region, denomination, and current market conditions.
            </p>
            <Link href="/services/gift-cards" className="mt-6 flex items-center justify-between text-brand-orange hover:text-brand-orange-hover font-bold group/link">
              View Details
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </motion.div>

          {/* Digital Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel p-6 rounded-[24px] border border-white/5 shadow-glass flex flex-col h-full hover:border-brand-orange/30 transition-colors group relative"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h2 className="font-display text-xl font-bold text-white tracking-wide uppercase">Digital Services</h2>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-grow">
              We provide selected digital services designed to support individuals, entrepreneurs, and businesses operating in an increasingly digital economy.
            </p>
            <div>
              <p className="text-sm font-semibold text-white mb-3">These may include:</p>
              <ul className="flex flex-col gap-2">
                {['Virtual numbers and SMS reception', 'International number rental', 'Social media services', 'Other digital solutions'].map(item => (
                  <li key={item} className="flex items-start gap-2 text-xs text-text-secondary">
                    <span className="text-brand-orange mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/services/digital-services" className="mt-6 flex items-center justify-between text-brand-orange hover:text-brand-orange-hover font-bold group/link">
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </motion.div>

          {/* Cross-Border Payouts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-panel p-6 rounded-[24px] border border-white/5 shadow-glass flex flex-col h-full hover:border-brand-orange/30 transition-colors group relative"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h2 className="font-display text-xl font-bold text-white tracking-wide uppercase">Cross-Border Payouts</h2>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed flex-grow">
              We assist customers with selected international digital transactions and related services, helping simplify cross-border digital exchanges and payments.
            </p>
            <Link href="/services/cross-border" className="mt-6 flex items-center justify-between text-brand-orange hover:text-brand-orange-hover font-bold group/link">
              View Details
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </motion.div>

          {/* Sending Gifts Abroad */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-panel p-6 rounded-[24px] border border-white/5 shadow-glass flex flex-col h-full hover:border-brand-orange/30 transition-colors group relative"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
              </div>
              <h2 className="font-display text-xl font-bold text-white tracking-wide uppercase">Sending Gifts Abroad</h2>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed flex-grow">
              We also offer international gift delivery and other digital services tailored to your needs, helping you send selected gifts abroad where the destination and item can be processed.
            </p>
            <Link href="/services/gifts-abroad" className="mt-6 flex items-center justify-between text-brand-orange hover:text-brand-orange-hover font-bold group/link">
              View Details
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
