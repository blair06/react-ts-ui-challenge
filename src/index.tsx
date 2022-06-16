import React from "react";
import "./style/reset.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HealthGuidePage from "./page/healthGuidePage/healthGuidePage";
import PayrollSystemPage from "page/payrollSystemPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HealthGuidePage />} /> */}
        <Route path="/" element={<PayrollSystemPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
