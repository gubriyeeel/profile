import { TextFlip } from "@/components/text-flip";
import { Tooltip } from "@/components/tooltip";
import { Button } from "@/components/ui/button";

import { people } from "@/constants";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-fit pt-4 pb-32 md:pt-8 text-balance text-center">
      <p className="font-semibold py-2 px-6 border rounded-full shadow-sm">
        Meet the team
      </p>
      <h1 className="text-6xl md:text-8xl leading-normal md:leading-normal">
        System
        <TextFlip />
      </h1>

      <div className="flex flex-col md:flex-row gap-8 items-center mt-14">
        <div className="flex items-center justify-center w-full">
          <Tooltip items={people} />
        </div>

        <Button className="font-bold text-xl md:text-2xl rounded-full py-8 px-8">
          Get to know us
        </Button>
      </div>
    </section>
  );
}
