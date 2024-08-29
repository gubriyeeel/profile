"use client";

import Link from "next/link";

type HoverCardProps = {
  firstName: string;
  description: string;
  imageUrl: string;
  id: number;
};

export function HoverCard({
  firstName,
  description,
  imageUrl,
  id,
}: HoverCardProps) {
  return (
    <Link href={`/members/${id}`}>
      <div className="max-w-xs w-full min-w-[285px] shadow-md">
        <div
          className="group cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto bg-cover flex flex-col justify-end transition-all duration-300"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40 transition duration-500 group-hover:bg-black/60"></div>

          <div className="h-fit z-10 p-4">
            <h1 className="font-bold text-xl md:text-2xl text-white">
              {firstName}
            </h1>
            <p className="font-normal text-sm text-gray-200 mt-1">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
