"use client";

import React from "react";
import { Check, X, ShieldCheck } from "lucide-react";

export function ComparisonSection() {
  return (
    <section id="comparison" className="py-16 md:py-24 bg-slate-900/40 border-y border-slate-800/80 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300 mb-4">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Mengapa Al Husna Studio?</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perbandingan Kualitas Layanan
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Lihat mengapa ratusan klien mempercayakan pembuatan website & software mereka kepada Al Husna Studio.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-slate-800 text-xs font-semibold tracking-wider uppercase text-slate-400">
                <th className="py-4 px-4 w-2/5">Fitur & Layanan</th>
                <th className="py-4 px-4 text-center bg-studio-accent/10 border-x border-studio-accent/30 text-studio-cyan font-bold rounded-t-xl">
                  Al Husna Studio ⭐
                </th>
                <th className="py-4 px-4 text-center">Freelancer Biasa</th>
                <th className="py-4 px-4 text-center">Template Gratisan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-sm text-slate-300">
              <tr>
                <td className="py-4 px-4 font-medium text-white">Desain Aesthetic & Modern UI/UX</td>
                <td className="py-4 px-4 text-center bg-studio-accent/5 border-x border-studio-accent/20">
                  <div className="flex items-center justify-center gap-1 text-emerald-400 font-bold text-xs">
                    <Check className="h-4 w-4" /> Custom & Luxury
                  </div>
                </td>
                <td className="py-4 px-4 text-center text-slate-400 text-xs">Bervariasi</td>
                <td className="py-4 px-4 text-center text-slate-500 text-xs">Kaku & Pas-pasan</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-medium text-white">Kecepatan Loading (Next.js App)</td>
                <td className="py-4 px-4 text-center bg-studio-accent/5 border-x border-studio-accent/20">
                  <div className="flex items-center justify-center gap-1 text-emerald-400 font-bold text-xs">
                    <Check className="h-4 w-4" /> ⚡ Super Cepat (&lt; 1.5 detik)
                  </div>
                </td>
                <td className="py-4 px-4 text-center text-slate-400 text-xs">Tergantung Hosting</td>
                <td className="py-4 px-4 text-center text-slate-500 text-xs">Lambat</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-medium text-white">Responsif Mobile 100%</td>
                <td className="py-4 px-4 text-center bg-studio-accent/5 border-x border-studio-accent/20">
                  <div className="flex items-center justify-center gap-1 text-emerald-400 font-bold text-xs">
                    <Check className="h-4 w-4" /> Ya (Uji Multi Device)
                  </div>
                </td>
                <td className="py-4 px-4 text-center text-slate-400 text-xs">Kadang Ada Bug</td>
                <td className="py-4 px-4 text-center text-slate-500 text-xs">Sering Berantakan</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-medium text-white">Garansi Maintenance 30 Hari</td>
                <td className="py-4 px-4 text-center bg-studio-accent/5 border-x border-studio-accent/20">
                  <div className="flex items-center justify-center gap-1 text-emerald-400 font-bold text-xs">
                    <Check className="h-4 w-4" /> 100% Gratis & Bantuan
                  </div>
                </td>
                <td className="py-4 px-4 text-center text-slate-500 text-xs">❌ Jarang Ada</td>
                <td className="py-4 px-4 text-center text-slate-500 text-xs">❌ Tidak Ada Support</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-medium text-white">Direct WhatsApp Order Engine</td>
                <td className="py-4 px-4 text-center bg-studio-accent/5 border-x border-studio-accent/20 rounded-b-xl">
                  <div className="flex items-center justify-center gap-1 text-emerald-400 font-bold text-xs">
                    <Check className="h-4 w-4" /> Terintegrasi Otomatis
                  </div>
                </td>
                <td className="py-4 px-4 text-center text-slate-400 text-xs">Manual Link</td>
                <td className="py-4 px-4 text-center text-slate-500 text-xs">❌ Tidak Ada</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
