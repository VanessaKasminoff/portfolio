import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import About from "./components/About.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path="/About" element={<About/>} />
        <Route path="/Projects" />
        <Route path="/Contact" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
