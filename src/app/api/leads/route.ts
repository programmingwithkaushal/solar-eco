import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const dynamic = 'force-dynamic';

// Use a global prisma instance to prevent multiple connections in dev
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const lead = await prisma.lead.create({
      data: {
        name: body.name,
        phone: body.phone,
        city: body.city,
        monthly_bill: body.monthly_bill,
        roof_type: body.roof_type,
        capacity: body.capacity,
      },
    });

    // Optional Google Sheets integration service layer placeholder
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      try {
        const response = await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lead),
        });
        const text = await response.text();
        console.log("Google Sheets Webhook Response:", response.status, text);
      } catch (err) {
        console.error("Failed to sync to Google Sheets:", err);
        // We don't fail the request if just sheets sync fails
      }
    }

    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
