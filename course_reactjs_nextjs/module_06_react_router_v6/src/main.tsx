/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { Home } from "./components/Home";
import { About } from "./components/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about ' element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
