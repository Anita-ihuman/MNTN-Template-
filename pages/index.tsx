import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { Element } from "./main";

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const HandleScroll = () => setOffsetY(window.pageYOffset);
   useEffect(() => {
     window.addEventListener("scroll", (HandleScroll));
     return () => { removeEventListener("scroll", HandleScroll) };
   }, []);

  return (
    <>
      <div className={styles.Header}>
        <div className={styles.Header_title}>
          <div className={styles.Header_social}>
            <p className={styles.Header_socialte}>Follow</p>
            <div>
              <img src="Vector (1).png" alt="" />
            </div>

            <div>
              <img src="twitter.png" alt="" />
            </div>
          </div>
          <div
            className={styles.Header_text}
            style={{ transform: `translateY(${offsetY * -2}px)` }}
          >
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
            <div>
              <p>Start</p>
              <ul className={styles.Header_meter}>
                <li>01</li>
                <li>02</li>
                <li>03</li>
              </ul>
            </div>
            <img
              src="slider Indicator.png"
              className={styles.Header_rulerthick}
              alt=""
            />
            <img src="slider BG.png" alt="" className={styles.Header_ruler} />
          </div>
        </div>

        <img
          src="BG Hero.png"
          className={styles.topshade}
          alt=""
          style={{ transform: `translateY(${offsetY * -0.25}px)` }}
        />
        <img
          src="HG.png"
          className={styles.sky}
          alt=""
          style={{ transform: `translateY(${offsetY * 0.3}px)` }}
        />
        <img
          src="MG.png"
          className={styles.mountain}
          alt=""
          style={{ transform: `translateY(${offsetY * 0.3}px)` }}
        />
        <img
          src="VG.png"
          className={styles.person}
          alt=""
          style={{ transform: `translateY(${offsetY * 0.4}px)` }}
        />
        <img src="BG Content.png" className={styles.shade} alt="" />
      </div>

      <Element
        headtop="GET STARTED"
        headbold="What level of  hiker are you?"
        headtext="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? "
        headbottom="read more"
        image="01.png"
      />
      <Element
        image="01.png"
        headtop="Hiking Essentials"
        headbold="Picking the right Hiking Gear!"
        headtext="The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet. "
        headbottom="read more"
        left
      />
      <Element
        headtop="where you go is the key"
        headbold="Understand Your Map & Timing"
        headtext="To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.."
        headbottom="read more"
        image="copy.png"
      />
    </>
  );
}
