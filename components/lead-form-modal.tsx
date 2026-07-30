"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, AlertCircle } from "lucide-react";

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeadFormModal({ isOpen, onClose }: LeadFormModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [packageChoice, setPackageChoice] = useState("Paket Landing Page");
  const [brief, setBrief] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName: name,
          clientPhone: phone,
          selectedPackage: packageChoice,
          projectBrief: brief,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg("Gagal mengirim form. Silakan coba lagi atau gunakan WhatsApp.");
      }
    } catch {
      setErrorMsg("Terjadi kesalahan jaringan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Formulir Terkirim!</h3>
            <p className="text-xs text-slate-300 max-w-xs mx-auto">
              Terima kasih, <strong className="text-white">{name}</strong>. Tim admin Al Husna Studio akan segera menghubungi nomor WA Anda ({phone}).
            </p>
            <button
              onClick={onClose}
              className="mt-4 rounded-xl bg-slate-800 px-6 py-2 text-xs font-semibold text-white hover:bg-slate-700"
            >
              Tutup
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-bold text-white">Form Konsultasi Proyek</h3>
            <p className="text-xs text-slate-400 mt-1">
              Isi data berikut jika Anda ingin tim kami menghubungi Anda mengenai pembuatan website.
            </p>

            {errorMsg && (
              <div className="mt-3 flex items-center gap-2 rounded-lg bg-rose-500/10 border border-rose-500/30 p-2.5 text-xs text-rose-300">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Nama Lengkap *</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Budi Pratama"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-studio-cyan"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Nomor WhatsApp *</label>
                <input
                  type="tel"
                  required
                  placeholder="081234567890"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-studio-cyan"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Pilihan Paket Layanan</label>
                <select
                  value={packageChoice}
                  onChange={(e) => setPackageChoice(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3.5 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-studio-cyan"
                >
                  <option value="Paket Landing Page">Paket Landing Page (Rp 750.000)</option>
                  <option value="Paket Company Profile">Paket Company Profile (Rp 1.450.000)</option>
                  <option value="Paket Custom App">Paket Custom Web App / SaaS</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Deskripsi Singkat / Brief</label>
                <textarea
                  rows={3}
                  placeholder="Jelaskan kebutuhan website bisnis Anda..."
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-studio-cyan"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-studio-accent to-studio-cyan py-3 text-xs font-bold text-white shadow-md hover:scale-[1.01] transition-all disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
                <span>{loading ? "Mengirim..." : "Kirim Formulir Konsultasi"}</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
