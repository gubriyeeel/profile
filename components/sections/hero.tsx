import { TextFlip } from "@/components/text-flip";
import { Tooltip } from "@/components/tooltip";
import { Button } from "@/components/ui/button";

import { people } from "@/constants";
import Link from "next/link";

export function Hero() {
  return (
    <section className="flex flex-col items-center md:justify-center min-h-[calc(100svh-145px)] text-balance text-center">
      <div className="w-full pb-12 sm:pt-4">
        <p className="font-semibold py-2 px-6 border rounded-full shadow-sm w-fit mx-auto">
          Meet the team
        </p>
        <h1 className="text-5xl md:text-7xl leading-snug md:leading-normal">
          System
          <TextFlip />
        </h1>

        <div className="mt-8 flex items-center justify-center w-full">
          <Tooltip items={people} />
        </div>

        <div className="flex flex-col gap-4 sm:gap-8 items-center mt-4">
          <p className="text-base sm:text-lg md:text-2xl text-muted-foreground">
            Explore and get to know the <br className="hidden sm:inline" />{" "}
            talented individuals behind the scenes
          </p>

          <Link href="/members">
            <Button className="font-bold text-lg sm:text-xl md:text-2xl rounded-full py-6 px-6 sm:py-8 sm:px-8">
              Get to know us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
