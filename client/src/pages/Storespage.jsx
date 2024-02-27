import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Storespage() {
  const { user } = useSelector((state) => state.user);
  const { category } = useParams();
  const [value, setValue] = useState(category);
  const [mounted, setMounted] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      setMounted(true);
    }
  }, []);

  const Header = () => {
    return (
      <section className="h-full w-full flex items-center justify-between text-color1  border-b border-color1 sticky top-0">
        <Link to={"/"}>
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

  const Store = () => {
    return (
      <div className="w-full h-[375px] bg-white rounded-lg text-color1 border border-color1">
        <div
          className="h-3/4 rounded-t-md"
          style={{
            backgroundImage: `url('https://fiverr-res.cloudinary.com/videos/so_2.469108,t_main1,q_auto,f_auto/ju19tvshnt5tgrwaqk0l/create-a-professional-website-in-wordpress.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="h-1/4 overflow-hidden p-2">
          <h1 className="text-2xl font-semibold">Store name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            temporibus unde sed quibusdam consectetur, debitis exercitationem
            laboriosam laboru
          </p>
        </div>
      </div>
    );
  };

  const CreateStoreModal = ({ toggle }) => {
    return (
      <div className="absolute inset-0 flex justify-center items-center rounded-lg bg-color1 bg-opacity-25">
        dasdas
      </div>
    );
  };

  return (
    <>
      {mounted && (
        <div className="px-4 relative md:px-16 lg:px-64">
          <Header />
          <div className="py-4">
            <div className="w-full flex flex-col md:flex-row gap-4">
              <div className="relative flex w-full md:w-1/4">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full py-2 pl-10 pr-4 rounded-lg focus:outline-none bg-color1 bg-opacity-5 placeholder:text-color1"
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <img
                    src="/icons/search-icon.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                </span>
              </div>
              <select
                className="w-full md:w-1/4 text-color1 bg-color1 bg-opacity-5 rounded-lg px-4"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              >
                <option value="">All</option>
                <option value="fashion">Fashion</option>
                <option value="gadgets">Gadgets</option>
                <option value="appliances">Appliances</option>
                <option value="food">Food</option>
                <option value="fruits">Fruits</option>
                <option value="beverages">Bevarages</option>
              </select>
              <button className="bg-color1 w-full md:w-1/4 text-color4 py-1 rounded-lg font-semibold bg-opacity-50 hover:bg-opacity-75 hover:text-color3">
                Create Store
              </button>
            </div>
            <ul className="py-2 grid grid-cols-1 md:grid-cols-2 stlg:grid-cols-3 stxl:grid-cols-4 gap-2">
              <li>
                <Store />
              </li>
              <li>
                <Store />
              </li>
              <li>
                <Store />
              </li>
              <li>
                <Store />
              </li>
              <li>
                <Store />
              </li>
            </ul>
          </div>
          <CreateStoreModal />
        </div>
      )}
    </>
  );
}
