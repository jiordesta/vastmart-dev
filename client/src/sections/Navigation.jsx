import React from "react";

export default function Navigation() {
  return (
    <section className="h-full w-full flex items-center justify-between text-color1 border-b-2">
      <ul>
        <li>
          <span className="flex justify-center items-center text-xl cursor-pointer p-4">
            <img src="/icons/logo.svg" width={40} height={40} alt="" />
            <h1>VASTMART</h1>
          </span>
        </li>
      </ul>
      <ul className="flex justify-center items-center gap-4">
        <li className="flex">
          <div className="relative flex">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pl-10 pr-4 rounded-lg focus:outline-none bg-color1 bg-opacity-5 placeholder:text-color1"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <img src="/icons/search-icon.svg" width={30} height={30} alt="" />
            </span>
          </div>
        </li>
        <li>
          <span className="flex justify-center items-center text-xl cursor-pointer p-4">
            <h1>SIGNIN</h1>
          </span>
        </li>
      </ul>
    </section>
  );
}