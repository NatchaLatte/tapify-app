/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [popCount, setPopCount] = useState<number>(0);
  const [pressAudio, setPressAudio] = useState<HTMLAudioElement | null>(null);
  const [isShaking, setIsShaking] = useState<boolean>(false);

  async function press() {
    try {
      setPopCount(prevCount => prevCount + 1);

      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 200);

      if (!pressAudio) {
        const audio = new Audio("/asset/audio/press-audio.mp3");
        setPressAudio(audio);
        await audio.play();
      } else {
        pressAudio.currentTime = 0;
        await pressAudio.play();
      }
    } catch (none) {}
  }

  return (
    <div
      className="flex flex-col justify-between w-screen h-screen"
      onMouseDown={press}
      onTouchStart={press}
    >
      <div id="stars"></div>
      <header className="flex flex-col justify-center items-center">
        <h1 className="text-white font-bold text-stroke text-7xl my-5 antialiased text-center z-10">
          Tapify
        </h1>
        <div
          className={`text-white font-bold text-stroke text-6xl antialiased text-center ${isShaking ? "shake" : ""} z-10`}
        >
          {popCount}
        </div>
      </header>
      <main className="flex justify-center items-end">
        <Image
          src="/asset/image/character.png"
          className={`${isShaking ? "character" : ""} pointer-events-none z-10`}
          width={500}
          height={500}
          alt="Character"
          priority
        />
      </main>
    </div>
  );
}
