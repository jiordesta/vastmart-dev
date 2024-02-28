import React, { useState } from "react";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Footer from "./Footer";

export default function Authentication() {
  const [showRegister, setShowRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <section className="h-full w-full">
        {showRegister ? (
          <Signup setShowRegister={setShowRegister} />
        ) : (
          <Signin setShowRegister={setShowRegister} />
        )}
      </section>
      <div className="pb-4">
        <Footer />
      </div>
    </>
  );
}
