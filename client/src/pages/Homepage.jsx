import React from "react";
import { Link } from "react-router-dom";
import Hero from "../sections/Hero";

export default function Homepage() {
  const Header = () => {
    return (
      <section className="h-full w-full sticky bg-white top-0 z-50">
        <div className="flex items-center justify-between text-color1  border-b border-color1">
          <ul>
            <li>
              <span className="flex justify-center items-center text-xl cursor-pointer py-4">
                <img src="/icons/logo.svg" width={40} height={40} alt="" />
                <h1 className="font-semibold text-2xl">VASTMART</h1>
              </span>
            </li>
          </ul>
          <ul className="justify-center items-center gap-4 hidden lg:flex">
            <li className="flex">
              <div className="relative flex">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full py-2 pl-10 pr-4 rounded-lg focus:outline-none bg-color1 bg-opacity-5 placeholder:text-color1"
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <img
                    src="/icons/search-icon.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                </span>
              </div>
            </li>
            <li>
              <span className="flex justify-center items-center text-xl cursor-pointer py-4">
                <Link to={"/signin-signup"}>
                  <h1 className="text-base">SIGNIN</h1>
                </Link>
              </span>
            </li>
          </ul>
        </div>
        <div className="py-2">
          <ul
            id="store-list-navigation"
            className="flex flex-col lg:flex-row bg-color1 bg-opacity-5 lg:bg-opacity-0 gap-2"
          >
            <li className="truncate hover:underline hover:text-color3 cursor-pointer">
              Fashion Store
            </li>
            <li className="truncate hover:underline hover:text-color3 cursor-pointer">
              Electronics Store
            </li>
            <li className="truncate hover:underline hover:text-color3 cursor-pointer">
              Real Estate Marketplace
            </li>
            <li className="truncate hover:underline hover:text-color3 cursor-pointer">
              Services Marketplace
            </li>
            <li className="underline hover:underline hover:text-color3 cursor-pointer">
              more
            </li>
          </ul>
        </div>
      </section>
    );
  };

  return (
    <div className="px-4 md:px-16 lg:px-64">
      <Header />
      <div>
        <div>
          <Hero />
        </div>
      </div>
    </div>
  );
}
