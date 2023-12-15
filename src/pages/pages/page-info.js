import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/Info.module.css";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDisplay,
  faGlobe,
  faHeadset,
  faPaintBrush,
  faWrench,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import louis from "../../assets/info/louis.png";
import tom from "../../assets/info/tom.png";

export default function PageInfo() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

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
      <section>
        <h3 className={styles.titles}>Qui sommes-nous ?</h3>
        <div className={styles.main}>
          <div className={styles.gridContent}>
            <h2>Tom Ruiz</h2>
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
                  <Image src={tom} alt="screenshot du site" />
                </div>
                <div className={styles.flipCardBack}>
                  <h1>Co-Fondateur</h1>
                  <p>React / Sass / API Google</p>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/louis-herve/"
                  >
                    https://www.linkedin.com/in/louis-herve/
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.gridContent}>
            <h2>Louis Hervé</h2>
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
                  <Image src={louis} alt="screenshot du site" />
                </div>
                <div className={styles.flipCardBack}>
                  <h1>Co-Fondateur</h1>
                  <p>React / Sass / API Google</p>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/louis-herve/"
                  >
                    https://www.linkedin.com/in/louis-herve/
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className={styles.contentP}
          >
            En tant que développeur web et intégrateur web 👨‍💻, je suis très
            compétent dans les langages HTML, CSS, JavaScript, et je suis
            constamment à la recherche de nouvelles technologies et de nouvelles
            techniques pour améliorer mes compétences. Je suis également très
            curieux et toujours prêt à relever de nouveaux défis. <br />
            Bref, si vous cherchez quelqu&apos;un de{" "}
            <span data-aos="flip-up">fun</span>,{" "}
            <span data-aos="flip-up">passionné</span> et{" "}
            <span data-aos="flip-up">compétent</span> pour vos projets de
            développement web et d&apos;intégration web, ne cherchez pas plus
            loin que moi ! <br /> 🤘
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className={styles.contentP}
          >
            Salut, je suis Louis, titulaire d'une licence professionnelle (BAC +
            3) et je me spécialise dans la conception <br />
            <span data-aos="flip-up"> d'applications web et bureautiques.</span>
            <br />
            Ma principale expertise réside dans le développement de la logique
            de vos applications et la gestion des bases de données. Passionné
            d'informatique depuis mon plus jeune âge, je propose également des{" "}
            <span data-aos="flip-up">formations</span> pour vous aider à mieux
            utiliser votre ordinateur sous Windows. En cas de problème, je suis
            là pour vous <span data-aos="flip-up">dépanner</span> , que ce soit
            en éliminant les virus ou vous{" "}
            <span data-aos="flip-up">conseiller</span> pour vos futurs achats
            informatiques, que ce soit un PC gamer ou un PC de bureau. Mon
            objectif est de{" "}
            <span data-aos="flip-up">
              rendre l'informatique accessible et pratique
            </span>{" "}
            pour vous. N'hésitez pas à me contacter pour discuter de vos besoins
            ou pour planifier une séance de formation personnalisée.
          </p>
        </div>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className={styles.contentEnd}
        >
          En résumé, nous sommes deux jeunes passionnés d'informatique et nos
          compétences croisés nous permettent d'avoir une expertise logiciel
          complète que ce soit en matière de design ou de logique applicative.
          N'hésitez pas à nous contacter pour discuter de vos besoins.
        </p>
      </section>

      <Footer />
    </>
  );
}
