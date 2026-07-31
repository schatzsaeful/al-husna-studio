"use client";

import React, { useState } from "react";
import { SampleWebsite } from "@/data/samples-data";
import { getWhatsappOrderLink } from "@/lib/utils";
import {
  Stethoscope,
  Activity,
  MessageCircle,
  Clock,
  MapPin,
  CheckCircle2,
  Calendar,
  Users,
  ShieldCheck,
  PhoneCall,
  HeartPulse,
} from "lucide-react";

export function MedicarePreview({ sample }: { sample: SampleWebsite }) {
  const [bookingForm, setBookingForm] = useState({
    patientName: "",
    specialist: "Poli Umum & Dokter Anak",
    date: "",
    notes: "",
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo MediCare Clinic, saya ingin Booking Jadwal Konsultasi Dokter:\n- Nama Pasien: ${bookingForm.patientName}\n- Poli Spesialis: ${bookingForm.specialist}\n- Tanggal Berobat: ${bookingForm.date || "Hari ini"}\n- Catatan Keluhan: ${bookingForm.notes || "-"}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const doctors = [
    { name: "dr. Amanda Sp.A", specialty: "Spesialis Anak & Tumbuh Kembang", days: "Senin - Jumat", hours: "09:00 - 15:00 WIB" },
    { name: "drg. Rayhan Sp.KG", specialty: "Spesialis Konservasi & Estetika Gigi", days: "Senin - Sabtu", hours: "13:00 - 20:00 WIB" },
    { name: "dr. Budi Santoso Sp.PD", specialty: "Spesialis Penyakit Dalam", days: "Selasa & Kamis", hours: "16:00 - 21:00 WIB" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950">
      {/* 1. UGD Hotline Bar */}
      <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 text-slate-950 px-4 py-2 text-center text-xs font-black flex items-center justify-center gap-2">
        <Activity className="h-4 w-4" />
        <span>UGD DARURAT &amp; AMBULANCE 24 JAM: CALL (021) 555-9911 · BPJS &amp; ASURANSI TERIMA</span>
      </div>

      {/* 2. Clinic Header */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="h-10 w-10 rounded-xl bg-teal-500 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-teal-500/20">
            <Stethoscope className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white block leading-none">MediCare <span className="text-teal-400">Clinic</span></span>
            <span className="text-[10px] text-slate-400 font-medium">Klinik Utama &amp; Laboratorium Medis Terpadu</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-300">
          <a href="#services" className="hover:text-teal-400 transition">Layanan Medis</a>
          <a href="#doctors" className="hover:text-teal-400 transition">Jadwal Dokter</a>
          <a href="#booking" className="hover:text-teal-400 transition">Booking Konsultasi</a>
        </div>

        <a
          href={getWhatsappOrderLink(sample.title)}
          target="_blank"
          className="rounded-xl bg-teal-500 px-5 py-2.5 text-xs font-extrabold text-slate-950 hover:bg-teal-400 transition shadow-lg shadow-teal-500/20 flex items-center gap-2"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Booking Jadwal Dokter</span>
        </a>
      </header>

      {/* 3. Hero Section */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto space-y-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-xs font-bold border border-teal-500/20">
          🏥 Klinik Utama &amp; Laboratorium Medis Terakreditasi Paripurna
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
          Layanan Kesehatan Keluarga <span className="text-teal-400">Terpercaya &amp; Berstandar</span> Medis
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Didukung oleh tim dokter spesialis berpengalaman, alat medis modern, laboratorium darah cepat hasil 30 menit, &amp; pendaftaran online via WA.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <a
            href="#booking"
            className="rounded-xl bg-teal-500 px-8 py-3.5 text-xs font-extrabold text-slate-950 hover:bg-teal-400 shadow-xl flex items-center gap-2 transition"
          >
            <Calendar className="h-4 w-4" />
            <span>Booking Antrean Online</span>
          </a>
          <a
            href="#doctors"
            className="rounded-xl border border-slate-700 bg-slate-900 px-7 py-3.5 text-xs font-bold text-slate-300 hover:bg-slate-800 transition"
          >
            Lihat Jadwal Dokter Spesialis
          </a>
        </div>
      </section>

      {/* 4. Doctors Schedule Section */}
      <section id="doctors" className="py-20 bg-slate-900/60 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400">Dokter Spesialis</span>
            <h2 className="text-3xl font-black text-white">Jadwal Praktek Dokter MediCare</h2>
            <p className="text-slate-400 text-xs sm:text-sm">Silakan pilih dokter spesialis sesuai dengan kebutuhan konsultasi Anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {doctors.map((doc, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 hover:border-teal-500/40 transition">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
                    <Stethoscope className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">{doc.name}</h3>
                    <p className="text-xs text-teal-400 font-medium">{doc.specialty}</p>
                  </div>
                </div>
                <div className="space-y-1.5 pt-2 border-t border-slate-800 text-xs text-slate-400">
                  <p><strong className="text-white">Hari:</strong> {doc.days}</p>
                  <p><strong className="text-white">Jam:</strong> {doc.hours}</p>
                </div>
                <a
                  href={getWhatsappOrderLink(sample.title, `Janji dengan ${doc.name}`)}
                  target="_blank"
                  className="w-full text-center py-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/30 text-xs font-bold block hover:bg-teal-500 hover:text-slate-950 transition"
                >
                  Buat Janji WA
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Booking Form Section */}
      <section id="booking" className="py-20 px-6 max-w-3xl mx-auto">
        <div className="rounded-3xl border border-teal-500/30 bg-slate-900 p-8 sm:p-12 space-y-6 shadow-2xl">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Pendaftaran Online</span>
            <h2 className="text-3xl font-black text-white">Form Booking Konsultasi Berobat</h2>
            <p className="text-slate-400 text-xs">Tanpa perlu antre lama, nomor antrean dokter langsung terkonfirmasi via WA</p>
          </div>

          <form onSubmit={handleBookingSubmit} className="space-y-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Nama Lengkap Pasien</label>
              <input
                type="text"
                required
                placeholder="Masukkan nama pasien..."
                value={bookingForm.patientName}
                onChange={(e) => setBookingForm({ ...bookingForm, patientName: e.target.value })}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:border-teal-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Poli Spesialis Dituju</label>
              <select
                value={bookingForm.specialist}
                onChange={(e) => setBookingForm({ ...bookingForm, specialist: e.target.value })}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-xs text-white focus:border-teal-500 focus:outline-none"
              >
                <option value="Poli Umum & Dokter Anak">Poli Umum &amp; Dokter Spesialis Anak</option>
                <option value="Poli Gigi & Estetika Senyum">Poli Gigi &amp; Estetika Senyum</option>
                <option value="Poli Penyakit Dalam">Poli Penyakit Dalam</option>
                <option value="Laboratorium Cek Darah MCU">Laboratorium &amp; Cek Darah Lengkap</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Rencana Tanggal Berobat</label>
              <input
                type="date"
                required
                value={bookingForm.date}
                onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-xs text-white focus:border-teal-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-teal-500 py-3.5 text-xs font-extrabold text-slate-950 hover:bg-teal-400 transition shadow-xl flex items-center justify-center gap-2 cursor-pointer pt-3"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Kirim Booking Antrean Dokter via WhatsApp</span>
            </button>
          </form>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="py-12 border-t border-slate-800 bg-slate-950 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-teal-500 flex items-center justify-center text-slate-950 font-bold">
              <Stethoscope className="h-4 w-4" />
            </div>
            <span className="font-bold text-white text-sm">MediCare Clinic Official</span>
          </div>
          <p>© 2026 MediCare Clinic · Sampel Landing Page Klinik Medis Interaktif</p>
        </div>
      </footer>
    </div>
  );
}
