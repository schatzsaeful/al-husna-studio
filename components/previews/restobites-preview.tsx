"use client";

import React, { useState } from "react";
import { SampleWebsite } from "@/data/samples-data";
import { getWhatsappOrderLink } from "@/lib/utils";
import {
  Utensils,
  Sparkles,
  Star,
  MessageCircle,
  Clock,
  MapPin,
  PhoneCall,
  CheckCircle2,
  Calendar,
  Users,
  Award,
  ChevronRight,
  Coffee,
  Wine,
  Flame,
} from "lucide-react";

export function RestobitesPreview({ sample }: { sample: SampleWebsite }) {
  const [activeCategory, setActiveCategory] = useState<string>("signature");
  const [reservationForm, setReservationForm] = useState({
    date: "",
    time: "19:00",
    guests: "2 Orang",
    name: "",
    notes: "",
  });

  const menuCategories = [
    { id: "signature", label: "Chef Signature" },
    { id: "main", label: "Main Course" },
    { id: "dessert", label: "Desserts" },
    { id: "drinks", label: "Artisan Drinks" },
  ];

  const menuItems = {
    signature: [
      { name: "Wagyu Meltique Steak Rempah", price: "Rp 145.000", desc: "Daging Wagyu MB5 dengan olesan bumbu rempah pilihan & saus kecombrang", tag: "Best Seller", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop" },
      { name: "Norwegian Salmon kecombrang", price: "Rp 115.000", desc: "Grilled Salmon kulit renyah disajikan dengan nasi hangat & sambal matah", tag: "Recommended", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&auto=format&fit=crop" },
      { name: "Ayam Bakar Madu Batok", price: "Rp 65.000", desc: "Ayam kampung muda diungkep madu murni dan dibakar arang kelapa", tag: "Popular", img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&auto=format&fit=crop" },
    ],
    main: [
      { name: "Nasi Goreng Wagyu Kecombrang", price: "Rp 75.000", desc: "Nasi goreng bumbu rempah dengan potongan wagyu juicy & telur setengah matang", tag: "Chef Choice", img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop" },
      { name: "Sop Buntut Bakar Rempah", price: "Rp 95.000", desc: "Buntut sapi kuah kaya rempah kayu manis & cengkeh disajikan empuk", tag: "Warm Special", img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&auto=format&fit=crop" },
    ],
    dessert: [
      { name: "Es Cendol Durian Musang King", price: "Rp 45.000", desc: "Cendol hijau pandan asli dengan daging durian Musang King & gula aren", tag: "Sweet Favorite", img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop" },
      { name: "Ketan Hitam Lava Cake", price: "Rp 38.000", desc: "Warm molten chocolate cake berbahan tepung ketan hitam & es krim vanila", tag: "New", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop" },
    ],
    drinks: [
      { name: "Es Kopi Susu Rempah Kecombrang", price: "Rp 32.000", desc: "Espresso arabika dengan susu murni & sirup rempah alami", tag: "Signature Drink", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop" },
      { name: "Mocktail Butterfly Pea Citrus", price: "Rp 35.000", desc: "Teh bunga telang alami disajikan dingin dengan perasan jeruk lemon", tag: "Fresh", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop" },
    ],
  };

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo RestoBites, saya ingin Reservasi Meja:\n- Nama: ${reservationForm.name || "Tamu"}\n- Tanggal: ${reservationForm.date || "Hari ini"}\n- Jam: ${reservationForm.time}\n- Jumlah Tamu: ${reservationForm.guests}\n- Catatan: ${reservationForm.notes || "-"}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-stone-950 text-amber-50 font-serif selection:bg-amber-500 selection:text-stone-950">
      {/* 1. Top Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-stone-950 px-4 py-2 text-center text-xs font-bold font-sans flex items-center justify-center gap-2">
        <Sparkles className="h-4 w-4" />
        <span>PROMO SPESIAL: Diskon 20% + Gratis Dessert Untuk Reservasi Online Hari Ini!</span>
      </div>

      {/* 2. Header Navbar */}
      <header className="border-b border-amber-900/30 bg-stone-900/90 backdrop-blur-md sticky top-0 z-30 px-6 py-4 flex items-center justify-between font-sans">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-amber-500 flex items-center justify-center text-stone-950 font-black shadow-lg shadow-amber-500/20">
            <Utensils className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xl font-black tracking-wider text-amber-400 uppercase block leading-none">RestoBites</span>
            <span className="text-[10px] text-stone-400 font-medium">Fine Dining &amp; Rempah Nusantara</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-semibold text-stone-300">
          <a href="#menu" className="hover:text-amber-400 transition">Menu Signature</a>
          <a href="#about" className="hover:text-amber-400 transition">Tentang Kami</a>
          <a href="#ambience" className="hover:text-amber-400 transition">Suasana</a>
          <a href="#reservation" className="hover:text-amber-400 transition">Reservasi</a>
        </div>

        <a
          href={getWhatsappOrderLink(sample.title)}
          target="_blank"
          className="rounded-full bg-amber-500 px-5 py-2.5 text-xs font-extrabold text-stone-950 hover:bg-amber-400 shadow-lg flex items-center gap-2"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Reservasi Meja WA</span>
        </a>
      </header>

      {/* 3. Hero Section */}
      <section className="relative py-28 px-6 text-center overflow-hidden border-b border-amber-900/30">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${sample.thumbnailUrl})` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold text-amber-400 font-sans">
            <Star className="h-4 w-4 fill-amber-400" />
            <span>Restoran Kuliner Fusion &amp; Rempah Nusantara #1</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
            Keharmonisan Rempah Nusantara Dalam Sentuhan <span className="text-amber-400 italic">Fine Dining</span>
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto font-sans leading-relaxed">
            Disajikan hangat dari bahan organik pilihan oleh Chef ternama. Nikmati suasana makan malam romantis &amp; acara keluarga yang tak terlupakan.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4 font-sans">
            <a
              href="#reservation"
              className="rounded-xl bg-amber-500 px-8 py-3.5 text-xs font-extrabold text-stone-950 hover:bg-amber-400 flex items-center gap-2 shadow-xl"
            >
              <Calendar className="h-4 w-4" />
              <span>Reservasi Tempat Sekarang</span>
            </a>
            <a
              href="#menu"
              className="rounded-xl border border-amber-500/40 bg-stone-900/80 px-7 py-3.5 text-xs font-bold text-amber-300 hover:bg-stone-800 flex items-center gap-2"
            >
              <Utensils className="h-4 w-4" />
              <span>Lihat Buku Menu</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. Story & Values Section */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center font-sans">
        <div className="space-y-5">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Warisan Kuliner Autentik</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-snug">
            Setiap Hidangan Adalah Karya Seni Rasa Bersejarah
          </h2>
          <p className="text-stone-400 text-sm leading-relaxed">
            RestoBites menghadirkan resep rahasia warisan nusantara yang diproses dengan teknik pengolahan modern. Dari bumbu rempah organik hingga kualitas potongan daging impor wagyu terbaik.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl border border-amber-900/30 bg-stone-900/80 space-y-1">
              <span className="text-2xl font-black text-amber-400">100%</span>
              <p className="text-xs text-stone-400 font-medium">Bahan Halal &amp; Organik</p>
            </div>
            <div className="p-4 rounded-xl border border-amber-900/30 bg-stone-900/80 space-y-1">
              <span className="text-2xl font-black text-amber-400">15+ Thn</span>
              <p className="text-xs text-stone-400 font-medium">Pengalaman Executive Chef</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-3xl overflow-hidden border border-amber-900/40 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
            alt="Interior RestoBites"
            className="w-full h-80 sm:h-96 object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-stone-950/90 backdrop-blur-md p-4 rounded-2xl border border-amber-900/30 flex items-center justify-between text-xs">
            <div>
              <p className="font-bold text-white">Suasana Warm &amp; Intimate</p>
              <p className="text-stone-400 text-[11px]">Cocok untuk Dinner &amp; Private Party</p>
            </div>
            <span className="px-3 py-1 bg-amber-500 text-stone-950 rounded-full font-bold">4.9 ★ Rating</span>
          </div>
        </div>
      </section>

      {/* 5. Interactive Menu Section */}
      <section id="menu" className="py-20 px-6 max-w-7xl mx-auto space-y-10 font-sans border-t border-amber-900/30">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-black text-amber-400 font-serif">Buku Menu Interaktif</h2>
          <p className="text-stone-400 text-xs sm:text-sm">Klik kategori untuk melihat variasi menu pilihan Chef kami</p>

          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  activeCategory === cat.id
                    ? "bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/20"
                    : "bg-stone-900 text-stone-400 hover:text-white border border-amber-900/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-amber-900/40 bg-stone-900/90 overflow-hidden flex flex-col justify-between hover:border-amber-500/50 transition">
              <div className="relative">
                <img src={item.img} alt={item.name} className="h-48 w-full object-cover" />
                <span className="absolute top-3 left-3 bg-amber-500 text-stone-950 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
                  {item.tag}
                </span>
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <h3 className="font-bold text-white text-base">{item.name}</h3>
                  <p className="text-stone-400 text-xs mt-1 leading-relaxed">{item.desc}</p>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-amber-900/30">
                  <span className="text-amber-400 font-black text-base">{item.price}</span>
                  <a
                    href={getWhatsappOrderLink(sample.title, item.name)}
                    target="_blank"
                    className="px-4 py-2 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs flex items-center gap-1.5 hover:bg-amber-400 transition"
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> Pesan WA
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Reservation Form Section */}
      <section id="reservation" className="py-20 px-6 max-w-4xl mx-auto font-sans">
        <div className="rounded-3xl border border-amber-500/30 bg-stone-900/90 p-8 sm:p-12 space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Instant Online Reservation</span>
            <h2 className="text-3xl font-black text-white font-serif">Formulir Reservasi Meja Online</h2>
            <p className="text-stone-400 text-xs">Pilih jadwal dan reservasi meja langsung terkonfirmasi via WhatsApp Admin</p>
          </div>

          <form onSubmit={handleReservationSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1.5">Nama Pemesan</label>
              <input
                type="text"
                required
                placeholder="Masukkan nama Anda..."
                value={reservationForm.name}
                onChange={(e) => setReservationForm({ ...reservationForm, name: e.target.value })}
                className="w-full rounded-xl bg-stone-950 border border-amber-900/40 px-4 py-2.5 text-xs text-white placeholder-stone-600 focus:border-amber-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1.5">Jumlah Tamu</label>
              <select
                value={reservationForm.guests}
                onChange={(e) => setReservationForm({ ...reservationForm, guests: e.target.value })}
                className="w-full rounded-xl bg-stone-950 border border-amber-900/40 px-4 py-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
              >
                <option value="2 Orang">2 Orang (Romantic Dinner)</option>
                <option value="4 Orang">4 Orang (Family Table)</option>
                <option value="6-10 Orang">6-10 Orang (Group Gathering)</option>
                <option value="VIP Room (15+ Orang)">VIP Private Room (15+ Orang)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1.5">Tanggal Kedatangan</label>
              <input
                type="date"
                required
                value={reservationForm.date}
                onChange={(e) => setReservationForm({ ...reservationForm, date: e.target.value })}
                className="w-full rounded-xl bg-stone-950 border border-amber-900/40 px-4 py-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1.5">Jam Kedatangan</label>
              <select
                value={reservationForm.time}
                onChange={(e) => setReservationForm({ ...reservationForm, time: e.target.value })}
                className="w-full rounded-xl bg-stone-950 border border-amber-900/40 px-4 py-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
              >
                <option value="12:00">12:00 WIB (Makan Siang)</option>
                <option value="13:30">13:30 WIB</option>
                <option value="18:30">18:30 WIB (Makan Malam)</option>
                <option value="19:30">19:30 WIB</option>
                <option value="20:30">20:30 WIB</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-stone-300 mb-1.5">Catatan Khusus / Request Meja</label>
              <input
                type="text"
                placeholder="Contoh: Meja dekat taman outdoor / Perayaan Ulang Tahun..."
                value={reservationForm.notes}
                onChange={(e) => setReservationForm({ ...reservationForm, notes: e.target.value })}
                className="w-full rounded-xl bg-stone-950 border border-amber-900/40 px-4 py-2.5 text-xs text-white placeholder-stone-600 focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2 pt-2">
              <button
                type="submit"
                className="w-full rounded-xl bg-amber-500 py-3.5 text-xs font-extrabold text-stone-950 hover:bg-amber-400 transition shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Kirim Reservasi Langsung via WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="py-12 border-t border-amber-900/30 bg-stone-900/40 px-6 font-sans">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-stone-400">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-amber-500 flex items-center justify-center text-stone-950 font-bold">
              <Utensils className="h-4 w-4" />
            </div>
            <span className="font-bold text-white text-sm">RestoBites Culinary &amp; Fine Dining</span>
          </div>
          <p>© 2026 RestoBites · Sampel Landing Page Kuliner Interaktif</p>
        </div>
      </footer>
    </div>
  );
}
