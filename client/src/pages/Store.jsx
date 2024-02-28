import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetch_store } from "../redux/reducers/store_slice";
import Loader from "../components/Loader";

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

  return (
    <div className="relative h-screen">
      {store ? `${store.name}` : <Loader />}
    </div>
  );
}
