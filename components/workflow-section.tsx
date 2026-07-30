"use client";

import React from "react";
import { MousePointerClick, MessageSquare, Code2, Rocket } from "lucide-react";

export function WorkflowSection() {
  const steps = [
    {
      number: "01",
      icon: MousePointerClick,
      title: "Pilih Sampel / Paket",
      description: "Pilih template dari galeri sampel kami atau tentukan kebutuhan kustom untuk bisnis Anda.",
    },
    {
      number: "02",
      icon: MessageSquare,
      title: "Konsultasi & Brief (WA)",
      description: "Diskusikan detail materi (logo, teks, gambar) dengan tim admin kami via WhatsApp.",
    },
    {
      number: "03",
      icon: Code2,
      title: "Proses Pengerjaan",
      description: "Tim ahli kami mendevelop website Anda dengan arsitektur modern Next.js yang super cepat.",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Review & Launching",
      description: "Pemeriksaan akhir bersama Anda, menghubungkan domain resmi, dan peluncuran publik!",
    },
  ];

  return (
    <section id="workflow" className="py-16 md:py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            4 Langkah Mudah Memiliki Website
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Proses pemesanan dan pengerjaan yang praktis, transparan, dan tanpa ribet.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between hover:border-slate-700 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-slate-700">{st.number}</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-studio-accent/10 text-studio-cyan border border-studio-accent/20">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-white">{st.title}</h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">{st.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
