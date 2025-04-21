"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import { Carousel } from "@/components/ui/carousel";
import { Alert } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
// import { AlertDialog } from "@/components/ui/alert-dialog";
// import { Accordion } from "@/components/ui/accordion";
// import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Calendar } from "@/components/ui/calendar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-gray-800 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Ninja Hattori Universe</h1>
        <p className="text-lg">
          Join Hattori and his friends in their ninja adventures!
        </p>
      </header>

      <section className="mb-10 text-center">
        <Alert>
          <strong className="w-[100px]">Did you know?</strong> Ninja Hattori aired first in 1981 and
          is still loved today!
        </Alert>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
        <Card>
          <CardContent className="p-4">
            <Avatar>
              <img
                alt="Hattori"
                src="https://static.wikia.nocookie.net/ninjahattori/images/f/f6/Hattori-kun.jpg"
              />
            </Avatar>
            <h2 className="text-xl font-semibold mt-2">Hattori</h2>
            <p>
              The friendly ninja from Iga clan who helps Kenichi stay out of
              trouble.
            </p>
            <Badge>Protagonist</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <Avatar>
              <img
                alt="Kenichi"
                src="https://static.wikia.nocookie.net/ninjahattori/images/7/76/Kenichi.jpg"
              />
            </Avatar>
            <h2 className="text-xl font-semibold mt-2">Kenichi</h2>
            <p>
              A regular boy who constantly needs Hattori's help to stay out of
              messes.
            </p>
            <Badge>Support</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <Avatar>
              <img
                alt="Kemumaki"
                src="https://static.wikia.nocookie.net/ninjahattori/images/3/3e/Kemumaki.jpg"
              />
            </Avatar>
            <h2 className="text-xl font-semibold mt-2">Kemumaki</h2>
            <p>
              Hattori's ninja rival from the Koga clan who loves stirring
              trouble.
            </p>
            <Badge className="bg-red-500">Rival</Badge>
          </CardContent>
        </Card>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-4">Episode Timeline</h3>
        <Calendar />
      </section>

      {/* <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-4">Hattori's Skills Chart</h3>
        <Chart />
      </section> */}

      <section className="text-center">
        <Button size="lg">Watch Episodes</Button>
      </section>

      <footer className="mt-16 text-center text-sm text-slate-500">
        Made with ❤️ using Shadcn UI - Ninja Hattori Fanpage - by Utkarsh
      </footer>
    </main>
  );
}
