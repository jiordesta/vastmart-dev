import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { create_store } from "../redux/reducers/store_slice";
import { error, success } from "../redux/reducers/notification_slice";
import Loader from "../components/Loader";

export default function Storespage() {
  const { user } = useSelector((state) => state.user);
  const { category } = useParams();
  const [value, setValue] = useState(category);
  const [mounted, setMounted] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
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
      <section className="h-full w-full flex items-center justify-between text-color1  border-b border-color1 sticky top-0 z-40 bg-white">
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
      <div className="w-full h-[375px] bg-white rounded-lg text-color1 border border-color1 cursor-pointer">
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
          <h1 className="text-2xl font-semibold pb-1">Store name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            temporibus unde sed quibusdam consectetur, debitis exercitationem
            laboriosam laboru
          </p>
        </div>
      </div>
    );
  };

  const CreateStoreModal = ({ showModal, setShowModal }) => {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("any");

    const [loading, setLoading] = useState(false);

    useEffect(() => {
      document.body.style.overflow = showModal ? "hidden" : "auto";
    }, [showModal]);

    const handleCreateStore = () => {
      setLoading(true);
      dispatch(create_store({ name, desc, category })).then((res) => {
        if (res.error) {
          dispatch(error(res.error.message));
        } else {
          dispatch(success("Store Created Successfully"));
          setShowModal(false);
        }
        setLoading(false);
      });
    };

    if (showModal) {
      return (
        <div className="absolute h-screen inset-0 flex justify-center items-center rounded-lg bg-color1 bg-opacity-25 p-4 z-50">
          <div className="w-full lg:w-1/4 flex flex-col gap-2 bg-white border border-color1 p-2 rounded-lg drop-shadow-lg">
            <input
              type="text"
              placeholder="STORE NAME"
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded-md focus:outline-none bg-color2 bg-opacity-10 focus:bg-opacity-5 text-color1"
            />
            <textarea
              rows={7}
              placeholder="STORE SHORT DESCRIPTION"
              onChange={(e) => setDesc(e.target.value)}
              className="w-full p-2 rounded-md focus:outline-none bg-color2 bg-opacity-10 focus:bg-opacity-5 text-color1"
            />
            <img
              src="/icons/close-btn.svg"
              className="absolute -right-3 -top-3"
              width={35}
              alt=""
              onClick={() => setShowModal(false)}
            />

            <div className="flex gap-2">
              <div className="relative flex items-center w-3/4">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <img
                    src="/icons/add-icon.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                </span>
                <input
                  type="text"
                  placeholder="ADD NEW CATEGORY"
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2 pl-12 rounded-md focus:outline-none bg-color2 bg-opacity-10 focus:bg-opacity-5 text-color1"
                />
              </div>
              <select
                className="w-1/4 max-h-40 overflow-y-auto focus:outline-none border-b-2 border-color1"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="any">Any</option>
                <option value="fashion">Fashion</option>
                <option value="gadgets">Gadgets</option>
                <option value="appliances">Appliances</option>
                <option value="food">Food</option>
                <option value="fruits">Fruits</option>
                <option value="beverages">Bevarages</option>
              </select>
            </div>
            <button
              className="bg-white border hover:bg-color2 hover:text-color3 uppercase transition-all duration-100 ease-in-out border-color1 p-2 rounded-lg drop-shadow-md"
              onClick={() => {
                handleCreateStore();
              }}
            >
              Create
            </button>
          </div>
          {loading && <Loader />}
        </div>
      );
    } else {
      return;
    }
  };

  return (
    <>
      {mounted && (
        <div className="px-4 relative md:px-16 lg:px-64">
          <Header />
          <div className="py-4">
            <div className="w-full flex flex-col md:flex-row gap-2 lg:gap-4">
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
                className="w-full md:w-1/4 text-color1 bg-color1 bg-opacity-5 rounded-lg px-4 py-2"
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
              <button
                className="bg-color1 w-full md:w-1/4 text-color4 py-1 rounded-lg font-semibold bg-opacity-50 hover:bg-opacity-75 hover:text-color3"
                onClick={() => setShowModal(true)}
              >
                Create Store
              </button>
            </div>
            <ul className="py-2 grid grid-cols-1 stlg:grid-cols-2 stxl:grid-cols-3 gap-2">
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
          <CreateStoreModal showModal={showModal} setShowModal={setShowModal} />
        </div>
      )}
    </>
  );
}
