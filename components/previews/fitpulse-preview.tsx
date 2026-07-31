"use client";

import React, { useState } from "react";
import { SampleWebsite } from "@/data/samples-data";
import { getWhatsappOrderLink } from "@/lib/utils";
import {
  Dumbbell,
  Flame,
  MessageCircle,
  Clock,
  CheckCircle2,
  Calendar,
  Users,
  Award,
  Zap,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export function FitpulsePreview({ sample }: { sample: SampleWebsite }) {
  const [trialForm, setTrialForm] = useState({
    name: "",
    goal: "Bakar Lemak & Berat Badan",
    date: "",
  });

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo FitPulse Gym, saya mau klaim Free Day Pass 1 Hari:\n- Nama: ${trialForm.name}\n- Goal Fitness: ${trialForm.goal}\n- Rencana Hari Trial: ${trialForm.date || "Besok"}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const membershipPlans = [
    { name: "Monthly Pass", price: "Rp 350.000", period: "/ bulan", desc: "Akses Gym & Locker Room 24/7 + Free 1x Personal Trainer Session" },
    { name: "Quarterly Pass (3 Bln)", price: "Rp 900.000", period: "/ 3 bulan", isPopular: true, desc: "Hemat 15% + Free InBody Composition Test & Gym Towel Exclusive" },
    { name: "Annual Pass (12 Bln)", price: "Rp 2.900.000", period: "/ tahun", desc: "Diskon Terbesar + Unlimited All Class (Yoga/HIIT/Boxing) & 2 Guest Pass" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-orange-500 selection:text-slate-950">
      {/* 1. Free Trial Banner Ticker */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-slate-950 px-4 py-2 text-center text-xs font-black flex items-center justify-center gap-2">
        <Flame className="h-4 w-4" />
        <span>PROMO TERBATAS: FREE DAY PASS 1 HARI + GRATIS TES ANALISIS INBODY COMPOSITION!</span>
      </div>

      {/* 2. Header */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="h-10 w-10 rounded-xl bg-orange-500 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-orange-500/20">
            <Dumbbell className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xl font-black text-white uppercase tracking-wider block leading-none">FitPulse <span className="text-orange-500">Gym</span></span>
            <span className="text-[10px] text-slate-400 font-medium">24/7 Fitness &amp; Personal Training Club</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-300">
          <a href="#plans" className="hover:text-orange-400 transition">Membership Pricing</a>
          <a href="#classes" className="hover:text-orange-400 transition">Kelas Harian</a>
          <a href="#trial" className="hover:text-orange-400 transition">Claim Free Trial</a>
        </div>

        <a
          href={getWhatsappOrderLink(sample.title)}
          target="_blank"
          className="rounded-xl bg-orange-500 px-5 py-2.5 text-xs font-extrabold text-slate-950 hover:bg-orange-400 transition shadow-lg flex items-center gap-2"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Claim Free Pass WA</span>
        </a>
      </header>

      {/* 3. Hero Section */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto space-y-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold border border-orange-500/20">
          🔥 Pusat Fitness &amp; Personal Training Terlengkap #1
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight uppercase tracking-tight">
          Bentuk Tubuh Ideal &amp; Tingkatkan Energy <span className="text-orange-500">Maksimal</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Peralatan gym impor berstandar olimpiade, instruktur pribadi bersertifikat internasional, &amp; kelas HIIT, Yoga, serta Boxing harian 24 jam nonstop.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <a
            href="#trial"
            className="rounded-xl bg-orange-500 px-8 py-3.5 text-xs font-extrabold text-slate-950 hover:bg-orange-400 shadow-xl flex items-center gap-2 transition"
          >
            <Flame className="h-4 w-4" />
            <span>Klaim Pass Latihan 1 Hari Gratis</span>
          </a>
          <a
            href="#plans"
            className="rounded-xl border border-slate-700 bg-slate-900 px-7 py-3.5 text-xs font-bold text-slate-300 hover:bg-slate-800 transition"
          >
            Lihat Paket Member
          </a>
        </div>
      </section>

      {/* 4. Membership Plans */}
      <section id="plans" className="py-20 bg-slate-900/60 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">Pilihan Membership</span>
            <h2 className="text-3xl font-black text-white">Paket Langganan FitPulse</h2>
            <p className="text-slate-400 text-xs sm:text-sm">Akses unlimited seluruh alat gym &amp; locker room ber-AC</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {membershipPlans.map((m, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-3xl bg-slate-900 border space-y-6 flex flex-col justify-between relative ${
                  m.isPopular ? "border-orange-500 shadow-2xl shadow-orange-500/20" : "border-slate-800"
                }`}
              >
                {m.isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-500 text-slate-950 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-md">
                    Rekomendasi Utama
                  </span>
                )}

                <div className="space-y-4">
                  <h3 className="font-bold text-white text-xl">{m.name}</h3>
                  <div className="pt-1">
                    <span className="text-3xl font-black text-orange-400">{m.price}</span>
                    <span className="text-xs text-slate-500">{m.period}</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed pt-2 border-t border-slate-800">{m.desc}</p>
                </div>

                <a
                  href={getWhatsappOrderLink(sample.title, `Join ${m.name}`)}
                  target="_blank"
                  className={`w-full text-center py-3.5 rounded-xl font-extrabold text-xs transition block ${
                    m.isPopular ? "bg-orange-500 hover:bg-orange-400 text-slate-950 shadow-lg" : "bg-slate-800 hover:bg-slate-700 text-white"
                  }`}
                >
                  Daftar Member WA
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Claim Free Pass Form */}
      <section id="trial" className="py-20 px-6 max-w-3xl mx-auto">
        <div className="rounded-3xl border border-orange-500/30 bg-slate-900 p-8 sm:p-12 space-y-6 shadow-2xl">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Free Day Pass</span>
            <h2 className="text-3xl font-black text-white">Form Klaim Free Pass 1 Hari</h2>
            <p className="text-slate-400 text-xs">Coba semua fasilitas gym kami secara gratis tanpa komitmen apapun</p>
          </div>

          <form onSubmit={handleTrialSubmit} className="space-y-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Nama Anda</label>
              <input
                type="text"
                required
                placeholder="Masukkan nama Anda..."
                value={trialForm.name}
                onChange={(e) => setTrialForm({ ...trialForm, name: e.target.value })}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Target Utama Fitness Anda</label>
              <select
                value={trialForm.goal}
                onChange={(e) => setTrialForm({ ...trialForm, goal: e.target.value })}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
              >
                <option value="Bakar Lemak & Berat Badan">Bakar Lemak &amp; Penurunan Berat Badan</option>
                <option value="Membentuk Otot & Hypertrophy">Membentuk Otot (Muscle Building)</option>
                <option value="Stamina & Kardio Healthy">Tingkatkan Stamina &amp; Kesehatan Kardio</option>
                <option value="Personal Training Guidance">Membutuhkan Pendampingan Trainer Pribadi</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Rencana Hari Latihan Trial</label>
              <input
                type="date"
                required
                value={trialForm.date}
                onChange={(e) => setTrialForm({ ...trialForm, date: e.target.value })}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-orange-500 py-3.5 text-xs font-extrabold text-slate-950 hover:bg-orange-400 transition shadow-xl flex items-center justify-center gap-2 cursor-pointer pt-3"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Klaim Free Pass 1 Hari via WhatsApp</span>
            </button>
          </form>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="py-12 border-t border-slate-800 bg-slate-950 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-orange-500 flex items-center justify-center text-slate-950 font-bold">
              <Dumbbell className="h-4 w-4" />
            </div>
            <span className="font-bold text-white text-sm">FitPulse Gym 24/7</span>
          </div>
          <p>© 2026 FitPulse Gym · Sampel Landing Page Fitness Interaktif</p>
        </div>
      </footer>
    </div>
  );
}
