import React from "react";
import "./style/reset.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HealthGuidePage from "./page/healthGuidePage/healthGuidePage";
import PayrollSystemPage from "page/payrollSystemPage";
import FurnitureStore from "page/furnitureStore";
import MainPage from "page/furnitureStore/mainPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HealthGuidePage />} /> */}
        {/* <Route path="/" element={<PayrollSystemPage />} /> */}
        <Route path="/" element={<FurnitureStore />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
