import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Al Husna Studio — Modern Software House & Web Creation Agency",
  description:
    "Jasa pembuatan website profesional, landing page tinggi konversi, toko online, portal sekolah, dan aplikasi web kustom. Pilihan sampel website interaktif dengan garansi pengerjaan 3 hari.",
  keywords: [
    "jasa pembuatan website",
    "software house indonesia",
    "buat landing page murah",
    "web agency profesional",
    "al husna studio",
    "bikin website sekolah",
    "bikin toko online wa",
  ],
  authors: [{ name: "Al Husna Studio Team" }],
  openGraph: {
    title: "Al Husna Studio — Modern Software House & Web Agency",
    description:
      "Jelajahi 6+ sampel website interaktif dan pesan website impian bisnis Anda dengan proses cepat 3 hari.",
    url: "https://studio.alhusnaeducation.id",
    siteName: "Al Husna Studio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Husna Studio — Software House & Web Agency",
    description: "Jasa pembuatan website profesional & aplikasi kustom terpercaya.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Al Husna Studio",
    url: "https://studio.alhusnaeducation.id",
    telephone: "+6281532704295",
    priceRange: "Rp 750.000 - Rp 5.000.000",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
    },
    description:
      "Software House & Web Creation Agency profesional spesialis pembuatan website, landing page, dan sistem web kustom.",
  };

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-studio-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
