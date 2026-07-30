export interface SampleWebsite {
  id: string;
  title: string;
  slug: string;
  category: "landing-page" | "company-profile" | "education" | "ecommerce" | "saas" | "portfolio";
  categoryLabel: string;
  thumbnailUrl: string;
  demoUrl: string;
  description: string;
  features: string[];
  priceEstimate: string;
  isPopular?: boolean;
}

export const SAMPLE_WEBSITES: SampleWebsite[] = [
  {
    id: "sample-1",
    title: "RestoBites — Culinary & Resto",
    slug: "restobites-culinary",
    category: "landing-page",
    categoryLabel: "Kuliner & Restoran",
    thumbnailUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "/preview/restobites-culinary",
    description: "Landing page restoran & cafe modern dilengkapi menu interaktif, galeri foto estetis, serta tombol reservasi via WhatsApp.",
    features: [
      "Menu Interaktif & Harga",
      "Direct WhatsApp Reservation",
      "Galeri Suasana & Makanan",
      "Google Maps Alamat Resto",
      "Optimasi Responsif Mobile 100%"
    ],
    priceEstimate: "Rp 750.000",
    isPopular: true
  },
  {
    id: "sample-2",
    title: "NusaCorp — Corporate Profile",
    slug: "nusacorp-profile",
    category: "company-profile",
    categoryLabel: "Company Profile",
    thumbnailUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "/preview/nusacorp-profile",
    description: "Website profil perusahaan profesional untuk membangun kredibilitas bisnis, layanan corporate, & sertifikasi ISO.",
    features: [
      "Struktur Profil Perusahaan & Visi Misi",
      "Katalog Layanan & Divisi Corporate",
      "Form Inquiry & Kontak Bisnis Direct",
      "Pencapaian & Klien Showcase",
      "SEO Ready & Fast Loading"
    ],
    priceEstimate: "Rp 1.450.000",
    isPopular: true
  },
  {
    id: "sample-3",
    title: "EduSpark — Portal Sekolah & Akademi",
    slug: "eduspark-academic",
    category: "education",
    categoryLabel: "Sekolah & Edukasi",
    thumbnailUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "/preview/eduspark-academic",
    description: "Portal resmi sekolah, bimbel, & akademi dengan info pendaftaran (PPDB), pengumuman, & fasilitas kampus.",
    features: [
      "Informasi Pendaftaran Siswa (PPDB)",
      "Program Unggulan STEM & Tahfidz",
      "Sambutan Kepala Sekolah & Visi Misi",
      "Galeri 6 Fasilitas Kampus",
      "Fitur Download Brosur & FAQ PPDB"
    ],
    priceEstimate: "Rp 1.850.000"
  },
  {
    id: "sample-4",
    title: "StyleStore — E-Commerce Fashion",
    slug: "stylestore-fashion",
    category: "ecommerce",
    categoryLabel: "Toko Online / E-Commerce",
    thumbnailUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "/preview/stylestore-fashion",
    description: "Katalog toko online produk fashion/retail dengan sistem keranjang belanja ringkas & checkout otomatis ke WhatsApp Admin.",
    features: [
      "Katalog Produk Diskon & Best Seller",
      "Badge Sale & Harga Coret",
      "Checkout Otomatis Rincian Order WA",
      "Garansi Tukar Size 7 Hari",
      "Tampilan Mobile E-commerce Friendly"
    ],
    priceEstimate: "Rp 1.650.000",
    isPopular: true
  },
  {
    id: "sample-5",
    title: "CloudFlow — SaaS & Digital App",
    slug: "cloudflow-saas",
    category: "saas",
    categoryLabel: "SaaS & App Product",
    thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "/preview/cloudflow-saas",
    description: "Landing page produk digital/software SaaS dengan tampilan futuristik dark glassmorphism, pricing tier, & FAQ.",
    features: [
      "Hero Section Automation AI",
      "Interactive Pricing Tier Calculator",
      "Security & Encrypted Certification",
      "Integrating Apps Showcase",
      "Free Trial 14 Hari Conversion CTA"
    ],
    priceEstimate: "Rp 2.200.000"
  },
  {
    id: "sample-6",
    title: "PixelCraft — Creative Agency & Portfolio",
    slug: "pixelcraft-portfolio",
    category: "portfolio",
    categoryLabel: "Portofolio & Agensi",
    thumbnailUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "/preview/pixelcraft-portfolio",
    description: "Website portofolio visual untuk fotografer, desainer, atau agensi kreatif dengan tata letak galeri masonry.",
    features: [
      "Galeri Grid Case Study Project",
      "Detail Design & Motion Showcase",
      "Awwwards Winner Winner Badges",
      "Form Direct Booking Client",
      "Typography Luxury Minimalist"
    ],
    priceEstimate: "Rp 1.250.000"
  },
  {
    id: "sample-7",
    title: "MediCare — Klinik & Layanan Kesehatan",
    slug: "medicare-clinic",
    category: "landing-page",
    categoryLabel: "Klinik & Kesehatan",
    thumbnailUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "/preview/medicare-clinic",
    description: "Website resmi klinik kesehatan, dokter spesialis, & laboratorium medis dengan fitur booking jadwal dokter via WhatsApp.",
    features: [
      "Jadwal Praktek Dokter Spesialis",
      "Booking Konsultasi / Berobat WA",
      "Layanan Unggulan Medis & Lab",
      "Info BPJS & Mitra Asuransi",
      "Testimoni Pasien & Fasilitas Medik"
    ],
    priceEstimate: "Rp 1.350.000",
    isPopular: true
  },
  {
    id: "sample-8",
    title: "GrandEstate — Properti & Perumahan",
    slug: "grandestate-property",
    category: "company-profile",
    categoryLabel: "Properti & Perumahan",
    thumbnailUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "/preview/grandestate-property",
    description: "Landing page promosi proyek perumahan & apartemen mewah dengan denah tipe unit, spesifikasi bangunan, & brosur KPR.",
    features: [
      "Showcase Tipe Unit Rumah & Denah",
      "Download Brosur Price List PDF",
      "Simulasi Angsuran KPR Bank",
      "Fasilitas Perumahan & Siteplan",
      "Direct Sales WA Consultation"
    ],
    priceEstimate: "Rp 1.550.000"
  },
  {
    id: "sample-9",
    title: "FitPulse — Gym & Personal Trainer",
    slug: "fitpulse-gym",
    category: "landing-page",
    categoryLabel: "Fitness & Gym",
    thumbnailUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "/preview/fitpulse-gym",
    description: "Landing page pusat kebugaran (Gym), kelas fitness, & jasa personal trainer dengan daftar paket membership bulanan.",
    features: [
      "Jadwal Kelas Gym & Yoga Harian",
      "Paket Membership Bulanan",
      "Profil Personal Trainer Profesional",
      "Kisah Transformasi Member Real",
      "Free Trial Class Booking WA"
    ],
    priceEstimate: "Rp 950.000"
  },
  {
    id: "sample-10",
    title: "GlamourBeauty — Salon & Spa Kecantikan",
    slug: "glamour-salon",
    category: "landing-page",
    categoryLabel: "Salon & Kecantikan",
    thumbnailUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "/preview/glamour-salon",
    description: "Website studio kecantikan, salon perawatan rambut, skincare, & spa dengan menu perawatan dan reservasi online.",
    features: [
      "Daftar Treatment & Pricelist",
      "Reservasi Slot Jam Perawatan WA",
      "Galeri Hasil Perawatan & Review",
      "Promo Bundling Kecantikan",
      "Lokasi & Kontak Studio"
    ],
    priceEstimate: "Rp 850.000"
  }
];
