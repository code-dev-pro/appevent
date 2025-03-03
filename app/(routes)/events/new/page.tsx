"use client";

import { Button, Card, CardBody, CardHeader, Input, Textarea } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function NewEventPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const eventData = {
      name: formData.get("name"),
      desc: formData.get("desc"),
      picture: formData.get("picture"),
      startAt: new Date(formData.get("startAt") as string).toISOString(),
      endAt: new Date(formData.get("endAt") as string).toISOString(),
      address: {
        street: formData.get("street"),
        city: formData.get("city"),
        postalCode: formData.get("postalCode"),
        country: formData.get("country"),
      },
    };

    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la création de l'événement");
      }

      router.push("/events");
    } catch (error) {
      console.error("Erreur:", error);
      setLoading(false);
    }
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <h1 className="text-3xl font-bold">Créer un événement</h1>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nom de l'événement
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Nom de l'événement"
              />
            </div>

            <div>
              <label htmlFor="desc" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <Textarea
                id="desc"
                name="desc"
                required
                placeholder="Description de l'événement"
                rows={4}
              />
            </div>

            <div>
              <label htmlFor="picture" className="block text-sm font-medium text-gray-700">
                Image (URL)
              </label>
              <Input
                id="picture"
                name="picture"
                type="url"
                placeholder="URL de l'image"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="startAt" className="block text-sm font-medium text-gray-700">
                  Date de début
                </label>
                <Input
                  id="startAt"
                  name="startAt"
                  type="datetime-local"
                  required
                />
              </div>

              <div>
                <label htmlFor="endAt" className="block text-sm font-medium text-gray-700">
                  Date de fin
                </label>
                <Input
                  id="endAt"
                  name="endAt"
                  type="datetime-local"
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Adresse</h2>
              
              <div>
                <label htmlFor="street" className="block text-sm font-medium text-gray-700">
                  Rue
                </label>
                <Input
                  id="street"
                  name="street"
                  type="text"
                  placeholder="Rue"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    Ville
                  </label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Ville"
                  />
                </div>

                <div>
                  <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                    Code postal
                  </label>
                  <Input
                    id="postalCode"
                    name="postalCode"
                    type="text"
                    placeholder="Code postal"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Pays
                </label>
                <Input
                  id="country"
                  name="country"
                  type="text"
                  placeholder="Pays"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                color="secondary"
                onClick={() => router.push("/events")}
              >
                Annuler
              </Button>
              <Button
                type="submit"
                color="primary"
                disabled={loading}
              >
                {loading ? "Création..." : "Créer l'événement"}
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
