import React from "react";
import Authentication from "../sections/Authentication";
import { Link } from "react-router-dom";

export default function Authpage() {
  const Header = () => {
    return (
      <section className="h-full w-full flex items-center justify-between text-color1">
        <Link to={"/"}>
          <span className="flex justify-center items-center text-xl cursor-pointer py-4">
            <img
              src="/icons/arrow-left-icon.svg"
              width={40}
              height={40}
              alt=""
            />
            <h1 className="hidden md:block">Go back</h1>
          </span>
        </Link>
      </section>
    );
  };

  return (
    <div className="h-screen w-full p-4 md:px-16 lg:px-64">
      <div className="h-[10%]">
        <Header />
      </div>
      <div className="h-[90%]">
        <Authentication />
      </div>
    </div>
  );
}
