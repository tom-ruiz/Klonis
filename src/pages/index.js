import Head from "next/head";
import { Jost } from "next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Image from "next/image";
import solution from "../assets/solution.png";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDisplay,
  faGlobe,
  faHeadset,
  faPaintBrush,
  faWrench,
  faBookOpen,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import Link from "next/link";

const jost = Jost({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Head>
        <title>Klonis</title>
        <meta name="description" content="Le site web de klonis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../klogo.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <section className={styles.home}>
          {" "}
          <h1 className={styles.klonis} data-aos="fade-right" data-aos-duration="500">
            KLONIS
          </h1>
          <h1 data-aos="fade-right" data-aos-duration="1000">
            Transformez vos idées en réalité numérique
          </h1>
        </section>
        <section className={styles.cv} data-aos="fade-up">
          <div className={styles.leftside}>
            <h3>Nos prestations</h3>
            <div className={styles.container}>
              <div className={styles.box}>
                <div className={styles.content}>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faGlobe} />
                  </div>
                  <div className={styles.text}>
                    <h4>Développement de site web</h4>
                  </div>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.content}>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faDisplay} />
                  </div>
                  <div className={styles.text}>
                    <h4>Développement d'applications bureau</h4>
                  </div>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.content}>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faWrench} />
                  </div>
                  <div className={styles.text}>
                    <h4>Dépannage informatique</h4>
                  </div>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.content}>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faHeadset} />
                  </div>
                  <div className={styles.text}>
                    <h4>Conseils informatiques</h4>
                  </div>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.content}>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faPaintBrush} />
                  </div>
                  <div className={styles.text}>
                    <h4>Expertise design applicatif</h4>
                  </div>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.content}>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faBookOpen} />
                  </div>
                  <div className={styles.text}>
                    <h4>Formations informatiques</h4>
                  </div>
                </div>
              </div>
            </div>
            <Link className={styles.moreButton} href="/pages/page-presta">
              En savoir plus
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <span className={styles.separator}></span>
          <div className={styles.rightside}>
            <Image
              data-aos="fade-left"
              data-aos-duration="1000"
              src={solution}
              alt="solution"
              className={styles.homeImg}
            />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
