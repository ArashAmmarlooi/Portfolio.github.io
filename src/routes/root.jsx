import React, { useEffect } from "react";
// import navClassHandle from '../../utils/locationhandle'
import Webmobile from "../assets/Webmobile.svg";

import {
    Route,
    Routes,
    Outlet
} from "react-router-dom";
import styles from './root.scss'


const Home = () => {

    // const navClass = navClassHandle(location.pathname);

    return (
        <>
            <section className={styles.homeSection}>
                <div className={styles.leftCont}>
                    <div className={styles.parag}>
                        <h1>Hi, i'm arash ammarlooi</h1>
                        <p>I'm a full stack web & mobile developer & Product designer</p>
                        <div className={styles.rect}></div>
                    </div>
                </div>

                <div className={styles.rightCont}>
                    <img src={Webmobile} alt="Homesvg" />
                </div>
            </section>

        </>
    );
};

export default Home;
