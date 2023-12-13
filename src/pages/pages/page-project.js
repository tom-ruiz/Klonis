import { useState } from "react";
import Image from "next/image";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import styles from "@/styles/Project.module.css";
import plandevens from "../../assets/project/plandevens.png";
import beu from "../../assets/project/beu.png";
import portoflio from "../../assets/project/portfolio.png";
import design from "../../assets/project/design.png";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

export default function PageInfo() {
  const [isRotated, setIsRotated] = useState({});

  const handleRotate = (id) => {
    setIsRotated((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
      <Navbar />
      <section className={styles.project}>
        <h3>Mes projets</h3>
        <div className={styles.main}>
          <div className={styles.wrapper}>
            <ul className={`${styles.flex} ${styles.cards}`}>
              <li>
                <h2>Plan des devens</h2>
                <div className={styles.flipCard}>
                  <button
                    className={styles.turnButton}
                    onClick={() => handleRotate("plandevens")}
                  >
                    <FontAwesomeIcon icon={faArrowsRotate} />
                  </button>
                  <div
                    className={`${styles.flipCardInner} ${
                      isRotated["plandevens"] ? styles.rotate : ""
                    }`}
                  >
                    <div className={styles.flipCardFront}>
                      <Image src={plandevens} alt="screenshot du site" />
                    </div>
                    <div className={styles.flipCardBack}>
                      <h1>Réalisé seul</h1>
                      <p>React / Sass / API Google</p>
                      <Link
                        target="_blank"
                        href="https://domaineplandesdevens.fr/"
                      >
                        https://domaineplandesdevens.fr/
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <h2>Kedge Be-U</h2>
                <div className={styles.flipCard}>
                  <button
                    className={styles.turnButton}
                    onClick={() => handleRotate("beu")}
                  >
                    <FontAwesomeIcon icon={faArrowsRotate} />
                  </button>
                  <div
                    className={`${styles.flipCardInner} ${
                      isRotated["beu"] ? styles.rotate : ""
                    }`}
                  >
                    <div className={styles.flipCardFront}>
                      <Image src={beu} alt="screenshot du site" />
                    </div>
                    <div className={styles.flipCardBack}>
                      <h1>Apside</h1>
                      <p>.NET Core / Sass / Typescript</p>
                      <Link target="_blank" href="https://be-u.kedge.edu/fr/">
                        https://be-u.kedge.edu/fr/
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <h2>Portfolio</h2>
                <div className={styles.flipCard}>
                  <button
                    className={styles.turnButton}
                    onClick={() => handleRotate("portfolio")}
                  >
                    <FontAwesomeIcon icon={faArrowsRotate} />
                  </button>
                  <div
                    className={`${styles.flipCardInner} ${
                      isRotated["portfolio"] ? styles.rotate : ""
                    }`}
                    id="card"
                  >
                    <div className={styles.flipCardFront}>
                      <Image src={portoflio} alt="screenshot du site" />
                    </div>
                    <div className={styles.flipCardBack}>
                      <h1>Réalisé seul</h1>
                      <p>React / Next.JS / Sass</p>
                      <Link target="_blank" href="/">
                        https://tomruiz.fr
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <h2>Projets design</h2>
                <div className={styles.flipCard}>
                  <button
                    className={styles.turnButton}
                    onClick={() => handleRotate("design")}
                  >
                    <FontAwesomeIcon icon={faArrowsRotate} />
                  </button>
                  <div
                    className={`${styles.flipCardInner} ${
                      isRotated["design"] ? styles.rotate : ""
                    }`}
                    id="card"
                  >
                    <div className={styles.flipCardFront}>
                      <Image src={design} alt="screenshot du site" />
                    </div>
                    <div className={styles.flipCardBack}>
                      <h1>Réalisé seul</h1>
                      <p>Figma / Photoshop</p>
                      <Link target="_blank" href="https://github.com/tom-ruiz/portfolio-tom-ruiz/blob/main/DesignProject.md">
                      lien de la documentation
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
