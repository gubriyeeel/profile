import { TextFlip } from "@/components/text-flip";
import { Tooltip } from "@/components/tooltip";
import { Button } from "@/components/ui/button";

import { people } from "@/constants";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[600px] text-balance text-center">
      <p className="font-semibold py-2 px-6 border rounded-full shadow-sm">
        Meet the team
      </p>
      <h1 className="text-8xl leading-normal">
        System
        <TextFlip />
      </h1>

      <div className="flex flex-row items-center justify-center mt-8 w-full">
        <Tooltip items={people} />
      </div>

      <Button className="mt-10 font-bold text-2xl rounded-full py-8 px-8">
        Get to know us
      </Button>
    </section>
  );
}
