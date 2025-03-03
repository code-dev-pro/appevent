import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/events/[id]
export async function GET(request: NextRequest) {
  const id = request.nextUrl.pathname.split('/').pop();

  try {
    const event = await prisma.event.findUnique({
      where: { id },
    });

    if (!event) {
      return new Response(
        JSON.stringify({ error: "Événement non trouvé" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify(event),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Erreur lors de la récupération de l&apos;événement:", error);
    return new Response(
      JSON.stringify({ error: "Erreur lors de la récupération de l&apos;événement" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// PUT /api/events/[id]
export async function PUT(request: NextRequest) {
  const id = request.nextUrl.pathname.split('/').pop();

  try {
    const data = await request.json();
    const event = await prisma.event.update({
      where: { id },
      data: {
        name: data.name,
        desc: data.desc,
        picture: data.picture,
        address: data.address,
        startAt: new Date(data.startAt),
        endAt: new Date(data.endAt),
      },
    });

    return new Response(
      JSON.stringify(event),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l&apos;événement:", error);
    return new Response(
      JSON.stringify({ error: "Erreur lors de la mise à jour de l&apos;événement" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// DELETE /api/events/[id]
export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.pathname.split('/').pop();

  try {
    await prisma.event.delete({
      where: { id },
    });

    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("Erreur lors de la suppression de l&apos;événement:", error);
    return new Response(
      JSON.stringify({ error: "Erreur lors de la suppression de l&apos;événement" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}