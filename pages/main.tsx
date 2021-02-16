import Head from "next/head";
import styles from "../styles/main.module.scss";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main_content}>
        <div className={styles.main_content1}>
          <div className={styles.content_text}>
            <div>
              <img src="" className={styles.content_fade} />
            </div>
            <div className={styles.content_top}>
              <div className={styles.content_line}>
                <img src="Rectangle 2.1.png" alt="" />
              </div>
              <p className={styles.content_orange}>Get started</p>
            </div>
            <h3 className={styles.content_bold}>
              What level of hiker are you?
            </h3>
            <p>
              Determining what level of hiker you are can be an important tool
              when planning future hikes. This hiking level guide will help you
              plan hikes according to different hike ratings set by various
              websites like All Trails and Modern Hiker. What type of hiker are
              you – novice, moderate, advanced moderate, expert, or expert
              backpacker?
            </p>
            <div className={styles.content_bottom}>
              <p>read more</p>
              <img src="arrow_downward.png" />
            </div>
          </div>
          <div className={styles.content_sideimg}>
            <img src="01.png" alt="" width="400px" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
