import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const events = await prisma.event.findMany({
      orderBy: {
        startAt: 'asc'
      }
    });
    return NextResponse.json(events);
  } catch (error) {
    console.error("Erreur lors de la récupération des événements:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des événements" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validation basique
    if (!data.name || !data.desc || !data.startAt || !data.endAt) {
      return NextResponse.json(
        { error: "Données manquantes" },
        { status: 400 }
      );
    }

    const event = await prisma.event.create({
      data: {
        name: data.name,
        desc: data.desc,
        picture: data.picture || "",
        address: data.address,
        startAt: new Date(data.startAt),
        endAt: new Date(data.endAt),
      },
    });

    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    console.error("Erreur lors de la création de l'événement:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création de l'événement" },
      { status: 500 }
    );
  }
}
