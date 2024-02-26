import React from "react";

export default function Loader({ w, h }) {
  return (
    <div className="absolute inset-0  flex justify-center items-center bg-black bg-opacity-50 rounded-lg">
      <img src="/icons/loader-animation.svg" width={w} height={h} alt="" />
    </div>
  );
}
