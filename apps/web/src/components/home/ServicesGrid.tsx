"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: "e-currency",
    title: "E-CURRENCY",
    desc: "Seamlessly swap popular cryptocurrencies including USDT, USDC, BTC, ETH, and more at highly competitive rates.",
  },
  {
    id: "gift-cards",
    title: "GIFT CARDS",
    desc: "Trade your global gift cards (Amazon, iTunes, Steam, Walmart) for instant cash with secure processing.",
  },
  {
    id: "digital-services",
    title: "DIGITAL SERVICES",
    desc: "Comprehensive solutions tailored for digital nomads and freelancers looking to manage their international earnings.",
  },
  {
    id: "cross-border",
    title: "CROSS-BORDER PAYOUTS",
    desc: "We assist customers with selected international digital transactions and related services, helping simplify cross-border digital exchanges and payments.",
  },
  {
    id: "gifts-abroad",
    title: "SENDING OF GIFTS ABROAD",
    desc: "Effortlessly send value across borders to your loved ones using our trusted digital network.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { ease: [0.16, 1, 0.3, 1], duration: 0.6 }
  },
};

export default function ServicesGrid() {
  return (
    <section className="pt-12 pb-24 w-full relative">
      <div className="px-6 max-w-7xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-text-secondary font-medium tracking-widest uppercase text-sm mb-2 block">
          What we trade
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
          Our Services
        </h2>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
      >
        {services.map((svc, i) => (
          <motion.div 
            key={i} 
            variants={cardVariants}
            className={`glass-panel p-5 rounded-xl flex flex-col group hover:-translate-y-1 transition-all duration-300 ${
              i === 3 || i === 4 ? "lg:col-span-1.5" : ""
            }`}
          >
            {/* Mock Orange Icon */}
            <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </div>
            
            <h3 className="font-display text-lg font-bold text-white mb-2">
              {svc.title}
            </h3>
            <p className="text-sm text-text-secondary mb-4 flex-grow leading-relaxed">
              {svc.desc}
            </p>
            
            <Link href={`/services/${svc.id}`} className="text-brand-orange text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-auto w-fit">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </section>
  );
}
