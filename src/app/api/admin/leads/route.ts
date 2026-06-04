import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const search = url.searchParams.get("search") || "";
    
    const leads = await prisma.lead.findMany({
      where: {
        OR: [
          { name: { contains: search } },
          { phone: { contains: search } },
          { city: { contains: search } },
        ]
      },
      orderBy: {
        created_at: 'desc'
      }
    });

    return NextResponse.json({ success: true, leads }, { status: 200 });
  } catch (error) {
    console.error("Fetch leads error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
