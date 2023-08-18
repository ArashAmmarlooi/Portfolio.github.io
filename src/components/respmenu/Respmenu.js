import React, { useState, useEffect, useRef } from "react";
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import styles from "../respmenu/Respmenu.scss";
import hovermode from "../../utils/javascript";
import Hamburger from "../../assets/hamburger.svg";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

const Navmenu = () => {
  const [state, setState] = useState(true);
  const [ultoggle, setUltoggle] = useState(true);
  // const location = useLocation();
  // const { pathname } = location;
  // // const path = "https://arashammarlooi.github.io/Portfolio/";
  const subMenuRef = useRef();
  const serviceli = useRef();
  const respul = useRef();

  function subtoggle() {
    const submenu = subMenuRef.current;
    const servli = serviceli.current;
    setState(!state)
    if (state) {
      submenu.style.height = '190px';
      servli.classList.add('subli___1e94g');
    }
    else {
      servli.classList.remove('subli___1e94g');
      submenu.style.height = '0';
    }
  }

  function toggleRespMenu() {
    const resul = respul.current;
    setUltoggle(!ultoggle)
    console.log(ultoggle, 'ultoggle')
    if (ultoggle) {
      resul.style.display = 'block';
    }
    else {
      resul.style.display = 'none';

    }
  }

  // useEffect(() => {
  //   if (window.location.href == path || pathname == "/Portfolio")
  //     setState(true);
  //   else setState(false);
  // }, [window.location.href, pathname]);
  // useEffect(() => {
  //   const navli = document.querySelectorAll(".navmenu-1bbKl ul li");
  //   const navlink = document.querySelectorAll(".navmenu-1bbKl ul li a");
  //   // navlink.forEach((elmnt, index) => {
  //   //     elmnt.addEventListener("mouseenter",(i) => {
  //   //       elmnt.classList.add("navactive-FYBGN")
  //   //     })
  //   //     elmnt.addEventListener("mouseleave",(i) => {
  //   //       elmnt.classList.remove("navactive-FYBGN")
  //   //     })
  //   //   })
  // }, []);
  return (
    <>
      <nav className={styles.navmenu}>
        <div>
          <p className={styles.titleHeader}>Arash Ammarlooi</p>
          <img onClick={toggleRespMenu} src={Hamburger} alt="Hamburger" className={styles.humburger} />
        </div>

        <ul ref={respul} className={styles.respul}>
          <li>
            <NavLink exact activeClassName={styles.navactive} to="/Portfolio">
              Home
            </NavLink>
          </li>
          <li ref={serviceli}>
            <div onClick={subtoggle}>
              <span>Services</span>
              {state ? <strong><span className={styles.plus}>+</span></strong> : <strong><span className={styles.plus}>-</span></strong>}
            </div>

            <ul className={styles.submenu} ref={subMenuRef}>
              <li>
                <NavLink activeClassName={styles.navactive} to="/Portfolio/web">
                  web
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={styles.navactive}
                  to="/Portfolio/mobile"
                >
                  mobile
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={styles.navactive}
                  to="/Portfolio/product"
                >
                  product
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={styles.navactive}
                  to="/Portfolio/devops"
                >
                  devops
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              activeClassName={styles.navactive}
              to="/Portfolio/technologies"
            >
              Technology
            </NavLink>
            {/* <div className={styles.submenu}>
                  <p>frontend</p>
                  <p>backend</p>
                  <p>product</p>
                  <p>devops</p>
                </div> */}
          </li>
          <li>
            <NavLink activeClassName={styles.navactive} to="/Portfolio/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.navactive} to="/Portfolio/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navmenu;
