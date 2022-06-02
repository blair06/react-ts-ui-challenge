import React from "react";
import "./style/reset.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeMainPage from "./page/HomeMainPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route
            path='/home'
            element={
                <HomeMainPage />
            }
          />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
