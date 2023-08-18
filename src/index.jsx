import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navmenu from "./components/navmenu/Navmenu.js";
import Respmenu from "./components/respmenu/Respmenu.js";

import App from './App.jsx'

import Root from "./routes/root.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode >
);
