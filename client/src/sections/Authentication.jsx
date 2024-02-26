import React, { useState } from "react";
import Signin from "../components/Signin";
import Signup from "../components/Signup";

export default function Authentication() {
  const [showRegister, setShowRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <section className="h-full w-full">
      {showRegister ? (
        <Signup setShowRegister={setShowRegister} />
      ) : (
        <Signin setShowRegister={setShowRegister} />
      )}
    </section>
  );
}
