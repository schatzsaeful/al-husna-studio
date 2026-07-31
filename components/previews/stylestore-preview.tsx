"use client";

import React, { useState } from "react";
import { SampleWebsite } from "@/data/samples-data";
import { getWhatsappOrderLink } from "@/lib/utils";
import {
  ShoppingBag,
  ShoppingCart,
  Heart,
  Search,
  Truck,
  RefreshCw,
  ShieldCheck,
  MessageCircle,
  Star,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Filter,
} from "lucide-react";

export function StylestorePreview({ sample }: { sample: SampleWebsite }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [cartItems, setCartItems] = useState<{ name: string; price: string }[]>([]);

  const products = [
    { name: "Oversized Heavy Cotton Tee", category: "tops", price: "Rp 129.000", normalPrice: "Rp 199.000", tag: "Diskon 35%", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop" },
    { name: "Denim Trucker Jacket Vintage", category: "outer", price: "Rp 289.000", normalPrice: "Rp 450.000", tag: "Best Seller", img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop" },
    { name: "Chino Pants Slimfit Comfort", category: "bottoms", price: "Rp 179.000", normalPrice: "Rp 260.000", tag: "Populer", img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&auto=format&fit=crop" },
    { name: "Minimalist Leather Sneakers", category: "shoes", price: "Rp 349.000", normalPrice: "Rp 520.000", tag: "New Arrival", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop" },
    { name: "Corduroy Cap Streetwear", category: "acc", price: "Rp 79.000", normalPrice: "Rp 120.000", tag: "Hot Deal", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&auto=format&fit=crop" },
    { name: "Canvas Tote Bag Heavy Duty", category: "acc", price: "Rp 99.000", normalPrice: "Rp 150.000", tag: "Limit Stock", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop" },
  ];

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (productName: string, productPrice: string) => {
    setCartItems((prev) => [...prev, { name: productName, price: productPrice }]);
  };

  const handleCheckoutCart = () => {
    if (cartItems.length === 0) return;
    const itemList = cartItems.map((item, idx) => `${idx + 1}. ${item.name} (${item.price})`).join("\n");
    const msg = `Halo StyleStore Apparel, saya mau checkout order belanjaan saya:\n${itemList}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-rose-500 selection:text-white">
      {/* 1. Flash Sale Ticker Bar */}
      <div className="bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 text-white px-4 py-2 text-center text-xs font-bold flex items-center justify-center gap-2">
        <Sparkles className="h-4 w-4" />
        <span>FLASH SALE ENDS TONIGHT: DISKON HINGGA 50% + GRATIS ONGKIR SELURUH INDONESIA!</span>
      </div>

      {/* 2. E-Commerce Header */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-rose-600 flex items-center justify-center text-white font-bold shadow-lg shadow-rose-600/20">
            <ShoppingBag className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xl font-black tracking-wider text-white block leading-none">StyleStore <span className="text-rose-500">Apparel</span></span>
            <span className="text-[10px] text-slate-400 font-medium">Urban &amp; Streetwear Fashion Catalog</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center relative w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
          <input
            type="text"
            placeholder="Cari kaos, jaket, sepatu..."
            className="w-full rounded-xl bg-slate-950 border border-slate-800 pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:border-rose-500 focus:outline-none"
          />
        </div>

        {/* Cart Counter & WhatsApp Checkout */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleCheckoutCart}
            className="relative p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:text-white flex items-center gap-2 text-xs font-bold cursor-pointer"
          >
            <ShoppingCart className="h-4 w-4 text-rose-500" />
            <span className="hidden sm:inline">Keranjang</span>
            <span className="h-5 w-5 rounded-full bg-rose-600 text-white text-[10px] font-black flex items-center justify-center">
              {cartItems.length}
            </span>
          </button>

          <a
            href={getWhatsappOrderLink(sample.title)}
            target="_blank"
            className="rounded-xl bg-rose-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-rose-500 shadow-lg shadow-rose-600/20 flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Order WA Direct</span>
          </a>
        </div>
      </header>

      {/* 3. Hero Lookbook */}
      <section className="py-20 px-6 text-center max-w-5xl mx-auto space-y-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-400 text-xs font-bold border border-rose-500/20">
          🔥 New Season Streetwear Collection 2026
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
          Tampil Percaya Diri Dengan Bahan <span className="text-rose-500">Cotton Organic</span> Premium
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Nyaman dipakai seharian, anti gerah, jahitan standar distro eksklusif, dan garansi tukar size 7 hari tanpa biaya tambahan!
        </p>

        {/* Customer Perks Bar */}
        <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-left font-sans">
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
            <Truck className="h-6 w-6 text-rose-500 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Gratis Ongkir</p>
              <p className="text-[10px] text-slate-400">Minimal Order Rp 150rb</p>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
            <RefreshCw className="h-6 w-6 text-rose-500 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Garansi Size</p>
              <p className="text-[10px] text-slate-400">Tukar Bebas 7 Hari</p>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-rose-500 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">100% Autentik</p>
              <p className="text-[10px] text-slate-400">Bahan Premium Distro</p>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
            <MessageCircle className="h-6 w-6 text-rose-500 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Order WA Fast</p>
              <p className="text-[10px] text-slate-400">Admin Response 5 Mnt</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Product Catalog Grid */}
      <section className="py-12 px-6 max-w-7xl mx-auto space-y-8 border-t border-slate-800">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white">Katalog Produk Terlaris</h2>
            <p className="text-xs text-slate-400">Klik "Tambah ke Keranjang" atau "Order WA Direct"</p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full sm:w-auto">
            {[
              { id: "all", label: "Semua Produk" },
              { id: "tops", label: "Kaos & Polo" },
              { id: "outer", label: "Jaket & Hoodies" },
              { id: "bottoms", label: "Celana Chino" },
              { id: "shoes", label: "Sepatu" },
              { id: "acc", label: "Aksesoris" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                  selectedCategory === cat.id
                    ? "bg-rose-600 text-white shadow-md shadow-rose-600/20"
                    : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((p, i) => (
            <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition group">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-rose-600 text-white px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                  {p.tag}
                </span>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <h3 className="font-bold text-white text-base group-hover:text-rose-400 transition">{p.name}</h3>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-rose-500 font-extrabold text-base">{p.price}</span>
                    <span className="text-slate-500 text-xs line-through">{p.normalPrice}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                  <button
                    onClick={() => handleAddToCart(p.name, p.price)}
                    className="py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
                  >
                    <ShoppingCart className="h-3.5 w-3.5 text-rose-500" />
                    <span>+ Keranjang</span>
                  </button>
                  <a
                    href={getWhatsappOrderLink(sample.title, p.name)}
                    target="_blank"
                    className="py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>Beli WA</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="py-12 border-t border-slate-800 bg-slate-950 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-rose-600 flex items-center justify-center text-white font-bold">
              <ShoppingBag className="h-4 w-4" />
            </div>
            <span className="font-bold text-white text-sm">StyleStore Apparel Catalog</span>
          </div>
          <p>© 2026 StyleStore Apparel · Sampel Toko Online Interaktif</p>
        </div>
      </footer>
    </div>
  );
}
