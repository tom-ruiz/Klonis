import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.svg";
export default function Footer() {
  return (
    <div className="footer">
      <Link target="_blank" href="https://www.linkedin.com/in/tom-ruiz54/"> Linkedin </Link>
      <Link target="_blank" href="https://github.com/tom-ruiz"> Github </Link>
      <Link href="/pages/page-mention"> Mentions légales </Link>
    </div>
  );
}
