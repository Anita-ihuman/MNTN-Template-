import React, { useState } from "react";
import styles from "../styles/footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.Third}>
          <div className={styles.text}>
            <h3>WHO WE ARE</h3>
            <p>About </p>
            <p> Team</p>
            <p>Work With Us</p>
          </div>
          <div className={styles.text}>
            <h3>Woocommerce</h3>
            <p>Features </p>
            <p>Payments</p>
            <p>Marketing</p>
            <p>Shipping</p>
            <p>Extension Store</p>
            <p>eCommerce blog</p>
            <p>Development blog</p>
            <p>Ideas board </p>
            <p>Mobile App </p>
            <p>Style Guide </p>
            <p> Email Newsletter</p>
          </div>

          <div className={styles.text}>
            <h3>OTHER PRODUCTS</h3>
            <p>Storefront </p>
            <p>WooSlider </p>
            <p>Sensei </p>
            <p>Sensei Extensions</p>
          </div>
          <div className={styles.text}>
            <h3>SUPPORT</h3>
            <p> Documentation</p>
            <p> Customizations </p>
            <p>Support Policy</p>
            <p> Contact </p>
            <p>COVID-19 Resources </p>
            <p>Privacy Notice for </p>
            <p>California Users</p>
          </div>
          <div className={styles.text}>
            <h3>WE RECOMMEND</h3>
            <p>WooExperts</p>
            <p>Hosting Solutions</p>
            <p>Pre-sales FAQ</p>
            <p> Success Stories</p>
            <p> Design Feedback Group</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
