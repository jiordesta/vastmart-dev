import React from "react";
import { useParams } from "react-router-dom";

export default function Mystore() {
  const { category } = useParams();
  return <div className="px-4 md:px-16 lg:px-64">{category}</div>;
}
