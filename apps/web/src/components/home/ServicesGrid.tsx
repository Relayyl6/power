"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: "e-currency",
    title: "E-Currency",
    badge: "Most Traded",
    desc: "Buy and sell Bitcoin, USDT, and major cryptocurrencies at competitive rates with instant local bank payout.",
    tokens: ["USDT", "BTC", "ETH", "SOL"],
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
    badge: "Popular",
    desc: "Trade Amazon, Apple, Steam, and global retail gift cards for cash with rapid verification.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </svg>
    ),
  },
  {
    id: "digital-services",
    title: "Digital Services",
    badge: "Freelance",
    desc: "Practical payment solutions tailored for freelancers and digital nomads managing international earnings.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="12" x="3" y="4" rx="2" />
        <line x1="2" x2="22" y1="20" y2="20" />
      </svg>
    ),
  },
  {
    id: "cross-border",
    title: "Cross-Border Payouts",
    badge: "Global",
    desc: "Assisting customers with international digital transactions and smooth settlements directly to local bank accounts.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m16 12-4-4-4 4" />
        <path d="M12 16V8" />
      </svg>
    ),
  },
  {
    id: "gifts-abroad",
    title: "Sending Gifts Abroad",
    badge: "Concierge",
    desc: "Easily send essentials, value, and support across borders to family and loved ones overseas.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 12 20 22 4 22 4 12" />
        <rect width="20" height="5" x="2" y="7" />
        <line x1="12" x2="12" y1="22" y2="7" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { ease: [0.16, 1, 0.3, 1], duration: 0.5 }
  },
};

export default function ServicesGrid() {
  return (
    <section className="pt-16 pb-20 w-full relative">
      <div className="px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with Fade-In */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-2.5">
            What We Trade
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Our Services
          </h2>
        </motion.div>

        {/* Bento Grid: 2-col on Mobile, 3-col on Desktop */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 md:gap-6"
        >
          {services.map((svc, i) => {
            const isHero = i === 0;

            return (
              <motion.div
                key={svc.id}
                variants={cardVariants}
                className={`group rounded-2xl bg-[#0F141E]/80 border border-white/[0.08] hover:border-brand-orange/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isHero 
                    ? "col-span-2 md:col-span-1 lg:col-span-2 p-5 sm:p-7 bg-gradient-to-br from-[#0F141E] via-[#141B28] to-[#0F141E]" 
                    : "col-span-1 p-4 sm:p-6"
                }`}
              >
                {/* Subtle brand orange top border glow on hover */}
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Top Bar: Icon + Brand Accent Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-brand-orange/15 transition-all">
                      {svc.icon}
                    </div>

                    <span className="px-2 py-0.5 rounded-md bg-brand-orange/10 border border-brand-orange/20 text-[10px] sm:text-xs font-medium text-brand-orange">
                      {svc.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`font-display font-semibold text-white mb-2 group-hover:text-brand-orange transition-colors ${
                    isHero ? "text-lg sm:text-2xl font-bold" : "text-sm sm:text-base md:text-lg"
                  }`}>
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-text-secondary leading-relaxed ${
                    isHero ? "text-xs sm:text-sm max-w-xl mb-4" : "text-xs sm:text-sm line-clamp-3 sm:line-clamp-none mb-3"
                  }`}>
                    {svc.desc}
                  </p>

                  {/* Hero-specific subtle token chips */}
                  {isHero && svc.tokens && (
                    <div className="flex flex-wrap items-center gap-1.5 mb-4">
                      {svc.tokens.map((token) => (
                        <span 
                          key={token} 
                          className="px-2.5 py-0.5 rounded-lg bg-brand-orange/[0.06] border border-brand-orange/20 text-[11px] font-mono font-medium text-brand-orange"
                        >
                          {token}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom link */}
                <Link
                  href={`/services/${svc.id}`}
                  className="pt-3 border-t border-white/[0.04] flex items-center justify-between text-xs font-medium text-text-tertiary group-hover:text-brand-orange transition-colors mt-auto"
                >
                  <span>Learn more</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
