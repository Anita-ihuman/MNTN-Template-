import Head from "next/head";
import styles from "../styles/footer.module.scss";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main_content1}>
        <div className={styles.content_text}>
          <div>
            <img src="" className={styles.content_fade} />
          </div>
          <div className={styles.content_top}>
            <div className={styles.content_line}>
              <img src="Rectangle 2.1.png" alt="" />
            </div>
            <div className={styles.content_bold}>
              <p>A Hiking guide</p>
            </div>
          </div>
          <h3>What level of hiker are you?</h3>
          <p>
            Determining what level of hiker you are can be an important tool
            when planning future hikes. This hiking level guide will help you
            plan hikes according to different hike ratings set by various
            websites like All Trails and Modern Hiker. What type of hiker are
            you – novice, moderate, advanced moderate, expert, or expert
            backpacker?
          </p>
          <div>
            <p>read more</p>
            <img />
          </div>
        </div>
        <div>
          <img src="01.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Main;
