"use client";

import React, { useState } from "react";
import { SampleWebsite } from "@/data/samples-data";
import { getWhatsappOrderLink } from "@/lib/utils";
import {
  Building2,
  ShieldCheck,
  PhoneCall,
  ArrowRight,
  Globe,
  Award,
  Users,
  CheckCircle2,
  FileText,
  TrendingUp,
  Briefcase,
  ChevronRight,
  Zap,
} from "lucide-react";

export function NusacorpPreview({ sample }: { sample: SampleWebsite }) {
  const [rfpForm, setRfpForm] = useState({
    companyName: "",
    email: "",
    serviceNeeded: "Renewable Energy & Power",
    message: "",
  });

  const handleRfpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo NusaCorp Global, saya ingin Konsultasi Proyek B2B:\n- Perusahaan: ${rfpForm.companyName || "-"}\n- Email: ${rfpForm.email || "-"}\n- Divisi Layanan: ${rfpForm.serviceNeeded}\n- Pesan: ${rfpForm.message || "-"}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Ticker Bar */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
        <ShieldCheck className="h-4 w-4 text-blue-400" />
        <span>Laporan Keberlanjutan ESG &amp; Akreditasi ISO 9001:2025 Resmi Terverifikasi Global</span>
      </div>

      {/* 2. Enterprise Header */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">
            <Building2 className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xl font-bold text-white block leading-none">NusaCorp <span className="text-blue-500">Global</span></span>
            <span className="text-[10px] text-slate-400 font-medium">Holding Perusahaan Infrastruktur &amp; Teknologi</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-300">
          <a href="#about" className="hover:text-blue-400 transition">Tentang Kami</a>
          <a href="#divisions" className="hover:text-blue-400 transition">Divisi Bisnis</a>
          <a href="#impact" className="hover:text-blue-400 transition">Keberlanjutan ESG</a>
          <a href="#rfp" className="hover:text-blue-400 transition">Hubungi Sales B2B</a>
        </div>

        <a
          href={getWhatsappOrderLink(sample.title)}
          target="_blank"
          className="rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-blue-500 transition shadow-lg shadow-blue-600/20 flex items-center gap-2"
        >
          <PhoneCall className="h-4 w-4" />
          <span>Hubungi Tim Corporate</span>
        </a>
      </header>

      {/* 3. Hero Section */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto space-y-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20">
          Holding Industri &amp; Infrastruktur Terintegrasi
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
          Mitra Strategis Transformasi <span className="text-blue-500">Industri &amp; Energi</span> Berkelanjutan
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
          NusaCorp Global melayani 150+ perusahaan multinasional dalam pengembangan proyek energi ramah lingkungan, manajemen rantai pasok, &amp; konsultasi teknologi enterprise.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <a
            href="#rfp"
            className="rounded-xl bg-blue-600 px-8 py-3.5 text-xs font-bold text-white hover:bg-blue-500 shadow-xl flex items-center gap-2 transition"
          >
            <span>Ajukan Proposal Proyek B2B</span>
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#divisions"
            className="rounded-xl border border-slate-700 bg-slate-900 px-7 py-3.5 text-xs font-bold text-slate-300 hover:bg-slate-800 transition"
          >
            Pelajari 4 Divisi Layanan
          </a>
        </div>

        {/* Corporate Stats Counter */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-slate-800">
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
            <p className="text-3xl font-black text-blue-400">150+</p>
            <p className="text-xs text-slate-400 mt-1 font-medium">Proyek Enterprise Terwujud</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
            <p className="text-3xl font-black text-blue-400">12 Tahun</p>
            <p className="text-xs text-slate-400 mt-1 font-medium">Pengalaman Industri</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
            <p className="text-3xl font-black text-blue-400">99.8%</p>
            <p className="text-xs text-slate-400 mt-1 font-medium">Retensi Klien Korporat</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
            <p className="text-3xl font-black text-blue-400">ISO 9001</p>
            <p className="text-xs text-slate-400 mt-1 font-medium">Sertifikasi Internasional</p>
          </div>
        </div>
      </section>

      {/* 4. Business Divisions Section */}
      <section id="divisions" className="py-20 bg-slate-900/60 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Layanan Unggulan</span>
            <h2 className="text-3xl font-black text-white">4 Divisi Bisnis Utama NusaCorp</h2>
            <p className="text-slate-400 text-xs sm:text-sm">Layanan terintegrasi berstandar internasional untuk efisiensi bisnis Anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Zap,
                title: "Renewable Energy & Power",
                desc: "Konstruksi pembangkit listrik tenaga surya & hidro untuk kawasan industri dengan efisiensi konsumsi daya hingga 40%.",
                specs: ["Pembangkit Listrik Tenaga Surya", "Audit Energi Industri", "Sertifikat Carbon Credit"]
              },
              {
                icon: Globe,
                title: "Supply Chain & Smart Logistics",
                desc: "Manajemen rantai pasok global berbasis pergudangan pintar & armada armada hijau dengan tracking real-time 24/7.",
                specs: ["Automated Warehousing", "Green Fleet Fleet Logistics", "Customs & Freight Forwarding"]
              },
              {
                icon: TrendingUp,
                title: "Enterprise Technology Solutions",
                desc: "Implementasi ERP Cloud, AI Predictive Analytics, & Cyber Security Infrastruktur untuk perlindungan data korporat.",
                specs: ["Cloud ERP Migration", "AI Data Analytics", "Cyber Security Audit"]
              },
              {
                icon: Building2,
                title: "Infrastructure & EPC Engineering",
                desc: "Pembangunan gedung komersial, pabrik manufaktur, & jaringan pipa gas nasional berstandar keselamatan tinggi.",
                specs: ["Desain & Konstruksi Pabrik", "Jaringan Pipa Industrial", "Manajemen Proyek EPC"]
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 hover:border-blue-500/40 transition">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{item.title}</h3>
                    <span className="text-xs text-blue-400 font-semibold">Divisi 0{idx + 1}</span>
                  </div>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  {item.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. RFP Form Section */}
      <section id="rfp" className="py-20 px-6 max-w-4xl mx-auto">
        <div className="rounded-3xl border border-blue-500/30 bg-slate-900 p-8 sm:p-12 space-y-6 shadow-2xl">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">B2B Consultation &amp; RFP</span>
            <h2 className="text-3xl font-black text-white">Form Konsultasi Proyek B2B</h2>
            <p className="text-slate-400 text-xs">Tim konsultan kami akan menghubungi Anda dalam kurun waktu 1x24 jam</p>
          </div>

          <form onSubmit={handleRfpSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Nama Perusahaan / Institusi</label>
              <input
                type="text"
                required
                placeholder="PT. Example Industry Indonesia"
                value={rfpForm.companyName}
                onChange={(e) => setRfpForm({ ...rfpForm, companyName: e.target.value })}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Bisnis / Corporate</label>
              <input
                type="email"
                required
                placeholder="procurement@company.com"
                value={rfpForm.email}
                onChange={(e) => setRfpForm({ ...rfpForm, email: e.target.value })}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Divisi Layanan Yang Dibutuhkan</label>
              <select
                value={rfpForm.serviceNeeded}
                onChange={(e) => setRfpForm({ ...rfpForm, serviceNeeded: e.target.value })}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"
              >
                <option value="Renewable Energy & Power">Renewable Energy &amp; Power (Pembangkit Solar/Hidro)</option>
                <option value="Supply Chain & Smart Logistics">Supply Chain &amp; Smart Logistics (Manajemen Rantai Pasok)</option>
                <option value="Enterprise Technology Solutions">Enterprise Technology Solutions (ERP Cloud &amp; AI Data)</option>
                <option value="Infrastructure & EPC Engineering">Infrastructure &amp; EPC Engineering (Konstruksi Pabrik &amp; Pipa)</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Pesan / Ringkasan Kebutuhan Proyek</label>
              <textarea
                rows={3}
                placeholder="Tuliskan gambaran singkat kebutuhan proyek Anda..."
                value={rfpForm.message}
                onChange={(e) => setRfpForm({ ...rfpForm, message: e.target.value })}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:border-blue-500 focus:outline-none resize-none"
              />
            </div>

            <div className="sm:col-span-2 pt-2">
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3.5 text-xs font-bold text-white hover:bg-blue-500 transition shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Kirim Permohonan Konsultasi via WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="py-12 border-t border-slate-800 bg-slate-950 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
              <Building2 className="h-4 w-4" />
            </div>
            <span className="font-bold text-white text-sm">NusaCorp Global Corporate Profile</span>
          </div>
          <p>© 2026 NusaCorp Global · Sampel Company Profile Interaktif</p>
        </div>
      </footer>
    </div>
  );
}
