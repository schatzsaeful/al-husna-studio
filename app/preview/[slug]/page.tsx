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
              <span>Restoran Kuliner Fusion & Rempah Nusantara #1</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">Cita Rasa Rempah Autentik Dengan Sentuhan Modern</h1>
            <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto">Disajikan hangat dari bahan organik pilihan oleh Chef berpengalaman.</p>
            <div className="pt-2 flex justify-center gap-4">
              <a href={getWhatsappOrderLink(sample.title)} target="_blank" className="rounded-xl bg-amber-500 px-7 py-3.5 text-xs font-extrabold text-stone-950 hover:bg-amber-400 flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span>Pesan Meja / Delivery WA</span>
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-center text-amber-400 mb-10">Menu Rekomendasi Chef</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: "Wagyu Steak Rempah", price: "Rp 145.000", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop" },
              { name: "Salmon Panggang Teriyaki", price: "Rp 115.000", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&auto=format&fit=crop" },
              { name: "Ayam Bakar Madu Pedas", price: "Rp 65.000", img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&auto=format&fit=crop" },
            ].map((m, i) => (
              <div key={i} className="rounded-2xl border border-amber-900/40 bg-stone-900 overflow-hidden">
                <img src={m.img} alt={m.name} className="h-48 w-full object-cover" />
                <div className="p-5 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-white text-sm">{m.name}</h3>
                    <p className="text-amber-400 font-extrabold text-xs mt-1">{m.price}</p>
                  </div>
                  <a href={getWhatsappOrderLink(sample.title, m.name)} target="_blank" className="p-2.5 rounded-xl bg-amber-500 text-stone-950 font-bold">
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
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
          <span>Laporan Keberlanjutan ESG & Akreditasi ISO 9001:2025 Resmi Dirilis</span>
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
            Holding Industri & Energi Terintegrasi
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
            Mitra Strategis Transformasi Industri & Infrastruktur Digital
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto">
            NusaCorp Global melayani 150+ perusahaan multinasional dalam pengembangan proyek energi ramah lingkungan, manajemen rantai pasok, & konsultasi teknologi enterprise.
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
            Sekolah Akreditasi A Unggulan & Sekolah Penggerak
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
            Membentuk Generasi <span className="text-emerald-400">Qur'ani, Berprestasi,</span> & Berwawasan Global
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
        <footer className="py-12 text-center text-xs text-slate-500 border-t border-slate-800">&copy; EduSpark Academy Sample Portal Sekolah</footer>
      </div>
    );
  }

  // =========================================================================
  // 4. STYLESTORE (TOKO ONLINE E-COMMERCE)
  // =========================================================================
  if (slug === "stylestore-fashion") {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-rose-600 selection:text-white">
        <div className="bg-rose-600 text-white px-4 py-2 text-center text-xs font-extrabold flex items-center justify-center gap-2">
          <Truck className="h-4 w-4" />
          <span>GRATIS ONGKIR SELURUH INDONESIA UNTUK MIN. PEMBELIAN RP 250.000!</span>
        </div>

        <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-10 w-10 rounded-xl bg-rose-600 flex items-center justify-center text-white font-bold shadow-lg shadow-rose-600/20">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <span className="text-xl font-black text-white tracking-wider">StyleStore<span className="text-rose-500">.id</span></span>
          </div>

          <a href={getWhatsappOrderLink(sample.title)} target="_blank" className="rounded-xl bg-rose-600 px-5 py-2.5 text-xs font-extrabold text-white hover:bg-rose-500 flex items-center gap-2 shadow-lg">
            <MessageCircle className="h-4 w-4" />
            <span>Checkout Order WA</span>
          </a>
        </header>

        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-8 text-center">Katalog Produk Ready Stock</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { name: "Oversized Streetwear Hoodie", price: "Rp 249.000", old: "Rp 350.000", img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop" },
              { name: "Vintage Denim Jacket Edition", price: "Rp 329.000", old: "Rp 450.000", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop" },
              { name: "Casual Minimalist Sneakers", price: "Rp 289.000", old: "Rp 390.000", img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop" },
              { name: "Urban Techwear Cargo Pants", price: "Rp 219.000", old: "Rp 299.000", img: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=600&auto=format&fit=crop" },
            ].map((p, i) => (
              <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900 p-4 space-y-3">
                <img src={p.img} alt={p.name} className="w-full aspect-square object-cover rounded-xl" />
                <h3 className="text-xs font-bold text-white truncate">{p.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-rose-400 font-extrabold text-sm">{p.price}</span>
                  <span className="text-slate-500 text-[10px] line-through">{p.old}</span>
                </div>
                <a href={getWhatsappOrderLink(sample.title, p.name)} target="_blank" className="w-full py-2 text-center text-xs font-bold rounded-lg bg-rose-600 text-white block">
                  Beli via WA
                </a>
              </div>
            ))}
          </div>
        </section>
        <footer className="py-12 text-center text-xs text-slate-500 border-t border-slate-800">&copy; StyleStore.id Sample E-Commerce Store</footer>
      </div>
    );
  }

  // =========================================================================
  // 5. CLOUDFLOW (SOFTWARE SAAS & PRODUCT APP)
  // =========================================================================
  if (slug === "cloudflow-saas") {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-600 selection:text-white">
        <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20">
              <Zap className="h-6 w-6" />
            </div>
            <span className="text-xl font-extrabold text-white">CloudFlow<span className="text-cyan-400">.io</span></span>
          </div>
          <a href={getWhatsappOrderLink(sample.title)} target="_blank" className="rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-indigo-500 shadow-lg">
            Coba Gratis 14 Hari
          </a>
        </header>

        <section className="py-24 px-6 text-center max-w-5xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-bold text-indigo-300">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span>AI Workflow Engine v2.5 Resmi Dirilis</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
            Automasi Workflow Bisnis Tanpa Perlu Koding Kaku
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Hubungkan seluruh aplikasi kerja Anda, pangkas jam operasional manual hingga 60%, dan dapatkan analisis bisnis real-time.
          </p>

          <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/90 p-6 max-w-4xl mx-auto shadow-2xl space-y-4 text-left">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs text-slate-400">
              <div className="flex gap-2"><span className="h-3 w-3 rounded-full bg-rose-500" /><span className="h-3 w-3 rounded-full bg-amber-500" /><span className="h-3 w-3 rounded-full bg-emerald-500" /></div>
              <span className="font-mono">https://app.cloudflow.io/dashboard</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800"><p className="text-xs text-slate-400">Total Tasks Automated</p><p className="text-2xl font-black text-cyan-400 mt-1">128,450</p></div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800"><p className="text-xs text-slate-400">Time Saved</p><p className="text-2xl font-black text-indigo-400 mt-1">1,420 Hours</p></div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800"><p className="text-xs text-slate-400">Active Integrations</p><p className="text-2xl font-black text-emerald-400 mt-1">32 Apps</p></div>
            </div>
          </div>

          <div className="pt-8 flex justify-center gap-4">
            <a href={getWhatsappOrderLink(sample.title)} target="_blank" className="rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-8 py-3.5 text-xs font-bold text-white shadow-xl hover:scale-105 transition-transform">
              Mulai Free Trial 14 Hari
            </a>
          </div>
        </section>
        <footer className="py-12 text-center text-xs text-slate-500 border-t border-slate-800">&copy; CloudFlow.io Sample SaaS Product</footer>
      </div>
    );
  }

  // =========================================================================
  // 6. PIXELCRAFT (PORTFOLIO AGENSI KREATIF)
  // =========================================================================
  if (slug === "pixelcraft-portfolio") {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-400 selection:text-slate-950">
        <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-10 w-10 rounded-xl bg-cyan-400 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-cyan-400/20">
              <Palette className="h-6 w-6" />
            </div>
            <span className="text-xl font-black text-white tracking-widest uppercase">PixelCraft</span>
          </div>

          <a href={getWhatsappOrderLink(sample.title)} target="_blank" className="rounded-xl bg-cyan-400 px-5 py-2.5 text-xs font-extrabold text-slate-950 hover:bg-cyan-300 shadow-lg">
            Hire Creative Team
          </a>
        </header>

        <section className="py-24 px-6 text-center max-w-5xl mx-auto space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20">
            🏆 Winner of Awwwards Site of the Day 2025
          </span>
          <h1 className="text-4xl sm:text-7xl font-black text-white leading-none tracking-tight">
            WE CRAFT UNFORGETTABLE DIGITAL EXPERIENCES
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Indie creative design & engineering studio based in Jakarta, Bali, and Singapore.
          </p>
        </section>

        <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-800">
          <h2 className="text-3xl font-black text-white mb-10 text-center">Selected Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Fintech Dashboard Redesign", cat: "UI/UX & Web App", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop" },
              { title: "Luxury Brand Identity & E-Com", cat: "Branding & Web", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop" },
            ].map((w, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 aspect-[16/10]">
                <img src={w.img} alt={w.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                  <span className="text-xs font-bold text-cyan-400">{w.cat}</span>
                  <h3 className="text-2xl font-black text-white mt-1">{w.title}</h3>
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
          <span>UGD DARURAT & AMBULANCE 24 JAM: CALL (021) 555-9911</span>
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
            🏥 Klinik Utama & Laboratorium Medis Terakreditasi Paripurna
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
            Layanan Kesehatan Keluarga Terpercaya & Berstandar Medis
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Didukung oleh tim dokter spesialis berpengalaman, alat medis modern, laboratorium darah cepat, & layanan konsultasi online via WA.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <a href={getWhatsappOrderLink(sample.title)} target="_blank" className="rounded-xl bg-teal-500 px-8 py-3.5 text-xs font-extrabold text-slate-950 hover:bg-teal-400 shadow-xl flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span>Daftar Konsultasi Berobat WA</span>
            </a>
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
          <span>PROMO TERBATAS BULAN INI: DP 0% + GRATIS BIAYA KPR & CANOPY UNTUK 10 PEMBELI PERTAMA!</span>
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
            🏡 Hunian Mewah Smart Home & Green Living
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
              <span>Survey Lokasi & KPR WA</span>
            </a>
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
            🔥 Pusat Fitness & Personal Training Terlengkap #1
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
            Bentuk Tubuh Ideal & Tingkatkan Energi Maksimal Setiap Hari
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Peralatan gym impor berstandar olimpiade, instruktur pribadi bersertifikat, & kelas HIIT, Yoga, serta Boxing harian.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <a href={getWhatsappOrderLink(sample.title)} target="_blank" className="rounded-xl bg-orange-500 px-8 py-3.5 text-xs font-extrabold text-slate-950 hover:bg-orange-400 shadow-xl flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span>Daftar Member Gym via WA</span>
            </a>
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
          <span>PROMO BEAUTY MONTH: DISKON 30% ALL FACIAL & HAIR STYLING TREATMENT!</span>
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
            ✨ Studio Perawatan Kecantikan Kulit & Hair Styling Terfavorit
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
            Tampil Mempesona & Percaya Diri Dengan Perawatan <span className="text-rose-400">Kelas Dunia</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Manjakan diri Anda dengan perawatan Glowing Facial, Korean Hair Coloring, Lash Extension, & Spa Relaksasi dari beautician profesional.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <a href={getWhatsappOrderLink(sample.title)} target="_blank" className="rounded-xl bg-rose-400 px-8 py-3.5 text-xs font-extrabold text-slate-950 hover:bg-rose-300 shadow-xl flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span>Booking Slot Perawatan WA</span>
            </a>
          </div>
        </section>
        <footer className="py-12 text-center text-xs text-slate-500 border-t border-slate-800">&copy; GlamourBeauty Sample Salon & Spa</footer>
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
