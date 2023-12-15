import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import AOS from "aos";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState({});

  const handleOpen = (id) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      setIsOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  const isActive = (pathname) => {
    return router.pathname === pathname ? "active" : "";
  };

  return (
    <div className={`navmain ${isOpen["menu"] ? "bgwhite" : ""} `}>
      <button className="responsiveMenu" onClick={() => handleOpen("menu")}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <nav className={`${isOpen["menu"] ? "menuOpen" : ""}`}>
        <Link href="/"> KLONIS</Link>{" "}
        <Link
          href="/"
          className={`${isActive("/")} accueilName ${
            isOpen["menu"] ? "accueilVisible" : ""
          }`}
        >
          {" "}
          Accueil{" "}
        </Link>{" "}
        <Link href="/pages/page-info" className={isActive("/pages/page-info")}>
          {" "}
          Infos{" "}
        </Link>{" "}
        <Link
          href="/pages/page-presta"
          className={isActive("/pages/page-presta")}
        >
          {" "}
          Prestations{" "}
        </Link>{" "}
        <Link href="/pages/page-contact"> Contact </Link>{" "}
      </nav>
    </div>
  );
}

{
  /* <Link
href="/pages/page-contact"
className={router.pathname == "/" ? "active" : "activeNav"}
> */
}
