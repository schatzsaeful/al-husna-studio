"use client";

import React, { useState } from "react";
import { SampleWebsite } from "@/data/samples-data";
import { X, Monitor, Tablet, Smartphone, ExternalLink, MessageCircle, CheckCircle2 } from "lucide-react";
import { getWhatsappOrderLink } from "@/lib/utils";

interface LiveDemoModalProps {
  sample: SampleWebsite | null;
  onClose: () => void;
}

type DeviceMode = "desktop" | "tablet" | "mobile";

export function LiveDemoModal({ sample, onClose }: LiveDemoModalProps) {
  const [deviceMode, setDeviceMode] = useState<DeviceMode>("desktop");

  if (!sample) return null;

  const deviceWidths: Record<DeviceMode, string> = {
    desktop: "w-full max-w-6xl",
    tablet: "w-[768px]",
    mobile: "w-[375px]",
  };

  const iframeSrc = `/preview/${sample.slug}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-2 sm:p-4 overflow-hidden animate-fadeIn">
      {/* Modal Container */}
      <div className="relative flex h-[92vh] w-full max-w-7xl flex-col rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-4 py-3">
          {/* Sample Title */}
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
            <div>
              <h3 className="text-sm font-bold text-white leading-tight">{sample.title}</h3>
              <p className="text-[11px] text-slate-400">{sample.categoryLabel}</p>
            </div>
          </div>

          {/* Device Switcher Controls */}
          <div className="hidden sm:flex items-center gap-1 rounded-lg bg-slate-800/80 p-1 border border-slate-700/60">
            <button
              onClick={() => setDeviceMode("desktop")}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-semibold transition-all ${
                deviceMode === "desktop" ? "bg-studio-accent text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              <Monitor className="h-3.5 w-3.5" />
              <span>Desktop View</span>
            </button>
            <button
              onClick={() => setDeviceMode("tablet")}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-semibold transition-all ${
                deviceMode === "tablet" ? "bg-studio-accent text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              <Tablet className="h-3.5 w-3.5" />
              <span>Tablet View</span>
            </button>
            <button
              onClick={() => setDeviceMode("mobile")}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-semibold transition-all ${
                deviceMode === "mobile" ? "bg-studio-accent text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              <Smartphone className="h-3.5 w-3.5" />
              <span>Mobile View</span>
            </button>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            <a
              href={iframeSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-700"
            >
              <ExternalLink className="h-3.5 w-3.5 text-studio-cyan" />
              <span>Buka di Tab Baru</span>
            </a>

            <a
              href={getWhatsappOrderLink(sample.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-md hover:bg-emerald-500 transition-all"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Pesan Desain Ini</span>
            </a>

            <button
              onClick={onClose}
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Viewport Frame Body */}
        <div className="relative flex-1 bg-slate-950 p-3 sm:p-6 overflow-y-auto flex justify-center items-start">
          <div
            className={`transition-all duration-300 rounded-xl border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden h-[75vh] flex flex-col ${deviceWidths[deviceMode]}`}
          >
            {/* Browser Address Bar Simulation */}
            <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900 px-3 py-2 text-xs text-slate-400">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex-1 rounded-md bg-slate-800/80 px-3 py-1 text-[11px] font-mono text-slate-300 truncate text-center border border-slate-700/50">
                https://studio.alhusnaeducation.id/preview/{sample.slug}
              </div>
            </div>

            {/* Real Interactive Web iFrame */}
            <iframe
              src={iframeSrc}
              title={sample.title}
              className="w-full flex-1 border-none bg-slate-950"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
