"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServiceWhatsAppCTA({ serviceTitle }: { serviceTitle: string }) {
  const [isMessaging, setIsMessaging] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    const text = encodeURIComponent(`Hello Power Exchange! I am interested in your ${serviceTitle} service. ${message}`);
    window.open(`https://wa.me/2348115580802?text=${text}`, '_blank');
    setIsMessaging(false);
    setMessage("");
  };

  return (
    <div className="relative mt-12 flex justify-end">
      <AnimatePresence mode="wait" initial={false}>
        {!isMessaging ? (
          <motion.button
            key="button"
            initial={{ opacity: 0, scale: 0.95, width: "auto" }}
            animate={{ opacity: 1, scale: 1, width: "auto" }}
            exit={{ opacity: 0, scale: 0.95, width: "auto" }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMessaging(true)}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-brand-orange hover:bg-brand-orange-hover rounded-full transition-all shadow-glow hover:scale-105 active:scale-95"
          >
            Request Service on WhatsApp
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </motion.button>
        ) : (
          <motion.div
            key="input"
            initial={{ opacity: 0, scale: 0.95, width: "250px" }}
            animate={{ opacity: 1, scale: 1, width: "100%" }}
            exit={{ opacity: 0, scale: 0.95, width: "250px" }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 bg-[#0F141E]/80 backdrop-blur-md p-1.5 rounded-full border border-brand-orange/50 focus-within:border-brand-orange shadow-glass w-full max-w-md pl-4 transition-colors"
          >
            <input
              type="text"
              autoFocus
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="What do you need help with?"
              className="flex-1 bg-transparent border-none text-white outline-none placeholder:text-text-tertiary min-w-0"
            />
            <button
              onClick={() => setIsMessaging(false)}
              className="p-2 text-text-tertiary hover:text-white transition-colors"
              aria-label="Cancel"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <button
              onClick={handleSend}
              disabled={!message.trim()}
              className="flex items-center justify-center w-10 h-10 shrink-0 bg-brand-orange text-white rounded-full hover:bg-brand-orange-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-glow"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
