import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import styles from "@/styles/Info.module.css";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import guitare from "../../assets/info/guitare.png";
import jupiter from "../../assets/info/jupiter.png";
import vangogh from "../../assets/info/vangogh.png";

export default function PageInfo() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <section className={styles.main}>
        <h3>Tom</h3>
        <Image src={guitare} alt="guitare" className={styles.guitare}/>
        <p data-aos="fade-up" data-aos-duration="1000">
          Moi c&apos;est Tom, j&apos;ai 23 ans et je suis un{" "}
          <span>développeur web front-end</span> et <span>intégrateur web</span>{" "}
          diplômé d&apos;un Master Développemet Web à Ynov Campus Aix (BAC+5).
          <br />
          Depuis tout petit, j&apos;ai toujours été attiré par
          l&apos;informatique et les technologies de l&apos;information.
          J&apos;aime créer des sites web incroyables et améliorer les
          expériences utilisateur. En plus de ça, je suis également passionné
          par la musique 🎶, l&apos;astronomie 🚀 et l&apos;art 🎨.
        </p>
        <h3>Louis</h3>
        <div
          className={styles.content}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Image src={guitare} alt="guitare" className={styles.guitare}/>
          <p>
          Moi c&apos;est Louis, j&apos;ai 23 ans et je suis un{" "}
          <span>développeur web front-end</span> et <span>intégrateur web</span>{" "}
          diplômé d&apos;un Master Développemet Web à Ynov Campus Aix (BAC+5).
          <br />
          Depuis tout petit, j&apos;ai toujours été attiré par
          l&apos;informatique et les technologies de l&apos;information.
          J&apos;aime créer des sites web incroyables et améliorer les
          expériences utilisateur. En plus de ça, je suis également passionné
          par la musique 🎶, l&apos;astronomie 🚀 et l&apos;art 🎨.
          </p>
        </div>

      
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className={styles.contentEnd}
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
          développement web et d&apos;intégration web, ne cherchez pas plus loin
          que moi ! <br /> 🤘
        </p>
      </section>
      <section className={styles.cv} data-aos="fade-up">
        <div className={styles.leftside}>
          <h3>Mes compétences</h3>
          <div className={styles.container}>
            <div className={styles.box}>
              <div className={styles.content}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <div className={styles.text}>
                  <h4>HTML</h4>
                  <p>🌕🌕🌕🌕🌕</p>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.content}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faPaintBrush} />
                </div>
                <div className={styles.text}>
                  <h4>CSS / SCSS</h4>
                  <p>🌕🌕🌕🌕🌕</p>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.content}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <div className={styles.text}>
                  <h4>Javascript</h4>
                  <p>🌕🌕🌕🌕🌗</p>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.content}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <div className={styles.text}>
                  <h4>React.Js / Next.Js</h4>
                  <p>🌕🌕🌕🌑🌑</p>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.content}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faPaintBrush} />
                </div>
                <div className={styles.text}>
                  <h4>UX Design / Figma</h4>
                  <p>🌕🌕🌕🌑🌑</p>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.content}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <div className={styles.text}>
                  <h4>.NET (C#)</h4>
                  <p>🌕🌕🌗🌑🌑</p>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.content}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <div className={styles.text}>
                  <h4>Git (Hub/Lab)</h4>
                  <p>🌕🌕🌕🌕🌑</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className={styles.separator}></span>
        <div className={styles.rightside}>
          <h3>J&apos;ai travaillé avec</h3>
          <div className={styles.container}>
            <div className={styles.box}>
              <div className={styles.content}>
                <div className={styles.icon}>i</div>
                <div className={styles.text}>
                  <h4>Apside</h4>
                  <p>3 ans</p>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.content}>
                <div className={styles.icon}>i</div>
                <div className={styles.text}>
                  <h4>Domaine plan des devens</h4>
                  <p>6 mois (1 projet)</p>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.content}>
                <div className={styles.icon}>i</div>
                <div className={styles.text}>
                  <h4>Projets perso</h4>
                  <p>toute ma vie :)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
