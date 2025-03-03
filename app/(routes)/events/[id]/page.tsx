"use client";

import { Card, CardBody, CardHeader } from "@heroui/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Event } from "@prisma/client";
import Image from "next/image";

export default function EventPage() {
  const { id } = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement de l'événement:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!event) {
    return <div>Événement non trouvé</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <h1 className="text-3xl font-bold">{event.name}</h1>
          <div className="text-gray-500 mt-2">
            Du {new Date(event.startAt).toLocaleDateString()} au{" "}
            {new Date(event.endAt).toLocaleDateString()}
          </div>
        </CardHeader>
        <CardBody>
          {event.picture && (
            <div className="relative w-full h-64 mb-6">
              <Image
                src={event.picture}
                alt={event.name}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
          <p className="text-gray-600 whitespace-pre-wrap">{event.desc}</p>
          
          {event.address && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Lieu</h2>
              <div className="text-gray-600">
                {JSON.stringify(event.address, null, 2)}
              </div>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
