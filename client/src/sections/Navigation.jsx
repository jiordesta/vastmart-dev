import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [size, setSize] = useState(0);
  const [toggle, setToggle] = useState(false);

  const Burger = () => {
    return (
      <div
        className="burger-menu flex lg:hidden"
        onClick={() => {
          setToggle(!toggle);
          console.log("hello");
          document.querySelector(".burger-menu").classList.toggle("active");
        }}
      >
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
    );
  };

  const RightNavigation = () => {
    return (
      <>
        <Burger />
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
                <h1>SIGNIN</h1>
              </Link>
            </span>
          </li>
        </ul>
      </>
    );
  };

  const LeftNavigation = () => {
    return (
      <ul>
        <li>
          <span className="flex justify-center items-center text-xl cursor-pointer py-4">
            <img src="/icons/logo.svg" width={40} height={40} alt="" />
            <h1>VASTMART</h1>
          </span>
        </li>
      </ul>
    );
  };

  return (
    <section className="h-full w-full px-4 md:px-16 lg:px-64 sticky bg-white top-0">
      <div className="flex items-center justify-between text-color1  border-b border-color1">
        <LeftNavigation />
        <RightNavigation />
      </div>
    </section>
  );
}
