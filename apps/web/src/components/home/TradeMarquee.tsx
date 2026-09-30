"use client";

import { motion } from "framer-motion";

const cryptoAssets = [
  { name: "Bitcoin", symbol: "", bg: "bg-gradient-to-br from-[#F7931A] to-[#D97706]", icon: "₿" },
  { name: "Ethereum", symbol: "", bg: "bg-gradient-to-br from-[#627EEA] to-[#4338CA]", icon: "Ξ" },
  { name: "Solana", symbol: "", bg: "bg-gradient-to-br from-[#14F195] to-[#9945FF]", icon: "S" },
  { name: "BNB", symbol: "", bg: "bg-gradient-to-br from-[#F3BA2F] to-[#B45309]", icon: "BNB" },
  { name: "Litecoin", symbol: "", bg: "bg-gradient-to-br from-[#345D9D] to-[#1E3A8A]", icon: "Ł" },
  { name: "USDT", symbol: "ERC-20", bg: "bg-gradient-to-br from-[#26A17B] to-[#047857]", icon: "₮" },
  { name: "USDT", symbol: "BEP-20", bg: "bg-gradient-to-br from-[#26A17B] to-[#065F46]", icon: "₮" },
  { name: "USDT", symbol: "SOLANA", bg: "bg-gradient-to-br from-[#26A17B] to-[#14F195]", icon: "₮" },
];

const giftCardAssets = [
  { name: "iTunes", symbol: "", bg: "bg-gradient-to-br from-[#FF2A85] to-[#8A2387]", icon: "♫" },
  { name: "Google Play", symbol: "", bg: "bg-gradient-to-br from-[#3B82F6] to-[#EAB308]", icon: "▶" },
  { name: "Amazon", symbol: "", bg: "bg-gradient-to-br from-[#374151] to-[#111827]", icon: "a" },
  { name: "Amazon", symbol: "", bg: "bg-gradient-to-br from-[#1F2937] to-[#030712]", icon: "a" },
];

export default function TradeMarquee() {
  // Duplicate arrays heavily to create a seamless loop
  const topRow = [...cryptoAssets.slice(0,4), ...giftCardAssets, ...cryptoAssets, ...giftCardAssets, ...cryptoAssets];
  const bottomRow = [...cryptoAssets.slice(4), ...giftCardAssets.slice(2), ...cryptoAssets, ...giftCardAssets, ...cryptoAssets];

  return (
    <section className="py-12 overflow-hidden relative z-10 bg-background/50">
      {/* Marquee Container */}
      <div className="relative flex flex-col gap-6 w-full max-w-[100vw] rotate-[-3deg] scale-110">
        
        {/* Extreme Left & Right Fades for seamless looping */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Top Row - Scrolls Left */}
        <div className="flex w-max -ml-[10%]">
          <motion.div 
            className="flex gap-4 md:gap-6 px-3"
            animate={{ x: [0, -1500] }} 
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {topRow.map((asset, i) => (
              <div 
                key={`top-${i}`} 
                className={`flex flex-col justify-end w-40 h-28 md:w-56 md:h-36 rounded-[20px] ${asset.bg} p-5 flex-shrink-0 shadow-lg relative overflow-hidden`}
              >
                <div className="absolute top-4 left-5 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-xl shadow-inner">
                  {asset.icon}
                </div>
                <div className="flex flex-col z-10 relative">
                  <span className="text-base md:text-lg font-bold text-white drop-shadow-sm">{asset.name}</span>
                  {asset.symbol && <span className="text-xs text-white/80 font-medium">{asset.symbol}</span>}
                </div>
                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 opacity-50 pointer-events-none" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Row - Scrolls Right */}
        <div className="flex w-max justify-end -ml-[30%]">
          <motion.div 
            className="flex gap-4 md:gap-6 px-3"
            animate={{ x: [-1500, 0] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          >
            {bottomRow.map((asset, i) => (
              <div 
                key={`bot-${i}`} 
                className={`flex flex-col justify-end w-40 h-28 md:w-56 md:h-36 rounded-[20px] ${asset.bg} p-5 flex-shrink-0 shadow-lg relative overflow-hidden`}
              >
                <div className="absolute top-4 left-5 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-xl shadow-inner">
                  {asset.icon}
                </div>
                <div className="flex flex-col z-10 relative">
                  <span className="text-base md:text-lg font-bold text-white drop-shadow-sm">{asset.name}</span>
                  {asset.symbol && <span className="text-xs text-white/80 font-medium">{asset.symbol}</span>}
                </div>
                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 opacity-50 pointer-events-none" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
