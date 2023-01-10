import React, { useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../views/HomePage";
import SignInPage from "../views/SignInPage";
import AdminPage from "../views/AdminPage";
import FNFPage from "../views/404Page";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/404" element={<FNFPage />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};

export default RouterApp;
