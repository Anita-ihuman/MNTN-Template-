import React, { useState } from "react";
import styles from "../styles/footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.Third}>
          <div className={styles.text}>
            <div>
              <img src="Logo.png" className={styles.textimg} />
              <p>
                Get out there & discover your next slope, mountain &
                destination!
              </p>
            </div>
            <div className={styles.copy}>
              Copyright 2019 MNTN, Inc. Terms & Privacy
            </div>
          </div>
          <div className={styles.text2}>
            <div className={styles.text}>
              <h3>More on The Blog</h3>
              <p>About MNTN</p>
              <p>Contributors & Writers</p>
              <p>Write For Us</p>
              <p>Contact Us</p>
              <p>Privacy Policy</p>
            </div>

            <div className={styles.text1}>
              <h3>More on MNTN</h3>
              <p>The Team </p>
              <p>Jobs </p>
              <p>Press </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
