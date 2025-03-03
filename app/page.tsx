"use client";

import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="max-w-md">
        <CardHeader>
          <h4 className="text-xl font-semibold">Test HeroUI</h4>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="text-gray-600">
            Voici un exemple de carte avec différents composants HeroUI.
          </p>
          <div className="flex gap-2 mt-4">
            <Button color="primary">
              Bouton Primaire
            </Button>
            <Button color="secondary">
              Bouton Secondaire
            </Button>
          </div>
        </CardBody>
        <Divider />
        <CardFooter>
          <p className="text-sm text-gray-500">
            Créé avec HeroUI et Next.js
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}
