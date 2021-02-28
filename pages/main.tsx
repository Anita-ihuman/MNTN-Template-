import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/main.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";

export interface ElementProps {
  headtop: string;
  headbold: string;
  headtext: string;
  headbottom: string;
  left?: boolean;
  image: string;
  imagefade: string;
}

export function Element({
  headtop,
  headbold,
  headtext,
  headbottom,
  left,
  image,
  imagefade,
}: ElementProps) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.main_content}>
        <article data-aos="fade-right" className={styles.main_content1}>
          {left && (
            <figure className={styles.content_sideimg}>
              <img src="01 (1).png" alt="" width="400px" />
            </figure>
          )}
          <div className={styles.content_text}>
            <figure>
              <img src={imagefade} className={styles.content_fade} />
            </figure>
            <div className={styles.content_top}>
              <div className={styles.content_line}>
                <img src="Rectangle 2.1.png" alt="" />
              </div>
              <h4 className={styles.content_orange}>{headtop}</h4>
            </div>
            <h2 className={styles.content_bold}>{headbold}</h2>
            <p>{headtext}</p>
            <div className={styles.content_bottom}>
              <a href="/">{headbottom}</a>
              <img src="arrow_downward.png" />
            </div>
          </div>
          {!left && (
            <figure className={styles.content_sideimg}>
              <img src={image} alt="" width="400px" />
            </figure>
          )}
        </article>
      </section>
    </main>
  );
}

export default Element;
