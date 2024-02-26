import React from "react";
import Header from "../sections/Header";
import Authentication from "../sections/Authentication";

export default function Authpage() {
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
