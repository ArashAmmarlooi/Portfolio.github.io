import React, { useState, useEffect, useRef } from "react";

import styles from "../navmenu/Navmenu.scss";
import hovermode from "../../utils/javascript";


import {
  Router,
  Routes,
  Route,
  NavLink,
  useLocation
} from "react-router-dom";
const Navmenu = () => {
  const [state, setState] = useState(null);
  const location = useLocation();
  console.log(location.pathname)
  const navul = useRef();
  const navmenuul = navul.current;
  let a;
  let span;


  // console.log(navmenuul);
  useEffect(() => {
    a = document.querySelectorAll('.amenu___viJHy');
    span = document.querySelector('span');
    if (location.pathname !== '/Portfolio') {
      setState(false);
      span.style.color = 'rgb(78, 78, 78)';
    }
    else {
      span.style.color = 'rgb(255, 255, 255)';
      setState(true);

    }

  }, [location.pathname]);
  console.log(state);

  return (
    <>
      <nav className={styles.navmenu}>
        <p className={styles.titleHeader}>Arash Ammarlooi</p>
        <ul>
          <li>
            <NavLink
              className={state ? styles.amenu : styles.amenuloc}
              exact
              to="/Portfolio">
              Home
            </NavLink>
          </li>

          <li>
            <span>Services</span>
            <span className={styles.arrow}></span>
            <ul className={styles.submenu}>
              <li>
                <NavLink
                  to="/Portfolio/web">
                  web
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Portfolio/mobile"
                >
                  mobile
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Portfolio/product"
                >
                  product
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Portfolio/devops"
                >
                  devops
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              className={state ? styles.amenu : styles.amenuloc}
              to="/Portfolio/technologies"
            >
              Technology
            </NavLink>
          </li>

          <li>
            <NavLink
              className={state ? styles.amenu : styles.amenuloc}
              to="/Portfolio/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={state ? styles.amenu : styles.amenuloc}
              to="/Portfolio/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navmenu;
