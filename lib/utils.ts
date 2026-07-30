import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getWhatsappOrderLink(sampleTitle?: string, packageName?: string): string {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281532704295";
  let text = "Halo Admin Al Husna Studio 👋,\n\nSaya tertarik untuk memesan / konsultasi pembuatan website.";

  if (sampleTitle) {
    text += `\n📌 *Pilihan Sampel:* ${sampleTitle}`;
  }
  if (packageName) {
    text += `\n📦 *Paket Layanan:* ${packageName}`;
  }

  text += "\n\nMohon informasi estimasi pengerjaan dan alur pendaftarannya. Terima kasih!";

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
