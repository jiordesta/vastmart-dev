import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import Homepage from "./pages/Homepage";
import Authpage from "./pages/Authpage";

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
        </Routes>
      </Router>
    </Provider>
  );
}
