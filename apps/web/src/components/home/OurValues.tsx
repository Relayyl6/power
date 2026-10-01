"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Integrity",
    desc: "We believe trust is the foundation of every successful transaction.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"/><path d="M5 8h14"/><path d="M5 16h14"/></svg>
    ) // using a scale-like / balance icon approx
  },
  {
    title: "Transparency",
    desc: "We communicate clearly about rates, requirements, and transaction conditions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
    )
  },
  {
    title: "Security",
    desc: "We take appropriate measures to protect transactions and customer information.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    )
  },
  {
    title: "Excellence",
    desc: "We continually improve our processes, service delivery, and digital solutions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    )
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
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function OurValues() {
  return (
    <section className="pt-24 pb-12 w-full relative">
      <div className="px-6 max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Making a Difference
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-text-secondary text-lg leading-relaxed">
            <p>Your trusted partner for fast, secure, and reliable digital solutions.</p>
            <p>We buy Bitcoin, USDT, and gift cards, provide international gift delivery, and offer a range of digital services tailored to your needs.</p>
            <p>Because every transaction represents your money, business, or opportunity, we&apos;re committed to making every experience simple, seamless, and secure.</p>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((val, i) => (
            <motion.div 
              key={i} 
              variants={cardVariants}
              className="glass-panel p-8 rounded-[24px] bg-surface/50 border-t-2 border-t-brand-orange/0 hover:border-t-brand-orange transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-brand-orange group-hover:scale-110 transition-transform">
                  {val.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {val.title}
                </h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Blurred background text spanning full width at the bottom */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center translate-y-1/2 pointer-events-none z-0">
        <span className="text-[14.5vw] md:text-[11.8vw] font-['Elephant',serif] font-bold text-white/[0.06] blur-[2px] whitespace-nowrap tracking-tighter select-none">
          TRADE WITH US
        </span>
      </div>
    </section>
  );
}
