import React, { useState } from "react";
import Loader from "./Loader";
import { useDispatch } from "react-redux";
import { signin } from "../redux/reducers/user_slice";
import { error, success } from "../redux/reducers/notification_slice";
import { useNavigate } from "react-router-dom";

export default function Signin({ setShowRegister }) {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    setLoading(true);
    dispatch(signin({ username, password })).then((res) => {
      if (res.error) {
        dispatch(error(res.error.message));
      } else {
        dispatch(success("Logged in successful"));
        navigate("/");
      }
      setLoading(false);
    });
  };

  return (
    <div className="h-full text-color4">
      <div className="h-[85%]">
        <div className="w-full h-full flex justify-center items-center">
          <div className="relative w-full md:w-[50%] lg:w-[40%] flex flex-col gap-2 md:border border-color1 md:p-4 rounded-lg">
            <div className="relative flex items-center">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <img src="/icons/user-icon.svg" width={30} height={30} alt="" />
              </span>
              <input
                type="text"
                placeholder="USERNAME"
                onChange={(e) => setUsername(e.target.value)}
                className="w-full py-2 pl-12 pr-2 rounded-md focus:outline-none bg-color2 bg-opacity-10 focus:bg-opacity-5 text-color1"
              />
            </div>
            <div className="relative flex items-center">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <img src="/icons/key-icon.svg" width={30} height={30} alt="" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="PASSWORD"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-2 pl-12 pr-12 rounded-md focus:outline-none bg-color2 bg-opacity-10 focus:bg-opacity-5 text-color1"
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <img
                    src="/icons/open-icon.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                ) : (
                  <img
                    src="/icons/close-icon.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                )}
              </span>
            </div>
            <button
              className="bg-color1 bg-opacity-75 hover:bg-opacity-100 p-4 rounded-lg text-xl font-semibold"
              onClick={() => {
                handleLogin();
              }}
            >
              Signin
            </button>
            <div className="flex gap-4 justify-center items-center text-color1">
              <div className="bg-color1 w-full h-[1px]" />
              <h1>or</h1>
              <div className="bg-color1 w-full h-[1px]" />
            </div>
            <button
              className="text-black underline"
              onClick={() => setShowRegister(true)}
            >
              create new account
            </button>
            {loading && <Loader w={75} h={75} />}
          </div>
        </div>
      </div>
    </div>
  );
}
