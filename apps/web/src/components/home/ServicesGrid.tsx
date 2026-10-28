"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: "e-currency",
    title: "E-Currency",
    desc: "Buy and sell Bitcoin, USDT, and major cryptocurrencies at competitive rates with instant local payout.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="6" />
        <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
        <path d="m7 6 2 2-2 2" />
        <path d="m17 14-2 2 2 2" />
      </svg>
    ),
  },
  {
    id: "gift-cards",
    title: "Gift Cards",
    desc: "Trade Amazon, Apple, Steam, and other global gift cards for cash with rapid verification.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </svg>
    ),
  },
  {
    id: "digital-services",
    title: "Digital Services",
    desc: "Practical payment solutions tailored for freelancers and digital nomads managing international earnings.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="12" x="3" y="4" rx="2" />
        <line x1="2" x2="22" y1="20" y2="20" />
      </svg>
    ),
  },
  {
    id: "cross-border",
    title: "Cross-Border Payouts",
    desc: "Assisting customers with international digital transactions and smooth settlements directly to local bank accounts.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m16 12-4-4-4 4" />
        <path d="M12 16V8" />
      </svg>
    ),
  },
  {
    id: "gifts-abroad",
    title: "Sending Gifts Abroad",
    desc: "Easily send essentials, value, and support across borders to family and loved ones overseas.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 12 20 22 4 22 4 12" />
        <rect width="20" height="5" x="2" y="7" />
        <line x1="12" x2="12" y1="22" y2="7" />
      </svg>
    ),
  },
];

export default function ServicesGrid() {
  return (
    <section className="pt-16 pb-20 w-full relative">
      <div className="px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-text-tertiary text-xs uppercase tracking-widest font-mono mb-2">
            What We Trade
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Our Services
          </h2>
        </div>

        {/* Minimal Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((svc, i) => (
            <Link
              key={svc.id}
              href={`/services/${svc.id}`}
              className={`group p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.04] transition-all flex flex-col justify-between ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white flex items-center justify-center mb-5 group-hover:border-brand-orange/40 group-hover:text-brand-orange transition-colors">
                  {svc.icon}
                </div>
                
                <h3 className="font-display text-lg font-semibold text-white mb-2 group-hover:text-brand-orange transition-colors">
                  {svc.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {svc.desc}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-white/[0.04] flex items-center justify-between text-xs text-text-tertiary group-hover:text-white transition-colors">
                <span>Learn more</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
