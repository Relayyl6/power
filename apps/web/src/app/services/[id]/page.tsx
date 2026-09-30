import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

import ServiceWhatsAppCTA from "../../../components/services/ServiceWhatsAppCTA";

const SERVICES_DB = {
  "e-currency": {
    title: "E-Currency",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    ),
    description: "We facilitate the buying and selling of major digital currencies and other supported currencies, providing customers with convenient conversion and settlement services.",
    longDescription: "Our E-Currency exchange service is designed to be fast, secure, and highly reliable. Whether you are holding Bitcoin, Ethereum, USDT, or other major digital assets, our concierge trade desk ensures you get competitive rates and immediate settlement directly into your local bank account. We handle the complexities of the blockchain so you don't have to.",
    features: ['Bitcoin (BTC)', 'Ethereum (ETH)', 'USDT', 'Other supported digital currencies'],
  },
  "gift-cards": {
    title: "Gift Cards",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
    ),
    description: "We buy and process a wide range of international gift cards, providing convenient local settlement for eligible cards.",
    longDescription: "Got an unused gift card? Power Exchange offers industry-leading rates for international gift cards. We process a wide variety of brands quickly and securely. Just send us the details via WhatsApp, get a rate confirmation, and receive your payout instantly upon verification. It's the most convenient way to liquidate your digital assets.",
    features: ['Apple / iTunes', 'Google Play', 'Amazon', 'Walmart', 'Steam', 'Other supported gift cards'],
  },
  "digital-services": {
    title: "Digital Services",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    ),
    description: "We provide selected digital services designed to support individuals, entrepreneurs, and businesses operating in an increasingly digital economy.",
    longDescription: "In today's global digital economy, having the right tools is essential. We provide tailored digital services including international number rentals and virtual SMS reception, allowing you to seamlessly register and manage global accounts. Our support team ensures you have exactly what you need to operate without borders.",
    features: ['Virtual numbers and SMS reception', 'International number rental', 'Social media services', 'Other digital solutions'],
  },
  "cross-border": {
    title: "Cross-Border Payouts",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    ),
    description: "We assist customers with selected international digital transactions and related services, helping simplify cross-border digital exchanges and payments.",
    longDescription: "Moving value across borders shouldn't be a headache. Power Exchange assists you with secure and efficient cross-border digital transactions. Whether you need to settle a payment abroad or receive funds from international clients, we provide the bridge to make it happen smoothly and securely.",
    features: ['International digital transactions', 'Cross-border payments', 'Simplified exchanges', 'Secure global reach'],
  },
  "gifts-abroad": {
    title: "Sending Gifts Abroad",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
    ),
    description: "We also offer international gift delivery and other digital services tailored to your needs, helping you send selected gifts abroad where the destination and item can be processed.",
    longDescription: "Distance shouldn't stop you from celebrating with loved ones. We facilitate international gift delivery and customized digital services so you can easily send items abroad. We handle the logistical complexities, ensuring your intended recipient gets their gift without the usual friction of international shipping.",
    features: ['International gift delivery', 'Tailored digital services', 'Seamless processing', 'Global reach'],
  }
};

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const service = SERVICES_DB[params.id as keyof typeof SERVICES_DB];
  if (!service) return { title: 'Service Not Found' };
  return {
    title: `${service.title} | Power Exchange`,
    description: service.description,
  };
}

export function generateStaticParams() {
  return Object.keys(SERVICES_DB).map((id) => ({
    id,
  }));
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = SERVICES_DB[params.id as keyof typeof SERVICES_DB];

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen pt-24 md:pt-28 pb-10 px-4 md:px-6 w-full relative">
      {/* Background glow for the whole page */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-orange/5 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col h-full">
        <Link href="/services" className="inline-flex items-center gap-2 text-text-tertiary hover:text-white transition-colors mb-6 w-fit text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Services
        </Link>
        
        {/* Header Section */}
        <div className="flex flex-col gap-6 mb-8 max-w-4xl">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange shadow-glow shrink-0">
              {service.icon}
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-wide uppercase">
              {service.title}
            </h1>
          </div>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-medium">
            {service.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 flex-grow">
          
          {/* Main Description */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="glass-panel p-6 md:p-8 rounded-[24px] border border-white/5 shadow-glass text-text-secondary leading-relaxed text-base bg-[#0F141E]/40">
              <p>{service.longDescription}</p>
            </div>
            
            {/* CTA Section */}
            <div className="glass-panel p-6 md:p-8 rounded-[24px] border border-brand-orange/20 bg-brand-orange/5 shadow-glow mt-auto">
              <h3 className="font-display text-xl font-bold text-white mb-2">Ready to get started?</h3>
              <p className="text-text-secondary mb-6 text-sm">Reach out to our concierge team directly on WhatsApp to get today's exact rates and begin your transaction immediately.</p>
              <div className="flex justify-start">
                <ServiceWhatsAppCTA serviceTitle={service.title} />
              </div>
            </div>
          </div>

          {/* Offerings Grid Sidebar */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="glass-panel border border-white/5 rounded-[24px] p-6 md:p-8 backdrop-blur-md bg-[#0F141E]/40 shadow-glass h-full">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2 text-lg font-display uppercase tracking-wider">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                Supported Offerings
              </h3>
              <ul className="flex flex-col gap-4">
                {service.features.map(item => (
                  <li key={item} className="flex items-center gap-3 text-text-secondary group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-brand-orange/10 text-brand-orange group-hover:scale-110 group-hover:bg-brand-orange/20 transition-all shrink-0 border border-brand-orange/10 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span className="text-base font-medium group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
