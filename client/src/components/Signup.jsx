import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../redux/reducers/user_slice";
import Loader from "./Loader";
import { error, success } from "../redux/reducers/notification_slice";
export default function Signup({ setShowRegister }) {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [confirm, setConfirm] = useState(true);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPasword2] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const handleSignup = () => {
    if (!confirm) {
      dispatch(error("Your password and confirm password are not the same"));
      return;
    }
    setLoading(true);
    dispatch(signup({ name, username, password })).then((res) => {
      if (res.error) {
        dispatch(error(res.error.message));
      } else {
        dispatch(
          success("Great! now you have successfully created an account.")
        );
        setShowRegister(false);
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    if (password === "" || password2 === "") {
      setConfirm(false);
      return;
    }
    if (password === password2) {
      setConfirm(true);
    } else {
      setConfirm(false);
    }
  }, [password, password2]);

  return (
    <div className="h-full text-color4">
      <div className="h-[85%]">
        <div className="w-full h-full flex justify-center items-center">
          <div className="relative w-full md:w-[50%] lg:w-[40%] flex flex-col gap-2 md:border border-color1 md:p-4 rounded-lg">
            <div className="relative flex items-center">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <img
                  src="/icons/identity-icon.svg"
                  width={30}
                  height={30}
                  alt=""
                />
              </span>
              <input
                type="text"
                placeholder="YOUR NAME"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full py-2 pl-12 pr-2 rounded-md focus:outline-none bg-color2 bg-opacity-10 focus:bg-opacity-5 text-color1"
              />
            </div>
            <div className="relative flex items-center">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <img src="/icons/user-icon.svg" width={30} height={30} alt="" />
              </span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="YOUR USERNAME"
                className="w-full py-2 pl-12 pr-2 rounded-md focus:outline-none bg-color2 bg-opacity-10 focus:bg-opacity-5 text-color1"
              />
            </div>
            <div className="relative flex items-center">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <img src="/icons/key-icon.svg" width={30} height={30} alt="" />
              </span>
              <input
                type={showPassword1 ? "text" : "password"}
                placeholder="CREATE PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full py-2 pl-12 pr-12 rounded-md focus:outline-none ${
                  password === "" || password2 === ""
                    ? "bg-color1 bg-opacity-10"
                    : confirm
                    ? "bg-[#65B741]"
                    : "bg-[#D24545]"
                } bg-opacity-10 focus:bg-opacity-5 text-color1`}
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                onClick={() => setShowPassword1(!showPassword1)}
              >
                {showPassword1 ? (
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
            <div className="relative flex items-center">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                {confirm ? (
                  <img
                    src="/icons/check-icon.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                ) : (
                  <img
                    src="/icons/cross-icon.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                )}
              </span>
              <input
                type={showPassword2 ? "text" : "password"}
                placeholder="CONFIRM PASSWORD"
                value={password2}
                onChange={(e) => setPasword2(e.target.value)}
                className={`w-full py-2 pl-12 pr-12 rounded-md focus:outline-none ${
                  password === "" || password2 === ""
                    ? "bg-color1 bg-opacity-10"
                    : confirm
                    ? "bg-[#65B741]"
                    : "bg-[#D24545]"
                } bg-opacity-10 focus:bg-opacity-5 text-color1`}
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                onClick={() => setShowPassword2(!showPassword2)}
              >
                {showPassword2 ? (
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
              className={`bg-color1 p-4 rounded-lg text-xl font-semibold ${
                name && username && confirm ? "" : "cursor-not-allowed"
              }`}
              onClick={() => {
                handleSignup();
              }}
            >
              Signup
            </button>
            <div className="flex gap-4 justify-center items-center text-color1">
              <div className="bg-color1 w-full h-[1px]" />
              <h1>or</h1>
              <div className="bg-color1 w-full h-[1px]" />
            </div>
            <button
              className="text-black underline"
              onClick={() => setShowRegister(false)}
            >
              signin to an account
            </button>
            {loading && <Loader w={75} h={75} />}
          </div>
        </div>
      </div>
    </div>
  );
}
