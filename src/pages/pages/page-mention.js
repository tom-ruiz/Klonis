import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import styles from "@/styles/Mention.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function PageInfo() {
  return (
    <>
      <Navbar />
      <section className={styles.mention}>
        <h1> Mentions légales </h1>
        <p>
          {" "}
          Conformément aux dispositions des articles 6-III et 19 de la loi pour
          la Confiance dans l’Économie Numérique, nous vous informons que
          l&apos;éditeur du site est
          <br />
          Tom Ruiz <br />
          tomruiz2611&gmail.com
          <br />
          13090 Aix-En-Provence
          <br />
        </p>
        <h1> Hébergement </h1>
        <p>
          {" "}
          [Nom de l&apos;hébergeur] <br />
          [Adresse postale de l&apos;hébergeur] <br />
          [Numéro de téléphone] <br />
          [Adresse e-mail de contact]{" "}
        </p>
        <h1> Propriété intellectuelle </h1>
        <p>
          {" "}
          Le contenu du site (textes, images, vidéos, logos, etc.) est la
          propriété exclusive de Tom Ruiz. Toute reproduction, représentation,
          modification, adaptation ou exploitation, totale ou partielle, du site
          ou de son contenu, par quelque procédé que ce soit, sans
          l&apos;autorisation préalable de Tom Ruiz, est strictement interdite.{" "}
        </p>
        <h1> Protection des données personnelles </h1>
        <p>
          {" "}
          Tom Ruiz s&apos;engage à respecter la vie privée de ses utilisateurs
          et à traiter leurs données personnelles de manière responsable. Les
          données collectées sur le site sont utilisées uniquement dans le cadre
          de la gestion du site et ne sont pas communiquées à des tiers.
          Conformément à la loi Informatique et Libertés et au Règlement Général
          sur la Protection des Données (RGPD), les utilisateurs disposent
          d&apos;un droit d&apos;accès, de rectification, d&apos;opposition et
          de suppression de leurs données personnelles. Pour exercer ces droits,
          l&apos;utilisateur peut contacter [Nom de l&apos;entreprise ou du
          propriétaire] à l&apos;adresse e-mail suivante : [Adresse e-mail de
          contact].{" "}
        </p>
        <h1> Cookies </h1>
        <p>
          {" "}
          Le site utilise des cookies pour améliorer l&apos;expérience
          utilisateur et faciliter la navigation. Les cookies sont des petits
          fichiers texte stockés sur le disque dur de l&apos;utilisateur. Ils ne
          permettent pas l&apos;identification de l&apos;utilisateur, mais
          enregistrent des informations relatives à sa navigation sur le site.
          L&apos;utilisateur peut désactiver les cookies dans les paramètres de
          son navigateur.{" "}
        </p>
        <h1>Responsabilité </h1>
        <p>
          {" "}
          Tom Ruiz décline toute responsabilité en cas d&apos;interruption du
          site, de problème technique ou de dommage résultant de
          l&apos;utilisation du site ou de son contenu.{" "}
        </p>
        <h1> Droit applicable et juridiction compétente : </h1>
        <p>
          {" "}
          Les présentes mentions légales sont soumises au droit français. En cas
          de litige, les tribunaux français seront seuls compétents.{" "}
        </p>
      </section>
      <Footer />
    </>
  );
}
