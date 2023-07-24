import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import RenderHome from "../pages";

function MainRoutes(): JSX.Element {
  return (
    <React.Fragment>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RenderHome />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default MainRoutes;
