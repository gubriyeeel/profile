import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Gallery } from "@/components/sections/gallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
    </main>
  );
}
