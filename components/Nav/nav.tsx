import React, { useState } from "react";
import styles from "./nav.module.scss";

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.header}>
          <figure className={styles.brand}>
            <img src="/Logo.png" alt="Logo" color="black" />
          </figure>

          
          <div>
            <ul className={styles.menu}>
              <li className={styles.link}>
                <a href="/">Equipment</a>
              </li>
              <li className={styles.link}>
                <a href="/">About us</a>
              </li>
              <li className={styles.link}>
                <a href="/">Blog</a>
              </li>
            </ul>
          </div>

          <div className={styles.side}>
            <a href="/">
              <img src="/cart.png" className={styles.search} color="black" />
            </a>
            <div className={styles.btn}>
              <span>Account</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
