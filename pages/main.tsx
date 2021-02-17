import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/main.module.scss";

export interface ElementProps {
  headtop: string;
  headbold: string;
  headtext: string;
  headbottom: string;
  left: boolean;
  image: string;
}

export function Element({
  headtop,
  headbold,
  headtext,
  headbottom,
  left,
  image,
}: ElementProps) {
 
  return (
    <main className={styles.main}>
      <section className={styles.main_content}>
        <article
          className={styles.main_content1}
       
        >
          {left && (
            <figure className={styles.content_sideimg}>
              <img src="01 (1).png" alt="" width="400px" />
            </figure>
          )}
          <div className={styles.content_text}>
            <figure>
              <img src="" className={styles.content_fade} />
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
