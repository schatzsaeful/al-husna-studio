"use client";

import React, { useState } from "react";
import { SampleWebsite } from "@/data/samples-data";
import { getWhatsappOrderLink } from "@/lib/utils";
import {
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Workflow,
  MessageCircle,
  Database,
  Lock,
  Code,
  Terminal,
  Layers,
  Sparkles,
} from "lucide-react";

export function CloudflowPreview({ sample }: { sample: SampleWebsite }) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  const plans = [
    {
      name: "Starter Automation",
      monthlyPrice: "Rp 199.000",
      yearlyPrice: "Rp 159.000",
      desc: "Cocok untuk UMKM & tim kecil yang ingin mengotomatisasi kontak WA & Sheets.",
      features: ["Hingga 3 User Tim", "1.000 Workflow Triggers / bln", "Integrasi Google Sheets & WA", "Community Support"],
    },
    {
      name: "Pro Business AI",
      monthlyPrice: "Rp 499.000",
      yearlyPrice: "Rp 399.000",
      isPopular: true,
      desc: "Untuk bisnis berkembang yang butuh Asisten AI Copilot & API Webhook.",
      features: ["Hingga 15 User Tim", "50.000 Workflow Triggers / bln", "AI Auto-responder WhatsApp", "Webhooks & REST API Access", "Priority 24/7 Support"],
    },
    {
      name: "Enterprise Dedicated",
      monthlyPrice: "Rp 1.499.000",
      yearlyPrice: "Rp 1.199.000",
      desc: "Dedicated cloud server untuk keamanan enterprise & batas unlimited.",
      features: ["Unlimited User Tim", "Unlimited Workflow Executions", "Custom Private AI Model", "Dedicated Account Manager", "SLA Uptime 99.99% Guaranteed"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* 1. SaaS Top Bar */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
        <Sparkles className="h-4 w-4 text-indigo-400" />
        <span>RILIS BARU: CloudFlow AI Copilot 3.0 Dengan Integrasi Model Llama-3 &amp; Gemini Pro</span>
      </div>

      {/* 2. SaaS Header */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20">
            <Zap className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-wider text-white block leading-none">CloudFlow <span className="text-indigo-400">AI</span></span>
            <span className="text-[10px] text-slate-400 font-medium">No-Code AI Workflow Automation Platform</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-300">
          <a href="#features" className="hover:text-indigo-400 transition">Fitur Otomasi</a>
          <a href="#integrations" className="hover:text-indigo-400 transition">Integrasi Apps</a>
          <a href="#pricing" className="hover:text-indigo-400 transition">Harga Langganan</a>
          <a href="#api" className="hover:text-indigo-400 transition">Developer API</a>
        </div>

        <a
          href={getWhatsappOrderLink(sample.title)}
          target="_blank"
          className="rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/20 flex items-center gap-2"
        >
          <span>Coba Gratis 14 Hari</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </header>

      {/* 3. Hero Section */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto space-y-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold border border-indigo-500/20">
          🚀 Platform Otomasi Workflow AI No-Code #1
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
          Otomatisasi Pekerjaan Tim <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">10x Lebih Cepat</span> Dengan Asisten AI
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Hubungkan WhatsApp, Google Sheets, CRM, &amp; Database Anda dalam hitungan menit tanpa koding. Penghematan waktu operasional hingga 80 jam setiap bulan!
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <a
            href={getWhatsappOrderLink(sample.title, "Free Trial SaaS")}
            target="_blank"
            className="rounded-xl bg-indigo-600 px-8 py-3.5 text-xs font-bold text-white hover:bg-indigo-500 shadow-xl flex items-center gap-2 transition"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Klaim Trial Gratis via WA</span>
          </a>
          <a
            href="#pricing"
            className="rounded-xl border border-slate-700 bg-slate-900 px-7 py-3.5 text-xs font-bold text-slate-300 hover:bg-slate-800 transition"
          >
            Lihat Paket Pricing
          </a>
        </div>
      </section>

      {/* 4. Features Grid Section */}
      <section id="features" className="py-20 bg-slate-900/60 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Arsitektur Cerdas</span>
            <h2 className="text-3xl font-black text-white">3 Keunggulan Utama CloudFlow AI</h2>
            <p className="text-slate-400 text-xs sm:text-sm">Dipercaya oleh 500+ perusahaan teknologi &amp; digital agency</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Cpu,
                title: "AI Auto-Responder WA",
                desc: "Asisten virtual cerdas yang membalas pertanyaan pelanggan di WhatsApp secara otomatis berdasarkan data produk Anda.",
              },
              {
                icon: Workflow,
                title: "Visual Drag & Drop Flow",
                desc: "Rancang logika percabangan bisnis tanpa perlu koding sama sekali. Cukup hubungkan node trigger dan action.",
              },
              {
                icon: Lock,
                title: "Security & Encryption",
                desc: "Enkripsi data end-to-end berstandar SOC2 Type II dengan jaminan privasi data tanpa diperjualbelikan.",
              },
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 hover:border-indigo-500/50 transition">
                <div className="h-12 w-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-white text-lg">{f.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Pricing Table Section */}
      <section id="pricing" className="py-20 px-6 max-w-6xl mx-auto space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Fleksibel &amp; Transparan</span>
          <h2 className="text-3xl font-black text-white">Pilih Paket Langganan SaaS Anda</h2>

          {/* Billing Cycle Switch */}
          <div className="inline-flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold pt-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-lg transition ${billingCycle === "monthly" ? "bg-indigo-600 text-white" : "text-slate-400"}`}
            >
              Bulanan
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-2 rounded-lg transition flex items-center gap-1.5 ${billingCycle === "yearly" ? "bg-indigo-600 text-white" : "text-slate-400"}`}
            >
              <span>Tahunan</span>
              <span className="bg-emerald-500 text-slate-950 text-[10px] px-1.5 py-0.5 rounded font-black">Hemat 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl bg-slate-900 border space-y-6 flex flex-col justify-between relative ${
                p.isPopular ? "border-indigo-500 shadow-2xl shadow-indigo-500/10" : "border-slate-800"
              }`}
            >
              {p.isPopular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-md">
                  Paling Populer
                </span>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-white text-xl">{p.name}</h3>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">{p.desc}</p>
                </div>

                <div className="pt-2">
                  <span className="text-3xl font-black text-white">
                    {billingCycle === "yearly" ? p.yearlyPrice : p.monthlyPrice}
                  </span>
                  <span className="text-xs text-slate-500"> / bulan</span>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-800/80">
                  {p.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-indigo-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={getWhatsappOrderLink(sample.title, p.name)}
                target="_blank"
                className={`w-full text-center py-3.5 rounded-xl font-extrabold text-xs transition block ${
                  p.isPopular ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg" : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                }`}
              >
                Pilih Paket WA
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="py-12 border-t border-slate-800 bg-slate-950 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
              <Zap className="h-4 w-4" />
            </div>
            <span className="font-bold text-white text-sm">CloudFlow AI Automation</span>
          </div>
          <p>© 2026 CloudFlow AI · Sampel Landing Page SaaS Interaktif</p>
        </div>
      </footer>
    </div>
  );
}
