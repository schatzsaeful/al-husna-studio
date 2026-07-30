"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsappOrderLink } from "@/lib/utils";

export function FloatingWhatsapp() {
  return (
    <>
      {/* Mobile Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/90 backdrop-blur-md border-t border-slate-800 p-3 flex items-center justify-between gap-3 shadow-2xl">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-white leading-none">Admin Online</span>
            <span className="text-[10px] text-slate-400">Siap Melayani Konsultasi</span>
          </div>
        </div>

        <a
          href={getWhatsappOrderLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-emerald-500"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Chat WA</span>
        </a>
      </div>

      {/* Desktop Floating WA Button */}
      <a
        href={getWhatsappOrderLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Admin"
        className="hidden md:flex fixed bottom-6 right-6 z-40 h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-2xl shadow-emerald-600/40 hover:bg-emerald-500 hover:scale-110 transition-all duration-300 group"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-slate-900 border border-slate-700 px-3 py-1.5 text-xs font-semibold text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Konsultasi Gratis via WA
        </span>
      </a>
    </>
  );
}
