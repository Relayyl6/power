"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TradeMode = "Swap" | "Buy" | "Sell";

const INITIAL_ASSETS = {
  USDT: { symbol: "USDT", type: "crypto", icon: "T", color: "bg-emerald-500", sellRate: 1500, buyRate: 1550 },
  BTC: { symbol: "BTC", type: "crypto", icon: "₿", color: "bg-amber-500", sellRate: 98000000, buyRate: 102000000 },
  ETH: { symbol: "ETH", type: "crypto", icon: "Ξ", color: "bg-blue-500", sellRate: 5200000, buyRate: 5400000 },
  SOL: { symbol: "SOL", type: "crypto", icon: "S", color: "bg-purple-500", sellRate: 250000, buyRate: 260000 },
  BNB: { symbol: "BNB", type: "crypto", icon: "B", color: "bg-yellow-500", sellRate: 900000, buyRate: 930000 },
  APPLE: { symbol: "APPLE", type: "giftcard", icon: "", color: "bg-gray-400", sellRate: 1200, buyRate: 0 },
  AMAZON: { symbol: "AMZN", type: "giftcard", icon: "a", color: "bg-orange-400", sellRate: 1150, buyRate: 0 },
  RAZER: { symbol: "RAZER", type: "giftcard", icon: "R", color: "bg-green-600", sellRate: 1050, buyRate: 0 },
  STEAM: { symbol: "STEAM", type: "giftcard", icon: "♨", color: "bg-slate-800", sellRate: 1100, buyRate: 0 },
  NGN: { symbol: "NGN", type: "fiat", icon: "₦", color: "bg-white text-emerald-700", sellRate: 1, buyRate: 1 }
};

export default function TradeCalculator({ compact = false }: { compact?: boolean }) {
  const [assets, setAssets] = useState(INITIAL_ASSETS);
  const [mode, setMode] = useState<TradeMode>("Sell");
  const [payAmount, setPayAmount] = useState<string>("100");
  const [payAsset, setPayAsset] = useState<keyof typeof INITIAL_ASSETS>("USDT");
  const [receiveAsset, setReceiveAsset] = useState<keyof typeof INITIAL_ASSETS>("NGN");
  const [showPayDropdown, setShowPayDropdown] = useState(false);
  const [showReceiveDropdown, setShowReceiveDropdown] = useState(false);

  // Fetch real-time crypto prices
  useEffect(() => {
    const fetchLiveRates = async () => {
      try {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,binancecoin,tether&vs_currencies=ngn");
        if (!response.ok) return;
        const data = await response.json();
        
        setAssets(prev => ({
          ...prev,
          USDT: { ...prev.USDT, sellRate: data.tether.ngn, buyRate: data.tether.ngn * 1.02 }, // 2% spread for buy
          BTC: { ...prev.BTC, sellRate: data.bitcoin.ngn, buyRate: data.bitcoin.ngn * 1.02 },
          ETH: { ...prev.ETH, sellRate: data.ethereum.ngn, buyRate: data.ethereum.ngn * 1.02 },
          SOL: { ...prev.SOL, sellRate: data.solana.ngn, buyRate: data.solana.ngn * 1.02 },
          BNB: { ...prev.BNB, sellRate: data.binancecoin.ngn, buyRate: data.binancecoin.ngn * 1.02 }
        }));
      } catch (error) {
        console.error("Failed to fetch live rates:", error);
      }
    };
    
    fetchLiveRates();
    const interval = setInterval(fetchLiveRates, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  // Handle mode switches
  const handleModeChange = (newMode: TradeMode) => {
    setMode(newMode);
    if (newMode === "Buy") {
      setPayAsset("NGN");
      setReceiveAsset("USDT");
    } else {
      setPayAsset("USDT");
      setReceiveAsset("NGN");
    }
  };

  const handleSwapAssets = () => {
    setPayAsset(receiveAsset);
    setReceiveAsset(payAsset);
    if (mode === "Buy") setMode("Sell");
    else if (mode === "Sell") setMode("Buy");
  };

  // Calculate Exchange Rate
  const payConfig = assets[payAsset];
  const recConfig = assets[receiveAsset];
  
  let rate = 0;
  let rateText = "";
  
  if (payAsset !== "NGN" && receiveAsset === "NGN") {
    rate = payConfig.sellRate;
    rateText = `1 ${payAsset} = ₦${rate.toLocaleString()}`;
  } else if (payAsset === "NGN" && receiveAsset !== "NGN") {
    rate = 1 / recConfig.buyRate;
    rateText = `1 ${receiveAsset} = ₦${recConfig.buyRate.toLocaleString()}`;
  } else if (payAsset !== "NGN" && receiveAsset !== "NGN") {
    // Crypto to Crypto swap
    rate = payConfig.sellRate / recConfig.buyRate;
    rateText = `1 ${payAsset} ≈ ${(rate).toFixed(4)} ${receiveAsset}`;
  } else {
    rate = 1;
    rateText = "1 NGN = 1 NGN";
  }

  const numericPay = parseFloat(payAmount || "0");
  const receiveAmount = (numericPay * rate).toLocaleString(undefined, { maximumFractionDigits: receiveAsset === "NGN" ? 0 : 4 });

  const handleWhatsApp = () => {
    let action = mode.toLowerCase();
    if (mode === "Swap") action = "swap";
    const text = `Hello Power Exchange! I want to ${action} my ${payAmount} ${payAsset} for ${receiveAsset}. The calculator estimated I would receive ${receiveAmount} ${receiveAsset}, please confirm the current rate.`;
    const url = `https://wa.me/2348115580802?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const AssetDropdown = ({ 
    type, 
    current, 
    onSelect 
  }: { 
    type: "pay" | "receive", 
    current: keyof typeof assets, 
    onSelect: (v: keyof typeof assets) => void 
  }) => {
    const isShowing = type === "pay" ? showPayDropdown : showReceiveDropdown;
    const setShowing = type === "pay" ? setShowPayDropdown : setShowReceiveDropdown;
    const currentAsset = assets[current];

    return (
      <div className="relative">
        <button 
          onClick={() => setShowing(!isShowing)}
          className="flex items-center gap-2 px-3 py-1.5 bg-[#1E293B] hover:bg-[#334155] rounded-full border border-white/10 transition-colors"
        >
          <div className={`flex items-center justify-center w-6 h-6 rounded-full font-bold text-xs ${currentAsset.color}`}>
            {currentAsset.icon}
          </div>
          <span className="font-semibold text-white">{currentAsset.symbol}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-secondary"><path d="m6 9 6 6 6-6"/></svg>
        </button>

        <AnimatePresence>
          {isShowing && (
            <>
              <div 
                className="fixed inset-0 z-[100] cursor-default" 
                onTouchStart={() => setShowing(false)} 
                onClick={() => setShowing(false)} 
              />
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 top-full mt-2 w-48 bg-[#1E293B] border border-white/10 rounded-2xl shadow-xl overflow-y-auto max-h-[300px] z-[110] flex flex-col p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {(Object.keys(assets) as Array<keyof typeof assets>).map(k => (
                  <button 
                    key={k}
                    onClick={() => { onSelect(k); setShowing(false); }}
                    className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-xl transition-colors text-left"
                  >
                    <div className={`flex items-center justify-center w-6 h-6 rounded-full font-bold text-xs shrink-0 ${assets[k].color}`}>
                      {assets[k].icon}
                    </div>
                    <span className="font-medium text-white">{assets[k].symbol}</span>
                  </button>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  };
  
  return (
    <div className={`relative w-full z-20 ${compact ? 'max-w-md' : 'max-w-md md:max-w-3xl mx-auto'}`}>
      {/* Background Glow */}
      <div className="absolute -inset-1 bg-brand-orange/20 blur-2xl rounded-[32px] pointer-events-none" />

      {/* Glass Panel */}
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`relative flex flex-col glass-panel rounded-3xl bg-[#0F141E]/80 border-white/5 backdrop-blur-xl shadow-2xl ${compact ? 'p-4' : 'p-6'}`}
      >
        
        {/* Tabs */}
        <div className={`flex items-center gap-6 text-sm font-medium border-b border-white/10 ${compact ? 'mb-4 pb-2' : 'mb-8 pb-4'}`}>
          {(["Swap", "Buy", "Sell"] as TradeMode[]).map(m => (
            <button 
              key={m}
              onClick={() => handleModeChange(m)}
              className={`relative pb-1 ${mode === m ? "text-white" : "text-text-secondary hover:text-white transition-colors"}`}
            >
              {m}
              {mode === m && (
                <motion.div className="absolute -bottom-4 left-0 w-full h-[2px] bg-brand-orange rounded-t" layoutId={`tabIndicator-${compact ? 'compact' : 'full'}`} />
              )}
            </button>
          ))}
        </div>

        {/* Responsive Flex Container for Inputs */}
        <div className={`flex flex-col relative ${compact ? 'gap-0' : 'md:flex-row items-center gap-0 md:gap-4'}`}>
          
          {/* Sell Input Container */}
          <div className="flex-1 w-full flex flex-col gap-2 p-4 bg-background/50 rounded-2xl border border-white/5 group focus-within:border-brand-orange/30 transition-colors relative z-20">
            <label className="text-sm text-text-secondary font-medium">You pay</label>
            <div className="flex items-center justify-between gap-4">
              <input 
                type="number" 
                value={payAmount}
                onChange={(e) => setPayAmount(e.target.value)}
                className="w-full bg-transparent text-3xl font-display font-semibold text-white outline-none placeholder:text-text-tertiary"
                placeholder="0.00"
              />
              <AssetDropdown type="pay" current={payAsset} onSelect={setPayAsset} />
            </div>
            <span className="text-xs text-text-secondary mt-1">Bal: 0.00</span>
          </div>

          {/* Swap Direction Button */}
          <div className={`relative flex items-center justify-center z-10 ${compact ? '-my-3' : '-my-3 md:my-0 md:-mx-8'}`}>
            <button 
              onClick={handleSwapAssets}
              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-[#1E293B] hover:bg-[#334155] border-4 border-[#0F141E] rounded-full text-white transition-transform hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transform transition-transform ${compact ? 'rotate-0' : 'rotate-0 md:-rotate-90'}`}><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
            </button>
          </div>

          {/* Receive Input Container */}
          <div className="flex-1 w-full flex flex-col gap-2 p-4 bg-background/50 rounded-2xl border border-white/5 relative z-0">
            <label className="text-sm text-text-secondary font-medium">You receive</label>
            <div className="flex items-center justify-between gap-4">
              <input 
                type="text" 
                value={receiveAmount}
                readOnly
                className="w-full bg-transparent text-3xl font-display font-semibold text-white outline-none"
              />
              <AssetDropdown type="receive" current={receiveAsset} onSelect={setReceiveAsset} />
            </div>
            <span className="text-xs text-brand-orange mt-1">≈ {rateText}</span>
          </div>

        </div>

        <p className="text-center text-xs text-text-secondary mt-6 mb-2">
          Estimate only. Final rate confirmed on WhatsApp.
        </p>

        {/* Action Button */}
        <button 
          onClick={handleWhatsApp}
          className={`w-full py-4 mt-2 text-lg font-semibold text-white bg-brand-orange hover:bg-brand-orange-hover rounded-xl shadow-glow transition-all active:scale-[0.98] ${compact ? '' : 'md:max-w-xs md:mx-auto'}`}
        >
          Start Trade on WhatsApp
        </button>

      </motion.div>
    </div>
  );
}
