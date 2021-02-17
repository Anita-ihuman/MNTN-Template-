import Head from "next/head";
import styles from "../styles/main.module.scss";

export interface ElementProps {
  headtop: string;
  headbold: string;
  headtext: string;
  headbottom: string;
}

export function Element({
  headtop,
  headbold,
  headtext,
  headbottom,
}: ElementProps) {
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
              <p className={styles.content_orange}>{headtop}</p>
            </div>
            <h3 className={styles.content_bold}>{headbold}</h3>
            <p>{headtext}</p>
            <div className={styles.content_bottom}>
              <p>{headbottom}</p>
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
}

export default Element;
