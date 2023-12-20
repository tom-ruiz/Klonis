import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import styles from "@/styles/Presta.module.css";
import devweb from "../../assets/presta/devweb.png";
import devappli from "../../assets/presta/devappli.png";
import depinfo from "../../assets/presta/depinfo.png";
import help from "../../assets/presta/help.png";
import design from "../../assets/presta/design.png";
import formation from "../../assets/presta/formation.png";
import AOS from "aos";

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
      <section className={styles.project}>
        <h3>Nos prestations</h3>
        <div
          className={styles.wrapper}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className={styles.card}>
            <Image src={devweb} alt="solution" className={styles.cardImg} />
            <div className={styles.description}>
              <h4>Développement de sites web</h4>
              <p>
                Pour un site qui vous ressemble, qu'il s'agisse d'une vitrine,
                d'un outil de gestion d'entreprise ou de réservations.{" "}
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <Image src={devappli} alt="solution" className={styles.cardImg} />
            <div className={styles.description}>
              <h4>Développement d'applications bureau</h4>
              <p>
                Votre application sur mesure, que ce soit personnel ou
                professionnel, répondant précisément à vos besoins spécifiques.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <Image src={depinfo} alt="solution" className={styles.cardImg} />
            <div className={styles.description}>
              <h4>Dépannage informatique</h4>
              <p>
                Libérez votre ordinateur des virus, installez de nouveaux
                logiciels, ou bénéficiez d'une assistance technique
                personnalisée.{" "}
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <Image src={help} alt="solution" className={styles.cardImg} />
            <div className={styles.description}>
              <h4>Conseils informatiques</h4>
              <p>
                Choisissez le matériel informatique idéal, que ce soit pour un
                PC bureautique ou gamer, grâce à nos conseils.{" "}
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <Image src={design} alt="solution" className={styles.cardImg} />
            <div className={styles.description}>
              <h4>Expertise design applicatif</h4>
              <p>
                Demandez une expertise de design pour créer des maquettes et
                offrir une expérience utilisateur (UX) concrète dans vos projets.{" "}
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <Image src={formation} alt="solution" className={styles.cardImg} />
            <div className={styles.description}>
              <h4>Formations informatiques</h4>
              <p>
                Prenez le contrôle avec nos formations orientées Windows et MacOS,
                maîtrisez votre ordinateur et adoptez les meilleures pratiques
                pour éviter les virus.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
