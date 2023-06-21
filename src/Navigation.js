import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Demopage from "./components/Demopage";
import Firstpage from "./components/Firstpage";
import Login from "./components/Login";

export default function Navigation() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/firstpage" element={<Firstpage />}></Route>
          <Route path="/demopage" element={<Demopage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
