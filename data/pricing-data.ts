export interface PricingPackage {
  id: string;
  name: string;
  badge?: string;
  price: string;
  originalPrice: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "basic",
    name: "Paket Landing Page",
    price: "Rp 750.000",
    originalPrice: "Rp 1.200.000",
    description: "Cocok untuk UMKM, promosi 1 produk, event, atau landing page iklan cepat saji.",
    features: [
      "1 Halaman Landing Page High Conversion",
      "Free Domain .com / .id (1 Tahun)",
      "Free SSL & High-Speed Cloud Hosting",
      "Integrasi Tombol WhatsApp Direct",
      "Tampilan Responsif Mobile & Desktop",
      "Garansi Maintenance 30 Hari",
      "Estimasi Pengerjaan 3 Hari Kerja"
    ],
    ctaText: "Pesan Paket Landing Page"
  },
  {
    id: "pro",
    name: "Paket Company Profile / Pro",
    badge: "Paling Populer",
    price: "Rp 1.450.000",
    originalPrice: "Rp 2.500.000",
    description: "Solusi lengkap profil perusahaan, sekolah, atau bisnis menengah untuk kredibilitas maksimal.",
    features: [
      "Hingga 5 Halaman Utama Website",
      "Free Domain .com / .id (1 Tahun)",
      "Free High-Performance Hosting & SSL",
      "Integrasi Form Kontak & Email Bisnis",
      "Optimasi SEO & Google Search Console",
      "Katalog Produk / Layanan Interaktif",
      "Garansi Maintenance 30 Hari",
      "Estimasi Pengerjaan 5 Hari Kerja"
    ],
    isPopular: true,
    ctaText: "Pesan Paket Company Profile"
  },
  {
    id: "enterprise",
    name: "Paket Custom Web App / SaaS",
    price: "Rp 2.950.000+",
    originalPrice: "Rp 5.000.000",
    description: "Untuk sistem kustom, web app, e-commerce kompleks, atau platform SaaS terintegrasi.",
    features: [
      "Halaman & Fitur Custom Sesuai Request",
      "Database Cloud Dedicated (Turso/PostgreSQL)",
      "Integrasi Auth System & Dashboard Admin",
      "API Integrasi Third Party / Payment Gateway",
      "Arsitektur Modern Next.js & React 19",
      "Full Code Handover & Dokumentasi",
      "Garansi Support & Maintenance VIP",
      "Estimasi Pengerjaan Sesuai Brief"
    ],
    ctaText: "Konsultasi Custom Web App"
  }
];
