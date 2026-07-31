"use client";

import React, { useState } from "react";
import { SampleWebsite } from "@/data/samples-data";
import { getWhatsappOrderLink } from "@/lib/utils";
import {
  Scissors,
  Sparkles,
  MessageCircle,
  Clock,
  CheckCircle2,
  Calendar,
  Heart,
  Star,
} from "lucide-react";

export function GlamourPreview({ sample }: { sample: SampleWebsite }) {
  const [beautyForm, setBeautyForm] = useState({
    name: "",
    treatment: "Glass Skin Korean Facial",
    date: "",
    time: "14:00",
  });

  const handleBeautySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo Glamour Beauty Studio, saya mau Booking Slot Perawatan:\n- Nama: ${beautyForm.name}\n- Treatment: ${beautyForm.treatment}\n- Tanggal: ${beautyForm.date || "Hari ini"}\n- Jam Slot: ${beautyForm.time}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const treatments = [
    { name: "Glass Skin Korean Facial", price: "Rp 250.000", normalPrice: "Rp 380.000", tag: "Best Seller", desc: "Pembersihan komedo, eksfoliasi serum vitamin C, & terapi masker LED anti-aging." },
    { name: "Korean Hair Balayage & Styling", price: "Rp 450.000", normalPrice: "Rp 650.000", tag: "Diskon 30%", desc: "Pewarnaan rambut gradasi halus ala Korea tanpa merusak kelembutan helaian rambut." },
    { name: "Eyelash Extension Russian Volume", price: "Rp 180.000", normalPrice: "Rp 260.000", tag: "Favorit", desc: "Bulu mata halus super ringan, lentik alami, tahan hingga 6 minggu tanpa perih." },
    { name: "Aromatherapy Full Body Spa 90'", price: "Rp 220.000", normalPrice: "Rp 320.000", tag: "Relaksasi", desc: "Pijat relaksasi seluruh tubuh dengan minyak bunga murni & timung steam herbal." },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-rose-400 selection:text-slate-950">
      {/* 1. Promo Ticker */}
      <div className="bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 text-slate-950 px-4 py-2 text-center text-xs font-black flex items-center justify-center gap-2">
        <Sparkles className="h-4 w-4" />
        <span>PROMO BEAUTY MONTH: DISKON 30% ALL FACIAL &amp; HAIR STYLING TREATMENT!</span>
      </div>

      {/* 2. Header */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="h-10 w-10 rounded-xl bg-rose-400 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-rose-400/20">
            <Scissors className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white block leading-none">Glamour <span className="text-rose-400">Beauty Studio</span></span>
            <span className="text-[10px] text-slate-400 font-medium">Beauty Treatment, Hair Styling &amp; Spa</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-300">
          <a href="#menu" className="hover:text-rose-400 transition">Pricelist Treatment</a>
          <a href="#booking" className="hover:text-rose-400 transition">Booking Jam Treatment</a>
        </div>

        <a
          href={getWhatsappOrderLink(sample.title)}
          target="_blank"
          className="rounded-xl bg-rose-400 px-5 py-2.5 text-xs font-extrabold text-slate-950 hover:bg-rose-300 transition shadow-lg flex items-center gap-2"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Booking Slot WA</span>
        </a>
      </header>

      {/* 3. Hero Section */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto space-y-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-rose-400/10 text-rose-300 text-xs font-bold border border-rose-400/20">
          ✨ Studio Perawatan Kecantikan Kulit &amp; Hair Styling Terfavorit
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
          Tampil Mempesona &amp; Percaya Diri Dengan Perawatan <span className="text-rose-400">Kelas Dunia</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Manjakan diri Anda dengan perawatan Glass Skin Facial, Korean Hair Coloring, Lash Extension, &amp; Spa Relaksasi dari beautician profesional terlisensi.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <a
            href="#booking"
            className="rounded-xl bg-rose-400 px-8 py-3.5 text-xs font-extrabold text-slate-950 hover:bg-rose-300 shadow-xl flex items-center gap-2 transition"
          >
            <Calendar className="h-4 w-4" />
            <span>Booking Slot Treatment WA</span>
          </a>
          <a
            href="#menu"
            className="rounded-xl border border-slate-700 bg-slate-900 px-7 py-3.5 text-xs font-bold text-slate-300 hover:bg-slate-800 transition"
          >
            Lihat Menu Pricelist
          </a>
        </div>
      </section>

      {/* 4. Treatment Pricelist */}
      <section id="menu" className="py-20 bg-slate-900/60 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-400">Menu Treatment</span>
            <h2 className="text-3xl font-black text-white">Daftar Perawatan Favorit Glamour</h2>
            <p className="text-slate-400 text-xs sm:text-sm">Produk impor organik bersertifikat BPOM &amp; aman untuk kulit sensitif</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((tr, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-rose-400/20 space-y-4 flex flex-col justify-between hover:border-rose-400/50 transition">
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-rose-400 bg-rose-400/10 px-2.5 py-1 rounded-full border border-rose-400/20 inline-block">
                    {tr.tag}
                  </span>
                  <h3 className="font-bold text-white text-base">{tr.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-rose-400 font-black text-base">{tr.price}</span>
                    <span className="text-slate-500 text-xs line-through">{tr.normalPrice}</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed pt-2 border-t border-slate-800">{tr.desc}</p>
                </div>
                <a
                  href={getWhatsappOrderLink(sample.title, tr.name)}
                  target="_blank"
                  className="w-full text-center py-2.5 rounded-xl bg-rose-400/10 text-rose-300 border border-rose-400/30 text-xs font-bold block hover:bg-rose-400 hover:text-slate-950 transition"
                >
                  Booking Slot WA
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Booking Form */}
      <section id="booking" className="py-20 px-6 max-w-3xl mx-auto">
        <div className="rounded-3xl border border-rose-400/30 bg-slate-900 p-8 sm:p-12 space-y-6 shadow-2xl">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">Instant Reservation</span>
            <h2 className="text-3xl font-black text-white">Form Booking Jam Treatment</h2>
            <p className="text-slate-400 text-xs">Pilih jam perawatan favorit Anda tanpa antre</p>
          </div>

          <form onSubmit={handleBeautySubmit} className="space-y-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Nama Anda</label>
              <input
                type="text"
                required
                placeholder="Masukkan nama Anda..."
                value={beautyForm.name}
                onChange={(e) => setBeautyForm({ ...beautyForm, name: e.target.value })}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:border-rose-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Pilihan Treatment</label>
              <select
                value={beautyForm.treatment}
                onChange={(e) => setBeautyForm({ ...beautyForm, treatment: e.target.value })}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-xs text-white focus:border-rose-400 focus:outline-none"
              >
                <option value="Glass Skin Korean Facial">Glass Skin Korean Facial (Rp 250.000)</option>
                <option value="Korean Hair Balayage & Styling">Korean Hair Balayage &amp; Styling (Rp 450.000)</option>
                <option value="Eyelash Extension Russian Volume">Eyelash Extension Russian Volume (Rp 180.000)</option>
                <option value="Aromatherapy Full Body Spa 90'">Aromatherapy Full Body Spa 90' (Rp 220.000)</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Tanggal Treatment</label>
                <input
                  type="date"
                  required
                  value={beautyForm.date}
                  onChange={(e) => setBeautyForm({ ...beautyForm, date: e.target.value })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-xs text-white focus:border-rose-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Jam Slot</label>
                <select
                  value={beautyForm.time}
                  onChange={(e) => setBeautyForm({ ...beautyForm, time: e.target.value })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-xs text-white focus:border-rose-400 focus:outline-none"
                >
                  <option value="10:00">10:00 WIB</option>
                  <option value="13:00">13:00 WIB</option>
                  <option value="15:00">15:00 WIB</option>
                  <option value="18:30">18:30 WIB</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-rose-400 py-3.5 text-xs font-extrabold text-slate-950 hover:bg-rose-300 transition shadow-xl flex items-center justify-center gap-2 cursor-pointer pt-3"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Booking Slot Treatment via WhatsApp</span>
            </button>
          </form>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="py-12 border-t border-slate-800 bg-slate-950 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-rose-400 flex items-center justify-center text-slate-950 font-bold">
              <Scissors className="h-4 w-4" />
            </div>
            <span className="font-bold text-white text-sm">Glamour Beauty Studio</span>
          </div>
          <p>© 2026 Glamour Beauty Studio · Sampel Landing Page Salon Interaktif</p>
        </div>
      </footer>
    </div>
  );
}
