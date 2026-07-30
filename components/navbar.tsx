"use client";

import React, { useState } from "react";
import { Code2, MessageCircle, Menu, X } from "lucide-react";
import { getWhatsappOrderLink } from "@/lib/utils";

export function Navbar({ onOpenConsultation }: { onOpenConsultation: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-studio-border/60 bg-studio-dark/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-studio-accent to-studio-cyan text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <Code2 className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              Al Husna <span className="text-studio-cyan font-extrabold">Studio</span>
            </span>
            <span className="text-[10px] font-medium tracking-wider text-slate-400 uppercase">
              Software House & Web Agency
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#showcase" className="hover:text-studio-cyan transition-colors">
            Katalog Sampel
          </a>
          <a href="#services" className="hover:text-studio-cyan transition-colors">
            Layanan
          </a>
          <a href="#comparison" className="hover:text-studio-cyan transition-colors">
            Keunggulan
          </a>
          <a href="#pricing" className="hover:text-studio-cyan transition-colors">
            Paket Harga
          </a>
          <a href="#workflow" className="hover:text-studio-cyan transition-colors">
            Cara Kerja
          </a>
          <a href="#faq" className="hover:text-studio-cyan transition-colors">
            FAQ
          </a>
        </nav>

        {/* Desktop CTA Action */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenConsultation}
            className="rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition-all"
          >
            Form Konsultasi
          </button>

          <a
            href={getWhatsappOrderLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-500 transition-all hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Chat WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-studio-dark/95 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#showcase"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-slate-800"
          >
            Katalog Sampel
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-slate-800"
          >
            Layanan
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-slate-800"
          >
            Paket Harga
          </a>
          <a
            href="#workflow"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-slate-800"
          >
            Cara Kerja
          </a>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full text-center rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-xs font-semibold text-slate-200"
            >
              Isi Form Konsultasi
            </button>
            <a
              href={getWhatsappOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Chat WhatsApp Admin</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
