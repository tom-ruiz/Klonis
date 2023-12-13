import Head from "next/head";
import { Jost } from "next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { useEffect } from "react";
import AOS from "aos";

const jost = Jost({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio - Tom Ruiz</title>
        <meta name="description" content="Le portfolio de Tom Ruiz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./mountain.svg" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <section className={styles.home}>
          <h1 data-aos="fade-right" data-aos-duration="1000">
            Tom Ruiz
          </h1>
          <div className="wrapper">
            <ul className="dynamic-txts">
              <li>
                <span>🖥 Dev web</span>
              </li>
              <li>
                <span>🎸 Musicien</span>
              </li>
              <li>
                <span>🎨 Artiste</span>
              </li>
              <li>
                <span>🐳 Ecologiste</span>
              </li>
            </ul>
          </div>

          <p
            className={styles.description}
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Bienvenue sur mon site !<br />
            Comment êtes vous arrivé là ?
          </p>
        </section>
        <Footer />
      </main>
    </>
  );
}
