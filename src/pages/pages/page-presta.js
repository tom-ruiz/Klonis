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
        <div className={styles.wrapper} data-aos="fade-right" data-aos-duration="1000">
          <div className={styles.card}>
            <Image src={devweb} alt="solution" className={styles.cardImg} />
            <div className={styles.description}>
              <h4>Développement de sites web</h4>
              <p>
                Si vous souhaitez avoir un site vitrine, de gestion d'entreprise ou de réservations par exemple
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <Image src={devappli} alt="solution" className={styles.cardImg} />
            <div className={styles.description}>
              <h4>Développement d'applications bureau</h4>
              <p>
                Si vous optez pour une application de bureau personnelle ou d'entreprise avec des besoins spécifiques
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <Image src={depinfo} alt="solution" className={styles.cardImg} />
            <div className={styles.description}>
              <h4>Dépannage informatique</h4>
              <p>
                Si vous voulez supprimer les virus de votre ordinateur, installer de nouveaux logiciels ou obtenir une assistance technique
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <Image src={help} alt="solution" className={styles.cardImg} />
            <div className={styles.description}>
              <h4>Conseils informatiques</h4>
              <p>
                Si vous envisagez d'acheter du matériel informatique que ce soit un PC bureautique ou gamer par exemple
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <Image src={design} alt="solution" className={styles.cardImg} />
            <div className={styles.description}>
              <h4>Expertise design applicatif</h4>
              <p>
                Si vous réclamez une expertise de développement pour vos applications afin de monter en compétences en UX et UI
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <Image src={formation} alt="solution" className={styles.cardImg} />
            <div className={styles.description}>
              <h4>Formations informatiques</h4>
              <p>
                Si vous désirez des formations informatiques orientés sur Windows afin de prendre en main votre ordinateur et d'opter pour les bonnes pratiques afin d'éviter les virus
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
