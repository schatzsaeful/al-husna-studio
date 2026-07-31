"use client";

import React, { use } from "react";
import { SAMPLE_WEBSITES } from "@/data/samples-data";
import { getWhatsappOrderLink } from "@/lib/utils";
import { RestobitesPreview } from "@/components/previews/restobites-preview";
import { NusacorpPreview } from "@/components/previews/nusacorp-preview";
import { EdusparkPreview } from "@/components/previews/eduspark-preview";
import { StylestorePreview } from "@/components/previews/stylestore-preview";
import { CloudflowPreview } from "@/components/previews/cloudflow-preview";
import { PixelcraftPreview } from "@/components/previews/pixelcraft-preview";
import { MedicarePreview } from "@/components/previews/medicare-preview";
import { GrandestatePreview } from "@/components/previews/grandestate-preview";
import { FitpulsePreview } from "@/components/previews/fitpulse-preview";
import { GlamourPreview } from "@/components/previews/glamour-preview";
import { MessageCircle } from "lucide-react";

export default function PreviewSamplePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const sample = SAMPLE_WEBSITES.find((s) => s.slug === slug);

  if (!sample) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white p-6">
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-bold">Sampel Website Tidak Ditemukan</h1>
          <p className="text-slate-400 text-sm">Halaman preview untuk slug "{slug}" belum tersedia.</p>
        </div>
      </div>
    );
  }

  // 1. RestoBites (Kuliner & Restoran)
  if (slug === "restobites-culinary") {
    return <RestobitesPreview sample={sample} />;
  }

  // 2. NusaCorp (Company Profile)
  if (slug === "nusacorp-profile") {
    return <NusacorpPreview sample={sample} />;
  }

  // 3. EduSpark (Sekolah & Edukasi)
  if (slug === "eduspark-academic") {
    return <EdusparkPreview sample={sample} />;
  }

  // 4. StyleStore (Toko Online / E-Commerce)
  if (slug === "stylestore-fashion") {
    return <StylestorePreview sample={sample} />;
  }

  // 5. CloudFlow (SaaS & Product Digital)
  if (slug === "cloudflow-saas") {
    return <CloudflowPreview sample={sample} />;
  }

  // 6. PixelCraft (Portofolio & Agensi Kreatif)
  if (slug === "pixelcraft-portfolio") {
    return <PixelcraftPreview sample={sample} />;
  }

  // 7. MediCare (Klinik & Kesehatan Medis)
  if (slug === "medicare-clinic") {
    return <MedicarePreview sample={sample} />;
  }

  // 8. GrandEstate (Properti & Perumahan Mewah)
  if (slug === "grandestate-property") {
    return <GrandestatePreview sample={sample} />;
  }

  // 9. FitPulse (Fitness & Gym)
  if (slug === "fitpulse-gym") {
    return <FitpulsePreview sample={sample} />;
  }

  // 10. GlamourBeauty (Salon & Spa)
  if (slug === "glamour-salon") {
    return <GlamourPreview sample={sample} />;
  }

  // Fallback
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 flex flex-col justify-between">
      <div className="max-w-3xl mx-auto text-center space-y-4 my-auto">
        <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-cyan-400 text-xs font-bold">
          Live Pratinjau Sampel
        </span>
        <h1 className="text-3xl font-extrabold text-white">{sample.title}</h1>
        <p className="text-slate-300 text-sm">{sample.description}</p>
        <div className="pt-4">
          <a
            href={getWhatsappOrderLink(sample.title)}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-xs font-bold text-white shadow-lg hover:bg-emerald-500"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Pesan Website Seperti Ini Sekarang</span>
          </a>
        </div>
      </div>
    </div>
  );
}
