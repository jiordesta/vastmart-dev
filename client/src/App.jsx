import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import Homepage from "./pages/Homepage";
import Authpage from "./pages/Authpage";
import Storespage from "./pages/Storespage";
import Mystore from "./pages/Mystore";
import Store from "./pages/Store";

export default function App() {
  return (
    <Provider store={store}>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{ duration: 7500 }}
      />
      <Router>
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/signin-signup" Component={Authpage} />
          <Route path="/stores" Component={Storespage} />
          <Route path="/stores/:category" Component={Storespage} />
          <Route path="/mystore/:id" Component={Mystore} />
          <Route path="/stores/store/:id" Component={Store} />
        </Routes>
      </Router>
    </Provider>
  );
}
