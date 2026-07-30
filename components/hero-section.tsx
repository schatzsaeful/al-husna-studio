"use client";

import React from "react";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Code2, CheckCircle2 } from "lucide-react";
import { getWhatsappOrderLink } from "@/lib/utils";

export function HeroSection({ onOpenConsultation }: { onOpenConsultation: () => void }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-studio-accent/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[200px] bg-studio-cyan/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-300 backdrop-blur-md shadow-sm mb-6">
          <Sparkles className="h-3.5 w-3.5 text-studio-cyan animate-pulse" />
          <span>Official Software House & Web Creation Agency</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15]">
          Transformasi Bisnis Anda dengan{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Website & Software
          </span>{" "}
          Kelas Dunia
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Pilih dari <strong className="text-white">6+ sampel website interaktif</strong> yang siap pakai atau pesan sistem kustom. Cepat, berdesain mewah, SEO friendly, dan terintegrasi langsung dengan WhatsApp.
        </p>

        {/* CTA Button Group */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#showcase"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-studio-accent to-studio-cyan px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all"
          >
            <span>Jelajahi Sampel Website</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-7 py-3.5 text-sm font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition-all backdrop-blur-sm"
          >
            <Code2 className="h-4 w-4 text-studio-cyan" />
            <span>Konsultasi Proyek Kustom</span>
          </button>
        </div>

        {/* Trust Badges / Quick USPs */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-slate-400 text-xs font-medium">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>Pengerjaan 3 - 7 Hari</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="h-4 w-4 text-studio-cyan" />
            <span>Garansi 30 Hari Maintenance</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Zap className="h-4 w-4 text-amber-400" />
            <span>100% Mobile Friendly</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-indigo-400" />
            <span>Gratis SSL & Domain</span>
          </div>
        </div>
      </div>
    </section>
  );
}
