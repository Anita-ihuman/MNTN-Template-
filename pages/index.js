import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.Header}>
      <div className={styles.Header_title}>
        <div className={styles.Header_social}>
          <p>Follow</p>
          <div>
            <img src="Vector (1).png" alt="" />
          </div>

          <div>
            <img src="twitter.png" alt="" />
          </div>
        </div>
        <div className={styles.Header_text}>
          <div className={styles.Header_top}>
            <div className={styles.Header_line}>
              <img src="Rectangle 2.1.png" alt="" />
            </div>
            <div>
              <p>A Hiking guide</p>
            </div>
          </div>
          <h1 className={styles.Header_top_bold}>
            Be prepared for the Mountains and beyond!
          </h1>
          <div className={styles.Header_bottom}>
            <span className={styles.Header_span}>scroll down</span>
            <div>
              <img src="arrow_downward.png" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.Header_measure}>
          <img src="Text.png" alt="" className={styles.Header_meter} />
          <img src="slider BG.png" alt="" className={styles.Header_ruler} />
          <img
            src="slider Indicator.png"
            className={styles.Header_rulerthick}
            alt=""
          />
        </div>
      </div>

      <img src="BG Hero.png" className={styles.topshade} alt="" />
      <img src="HG.png" className={styles.sky} alt="" />
      <img src="MG.png" className={styles.mountain} alt="" />
      <img src="VG.png" className={styles.person} alt="" />
      <img src="BG Content.png" className={styles.shade} alt="" />
    </div>
  );
}
