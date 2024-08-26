import { Hero } from "@/components/sections/hero";
import { Members } from "@/components/sections/members";
import { Gallery } from "@/components/sections/gallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <Members />
      <Gallery />
    </main>
  );
}
