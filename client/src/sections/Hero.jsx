import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const handleNavigate = (to) => {
    if (!user) {
      navigate("/signin-signup");
    } else {
      navigate(to);
    }
  };

  const typeStores = [
    {
      icon: "/icons/fashion.svg",
      title: "fashion",
      stores: "100",
      products: "5999",
    },
    {
      icon: "/icons/gadgets.svg",
      title: "gadgets",
      stores: "1220",
      products: "55999",
    },
    {
      icon: "/icons/appliances.svg",
      title: "appliances",
      stores: "20",
      products: "59",
    },
    {
      icon: "/icons/beverages.svg",
      title: "beverages",
      stores: "10",
      products: "29",
    },
    {
      icon: "/icons/food.svg",
      title: "food",
      stores: "1770",
      products: "291233",
    },
    {
      icon: "/icons/fruits.svg",
      title: "fruits",
      stores: "170",
      products: "2233",
    },
  ];

  return (
    <>
      <section className="flex flex-col heroxl:flex-row gap-8 py-2 md:py-4 lg:py-8 text-color1">
        <div className="w-full space-y-4 lg:space-y-8">
          <div className="flex flex-row lg:flex-col gap-2">
            <div className="bg-color3 px-1 lg:py-2 w-[10px] lg:w-full"></div>
            <h1 className="text-4xl xm:text-6xl md:text-7xl xl:text-8xl font-semibold uppercase">
              what is vastmart?
            </h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nisi
            cumque possimus amet perferendis, officia mollitia enim modi
            consequatur omnis dolorem facilis ab fuga inventore. Lorem ipsum
            dolor sit amet consectetur adipisicing eli
          </p>
          <div className="w-full flex justify-center lg:justify-start items-center">
            <button
              className="bg-color1 text-white px-8 py-2 uppercase rounded-lg w-full lg:w-[250px]"
              onClick={() => handleNavigate("/stores")}
            >
              get started
            </button>
          </div>
        </div>
        <div className="w-full hero-img h-[300px] md:h-[400px] lg:h-[500px] rounded-lg"></div>
      </section>
      <section className="text-color1 py-2 md:py-4 lg:py-8">
        <div className="w-full py-4">
          <h1 className="text-4xl uppercase font-bold">
            home for all types of products
          </h1>
          <h1 className="underline py-4 hover:text-color3 cursor-pointer">
            want to sell a product?
          </h1>
        </div>
        <div className="w-full space-y-4">
          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
            {typeStores.map((ts) => {
              return (
                <li key={ts.title}>
                  <div
                    className="rounded-lg p-4 flex gap-4 border-2 border-color1 transition-all duration-100 hover:-translate-y-1 cursor-pointer"
                    onClick={() => handleNavigate(`/stores/${ts.title}`)}
                  >
                    <div className="flex justify-center items-center p-2">
                      <img src={ts.icon} width={45} height={45} alt="" />
                    </div>
                    <div>
                      <h1 className="uppercase">{ts.title}</h1>
                      <p className="border-t-2 border-color1">
                        {`over ${ts.stores} stores`}
                      </p>
                      <p className="">{`with a total ${ts.products} products`}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="w-full flex justify-center items-center">
            <button
              className="uppercase underline"
              onClick={() => handleNavigate("/stores")}
            >
              and more
            </button>
          </div>
        </div>
      </section>
      <section className="h-[500px] py-4">
        <div className="bg-color1 h-full rounded-lg text-color4 p-8 flex flex-col justify-center items-center">
          <div className="flex flex-wrap w-full items-center justify-center gap-4">
            <ul className="w-[200px] flex flex-col items-center">
              <li>
                <h1 className="hover:underline cursor-pointer">About us</h1>
              </li>
              <li>
                <h1 className="hover:underline cursor-pointer">Feedback</h1>
              </li>
              <li>
                <h1 className="hover:underline cursor-pointer">Community</h1>
              </li>
            </ul>
            <ul className="w-[200px] flex flex-col items-center">
              <li>
                <h1 className="hover:underline cursor-pointer">
                  Trust, Safety & Security
                </h1>
              </li>
              <li>
                <h1 className="hover:underline cursor-pointer">
                  Help & Support
                </h1>
              </li>
              <li>
                <h1 className="hover:underline cursor-pointer">
                  Upwork Foundation
                </h1>
              </li>
            </ul>
            <ul className="w-[200px] flex flex-col items-center">
              <li>
                <h1 className="hover:underline cursor-pointer">
                  Terms of Service
                </h1>
              </li>
              <li>
                <h1 className="hover:underline cursor-pointer">
                  Privacy Policy
                </h1>
              </li>
              <li>
                <h1 className="hover:underline cursor-pointer">
                  CA Notice at Collection
                </h1>
              </li>
            </ul>
            <ul className="w-[200px] flex flex-col items-center">
              <li>
                <h1 className="hover:underline cursor-pointer">
                  Accessibility
                </h1>
              </li>
              <li>
                <h1 className="hover:underline cursor-pointer">
                  Cookie Policy
                </h1>
              </li>
              <li>
                <h1 className="hover:underline cursor-pointer">
                  Enterprise Solutions
                </h1>
              </li>
            </ul>
          </div>
          <div className="bg-color4 py-[1px] my-4 w-full"></div>
          <div className="flex flex-col md:flex-row justify-center items-center text-sm md:text-base">
            <h1>© 2021 - 2024 VASTMART® Global Inc.</h1>
            <h1>•</h1>
            <h1>Privacy Policy</h1>
          </div>
        </div>
      </section>
    </>
  );
}
