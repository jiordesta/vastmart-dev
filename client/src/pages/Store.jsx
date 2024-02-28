import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetch_store } from "../redux/reducers/store_slice";
import Loader from "../components/Loader";
import Footer from "../sections/Footer";

export default function Store() {
  const { id } = useParams();
  const [store, setStore] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetch_store(id)).then((res) => {
      if (res.error) {
        navigate("/");
      } else {
        setStore(res.payload);
      }
    });
  }, []);

  const Header = () => {
    return (
      <section className="h-full w-full flex items-center justify-between text-color1  border-b border-color1 sticky top-0 z-40 bg-white">
        <Link to={"/stores"}>
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

  const Product = () => {
    return (
      <div className="w-full border border-color1 border-dashed rounded-lg bg-black bg-opacity-10 h-[300px] p-2 cursor-pointer hover:bg-opacity-25">
        <div
          className="h-[200px] rounded-lg"
          style={{
            backgroundImage: `url('${store.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div>
          <h1>Product Name</h1>
          <h1 className="overflow-auto max-h-[50px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            aut cumque, expedita adipisci fuga neque?
          </h1>
        </div>
      </div>
    );
  };

  return (
    <>
      {store ? (
        <div className="px-4 md:px-16 lg:px-64 text-color1">
          <Header />
          <div className="flex gap-4 pt-4 flex-col xl:flex-row">
            <div className="h-full w-full xl:w-1/4 space-y-2">
              <div className="border border-color1 border-dashed rounded-lg p-2">
                <div
                  className="h-[250px]"
                  style={{
                    backgroundImage: `url('${store.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <h1 className="text-2xl font-semibold">{store.name}</h1>
                <h1>{store.desc}</h1>
              </div>
              <div className="space-y-2">
                <div className="bg-color1 bg-opacity-25 rounded-lg p-2 space-y-2">
                  <div className="border-b border-color1">
                    <h1 className="text-xl">TOTAL: $9,992,009</h1>
                    <h1 className="text-xl">ITEMS: 53</h1>
                  </div>
                  <button className="bg-color1 px-4 py-1 w-full text-color4 rounded-lg">
                    Checkout
                  </button>
                </div>
                <ul className="bg-color1 bg-opacity-25 rounded-lg p-2 space-y-2 overflow-auto max-h-[500px]">
                  <li>milk - 9x</li>
                  <li>milk - 2x</li>
                  <li>milk - 2x</li>
                </ul>
              </div>
            </div>
            <div className="h-full w-full xl:w-3/4">
              <ul className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 max-h-[700px] overflow-auto">
                <li>
                  <Product />
                </li>
                <li>
                  <Product />
                </li>
                <li>
                  <Product />
                </li>
                <li>
                  <Product />
                </li>
                <li>
                  <Product />
                </li>
                <li>
                  <Product />
                </li>
                <li>
                  <Product />
                </li>
                <li>
                  <Product />
                </li>
                <li>
                  <Product />
                </li>
                <li>
                  <Product />
                </li>
                <li>
                  <Product />
                </li>
                <li>
                  <Product />
                </li>
                <li>
                  <Product />
                </li>
                <li>
                  <Product />
                </li>
                <li>
                  <Product />
                </li>
                <li>
                  <Product />
                </li>
                <li>
                  <Product />
                </li>
                <li>
                  <Product />
                </li>
                <li>
                  <Product />
                </li>
                <li>
                  <Product />
                </li>
                <li>
                  <Product />
                </li>
                <li>
                  <Product />
                </li>
                <li>
                  <Product />
                </li>
                <li>
                  <Product />
                </li>
              </ul>
            </div>
          </div>
          <div className="py-4">
            <Footer />
          </div>
        </div>
      ) : (
        <div className="h-screen w-full flex justify-center items-center">
          <Loader />
        </div>
      )}
    </>
  );
}
