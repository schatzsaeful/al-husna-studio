"use client";

import React from "react";
import { ShieldCheck, Clock, RefreshCw, ThumbsUp } from "lucide-react";

export function GuaranteeSection() {
  const guarantees = [
    {
      icon: Clock,
      title: "Garansi Tepat Waktu (SLA)",
      description: "Pengerjaan diselesaikan tepat sesuai durasi estimasi (3 – 7 hari kerja). Cepat tanpa mengurangi kualitas.",
    },
    {
      icon: ShieldCheck,
      title: "Garansi Maintenance 30 Hari",
      description: "Bantuan teknis, perbaikan bug, dan pemeliharaan gratis selama 30 hari penuh setelah website diluncurkan.",
    },
    {
      icon: RefreshCw,
      title: "Garansi Kepuasan Revisi",
      description: "Layanan penyesuaian desain dan revisi hingga hasil sesuai dengan kesepakatan brief awal Anda.",
    },
  ];

  return (
    <section className="py-12 bg-slate-900/60 border-y border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/80 p-5 hover:border-slate-700 transition-all"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
