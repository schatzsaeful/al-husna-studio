"use client";

import React from "react";
import { PRICING_PACKAGES } from "@/data/pricing-data";
import { Check, MessageCircle, Sparkles } from "lucide-react";
import { getWhatsappOrderLink } from "@/lib/utils";

export function PricingTable({ onOpenConsultation }: { onOpenConsultation: () => void }) {
  return (
    <section id="pricing" className="py-16 md:py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Investasi Hemat & Transparan</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pilihan Paket Layanan Website
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Tanpa biaya tersembunyi. Semua paket sudah termasuk domain, SSL, hosting, dan bantuan teknis.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.isPopular
                  ? "border-studio-cyan bg-slate-900 shadow-xl shadow-cyan-500/10 scale-105 z-10"
                  : "border-slate-800 bg-slate-900/60 hover:border-slate-700"
              }`}
            >
              {/* Popular Badge */}
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-studio-accent to-studio-cyan px-4 py-1 text-[11px] font-bold text-white shadow-md uppercase tracking-wider">
                  {pkg.badge}
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                <p className="mt-2 text-xs text-slate-400 min-h-[36px]">{pkg.description}</p>

                {/* Price Display */}
                <div className="mt-6 flex items-baseline gap-2 border-y border-slate-800 py-4">
                  <span className="text-3xl font-extrabold text-white">{pkg.price}</span>
                  <span className="text-xs text-slate-500 line-through">{pkg.originalPrice}</span>
                </div>

                {/* Features List */}
                <ul className="mt-6 space-y-3">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action CTA Button */}
              <div className="mt-8 pt-4">
                <a
                  href={getWhatsappOrderLink(undefined, pkg.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-bold transition-all ${
                    pkg.isPopular
                      ? "bg-gradient-to-r from-studio-accent to-studio-cyan text-white shadow-lg shadow-indigo-500/20 hover:scale-[1.02]"
                      : "bg-emerald-600 text-white hover:bg-emerald-500 shadow-md"
                  }`}
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{pkg.ctaText}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
