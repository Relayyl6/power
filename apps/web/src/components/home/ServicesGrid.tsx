"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: "e-currency",
    title: "E-CURRENCY",
    tag: "Crypto & Stablecoins",
    featuredBadge: "Most Active",
    desc: "Seamlessly swap popular cryptocurrencies including USDT, USDC, BTC, ETH, and more at highly competitive rates.",
    supported: ["USDT", "BTC", "ETH", "SOL"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="6" />
        <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
        <path d="m7 6 2 2-2 2" />
        <path d="m17 14-2 2 2 2" />
      </svg>
    ),
  },
  {
    id: "gift-cards",
    title: "GIFT CARDS",
    tag: "Global Retailers",
    desc: "Trade your global gift cards (Amazon, iTunes, Steam, Walmart) for instant cash with secure processing.",
    supported: ["Amazon", "Apple", "Steam", "Steam"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
        <path d="M7 15h2" />
        <path d="M14 15h3" />
      </svg>
    ),
  },
  {
    id: "digital-services",
    title: "DIGITAL SERVICES",
    tag: "Freelance & Remote",
    desc: "Comprehensive solutions tailored for digital nomads and freelancers looking to manage international earnings.",
    supported: ["Invoicing", "Payouts", "Web3"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="12" x="3" y="4" rx="2" />
        <line x1="2" x2="22" y1="20" y2="20" />
        <path d="m9 10 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "cross-border",
    title: "CROSS-BORDER",
    titleFull: "CROSS-BORDER PAYOUTS",
    tag: "Fast Settlement",
    desc: "We assist customers with international digital transactions and cross-border digital exchanges.",
    supported: ["Direct Bank", "Multi-Currency"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m16 12-4-4-4 4" />
        <path d="M12 16V8" />
        <path d="M2 12h20" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    id: "gifts-abroad",
    title: "GIFTS ABROAD",
    titleFull: "SENDING GIFTS ABROAD",
    tag: "Family & Loved Ones",
    desc: "Effortlessly send value across borders to your loved ones using our trusted digital concierge network.",
    supported: ["Concierge Delivery", "Instant"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 12 20 22 4 22 4 12" />
        <rect width="20" height="5" x="2" y="7" />
        <line x1="12" x2="12" y1="22" y2="7" />
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { ease: [0.16, 1, 0.3, 1], duration: 0.5 }
  },
};

export default function ServicesGrid() {
  return (
    <section className="pt-12 pb-20 w-full relative">
      <div className="px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-3">
            What We Trade
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Our Services
          </h2>
        </motion.div>

        {/* Dynamic 2-column mobile grid & responsive desktop grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-8"
        >
          {services.map((svc, i) => {
            const isFeatured = i === 0;

            return (
              <motion.div 
                key={svc.id} 
                variants={cardVariants}
                className={`glass-panel rounded-2xl flex flex-col group border border-white/5 hover:border-brand-orange/30 transition-all duration-300 relative overflow-hidden ${
                  isFeatured 
                    ? "col-span-2 md:col-span-1 lg:col-span-1 p-5 sm:p-6 bg-gradient-to-br from-[#0F141E] via-[#141B28] to-[#0F141E] shadow-xl" 
                    : i === 3 || i === 4
                    ? "p-4 sm:p-5 md:p-6 lg:col-span-1.5"
                    : "p-4 sm:p-5 md:p-6"
                }`}
              >
                {/* Subtle top-border glow on hover */}
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top Row: Icon + Badge / Arrow */}
                <div className="flex items-start justify-between gap-2 mb-3 sm:mb-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-brand-orange/15 transition-all">
                    {svc.icon}
                  </div>

                  {isFeatured && (
                    <span className="px-2.5 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-[10px] sm:text-xs font-bold tracking-wide uppercase">
                      {svc.featuredBadge}
                    </span>
                  )}

                  {!isFeatured && (
                    <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-white/[0.04] text-[10px] text-text-tertiary border border-white/5">
                      {svc.tag}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <span className="sm:hidden text-[10px] text-brand-orange font-medium tracking-wide uppercase mb-1">
                    {svc.tag}
                  </span>
                  
                  <h3 className="font-display text-sm sm:text-base md:text-lg font-bold text-white mb-1.5 sm:mb-2 group-hover:text-brand-orange transition-colors">
                    {svc.titleFull || svc.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4 flex-grow line-clamp-3 sm:line-clamp-none">
                    {svc.desc}
                  </p>

                  {/* Quick supported tags for featured card on mobile/tablet */}
                  {isFeatured && (
                    <div className="flex flex-wrap items-center gap-1.5 mb-4">
                      {svc.supported?.map((token) => (
                        <span key={token} className="px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/5 text-[11px] font-medium text-slate-300">
                          {token}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom link */}
                <Link 
                  href={`/services/${svc.id}`} 
                  className="text-brand-orange text-xs sm:text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all mt-auto pt-2 border-t border-white/[0.04]"
                >
                  <span>Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
