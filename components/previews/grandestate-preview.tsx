"use client";

import React, { useState } from "react";
import { SampleWebsite } from "@/data/samples-data";
import { getWhatsappOrderLink } from "@/lib/utils";
import {
  Home,
  Sparkles,
  Download,
  MessageCircle,
  MapPin,
  CheckCircle2,
  Calendar,
  KeyRound,
  ShieldCheck,
  Calculator,
} from "lucide-react";

export function GrandestatePreview({ sample }: { sample: SampleWebsite }) {
  const [surveyForm, setSurveyForm] = useState({
    name: "",
    unitType: "Tipe Diamond (54/90)",
    date: "",
  });

  const handleSurveySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo GrandEstate Residence, saya mau jadwal Survey Lokasi Perumahan:\n- Nama: ${surveyForm.name}\n- Minat Tipe: ${surveyForm.unitType}\n- Tanggal Survey: ${surveyForm.date || "Weekend ini"}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const houseTypes = [
    { name: "Tipe Emerald (36/72)", price: "Mulai Rp 450 Juta", specs: "2 Kamar Tidur · 1 Kamar Mandi · Carport 1 Mobil · Taman Depan", cicilan: "Angsuran KPR Rp 2,9 Juta/bln", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop" },
    { name: "Tipe Diamond (54/90)", price: "Mulai Rp 680 Juta", specs: "3 Kamar Tidur · 2 Kamar Mandi · Carport 2 Mobil · Smart Door Lock", cicilan: "Angsuran KPR Rp 4,2 Juta/bln", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop" },
    { name: "Tipe Royal Villa (72/120)", price: "Mulai Rp 980 Juta", specs: "4 Kamar Tidur · 3 Kamar Mandi · Private Pool Option · Balkon Mewah", cicilan: "Angsuran KPR Rp 6,5 Juta/bln", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* 1. GrandEstate Launch Promo Ticker */}
      <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-stone-950 px-4 py-2 text-center text-xs font-extrabold flex items-center justify-center gap-2">
        <Sparkles className="h-4 w-4" />
        <span>PROMO UNTUK 10 PEMBELI PERTAMA: DP 0% + GRATIS CANOPY + GRATIS BIAYA AKTA KPR BANK!</span>
      </div>

      {/* 2. Header */}
      <header className="border-b border-amber-900/30 bg-stone-900/90 backdrop-blur-md sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center text-stone-950 font-black shadow-lg">
            <Home className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xl font-black text-white tracking-wider block leading-none">GrandEstate <span className="text-amber-400">Residence</span></span>
            <span className="text-[10px] text-stone-400 font-medium">Smart Home Resort &amp; Green Living</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-semibold text-stone-300">
          <a href="#types" className="hover:text-amber-400 transition">Tipe Rumah</a>
          <a href="#facilities" className="hover:text-amber-400 transition">Fasilitas Perumahan</a>
          <a href="#survey" className="hover:text-amber-400 transition">Jadwal Survey WA</a>
        </div>

        <a
          href={getWhatsappOrderLink(sample.title, "Price List PDF")}
          target="_blank"
          className="rounded-xl bg-amber-500 px-5 py-2.5 text-xs font-extrabold text-stone-950 hover:bg-amber-400 transition shadow-lg flex items-center gap-2"
        >
          <Download className="h-4 w-4" />
          <span>Download Brosur PDF</span>
        </a>
      </header>

      {/* 3. Hero Section */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto space-y-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/30">
          🏡 Hunian Smart Home Resort &amp; Bebas Banjir
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
          Miliki Rumah Impian Berkonsep Resort Di Lokasi <span className="text-amber-400">Super Strategis</span>
        </h1>
        <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Hanya 5 Menit dari Akses Pintu Tol Utama. Sistem keamanan 24 jam dengan Smart Door Lock, Solar Panel, &amp; lingkungan asri sejuk.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <a
            href="#survey"
            className="rounded-xl bg-amber-500 px-8 py-3.5 text-xs font-extrabold text-stone-950 hover:bg-amber-400 shadow-xl flex items-center gap-2 transition"
          >
            <Calendar className="h-4 w-4" />
            <span>Jadwalkan Survey Lokasi WA</span>
          </a>
          <a
            href="#types"
            className="rounded-xl border border-amber-900/40 bg-stone-900 px-7 py-3.5 text-xs font-bold text-amber-300 hover:bg-stone-800 transition"
          >
            Lihat Tipe Unit &amp; Denah
          </a>
        </div>
      </section>

      {/* 4. House Types Grid */}
      <section id="types" className="py-20 bg-stone-900/60 px-6 border-t border-amber-900/30">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Pilihan Unit</span>
            <h2 className="text-3xl font-black text-white">Tipe Rumah Terfavorit GrandEstate</h2>
            <p className="text-stone-400 text-xs sm:text-sm">Spesifikasi bangunan mewah &amp; garansi struktur 10 tahun dari Developer</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {houseTypes.map((t, idx) => (
              <div key={idx} className="rounded-3xl border border-amber-900/40 bg-stone-900 overflow-hidden flex flex-col justify-between hover:border-amber-500/50 transition group">
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img src={t.img} alt={t.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-bold text-white text-xl">{t.name}</h3>
                    <p className="text-amber-400 font-black text-lg mt-1">{t.price}</p>
                    <span className="text-[11px] text-amber-300/80 font-semibold block">{t.cicilan}</span>
                  </div>
                  <p className="text-stone-400 text-xs leading-relaxed pt-2 border-t border-amber-900/30">{t.specs}</p>
                  <a
                    href={getWhatsappOrderLink(sample.title, `Info Tipe ${t.name}`)}
                    target="_blank"
                    className="w-full text-center py-3 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs block hover:bg-amber-400 transition"
                  >
                    Brosur &amp; Simulasi KPR WA
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Survey Form */}
      <section id="survey" className="py-20 px-6 max-w-3xl mx-auto">
        <div className="rounded-3xl border border-amber-500/30 bg-stone-900 p-8 sm:p-12 space-y-6 shadow-2xl">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Free Site Visit</span>
            <h2 className="text-3xl font-black text-white">Formulir Survey Lokasi Rumah Sample</h2>
            <p className="text-stone-400 text-xs">Dampingi tim sales profesional kami untuk melihat langsung unit rumah contoh</p>
          </div>

          <form onSubmit={handleSurveySubmit} className="space-y-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1.5">Nama Anda</label>
              <input
                type="text"
                required
                placeholder="Masukkan nama Anda..."
                value={surveyForm.name}
                onChange={(e) => setSurveyForm({ ...surveyForm, name: e.target.value })}
                className="w-full rounded-xl bg-stone-950 border border-amber-900/40 px-4 py-2.5 text-xs text-white placeholder-stone-600 focus:border-amber-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1.5">Tipe Rumah Yang Diminati</label>
              <select
                value={surveyForm.unitType}
                onChange={(e) => setSurveyForm({ ...surveyForm, unitType: e.target.value })}
                className="w-full rounded-xl bg-stone-950 border border-amber-900/40 px-4 py-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
              >
                <option value="Tipe Emerald (36/72)">Tipe Emerald (36/72) - Rp 450 Juta</option>
                <option value="Tipe Diamond (54/90)">Tipe Diamond (54/90) - Rp 680 Juta</option>
                <option value="Tipe Royal Villa (72/120)">Tipe Royal Villa (72/120) - Rp 980 Juta</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1.5">Rencana Tanggal Survey</label>
              <input
                type="date"
                required
                value={surveyForm.date}
                onChange={(e) => setSurveyForm({ ...surveyForm, date: e.target.value })}
                className="w-full rounded-xl bg-stone-950 border border-amber-900/40 px-4 py-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-amber-500 py-3.5 text-xs font-extrabold text-stone-950 hover:bg-amber-400 transition shadow-xl flex items-center justify-center gap-2 cursor-pointer pt-3"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Konfirmasi Jadwal Survey via WhatsApp</span>
            </button>
          </form>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="py-12 border-t border-amber-900/30 bg-stone-950 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-stone-500">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-amber-500 flex items-center justify-center text-stone-950 font-bold">
              <Home className="h-4 w-4" />
            </div>
            <span className="font-bold text-white text-sm">GrandEstate Residence</span>
          </div>
          <p>© 2026 GrandEstate Residence · Sampel Landing Page Properti Interaktif</p>
        </div>
      </footer>
    </div>
  );
}
