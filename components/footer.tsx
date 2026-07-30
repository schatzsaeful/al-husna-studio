"use client";

import React from "react";
import { Code2, MessageCircle, Phone } from "lucide-react";
import { getWhatsappOrderLink } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 pt-16 pb-24 md:pb-16 text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <a href="#" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-studio-accent to-studio-cyan text-white">
                <Code2 className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Al Husna <span className="text-studio-cyan">Studio</span>
              </span>
            </a>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Software House & Web Creation Agency profesional. Menyediakan jasa pembuatan website, landing page, dan aplikasi kustom berkualitas tinggi dengan performa super cepat.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Navigasi</h4>
            <ul className="space-y-1.5 font-medium">
              <li>
                <a href="#showcase" className="hover:text-studio-cyan transition-colors">
                  Katalog Sampel
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-studio-cyan transition-colors">
                  Daftar Layanan
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-studio-cyan transition-colors">
                  Paket Harga
                </a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-studio-cyan transition-colors">
                  Cara Kerja
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-studio-cyan transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Hotline Contact */}
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Kontak Hotline</h4>
            <div className="space-y-2 font-medium">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span>+62 815-3270-4295</span>
              </div>
              <a
                href={getWhatsappOrderLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 px-3 py-1.5 hover:bg-emerald-600 hover:text-white transition-all mt-1"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>Chat WhatsApp Admin</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bottom */}
        <div className="pt-8 text-center text-[11px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>&copy; {new Date().getFullYear()} Al Husna Studio. All rights reserved.</span>
          <span>Domain Target: studio.alhusnaeducation.id</span>
        </div>
      </div>
    </footer>
  );
}
