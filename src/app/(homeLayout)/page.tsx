"use client";

import HomeSearchBar from "@/components/home/HomeSearchBar";
import PopularChannels from "@/components/home/PopularChannels";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-150px)] h-full flex flex-col items-center justify-center gap-10">
      <h1 className="font-bold text-7xl text-center leading-snug">
        Search any <br />
        YouTube Chanel
      </h1>
      <HomeSearchBar />
      <PopularChannels />
    </div>
  );
}
