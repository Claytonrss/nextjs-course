import Link from "next/link";

export default function Menu() {
    return (
      <ul className="menu">
        <li><Link href="/" prefetch>Home</Link></li>
        <li><Link href="/sobre" prefetch>Sobre</Link></li>
      </ul>
    );
  }