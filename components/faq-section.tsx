"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Berapa lama proses pembuatan website diselesaikan?",
      a: "Untuk paket Landing Page standar diselesaikan dalam 3 hari kerja. Untuk Paket Company Profile 5 hari kerja, dan Paket Custom App disesuaikan dengan kompleksitas brief proyek Anda.",
    },
    {
      q: "Apakah harga sudah termasuk domain dan hosting?",
      a: "Ya! Semua paket kami sudah termasuk pendaftaran domain (.com / .id) selama 1 tahun, High-Speed Cloud Hosting, dan sertifikat keamanan SSL gratis.",
    },
    {
      q: "Bagaimana jika saya ingin melakukan perubahan (revisi) materi?",
      a: "Kami menyediakan garansi revisi materi hingga hasil akhir sesuai dengan kesepakatan brief awal Anda sebelum peluncuran resmi.",
    },
    {
      q: "Apakah website buatan Al Husna Studio responsif di HP/Tablet?",
      a: "100% Responsif. Semua website diuji menggunakan berbagai ukuran layar (Mobile, Tablet, Desktop) agar tampil sempurna di seluruh perangkat.",
    },
    {
      q: "Bagaimana alur pemesanan dan pembayaran dilakukan?",
      a: "Cukup pilih sampel atau paket yang diinginkan ➔ Klik tombol WhatsApp ➔ Konsultasikan materi ➔ Pembayaran DP 50% ➔ Pengerjaan ➔ Pelunasan & Handover.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-900/40 border-t border-slate-800/80 relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300 mb-4">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Pertanyaan Populer</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="mt-3 text-slate-400 text-sm">
            Temukan jawaban atas pertanyaan umum seputar layanan pembuatan website di Al Husna Studio.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-slate-900/80 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-bold text-white hover:text-studio-cyan transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-studio-cyan" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-400 border-t border-slate-800/60 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
