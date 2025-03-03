"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Event } from "@prisma/client";

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des événements:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Événements</h1>
        <Link href="/events/new">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Nouveau
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Link key={event.id} href={`/events/${event.id}`}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <h3 className="text-xl font-semibold">{event.name}</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 line-clamp-3">{event.desc}</p>
              </CardBody>
              <CardFooter>
                <div className="text-sm text-gray-500">
                  {new Date(event.startAt).toLocaleDateString()}
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
