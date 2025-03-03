import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

type Props = {
  params: {
    id: string;
  };
};

export async function GET(_: NextRequest, { params }: Props) {
  try {
    const event = await prisma.event.findUnique({
      where: {
        id: params.id,
      },
    });

    if (!event) {
      return Response.json(
        { error: "Événement non trouvé" },
        { status: 404 }
      );
    }

    return Response.json(event);
  } catch (error) {
    console.error("Erreur lors de la récupération de l&apos;événement:", error);
    return Response.json(
      { error: "Erreur lors de la récupération de l&apos;événement" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, { params }: Props) {
  try {
    const data = await request.json();
    const event = await prisma.event.update({
      where: {
        id: params.id,
      },
      data: {
        name: data.name,
        desc: data.desc,
        picture: data.picture,
        address: data.address,
        startAt: new Date(data.startAt),
        endAt: new Date(data.endAt),
      },
    });

    return Response.json(event);
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l&apos;événement:", error);
    return Response.json(
      { error: "Erreur lors de la mise à jour de l&apos;événement" },
      { status: 500 }
    );
  }
}

export async function DELETE(_: NextRequest, { params }: Props) {
  try {
    await prisma.event.delete({
      where: {
        id: params.id,
      },
    });

    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("Erreur lors de la suppression de l&apos;événement:", error);
    return Response.json(
      { error: "Erreur lors de la suppression de l&apos;événement" },
      { status: 500 }
    );
  }
}
