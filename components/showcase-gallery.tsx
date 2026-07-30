"use client";

import React, { useState } from "react";
import { SAMPLE_WEBSITES, SampleWebsite } from "@/data/samples-data";
import { Search, Eye, Check, ExternalLink, Sparkles, MessageCircle } from "lucide-react";
import { getWhatsappOrderLink } from "@/lib/utils";

interface ShowcaseGalleryProps {
  onOpenLiveDemo: (sample: SampleWebsite) => void;
}

export function ShowcaseGallery({ onOpenLiveDemo }: ShowcaseGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "Semua Sampel" },
    { id: "landing-page", label: "Landing Page / UMKM" },
    { id: "company-profile", label: "Company Profile" },
    { id: "education", label: "Sekolah & Edukasi" },
    { id: "ecommerce", label: "Toko Online" },
    { id: "saas", label: "SaaS & App Product" },
    { id: "portfolio", label: "Portofolio" },
  ];

  const filteredSamples = SAMPLE_WEBSITES.filter((sample) => {
    const matchesCategory = selectedCategory === "all" || sample.category === selectedCategory;
    const matchesSearch =
      sample.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sample.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="showcase" className="py-16 md:py-24 bg-slate-900/50 border-y border-slate-800/80 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-400 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Katalog Sampel Interaktif</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pilih Desain & Sampel Website Pilihan Anda
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Klik tombol <strong className="text-slate-200">"Live Demo"</strong> untuk mencoba tampilan interaktif di berbagai ukuran layar (Desktop, Tablet, Mobile).
          </p>
        </div>

        {/* Search Bar & Category Filter Tabs */}
        <div className="mt-10 space-y-5">
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Cari sampel (misal: resto, sekolah, fashion)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-800/90 pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-studio-cyan transition-all"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-lg px-4 py-2 text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-studio-accent text-white shadow-md shadow-indigo-500/20"
                    : "bg-slate-800/80 text-slate-400 border border-slate-700/60 hover:text-white hover:bg-slate-700/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Samples */}
        {filteredSamples.length === 0 ? (
          <div className="text-center py-16 text-slate-400 text-sm">
            Tidak ada sampel website yang sesuai dengan kata kunci pencarian Anda.
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredSamples.map((sample) => (
              <div
                key={sample.id}
                className="group relative rounded-2xl border border-slate-800 bg-slate-800/40 p-4 hover:border-slate-700 hover:bg-slate-800/70 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Card Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-900">
                    <img
                      src={sample.thumbnailUrl}
                      alt={sample.title}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Popular Badge */}
                    {sample.isPopular && (
                      <span className="absolute top-3 left-3 rounded-md bg-amber-500/90 px-2.5 py-1 text-[11px] font-bold text-slate-950 shadow-md">
                        Terpopuler
                      </span>
                    )}

                    <span className="absolute bottom-3 left-3 rounded-md bg-slate-950/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-slate-300 border border-slate-700/50">
                      {sample.categoryLabel}
                    </span>
                  </div>

                  {/* Info Content */}
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-studio-cyan transition-colors">
                      {sample.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {sample.description}
                    </p>

                    {/* Key Features Bullets */}
                    <ul className="mt-4 space-y-1.5 border-t border-slate-800/80 pt-3">
                      {sample.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[12px] text-slate-300">
                          <Check className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider">Mulai Dari</span>
                    <span className="text-sm font-extrabold text-emerald-400">{sample.priceEstimate}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenLiveDemo(sample)}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition-all"
                    >
                      <Eye className="h-3.5 w-3.5 text-studio-cyan" />
                      <span>Live Demo</span>
                    </button>

                    <a
                      href={getWhatsappOrderLink(sample.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white shadow-md hover:bg-emerald-500 transition-all"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>Pesan</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
