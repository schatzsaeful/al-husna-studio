"use client";

import React from "react";
import { Layout, Building2, ShoppingBag, Code, ShieldCheck, Cpu } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Layout,
      title: "Landing Page High Conversion",
      description:
        "Desain landing page modern, berkecepatan tinggi, dan difokuskan untuk mengonversi pengunjung menjadi pelanggan aktif.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Building2,
      title: "Company & Institution Profile",
      description:
        "Website resmi perusahaan, sekolah, atau organisasi untuk membangun citra profesional, bonafit, dan tepercaya.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: ShoppingBag,
      title: "E-Commerce & Catalog Store",
      description:
        "Toko online katalog produk dengan fitur keranjang belanja ringkas dan checkout langsung terhubung ke WhatsApp Admin.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Code,
      title: "Custom Web Application & SaaS",
      description:
        "Pengembangan sistem web kustom, portal dashboard internal, atau platform SaaS terintegrasi database Cloud Turso.",
      color: "from-amber-500 to-rose-500",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Layanan Utama Software House & Agency
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Kami melayani segala kebutuhan pembuatan website dari skala UMKM hingga kebutuhan enterprise custom.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-slate-700 hover:bg-slate-800/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`h-12 w-12 rounded-xl bg-gradient-to-tr ${srv.color} flex items-center justify-center text-white shadow-lg mb-5 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-studio-cyan transition-colors">
                    {srv.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">{srv.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
