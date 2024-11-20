"use client";

import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  const scrollToNextSection = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <button 
      onClick={scrollToNextSection}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group"
    >
      <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2 group-hover:border-white/40 transition-colors">
        <ChevronDown className="w-4 h-4 text-white/60 group-hover:text-white/80 transition-colors" />
      </div>
    </button>
  );
}