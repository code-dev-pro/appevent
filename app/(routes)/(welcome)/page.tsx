"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl text-center space-y-8">
        <h1 className="text-4xl font-bold">
          Bienvenue sur APP Event
        </h1>
        <p className="text-xl text-gray-600">
          Découvrez et créez des événements incroyables
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/events">
            <Button color="primary" size="lg">
              Voir les événements
            </Button>
          </Link>
          <Link href="/events/new">
            <Button color="secondary" size="lg">
              Créer un événement
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
