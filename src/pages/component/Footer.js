import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="footer">
      <Link href="/pages/page-mention">klonispro@protonmail.com</Link>
      © KLONIS 2023
      <Link href="/pages/page-mention"> Mentions légales </Link>
    </div>
  );
}
