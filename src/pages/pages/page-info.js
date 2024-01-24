import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/Info.module.css";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
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
          <div className={`${styles.gridContent} ${styles.tom}`}>
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
                  <h1>Co-Fondateur</h1>
                  <p>
                    HTML / CSS / JavaScript / React & Next / Figma / Photoshop
                  </p>
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
          <div className={`${styles.gridContent} ${styles.louis}`}>
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
                  <h1>Co-Fondateur</h1>
                  <p>C# .NET / ASP.NET / SQL / Entity Framework / XUnit</p>
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

          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className={`${styles.contentP} ${styles.tomText}`}
          >
            Salut, moi c'est Tom et je suis titulaire d'un Master Expert en
            développement web (BAC + 5).
            <br /> Spécialisé dans le {" "}
            <span data-aos="flip-up">domaine du web et du design</span>, je suis
            constamment en quête de nouvelles technologies et de techniques
            innovantes pour enrichir mes compétences.
            <br /> Ma curiosité et ma volonté de relever de nouveaux défis font
            de moi un atout majeur pour vous accompagner dans la {" "}
            <span data-aos="flip-up">
              recherche du design de vos projet
            </span> {" "}
            jusqu'à l'intégration dans vos projets. Je propose aussi des {" "}
            <span data-aos="flip-up">formations</span> ainsi que des conseils
            pour rendre votre approche de certains logiciels {" "}
            <span data-aos="flip-up">
              informatiques plus accessible (Windows et Mac).
            </span>
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className={`${styles.contentP} ${styles.louisText}`}
          >
            Salut, moi c'est Louis, titulaire d'une licence professionnelle en
            développement informatique (BAC + 3).
            <br />Spécialisé dans la conception
            <span data-aos="flip-up"> d'applications web et bureautiques</span>
            , ma principale expertise réside dans le développement de la logique
            de vos applications et la gestion des bases de données. Passionné
            d'informatique depuis mon plus jeune âge, je propose également des{" "}
            <span data-aos="flip-up">formations</span> pour vous aider à mieux
            utiliser votre ordinateur sous Windows. En cas de problème, je suis
            là pour vous <span data-aos="flip-up">dépanner</span>, que ce soit
            en éliminant vos virus ou vous{" "}
            <span data-aos="flip-up">conseiller</span> pour vos futurs achats
            informatiques, que ce soit un PC gamer ou un PC de bureau. Mon
            objectif est de {" "}
            <span data-aos="flip-up">
              rendre l'informatique plus accessible.
            </span>
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
          <br />
          <span data-aos="flip-up">
            {" "}
            N'hésitez pas à nous contacter pour discuter de vos besoins.
          </span>
        </p>
      </section>

      <Footer />
    </>
  );
}
