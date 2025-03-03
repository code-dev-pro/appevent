"use client";

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
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">
              Voir les événements
            </button>
          </Link>
          <Link href="/events/new">
            <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg text-lg">
              Créer un événement
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
