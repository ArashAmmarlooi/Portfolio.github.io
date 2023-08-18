import React, { useEffect, useState } from "react";
import Root from "./routes/root.jsx";
import Web from "./routes/Web/Web";
import Mobile from "./routes/Mobile/Mobile";
import Devops from "./routes/Devops/Devops";
import Product from "./routes/Product/Product";
import Technology from "./routes/Technology/Technology";
import About from "./routes/About/About";
import Contact from "./routes/Contact/Contact";
import Navmenu from "./components/navmenu/Navmenu.js";
import Respmenu from "./components/respmenu/Respmenu.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  useRoutes,
  useLocation

} from "react-router-dom";

import "./styles/styles.scss";

// let router = createBrowserRouter([
//   {
//     path: "/",
//     exact: true,
//     element: <Root />,
//     children: [{
//       path: "/",
//       exact: true,
//       element: <Navmenu />,
//     }]
//   },

//   // {
//   //   path: "/Mobile",
//   //   element: <Mobile />,
//   // },
//   // {
//   //   path: "/Web",
//   //   element: <Web />,
//   // },
//   // {
//   //   path: "/Technology",
//   //   element: <Technology />,
//   // },
//   // {
//   //   path: "/Contact",
//   //   element: <Contact />,
//   // },
//   // {
//   //   path: "/About",
//   //   element: <About />,
//   // },
// ]);
let mql;


export default function App() {
  const [media, setMedia] = useState(true);
  const location = useLocation();
  React.useEffect(() => {
    const loc = location.pathname
    if (loc !== '/Portfolio') {
      document.body.style.background = "#fff";
    }
    else document.body.style.background = "rgb(96, 63, 213)";
  }, [location]);

  useEffect(() => {
    mql = window.matchMedia("(min-width: 777px)");
    mql.addEventListener("change", resize);
    function resize(e) {
      setMedia(mql.matches)
    }
    return () => {
      mql.removeEventListener("change", resize);
    }
  }, []);
  // return <RouterProvider router={router} />;
  return (
    <>
      {!media ? <Respmenu /> : <Navmenu />}
      <Routes>
        <Route path="/Portfolio" element={<Root />} />
        <Route path="/Portfolio/web" element={<Web />} />
        <Route path="/Portfolio/Mobile" element={<Mobile />} />
        <Route path="/Portfolio/Devops" element={<Devops />} />
        <Route path="/Portfolio/Product" element={<Product />} />
        <Route path="/Portfolio/Technologies" element={<Technology />} />
        <Route path="/Portfolio/About" element={<About />} />
        <Route path="/Portfolio/Contact" element={<Contact />} />
      </Routes>
    </>
  )
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}