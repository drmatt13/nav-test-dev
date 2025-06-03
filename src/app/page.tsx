"use client";

import { useState } from "react";

export default function Home() {
  const [size, setSize] = useState(6);

  return (
    <>
      {/* Sticky Navbar */}
      <nav
        className="w-full bg-black/80 backdrop-blur sticky top-0 z-50 px-4 flex justify-between items-center"
        style={{ height: `${size}rem` }}
      >
        <div className="text-white">Navbar</div>
        <div className="flex text-2xl gap-4">
          <button
            onClick={() => setSize(size - 1)}
            className="h-10 aspect-square bg-white/90 hover:bg-white cursor-pointer transition-colors flex justify-center items-center rounded"
          >
            -
          </button>
          <button
            onClick={() => setSize(size + 1)}
            className="h-10 aspect-square bg-white/90 hover:bg-white cursor-pointer transition-colors flex justify-center items-center rounded"
          >
            +
          </button>
        </div>
      </nav>

      <main className="w-full flex flex-col text-lg font-bold">
        <div
          className="w-full flex justify-center items-center bg-blue-400"
          style={{ height: `calc(100svh - ${size}rem)` }}
        >
          Map
        </div>

        <div className="w-full flex p-12 justify-center items-center">
          Component 1
        </div>
        <div className="w-full flex p-12 justify-center items-center">
          Component 2
        </div>
        <div className="w-full flex p-12 justify-center items-center">
          Component 3
        </div>
        <div className="w-full flex p-12 justify-center items-center">
          Component 4
        </div>
        <div className="w-full flex p-12 justify-center items-center">
          Component 5
        </div>
        <div className="w-full flex p-12 justify-center items-center">
          Component 6
        </div>
      </main>
    </>
  );
}
