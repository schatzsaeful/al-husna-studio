"use client";

import React, { useState } from "react";
import { SampleWebsite } from "@/data/samples-data";
import { getWhatsappOrderLink } from "@/lib/utils";
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  Award,
  Users,
  CheckCircle2,
  Calendar,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  Download,
  School,
  FileText,
} from "lucide-react";

export function EdusparkPreview({ sample }: { sample: SampleWebsite }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [ppdbForm, setPpdbForm] = useState({
    studentName: "",
    level: "SD (Sekolah Dasar)",
    parentPhone: "",
  });

  const handlePpdbSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo EduSpark Academy, saya ingin pendaftaran PPDB Online:\n- Nama Calon Siswa: ${ppdbForm.studentName}\n- Jenjang Dituju: ${ppdbForm.level}\n- No. Kontak Orang Tua: ${ppdbForm.parentPhone}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const faqs = [
    { q: "Kapan gelombang pendaftaran PPDB T.A 2026/2027 dibuka?", a: "Gelombang 1 dibuka dari Januari hingga Maret 2026 dengan promo potongan uang pangkal 20%." },
    { q: "Apakah EduSpark Academy menyediakan fasilitas antar-jemput?", a: "Ya, kami memiliki armada shuttle ber-AC khusus peserta didik dengan pengawasan pendamping profesional." },
    { q: "Bagaimana integrasi Kurikulum Merdeka dan Cambridge?", a: "Pelajaran umum menggunakan Kurikulum Merdeka, sementara Matematika, Sains, dan Bahasa Inggris menggunakan modul standar Cambridge International." },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* 1. PPDB Announcement Bar */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-500 text-slate-950 px-4 py-2 text-center text-xs font-black flex items-center justify-center gap-2">
        <Sparkles className="h-4 w-4" />
        <span>PENERIMAAN PESERTA DIDIK BARU (PPDB) T.A 2026/2027: DISKON 20% UANG PANGKAL GELOMBANG 1!</span>
      </div>

      {/* 2. School Header */}
      <header className="border-b border-emerald-900/30 bg-slate-900/90 backdrop-blur-md sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-emerald-500/20">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xl font-black text-white block leading-none">EduSpark <span className="text-emerald-400">Academy</span></span>
            <span className="text-[10px] text-slate-400 font-medium">Sekolah Akreditasi A Unggulan &amp; Character Building</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-300">
          <a href="#program" className="hover:text-emerald-400 transition">Program Akademik</a>
          <a href="#facility" className="hover:text-emerald-400 transition">Fasilitas Kampus</a>
          <a href="#flow" className="hover:text-emerald-400 transition">Alur PPDB</a>
          <a href="#faq" className="hover:text-emerald-400 transition">FAQ</a>
        </div>

        <a
          href={getWhatsappOrderLink(sample.title)}
          target="_blank"
          className="rounded-xl bg-emerald-500 px-5 py-2.5 text-xs font-extrabold text-slate-950 hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/20 flex items-center gap-2"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Daftar PPDB Online</span>
        </a>
      </header>

      {/* 3. Hero Section */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto space-y-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
          🎓 Sekolah Akreditasi A &amp; Sekolah Penggerak Nasional
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
          Membentuk Generasi <span className="text-emerald-400">Qur'ani, Berprestasi,</span> &amp; Berwawasan Global
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          EduSpark Academy memadukan Kurikulum Merdeka, Standar Cambridge International, dan Pembiasaan Karakter Islami untuk mengoptimalkan potensi buah hati Anda.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <a
            href="#ppdb-form"
            className="rounded-xl bg-emerald-500 px-8 py-3.5 text-xs font-extrabold text-slate-950 hover:bg-emerald-400 shadow-xl flex items-center gap-2 transition"
          >
            <GraduationCap className="h-4 w-4" />
            <span>Formulir Pendaftaran PPDB</span>
          </a>
          <a
            href={getWhatsappOrderLink(sample.title, "Brosur PPDB PDF")}
            target="_blank"
            className="rounded-xl border border-slate-700 bg-slate-900 px-7 py-3.5 text-xs font-bold text-slate-300 hover:bg-slate-800 transition flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            <span>Download Brosur Sekolah</span>
          </a>
        </div>
      </section>

      {/* 4. Academic Programs Section */}
      <section id="program" className="py-20 bg-slate-900/60 px-6 border-t border-emerald-900/30">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Kurikulum Berkelas</span>
            <h2 className="text-3xl font-black text-white">3 Program Unggulan Akademik</h2>
            <p className="text-slate-400 text-xs sm:text-sm">Dirancang untuk melatih minat, bakat, serta kepemimpinan generasi muda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "STEM & Digital Robotics",
                desc: "Pembelajaran sains modern, algoritma pemrograman komputer dasar, & praktek robotika hingga tingkat kompetisi olimpiade.",
                icon: BookOpen,
              },
              {
                title: "Tahfidz & Language Class",
                desc: "Target hafalan Al-Qur'an 5-10 Juz dilengkapi pembiasaan komunikasi Billingual bahasa Inggris & Arab sehari-hari.",
                icon: Award,
              },
              {
                title: "Leadership & Entrepreneur", desc: "Melatih rasa percaya diri, public speaking, simulasi bisnis kewirausahaan muda, & outbond kepemimpinan.",
                icon: Users,
              },
            ].map((p, i) => (
              <div key={i} className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-emerald-900/40 space-y-4 hover:border-emerald-500/50 transition">
                <div className="h-12 w-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-white text-lg">{p.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PPDB Quick Form */}
      <section id="ppdb-form" className="py-20 px-6 max-w-3xl mx-auto">
        <div className="rounded-3xl border border-emerald-500/30 bg-slate-900 p-8 sm:p-12 space-y-6 shadow-2xl">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Pendaftaran Cepat</span>
            <h2 className="text-3xl font-black text-white">Formulir PPDB Online</h2>
            <p className="text-slate-400 text-xs">Isi data calon siswa untuk mendapatkan jadwal tes seleksi dan info lengkap</p>
          </div>

          <form onSubmit={handlePpdbSubmit} className="space-y-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Nama Lengkap Calon Siswa</label>
              <input
                type="text"
                required
                placeholder="Masukkan nama calon siswa..."
                value={ppdbForm.studentName}
                onChange={(e) => setPpdbForm({ ...ppdbForm, studentName: e.target.value })}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:border-emerald-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Jenjang Pendidikan Dituju</label>
              <select
                value={ppdbForm.level}
                onChange={(e) => setPpdbForm({ ...ppdbForm, level: e.target.value })}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
              >
                <option value="TK / Early Childhood">TK (Early Childhood &amp; Playgroup)</option>
                <option value="SD (Sekolah Dasar)">SD (Sekolah Dasar Unggulan)</option>
                <option value="SMP (Sekolah Menengah Pertama)">SMP (Sekolah Menengah Pertama)</option>
                <option value="SMA (Sekolah Menengah Atas)">SMA (Sekolah Menengah Atas)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">No. WhatsApp Orang Tua / Wali</label>
              <input
                type="tel"
                required
                placeholder="081234567890"
                value={ppdbForm.parentPhone}
                onChange={(e) => setPpdbForm({ ...ppdbForm, parentPhone: e.target.value })}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-500 py-3.5 text-xs font-extrabold text-slate-950 hover:bg-emerald-400 transition shadow-xl flex items-center justify-center gap-2 cursor-pointer pt-3"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Kirim Pendaftaran PPDB via WhatsApp</span>
            </button>
          </form>
        </div>
      </section>

      {/* 6. FAQ Accordion */}
      <section id="faq" className="py-16 px-6 max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-center text-white">Pertanyaan Sering Diajukan (FAQ)</h2>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-6 py-4 text-left text-xs sm:text-sm font-bold text-white flex justify-between items-center"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`h-4 w-4 text-emerald-400 transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-4 text-xs text-slate-400 leading-relaxed border-t border-slate-800/80 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="py-12 border-t border-slate-800 bg-slate-950 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-bold">
              <GraduationCap className="h-4 w-4" />
            </div>
            <span className="font-bold text-white text-sm">EduSpark Academy Official Portal</span>
          </div>
          <p>© 2026 EduSpark Academy · Sampel Portal Sekolah Interaktif</p>
        </div>
      </footer>
    </div>
  );
}
