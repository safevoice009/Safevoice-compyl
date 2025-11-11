import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import LandingPage from "./pages/LandingPage";

const Router = () => {
  return (
    <BrowserRouter basename="/Safevoice-cto/">
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <LandingPage />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
