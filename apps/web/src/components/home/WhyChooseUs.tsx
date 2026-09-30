"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const points = [
  {
    num: "01",
    title: "FAST",
    desc: "We understand that time matters. Our processes are designed to provide prompt responses and efficient transaction handling.",
  },
  {
    num: "02",
    title: "SECURE",
    desc: "We prioritize transaction verification, customer information protection, and responsible processing.",
  },
  {
    num: "03",
    title: "RELIABLE",
    desc: "We are committed to consistency, transparency, and professional customer service.",
  },
  {
    num: "04",
    title: "COMPETITIVE",
    desc: "Our rates are regularly reviewed in line with prevailing market conditions.",
  },
  {
    num: "05",
    title: "CUSTOMER-FOCUSED",
    desc: "Every transaction is handled with attention to clarity, communication, and customer satisfaction.",
  },
];

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Points */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-12">
            Why Choose Us?
          </h2>
          
          <motion.div 
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8"
          >
            {points.map((pt, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className={i === 4 ? "md:col-span-2" : ""}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-display font-bold text-brand-orange text-lg">{pt.num}</span>
                  <h3 className="font-display font-bold text-white tracking-wide">{pt.title}</h3>
                </div>
                <p className="text-text-secondary leading-relaxed pl-8 border-l border-white/5">
                  {pt.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Founder Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[600px] w-full glass-panel rounded-[32px] overflow-hidden group"
        >
          {/* Subtle glow behind the image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-transparent opacity-50 mix-blend-overlay" />
          
          <Image 
            src="/founder.jpg"
            alt="Founder of Power Exchange"
            fill
            className="object-cover object-right group-hover:scale-105 transition-transform duration-700"
          />

          {/* Floating Secure Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute bottom-8 left-8 glass-panel bg-[#0F141E]/90 px-5 py-3 rounded-2xl flex items-center gap-3 border border-brand-orange/30 shadow-glow"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <div>
              <p className="text-xs text-text-secondary font-medium">Verified</p>
              <p className="text-sm text-white font-bold">Secure Transaction</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
