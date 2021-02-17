import React, { useState } from "react";
import styles from "../styles/footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <section className={styles.Third}>
          <article className={styles.text}>
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
          </article>
          <article className={styles.text2}>
            <div className={styles.text1}>
              <h3>More on The Blog</h3>
              <ul>
                <li>About MNTN</li>
                <li>Contributors & Writers</li>
                <li>Write For Us</li>
                <li> Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div className={styles.text1}>
              <h3>More on MNTN</h3>
              <ul>
                <li>The Team</li>
                <li>Jobs</li>
                <li>Press</li>
              </ul>
            </div>
          </article>
        </section>
      </footer>
    </>
  );
};
export default Footer;
