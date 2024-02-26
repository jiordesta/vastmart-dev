import React from "react";

export default function Header() {
  return (
    <section className="h-full w-full flex items-center justify-between text-color1">
      <span className="flex justify-center items-center text-xl cursor-pointer p-4">
        <img src="/icons/logo.svg" width={40} height={40} alt="" />
        <h1 className="hidden md:block">VASTMART</h1>
      </span>
      <span className="flex justify-center items-center text-xl cursor-pointer p-4">
        <img src="/icons/arrow-left-icon.svg" width={40} height={40} alt="" />
        <h1 className="hidden md:block">Go back</h1>
      </span>
    </section>
  );
}
