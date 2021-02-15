import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.Header}>
      <div className={styles.Header_title}>
        <div className={styles.Header_social}>
          <p>Follow</p>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className={styles.Header_text}>
          <div className={styles.Header_top}>
            <img src="" alt="" />
            <p>A Hiking guide</p>
          </div>
          <h1>Be prepared for the Mountains and beyond!</h1>
          <div className={styles.Header_bottom}>
            <span>scroll down</span>
            <img src="" alt="" />
          </div>
        </div>
        <div className={styles.Header_measure}>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>

      <img src="BG Hero.png" className={styles.topshade} alt="" />
      <img src="HG.png" className={styles.sky} alt="" />
      <img src="MG.png" className={styles.mountain} alt="" />
      <img src="VG.png" className={styles.person} alt="" />
      <img src="BG Content" className={styles.shade} alt="" />
    </div>
  );
}
