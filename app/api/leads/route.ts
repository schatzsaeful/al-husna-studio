import { NextResponse } from "next/server";
import { db, schema } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { clientName, clientPhone, selectedPackage, projectBrief } = body;

    if (!clientName || !clientPhone) {
      return NextResponse.json(
        { error: "Nama dan Nomor WhatsApp wajib diisi." },
        { status: 400 }
      );
    }

    const newLeadId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

    // Attempt DB insert if Turso DB client is active
    if (db) {
      await db.insert(schema.studioLeads).values({
        id: newLeadId,
        clientName,
        clientPhone,
        selectedPackage: selectedPackage || "Paket Landing Page",
        projectBrief: projectBrief || "",
        status: "new",
        createdAt: new Date().toISOString(),
      });
    }

    return NextResponse.json({
      success: true,
      message: "Lead berhasil disimpan.",
      leadId: newLeadId,
    });
  } catch (error) {
    console.error("Error saving lead:", error);
    return NextResponse.json(
      { error: "Gagal menyimpan data lead." },
      { status: 500 }
    );
  }
}
