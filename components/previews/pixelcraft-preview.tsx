"use client";

import React, { useState } from "react";
import { SampleWebsite } from "@/data/samples-data";
import { getWhatsappOrderLink } from "@/lib/utils";
import {
  Palette,
  Sparkles,
  ArrowRight,
  MessageCircle,
  ExternalLink,
  Award,
  Layers,
  CheckCircle2,
  Play,
  Share2,
} from "lucide-react";

export function PixelcraftPreview({ sample }: { sample: SampleWebsite }) {
  const [selectedCat, setSelectedCat] = useState<string>("all");

  const projects = [
    { title: "Fintech Mobile Banking App", cat: "UI/UX Design", year: "2026", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop" },
    { title: "Luxury Fashion Brand Identity", cat: "Branding", year: "2025", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop" },
    { title: "SaaS Analytics Dashboard", cat: "Web Development", year: "2026", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop" },
    { title: "3D Product Motion Reel", cat: "Motion Graphic", year: "2025", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* 1. Header Studio */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-cyan-500 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-cyan-500/20">
            <Palette className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white block leading-none">PixelCraft <span className="text-cyan-400">Studio</span></span>
            <span className="text-[10px] text-slate-400 font-medium">Digital Agency &amp; Visual Design Portfolio</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-300">
          <a href="#work" className="hover:text-cyan-400 transition">Selected Work</a>
          <a href="#services" className="hover:text-cyan-400 transition">Services</a>
          <a href="#process" className="hover:text-cyan-400 transition">Our Process</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Start a Project</a>
        </div>

        <a
          href={getWhatsappOrderLink(sample.title)}
          target="_blank"
          className="rounded-xl bg-cyan-500 px-5 py-2.5 text-xs font-extrabold text-slate-950 hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20 flex items-center gap-2"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Diskusi Proyek WA</span>
        </a>
      </header>

      {/* 2. Hero Section */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto space-y-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20">
          🏆 Award-Winning Creative Agency 2026
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
          Kami Merancang <span className="text-cyan-400">Identitas Visual</span> &amp; Desain Produk Berkelas World-Class
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Membantu brand ternama menciptakan pengalaman pengguna yang memukau, elegan, dan berdaya saing tinggi.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <a
            href={getWhatsappOrderLink(sample.title)}
            target="_blank"
            className="rounded-xl bg-cyan-500 px-8 py-3.5 text-xs font-extrabold text-slate-950 hover:bg-cyan-400 shadow-xl flex items-center gap-2 transition"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Konsultasi Proyek Desain</span>
          </a>
          <a
            href="#work"
            className="rounded-xl border border-slate-700 bg-slate-900 px-7 py-3.5 text-xs font-bold text-slate-300 hover:bg-slate-800 transition"
          >
            Lihat Portofolio Karya
          </a>
        </div>
      </section>

      {/* 3. Portfolio Case Studies Grid */}
      <section id="work" className="py-20 bg-slate-900/60 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black text-white">Studi Kasus Proyek Pilihan</h2>
              <p className="text-xs text-slate-400">Koleksi desain UI/UX, Branding, &amp; Web Development terbaru</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p, idx) => (
              <div key={idx} className="group relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-cyan-500/50 transition duration-500">
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 space-y-2 flex justify-between items-end">
                  <div>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{p.cat} · {p.year}</span>
                    <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-cyan-300 transition">{p.title}</h3>
                  </div>
                  <a
                    href={getWhatsappOrderLink(sample.title, p.title)}
                    target="_blank"
                    className="h-10 w-10 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center font-bold hover:bg-cyan-400 transition"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <footer className="py-12 border-t border-slate-800 bg-slate-950 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-cyan-500 flex items-center justify-center text-slate-950 font-bold">
              <Palette className="h-4 w-4" />
            </div>
            <span className="font-bold text-white text-sm">PixelCraft Studio Portfolio</span>
          </div>
          <p>© 2026 PixelCraft Studio · Sampel Portofolio Agensi Interaktif</p>
        </div>
      </footer>
    </div>
  );
}
