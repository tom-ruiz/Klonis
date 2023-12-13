import Image from "next/image";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import styles from "@/styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function PageInfo() {
  return (
    <>
      <Navbar />
      <section className={styles.contact}>
        <h1>
          <FontAwesomeIcon icon={faEnvelope} /> E-mail
        </h1>
        <Link href="mailto:tomruiz2611@gmail.com">tomruiz2611@gmail.com</Link>
        <h1>
          <FontAwesomeIcon icon={faPhone} /> Numéro
        </h1>
        <p>06.20.41.74.13</p>
      </section>
      <Footer />
    </>
  );
}
