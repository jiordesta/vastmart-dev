import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../sections/Hero";
import { useDispatch, useSelector } from "react-redux";
import { fetch_user, signout } from "../redux/reducers/user_slice";
import { error, success } from "../redux/reducers/notification_slice";
import Loader from "../components/Loader";

export default function Homepage() {
  const dispatch = useDispatch();
  const { user, loading_user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetch_user());
  }, []);

  const handleLogout = () => {
    dispatch(signout()).then((res) => {
      if (res.error) {
        dispatch(error(res.error.message));
      } else {
        dispatch(success("Signed out"));
        dispatch(fetch_user());
      }
    });
  };

  const RightMenu = () => {
    return (
      <ul className="relative justify-center items-center gap-4 hidden lg:flex">
        <li className="flex">
          <div className="relative flex">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pl-10 pr-4 rounded-lg focus:outline-none bg-color1 bg-opacity-5 placeholder:text-color1"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <img src="/icons/search-icon.svg" width={30} height={30} alt="" />
            </span>
          </div>
        </li>
        <li>
          <span className=" flex justify-center items-center text-xl cursor-pointer py-4">
            {user ? (
              <img
                src="/icons/user-header-icon.svg"
                width={35}
                alt=""
                onClick={() => {
                  const element = document.getElementById("account-dropdown");
                  if (element.classList.contains("hidden")) {
                    element.classList.remove("hidden");
                  } else {
                    element.classList.add("hidden");
                  }
                }}
              />
            ) : (
              <Link to={"/signin-signup"}>
                <h1 className="text-base">SIGNIN</h1>
              </Link>
            )}
          </span>
        </li>
        <div
          id="account-dropdown"
          className="absolute right-0 top-[75px] rounded-lg flex flex-col items-end gap-2 hidden bg-color1 bg-opacity-25 heroxl:bg-opacity-0 p-2"
        >
          <button className="bg-color4 text-color1 px-8 py-1 rounded-lg hover:text-color3 drop-shadow-lg underline bg-opacity-75 hover:bg-opacity-100">
            my account
          </button>
          <button className="bg-color4 text-color1 px-8 py-1 rounded-lg hover:text-color3 drop-shadow-lg underline bg-opacity-75 hover:bg-opacity-100">
            my stores
          </button>
          <button
            className="bg-color4 text-color1 px-8 py-1 rounded-lg hover:text-color3 drop-shadow-lg underline bg-opacity-75 hover:bg-opacity-100"
            onClick={() => handleLogout()}
          >
            logout
          </button>
        </div>
      </ul>
    );
  };

  const BottomMenu = () => {
    return (
      <ul className="nav-menu hidden flex flex-col justify-start items-start gap-2 pt-2">
        <li className="flex">
          <div className="relative flex">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pl-10 pr-4 rounded-lg focus:outline-none bg-color1 bg-opacity-5 placeholder:text-color1"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <img src="/icons/search-icon.svg" width={30} height={30} alt="" />
            </span>
          </div>
        </li>
        <li className="rounded-lg flex flex-col gap-2 bg-color1 bg-opacity-25 heroxl:bg-opacity-0 p-2">
          <button className="bg-color4 text-color1 px-8 py-1 rounded-lg hover:text-color3 drop-shadow-lg underline bg-opacity-75 hover:bg-opacity-100">
            my account
          </button>
          <button className="bg-color4 text-color1 px-8 py-1 rounded-lg hover:text-color3 drop-shadow-lg underline bg-opacity-75 hover:bg-opacity-100">
            my stores
          </button>
          <button
            className="bg-color4 text-color1 px-8 py-1 rounded-lg hover:text-color3 drop-shadow-lg underline bg-opacity-75 hover:bg-opacity-100"
            onClick={() => handleLogout()}
          >
            logout
          </button>
        </li>
      </ul>
    );
  };

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
          <div className="block lg:hidden">
            <div
              className="burger-menu"
              onClick={() => {
                const burger = document.querySelector(".burger-menu");
                const menu = document.querySelector(".nav-menu");
                burger.classList.toggle("active");
                if (menu.classList.contains("hidden")) {
                  menu.classList.remove("hidden");
                } else {
                  menu.classList.add("hidden");
                }
              }}
            >
              <div className="bar" />
              <div className="bar" />
              <div className="bar" />
            </div>
          </div>
          <RightMenu />
        </div>
        <BottomMenu />
      </section>
    );
  };

  return (
    <>
      {loading_user ? (
        <div className="h-screen w-full flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="px-4 md:px-16 lg:px-64">
          <Header />
          <div>
            <div>
              <Hero />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
