import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Element } from "../pages/main";

export default function Home() {
  return (
    <>
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

      <Element
        headtop="GET STARTED"
        headbold="What level of  hiker are you?"
        headtext="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? "
        headbottom="read more"
      />
      <Element
        headtop="Hiking Essentials"
        headbold="Picking the right Hiking Gear!"
        headtext="The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet. "
        headbottom="read more"
        left='"01.png"'
      />
      <Element
        headtop="where you go is the key"
        headbold="Understand Your Map & Timing"
        headtext="To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.."
        headbottom="read more"
      />
    </>
  );
}
