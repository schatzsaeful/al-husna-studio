"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ShowcaseGallery } from "@/components/showcase-gallery";
import { LiveDemoModal } from "@/components/live-demo-modal";
import { ServicesSection } from "@/components/services-section";
import { ComparisonSection } from "@/components/comparison-section";
import { PricingTable } from "@/components/pricing-table";
import { GuaranteeSection } from "@/components/guarantee-section";
import { WorkflowSection } from "@/components/workflow-section";
import { FaqSection } from "@/components/faq-section";
import { LeadFormModal } from "@/components/lead-form-modal";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";
import { Footer } from "@/components/footer";
import { SampleWebsite } from "@/data/samples-data";

export default function StudioHomePage() {
  const [activeDemoSample, setActiveDemoSample] = useState<SampleWebsite | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-studio-dark text-slate-100 flex flex-col justify-between selection:bg-studio-accent selection:text-white">
      {/* Sticky Header Navbar */}
      <Navbar onOpenConsultation={() => setIsConsultationModalOpen(true)} />

      {/* Main Page Sections */}
      <main className="flex-1">
        <HeroSection onOpenConsultation={() => setIsConsultationModalOpen(true)} />
        <GuaranteeSection />
        <ShowcaseGallery onOpenLiveDemo={(sample) => setActiveDemoSample(sample)} />
        <ServicesSection />
        <ComparisonSection />
        <PricingTable onOpenConsultation={() => setIsConsultationModalOpen(true)} />
        <WorkflowSection />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Floating Action Widgets */}
      <LiveDemoModal sample={activeDemoSample} onClose={() => setActiveDemoSample(null)} />
      <LeadFormModal isOpen={isConsultationModalOpen} onClose={() => setIsConsultationModalOpen(false)} />
      <FloatingWhatsapp />
    </div>
  );
}
