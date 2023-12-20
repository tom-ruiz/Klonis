import Image from "next/image";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import styles from "@/styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import louis from "../../assets/info/louis.png";
import tom from "../../assets/info/tom.png";
import AOS from "aos";

export default function PageInfo() {
  const [isRotated, setIsRotated] = useState({});

  const handleRotate = (id) => {
    setIsRotated((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <section className={styles.section}>
        <h3 className={styles.titles}>Nous contacter</h3>
        <div className={styles.contact}>
          <div
            className={styles.gridContent}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2>Tom Ruiz</h2>
            <div className={styles.flipCard}>
              <button
                className={styles.turnButton}
                onClick={() => handleRotate("tom")}
              >
                <FontAwesomeIcon icon={faArrowsRotate} />
              </button>
              <div
                className={`${styles.flipCardInner} ${
                  isRotated["tom"] ? styles.rotate : ""
                }`}
              >
                <div className={styles.flipCardFront}>
                  <Image src={tom} alt="screenshot du site" />
                </div>
                <div className={styles.flipCardBack}>
                  <h1>06.20.41.74.13</h1>

                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/tom-ruiz54/"
                  >
                    https://www.linkedin.com/in/tom-ruiz
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.gridContent}
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2>Louis Hervé</h2>
            <div className={styles.flipCard}>
              <button
                className={styles.turnButton}
                onClick={() => handleRotate("louis")}
              >
                <FontAwesomeIcon icon={faArrowsRotate} />
              </button>
              <div
                className={`${styles.flipCardInner} ${
                  isRotated["louis"] ? styles.rotate : ""
                }`}
              >
                <div className={styles.flipCardFront}>
                  <Image src={louis} alt="screenshot du site" />
                </div>
                <div className={styles.flipCardBack}>
                  <h1>06.58.12.97.32</h1>

                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/louis-herve/"
                  >
                    https://www.linkedin.com/in/louis-herve
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.mail}>
          <Link href="mailto:klonispro@protonmail.com">klonispro@protonmail.com</Link>
        </p>
      </section>
      <Footer />
    </>
  );
}
