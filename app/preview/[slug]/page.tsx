"use client";

import React, { use, useState } from "react";
import { SAMPLE_WEBSITES } from "@/data/samples-data";
import { getWhatsappOrderLink } from "@/lib/utils";
import {
  Utensils,
  Building2,
  GraduationCap,
  ShoppingBag,
  Sparkles,
  Palette,
  CheckCircle2,
  MessageCircle,
  Star,
  ArrowRight,
  PhoneCall,
  MapPin,
  Clock,
  ChevronDown,
  ShieldCheck,
  Zap,
  Users,
  Award,
  Search,
  ShoppingCart,
  Heart,
  ExternalLink,
  Layers,
  Globe,
  TrendingUp,
  BookOpen,
  Laptop,
  Check,
  Mail,
  Calendar,
  FileText,
  HelpCircle,
  Phone,
  Truck,
  RefreshCw,
  Stethoscope,
  Activity,
  Home,
  Dumbbell,
  Scissors,
  DollarSign,
  Download,
  Flame,
  UserCheck,
  KeyRound,
  ShieldAlert,
  Cpu,
  Lock,
  Code,
  Terminal,
  Play,
  Share2,
  Sliders,
  Database,
  Workflow,
  CheckCircle,
} from "lucide-react";

export default function PreviewSamplePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const sample = SAMPLE_WEBSITES.find((s) => s.slug === slug);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  if (!sample) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white p-6">
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-bold">Sampel Website Tidak Ditemukan</h1>
          <p className="text-slate-400 text-sm">Halaman preview untuk slug "{slug}" belum tersedia.</p>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 1. RESTOBITES (KULINER & RESTORAN)
  // =========================================================================
  if (slug === "restobites-culinary") {
    return (
      <div className="min-h-screen bg-stone-950 text-amber-50 font-sans selection:bg-amber-500 selection:text-stone-950">
        <div className="bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 px-4 py-2 text-center text-xs font-extrabold flex items-center justify-center gap-2">
          <Sparkles className="h-4 w-4" />
          <span>PROMO SPESIAL WEEKEND: Diskon 20% + Gratis Dessert Untuk Reservasi Online via WA!</span>
        </div>

        <header className="border-b border-amber-900/30 bg-stone-900/90 backdrop-blur-md sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-10 w-10 rounded-xl bg-amber-500 flex items-center justify-center text-stone-950 font-black shadow-lg">
              <Utensils className="h-5 w-5" />
            </div>
            <span className="text-xl font-black tracking-wider text-amber-400 uppercase">RestoBites</span>
          </div>

          <a href={getWhatsappOrderLink(sample.title)} target="_blank" className="rounded-full bg-amber-500 px-5 py-2.5 text-xs font-extrabold text-stone-950 hover:bg-amber-400 shadow-lg flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            <span>Reservasi Meja WA</span>
          </a>
        </header>

        <section className="relative py-24 px-6 text-center overflow-hidden border-b border-amber-900/30">
          <div className="absolute inset-0 opacity-25 bg-cover bg-center" style={{ backgroundImage: `url(${sample.thumbnailUrl})` }} />
          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold text-amber-400">
              <Star className="h-4 w-4 fill-amber-400" />
              <span>Restoran Kuliner Fusion &amp; Rempah Nusantara #1</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">Cita Rasa Rempah Autentik Dengan Sentuhan Modern</h1>
            <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto">Disajikan hangat dari bahan organik pilihan oleh Chef berpengalaman 15 tahun.</p>
            <div className="pt-2 flex justify-center gap-4">
              <a href={getWhatsappOrderLink(sample.title)} target="_blank" className="rounded-xl bg-amber-500 px-7 py-3.5 text-xs font-extrabold text-stone-950 hover:bg-amber-400 flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span>Pesan Meja / Delivery WA</span>
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black text-amber-400">Menu Signature Chef</h2>
            <p className="text-stone-400 text-xs sm:text-sm">Hidangan favorit paling dicari pelanggan RestoBites</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: "Wagyu Steak Rempah Nusantara", price: "Rp 145.000", desc: "Daging Wagyu MB5 dengan olesan bumbu rempah pilihan & saus kecombrang", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop" },
              { name: "Salmon Panggang Teriyaki kecombrang", price: "Rp 115.000", desc: "Norwegian Salmon grilled sempurna disajikan dengan nasi hangat organik", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&auto=format&fit=crop" },
              { name: "Ayam Bakar Madu Pedas Manis", price: "Rp 65.000", desc: "Ayam kampung muda diungkep madu murni dan dibakar dengan arang batok", img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&auto=format&fit=crop" },
            ].map((m, i) => (
              <div key={i} className="rounded-2xl border border-amber-900/40 bg-stone-900 overflow-hidden flex flex-col justify-between">
                <img src={m.img} alt={m.name} className="h-48 w-full object-cover" />
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-bold text-white text-base">{m.name}</h3>
                    <p className="text-stone-400 text-xs mt-1 leading-relaxed">{m.desc}</p>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-amber-900/30">
                    <span className="text-amber-400 font-extrabold text-sm">{m.price}</span>
                    <a href={getWhatsappOrderLink(sample.title, m.name)} target="_blank" className="px-3.5 py-2 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs flex items-center gap-1.5">
                      <MessageCircle className="h-3.5 w-3.5" /> Pesan WA
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-stone-900/50 border-t border-amber-900/30 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-stone-900 border border-amber-900/30 space-y-2">
              <Clock className="h-8 w-8 text-amber-400 mx-auto" />
              <h4 className="font-bold text-white text-sm">Jam Operasional</h4>
              <p className="text-xs text-stone-400">Senin - Minggu: 10:00 - 22:00 WIB</p>
            </div>
            <div className="p-6 rounded-2xl bg-stone-900 border border-amber-900/30 space-y-2">
              <MapPin className="h-8 w-8 text-amber-400 mx-auto" />
              <h4 className="font-bold text-white text-sm">Lokasi Strategis</h4>
              <p className="text-xs text-stone-400">Jl. Senopati No. 88, Jakarta Selatan</p>
            </div>
            <div className="p-6 rounded-2xl bg-stone-900 border border-amber-900/30 space-y-2">
              <Utensils className="h-8 w-8 text-amber-400 mx-auto" />
              <h4 className="font-bold text-white text-sm">Fasilitas Lengkap</h4>
              <p className="text-xs text-stone-400">VIP Room, Outdoor Garden, Private Event</p>
            </div>
          </div>
        </section>

        <footer className="py-8 text-center text-xs text-stone-500 border-t border-amber-900/30">&copy; RestoBites Sample Culinary Landing Page</footer>
      </div>
    );
  }

  // =========================================================================
  // 2. NUSACORP (COMPANY PROFILE KORPORASI)
  // =========================================================================
  if (slug === "nusacorp-profile") {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
        <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <ShieldCheck className="h-4 w-4 text-blue-400" />
          <span>Laporan Keberlanjutan ESG &amp; Akreditasi ISO 9001:2025 Resmi Dirilis</span>
        </div>

        <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">
              <Building2 className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold text-white">NusaCorp <span className="text-blue-500">Global</span></span>
          </div>
          <a href={getWhatsappOrderLink(sample.title)} target="_blank" className="rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-blue-500 flex items-center gap-2">
            <PhoneCall className="h-4 w-4" />
            <span>Hubungi Sales Korporasi</span>
          </a>
        </header>

        <section className="py-24 px-6 text-center max-w-5xl mx-auto space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20">
            Holding Industri &amp; Energi Terintegrasi
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
            Mitra Strategis Transformasi Industri &amp; Infrastruktur Digital
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto">
            NusaCorp Global melayani 150+ perusahaan multinasional dalam pengembangan proyek energi ramah lingkungan, manajemen rantai pasok, &amp; konsultasi teknologi enterprise.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <a href={getWhatsappOrderLink(sample.title)} target="_blank" className="rounded-xl bg-blue-600 px-7 py-3.5 text-xs font-bold text-white hover:bg-blue-500 shadow-xl flex items-center gap-2">
              <span>Konsultasi Proyek B2B</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-slate-800">
            <div><p className="text-3xl font-extrabold text-blue-400">150+</p><p className="text-xs text-slate-400 mt-1">Proyek Enterprise</p></div>
            <div><p className="text-3xl font-extrabold text-blue-400">12 Tahun</p><p className="text-xs text-slate-400 mt-1">Pengalaman Industri</p></div>
            <div><p className="text-3xl font-extrabold text-blue-400">99.8%</p><p className="text-xs text-slate-400 mt-1">Retensi Klien</p></div>
            <div><p className="text-3xl font-extrabold text-blue-400">24/7</p><p className="text-xs text-slate-400 mt-1">Operations Control</p></div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/60 px-6 border-t border-slate-800">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-white">4 Divisi Bisnis Utama NusaCorp</h2>
              <p className="text-slate-400 text-xs sm:text-sm">Layanan terintegrasi berstandar internasional</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Renewable Energy & Power", desc: "Konstruksi pembangkit listrik tenaga surya & hidro untuk kawasan industri." },
                { title: "Supply Chain & Logistics", desc: "Manajemen rantai pasok global berbasis pergudangan pintar & armada armada hijau." },
                { title: "Enterprise Technology Sol.", desc: "Implementasi ERP Cloud, AI Predictive Analytics, & Cyber Security Infrastruktur." },
                { title: "Infrastructure & EPC", desc: "Pembangunan gedung komersial, pabrik manufaktur, & jaringan pipa gas nasional." }
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold">0{idx + 1}</div>
                  <h3 className="font-bold text-white text-lg">{item.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-12 text-center text-xs text-slate-500 border-t border-slate-800">&copy; NusaCorp Global Sample Corporate Profile</footer>
      </div>
    );
  }

  // =========================================================================
  // 3. EDUSPARK (PORTAL SEKOLAH & AKADEMI)
  // =========================================================================
  if (slug === "eduspark-academic") {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
        <div className="bg-emerald-600 text-slate-950 px-4 py-2 text-center text-xs font-bold flex items-center justify-center gap-2">
          <Sparkles className="h-4 w-4" />
          <span>Penerimaan Peserta Didik Baru (PPDB) T.A 2026/2027 Telah Resmi Dibuka!</span>
        </div>
        <header className="border-b border-emerald-900/30 bg-slate-900/90 backdrop-blur-md sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 font-black">
              <GraduationCap className="h-6 w-6" />
            </div>
            <span className="text-xl font-black text-white">EduSpark <span className="text-emerald-400">Academy</span></span>
          </div>
          <a href={getWhatsappOrderLink(sample.title)} target="_blank" className="rounded-xl bg-emerald-500 px-5 py-2 text-xs font-extrabold text-slate-950 hover:bg-emerald-400">
            Daftar PPDB Online
          </a>
        </header>

        <section className="py-24 px-6 text-center max-w-4xl mx-auto space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
            Sekolah Akreditasi A Unggulan &amp; Sekolah Penggerak
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
            Membentuk Generasi <span className="text-emerald-400">Qur'ani, Berprestasi,</span> &amp; Berwawasan Global
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            EduSpark Academy memadukan Kurikulum Merdeka, Standar Cambridge International, dan Pembiasaan Karakter Islami.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <a href={getWhatsappOrderLink(sample.title)} target="_blank" className="rounded-xl bg-emerald-500 px-7 py-3.5 text-xs font-bold text-slate-950 hover:bg-emerald-400 flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span>Daftar PPDB via WhatsApp</span>
            </a>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50 border-t border-emerald-900/30 px-6">
          <div className="max-w-6xl mx-auto space-y-10">
            <h2 className="text-2xl font-bold text-center text-emerald-400">3 Program Unggulan EduSpark</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "STEM & Digital Robotics", desc: "Pembelajaran sains, pemrograman, & robotika tingkat dasar hingga olimpiade." },
                { title: "Tahfidz & Language Class", desc: "Program hafalan Al-Qur'an 5-10 Juz dilengkapi kelas Billingual Inggris-Arab." },
                { title: "Leadership & Entrepreneur", desc: "Melatih kemandirian, public speaking, & simulasi kepemimpinan sejak dini." }
              ].map((p, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-900 border border-emerald-900/40 space-y-2">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">0{i+1}</div>
                  <h3 className="font-bold text-white text-base">{p.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-12 text-center text-xs text-slate-500 border-t border-slate-800">&copy; EduSpark Academy Sample Portal Sekolah</footer>
      </div>
    );
  }

  // =========================================================================
  // 4. STYLESTORE (E-COMMERCE FASHION)
  // =========================================================================
  if (slug === "stylestore-fashion") {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-rose-500 selection:text-white">
        <div className="bg-gradient-to-r from-rose-600 to-amber-500 text-white px-4 py-2 text-center text-xs font-bold">
          🔥 FLASH SALE ITEM DISKON HINGGA 50% + GRATIS ONGKIR SE-INDONESIA!
        </div>

        <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-rose-600 flex items-center justify-center text-white font-bold shadow-lg shadow-rose-600/20">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <span className="text-xl font-black tracking-wider text-white">StyleStore <span className="text-rose-500">Apparel</span></span>
          </div>

          <a href={getWhatsappOrderLink(sample.title)} target="_blank" className="rounded-xl bg-rose-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-rose-500 shadow-lg flex items-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            <span>Order via WhatsApp</span>
          </a>
        </header>

        <section className="py-20 px-6 text-center max-w-5xl mx-auto space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-400 text-xs font-bold border border-rose-500/20">
            Koleksi Fashion Casual &amp; Streetwear Terpopuler 2026
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
            Tampil Makin Trendi Dengan Bahan Cotton Organic Premium
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Nyaman dipakai seharian, anti gerah, dan jahitan standar distro eksklusif.
          </p>
        </section>

        <section className="py-12 px-6 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Koleksi Terlaris Minggu Ini</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: "Oversized Heavy Cotton Tee", price: "Rp 129.000", normalPrice: "Rp 199.000", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop" },
              { name: "Denim Trucker Jacket Vintage", price: "Rp 289.000", normalPrice: "Rp 450.000", img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop" },
              { name: "Chino Pants Slimfit Comfort", price: "Rp 179.000", normalPrice: "Rp 260.000", img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&auto=format&fit=crop" },
            ].map((p, i) => (
              <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden flex flex-col justify-between">
                <img src={p.img} alt={p.name} className="h-64 w-full object-cover" />
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-bold text-white text-base">{p.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-rose-500 font-extrabold text-base">{p.price}</span>
                      <span className="text-slate-500 text-xs line-through">{p.normalPrice}</span>
                    </div>
                  </div>
                  <a href={getWhatsappOrderLink(sample.title, p.name)} target="_blank" className="w-full text-center py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center justify-center gap-2">
                    <MessageCircle className="h-4 w-4" /> Beli Sekarang WA
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="py-12 text-center text-xs text-slate-500 border-t border-slate-800">&copy; StyleStore Apparel Sample E-Commerce</footer>
      </div>
    );
  }

  // =========================================================================
  // 5. CLOUDFLOW (SAAS & PRODUCT DIGITAL)
  // =========================================================================
  if (slug === "cloudflow-saas") {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
        <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold shadow-lg">
              <Zap className="h-6 w-6" />
            </div>
            <span className="text-xl font-extrabold tracking-wider text-white">CloudFlow <span className="text-indigo-400">AI</span></span>
          </div>

          <a href={getWhatsappOrderLink(sample.title)} target="_blank" className="rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-indigo-500 flex items-center gap-2 shadow-lg shadow-indigo-600/20">
            <span>Coba Gratis 14 Hari</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </header>

        <section className="py-24 px-6 text-center max-w-5xl mx-auto space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold border border-indigo-500/20">
            🚀 Platform Otomasi Workflow AI No-Code #1
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
            Otomatisasi Pekerjaan Tim 10x Lebih Cepat Dengan Asisten AI
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Hubungkan WhatsApp, Google Sheets, CRM, &amp; Database Anda dalam hitungan menit tanpa koding.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <a href={getWhatsappOrderLink(sample.title)} target="_blank" className="rounded-xl bg-indigo-600 px-8 py-3.5 text-xs font-bold text-white hover:bg-indigo-500 shadow-xl flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span>Konsultasi Demo SaaS WA</span>
            </a>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50 border-t border-slate-800 px-6">
          <div className="max-w-6xl mx-auto space-y-10">
            <h2 className="text-2xl font-bold text-center text-indigo-400">3 Paket Langganan CloudFlow</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Starter Tier", price: "Rp 199.000 / bln", desc: "Cocok untuk UMKM &amp; Tim Kecil (Maks 3 User)" },
                { name: "Pro Automation", price: "Rp 499.000 / bln", desc: "Untuk Bisnis berkembang dengan Integrasi WA &amp; API" },
                { name: "Enterprise Custom", price: "Custom Plan", desc: "SLA Dedicated Server, Unlimited User, &amp; Support 24/7" },
              ].map((tier, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-900 border border-indigo-500/30 space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-bold text-white text-lg">{tier.name}</h3>
                    <p className="text-indigo-400 font-extrabold text-xl">{tier.price}</p>
                    <p className="text-slate-400 text-xs">{tier.desc}</p>
                  </div>
                  <a href={getWhatsappOrderLink(sample.title, tier.name)} target="_blank" className="w-full text-center py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold block">
                    Pilih Paket Ini
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-12 text-center text-xs text-slate-500 border-t border-slate-800">&copy; CloudFlow AI Sample SaaS Product Landing Page</footer>
      </div>
    );
  }

  // =========================================================================
  // 6. PIXELCRAFT (PORTOFOLIO & AGENSI KREATIF)
  // =========================================================================
  if (slug === "pixelcraft-portfolio") {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
        <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-cyan-500 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-cyan-500/20">
              <Palette className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">PixelCraft <span className="text-cyan-400">Studio</span></span>
          </div>

          <a href={getWhatsappOrderLink(sample.title)} target="_blank" className="rounded-xl bg-cyan-500 px-5 py-2.5 text-xs font-extrabold text-slate-950 hover:bg-cyan-400 flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            <span>Diskusi Proyek WA</span>
          </a>
        </header>

        <section className="py-24 px-6 text-center max-w-5xl mx-auto space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20">
            🏆 Digital Design Agency &amp; Motion Studio
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
            Kami Merancang Identitas Visual &amp; Desain Produk Berkelas
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Membantu brand ternama menciptakan pengalaman pengguna yang memukau dan berdaya saing tinggi.
          </p>
        </section>

        <section className="py-12 px-6 max-w-7xl mx-auto space-y-8">
          <h2 className="text-2xl font-bold text-white">Studi Kasus Proyek Pilihan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Fintech Dashboard Redesign", cat: "UI/UX &amp; Web App", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop" },
              { title: "Luxury Brand Identity", cat: "Branding &amp; Motion", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop" },
            ].map((w, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
                <img src={w.img} alt={w.title} className="h-72 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-6 space-y-2">
                  <span className="text-xs font-bold text-cyan-400">{w.cat}</span>
                  <h3 className="text-xl font-bold text-white">{w.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="py-12 text-center text-xs text-slate-500 border-t border-slate-800">&copy; PixelCraft Sample Creative Agency</footer>
      </div>
    );
  }

  // =========================================================================
  // 7. MEDICARE (KLINIK & KESEHATAN MEDIS)
  // =========================================================================
  if (slug === "medicare-clinic") {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950">
        <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 text-slate-950 px-4 py-2 text-center text-xs font-black flex items-center justify-center gap-2">
          <Activity className="h-4 w-4" />
          <span>UGD DARURAT &amp; AMBULANCE 24 JAM: CALL (021) 555-9911</span>
        </div>

        <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-10 w-10 rounded-xl bg-teal-500 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-teal-500/20">
              <Stethoscope className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">MediCare <span className="text-teal-400">Clinic</span></span>
          </div>

          <a href={getWhatsappOrderLink(sample.title)} target="_blank" className="rounded-xl bg-teal-500 px-5 py-2.5 text-xs font-extrabold text-slate-950 hover:bg-teal-400 shadow-lg flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            <span>Booking Jadwal Dokter</span>
          </a>
        </header>

        <section className="py-24 px-6 text-center max-w-5xl mx-auto space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-xs font-bold border border-teal-500/20">
            🏥 Klinik Utama &amp; Laboratorium Medis Terakreditasi Paripurna
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
            Layanan Kesehatan Keluarga Terpercaya &amp; Berstandar Medis
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Didukung oleh tim dokter spesialis berpengalaman, alat medis modern, laboratorium darah cepat, &amp; layanan konsultasi online via WA.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <a href={getWhatsappOrderLink(sample.title)} target="_blank" className="rounded-xl bg-teal-500 px-8 py-3.5 text-xs font-extrabold text-slate-950 hover:bg-teal-400 shadow-xl flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span>Daftar Konsultasi Berobat WA</span>
            </a>
          </div>
        </section>

        <section className="py-16 bg-slate-900/60 border-t border-slate-800 px-6">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-teal-400">4 Layanan Medis Utama MediCare</h2>
              <p className="text-slate-400 text-xs sm:text-sm">Pemeriksaan medis cepat, akurat, dan transparan</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Poli Umum &amp; Anak", desc: "Pemeriksaan kesehatan rutin dan tumbuh kembang anak oleh dokter spesialis." },
                { title: "Laboratorium Medis", desc: "Cek darah lengkap, kolesterol, gula darah, &amp; swab hasil cepat 30 menit." },
                { title: "Poli Gigi &amp; Estetika", desc: "Scaling, penambalan, pembersihan karang gigi, &amp; perawatan estetika senyum." },
                { title: "Medical Check Up", desc: "Paket MCU karyawan &amp; pra-nikah dengan rincian hasil lengkap dokter." }
              ].map((s, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-teal-500/20 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="h-10 w-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">0{idx + 1}</div>
                    <h3 className="font-bold text-white text-base">{s.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
                  </div>
                  <a href={getWhatsappOrderLink(sample.title, s.title)} target="_blank" className="w-full text-center py-2 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/30 text-xs font-bold block hover:bg-teal-500 hover:text-slate-950 transition">
                    Tanyakan Info WA
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-12 text-center text-xs text-slate-500 border-t border-slate-800">&copy; MediCare Clinic Sample Healthcare Landing Page</footer>
      </div>
    );
  }

  // =========================================================================
  // 8. GRANDESTATE (PROPERTI & PERUMAHAN MEWAH)
  // =========================================================================
  if (slug === "grandestate-property") {
    return (
      <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950">
        <div className="bg-gradient-to-r from-amber-600 to-yellow-500 text-stone-950 px-4 py-2 text-center text-xs font-extrabold flex items-center justify-center gap-2">
          <Sparkles className="h-4 w-4" />
          <span>PROMO TERBATAS BULAN INI: DP 0% + GRATIS BIAYA KPR &amp; CANOPY UNTUK 10 PEMBELI PERTAMA!</span>
        </div>

        <header className="border-b border-amber-900/30 bg-stone-900/90 backdrop-blur-md sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center text-stone-950 font-black shadow-lg">
              <Home className="h-6 w-6" />
            </div>
            <span className="text-xl font-black text-white tracking-wider">GrandEstate <span className="text-amber-400">Residence</span></span>
          </div>

          <a href={getWhatsappOrderLink(sample.title)} target="_blank" className="rounded-xl bg-amber-500 px-5 py-2.5 text-xs font-extrabold text-stone-950 hover:bg-amber-400 flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span>Download Price List PDF</span>
          </a>
        </header>

        <section className="py-24 px-6 text-center max-w-5xl mx-auto space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/30">
            🏡 Hunian Mewah Smart Home &amp; Green Living
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
            Miliki Rumah Impian Berkonsep Resort Di Lokasi <span className="text-amber-400">Super Strategis</span>
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto">
            Hanya 5 Menit dari Akses Pintu Tol Utama. Angsuran KPR Ringan Mulai 3 Jutaan/Bulan.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <a href={getWhatsappOrderLink(sample.title)} target="_blank" className="rounded-xl bg-amber-500 px-8 py-3.5 text-xs font-extrabold text-stone-950 hover:bg-amber-400 shadow-xl flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span>Survey Lokasi &amp; KPR WA</span>
            </a>
          </div>
        </section>

        <section className="py-16 bg-stone-900/60 border-t border-amber-900/30 px-6">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-amber-400">Tipe Rumah Terfavorit GrandEstate</h2>
              <p className="text-stone-400 text-xs sm:text-sm">Spesifikasi bangunan mewah &amp; garansi struktur 10 tahun</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Tipe Emerald (36/72)", price: "Mulai Rp 450 Juta", specs: "2 K.Tidur · 1 K.Mandi · Carport 1 Mobil" },
                { name: "Tipe Diamond (54/90)", price: "Mulai Rp 680 Juta", specs: "3 K.Tidur · 2 K.Mandi · Carport 2 Mobil" },
                { name: "Tipe Royal Villa (72/120)", price: "Mulai Rp 980 Juta", specs: "4 K.Tidur · 3 K.Mandi · Private Pool Option" }
              ].map((t, i) => (
                <div key={i} className="p-6 rounded-2xl bg-stone-900 border border-amber-900/40 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-bold text-white text-lg">{t.name}</h3>
                    <p className="text-amber-400 font-extrabold text-base">{t.price}</p>
                    <p className="text-stone-400 text-xs leading-relaxed">{t.specs}</p>
                  </div>
                  <a href={getWhatsappOrderLink(sample.title, t.name)} target="_blank" className="w-full text-center py-2.5 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs block hover:bg-amber-400">
                    Brosur &amp; Price List WA
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-12 text-center text-xs text-stone-500 border-t border-amber-900/30">&copy; GrandEstate Sample Property Landing Page</footer>
      </div>
    );
  }

  // =========================================================================
  // 9. FITPULSE (FITNESS & GYM)
  // =========================================================================
  if (slug === "fitpulse-gym") {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-orange-500 selection:text-slate-950">
        <div className="bg-orange-600 text-slate-950 px-4 py-2 text-center text-xs font-extrabold flex items-center justify-center gap-2">
          <Flame className="h-4 w-4" />
          <span>FREE DAY PASS 1 HARI + GRATIS TES INBODY COMPOSITION UNTUK MEMBER BARU!</span>
        </div>

        <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-10 w-10 rounded-xl bg-orange-500 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-orange-500/20">
              <Dumbbell className="h-6 w-6" />
            </div>
            <span className="text-xl font-black text-white tracking-wider">FitPulse <span className="text-orange-500">Gym</span></span>
          </div>

          <a href={getWhatsappOrderLink(sample.title)} target="_blank" className="rounded-xl bg-orange-500 px-5 py-2.5 text-xs font-extrabold text-slate-950 hover:bg-orange-400 flex items-center gap-2 shadow-lg">
            <MessageCircle className="h-4 w-4" />
            <span>Claim Free Trial WA</span>
          </a>
        </header>

        <section className="py-24 px-6 text-center max-w-5xl mx-auto space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold border border-orange-500/20">
            🔥 Pusat Fitness &amp; Personal Training Terlengkap #1
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
            Bentuk Tubuh Ideal &amp; Tingkatkan Energi Maksimal Setiap Hari
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Peralatan gym impor berstandar olimpiade, instruktur pribadi bersertifikat, &amp; kelas HIIT, Yoga, serta Boxing harian.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <a href={getWhatsappOrderLink(sample.title)} target="_blank" className="rounded-xl bg-orange-500 px-8 py-3.5 text-xs font-extrabold text-slate-950 hover:bg-orange-400 shadow-xl flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span>Daftar Member Gym via WA</span>
            </a>
          </div>
        </section>

        <section className="py-16 bg-slate-900/60 border-t border-slate-800 px-6">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-orange-400">Paket Membership FitPulse</h2>
              <p className="text-slate-400 text-xs sm:text-sm">Akses unlimited gym 24/7 &amp; seluruh kelas harian</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Monthly Pass", price: "Rp 350.000 / bln", desc: "Akses Gym &amp; Locker Room + Free 1x PT Session" },
                { name: "Quarterly Pass (3 Bln)", price: "Rp 900.000 / 3 bln", desc: "Hemat 15% + Free InBody Test &amp; Gym Towel" },
                { name: "Annual Pass (12 Bln)", price: "Rp 2.900.000 / thn", desc: "Diskon Terbesar + Unlimited Class &amp; Guest Pass" }
              ].map((m, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-900 border border-orange-500/30 space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-bold text-white text-lg">{m.name}</h3>
                    <p className="text-orange-400 font-extrabold text-xl">{m.price}</p>
                    <p className="text-slate-400 text-xs leading-relaxed">{m.desc}</p>
                  </div>
                  <a href={getWhatsappOrderLink(sample.title, m.name)} target="_blank" className="w-full text-center py-2.5 rounded-xl bg-orange-500 text-slate-950 font-bold text-xs block hover:bg-orange-400">
                    Join Membership WA
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-12 text-center text-xs text-slate-500 border-t border-slate-800">&copy; FitPulse Gym Sample Fitness Landing Page</footer>
      </div>
    );
  }

  // =========================================================================
  // 10. GLAMOURBEAUTY (SALON KECANTIKAN & SPA)
  // =========================================================================
  if (slug === "glamour-salon") {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-rose-400 selection:text-slate-950">
        <div className="bg-rose-500 text-slate-950 px-4 py-2 text-center text-xs font-extrabold flex items-center justify-center gap-2">
          <Sparkles className="h-4 w-4" />
          <span>PROMO BEAUTY MONTH: DISKON 30% ALL FACIAL &amp; HAIR STYLING TREATMENT!</span>
        </div>

        <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-10 w-10 rounded-xl bg-rose-400 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-rose-400/20">
              <Scissors className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Glamour <span className="text-rose-400">Beauty Studio</span></span>
          </div>

          <a href={getWhatsappOrderLink(sample.title)} target="_blank" className="rounded-xl bg-rose-400 px-5 py-2.5 text-xs font-extrabold text-slate-950 hover:bg-rose-300 shadow-lg flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            <span>Booking Jam Treatment WA</span>
          </a>
        </header>

        <section className="py-24 px-6 text-center max-w-5xl mx-auto space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-rose-400/10 text-rose-300 text-xs font-bold border border-rose-400/20">
            ✨ Studio Perawatan Kecantikan Kulit &amp; Hair Styling Terfavorit
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
            Tampil Mempesona &amp; Percaya Diri Dengan Perawatan <span className="text-rose-400">Kelas Dunia</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Manjakan diri Anda dengan perawatan Glowing Facial, Korean Hair Coloring, Lash Extension, &amp; Spa Relaksasi dari beautician profesional.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <a href={getWhatsappOrderLink(sample.title)} target="_blank" className="rounded-xl bg-rose-400 px-8 py-3.5 text-xs font-extrabold text-slate-950 hover:bg-rose-300 shadow-xl flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span>Booking Slot Perawatan WA</span>
            </a>
          </div>
        </section>

        <section className="py-16 bg-slate-900/60 border-t border-slate-800 px-6">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-rose-400">Menu Treatment Favorit Glamour</h2>
              <p className="text-slate-400 text-xs sm:text-sm">Produk impor organik bersertifikat BPOM &amp; aman untuk kulit sensitif</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Glass Skin Facial", price: "Rp 250.000", desc: "Pembersihan komedo, pencerahan serum vitamin C, &amp; mask LED." },
                { title: "Korean Hair Balayage", price: "Rp 450.000", desc: "Pewarnaan rambut trendi tanpa merusak struktur rambut." },
                { title: "Eyelash Extension Volume", price: "Rp 180.000", desc: "Bulu mata halus ringan, lentik alami, &amp; bertahan hingga 6 minggu." },
                { title: "Aromatherapy Body Spa", price: "Rp 220.000", desc: "Pijat relaksasi 90 menit dengan minyak esensial bunga alami." }
              ].map((tr, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-rose-400/20 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-bold text-white text-base">{tr.title}</h3>
                    <p className="text-rose-400 font-extrabold text-sm">{tr.price}</p>
                    <p className="text-slate-400 text-xs leading-relaxed">{tr.desc}</p>
                  </div>
                  <a href={getWhatsappOrderLink(sample.title, tr.title)} target="_blank" className="w-full text-center py-2 rounded-xl bg-rose-400/10 text-rose-300 border border-rose-400/30 text-xs font-bold block hover:bg-rose-400 hover:text-slate-950 transition">
                    Booking Slot WA
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-12 text-center text-xs text-slate-500 border-t border-slate-800">&copy; GlamourBeauty Sample Salon &amp; Spa</footer>
      </div>
    );
  }

  // Fallback
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 flex flex-col justify-between">
      <div className="max-w-3xl mx-auto text-center space-y-4 my-auto">
        <span className="inline-block px-3 py-1 rounded-full bg-studio-accent/20 text-studio-cyan text-xs font-bold">
          Live Pratinjau Sampel
        </span>
        <h1 className="text-3xl font-extrabold text-white">{sample.title}</h1>
        <p className="text-slate-300 text-sm">{sample.description}</p>
        <div className="pt-4">
          <a
            href={getWhatsappOrderLink(sample.title)}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-xs font-bold text-white shadow-lg hover:bg-emerald-500"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Pesan Website Seperti Ini Sekarang</span>
          </a>
        </div>
      </div>
    </div>
  );
}
