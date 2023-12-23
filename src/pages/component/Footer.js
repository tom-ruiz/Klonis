import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="footer">
      <Link href="mailto:klonispro@protonmail.com">
        klonispro@protonmail.com
      </Link>
      © KLONIS {currentYear}
      <Link href="/pages/page-mention"> Mentions légales </Link>
    </div>
  );
}
