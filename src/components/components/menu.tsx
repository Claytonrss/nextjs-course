import Link from "next/link";
import { SignInSignOn } from "./signsignon";

export default function Menu() {
  return (
    <div className="header">
      <ul className="menu">
        <li>
          <Link href="/" prefetch>
            Home
          </Link>
        </li>
        <li>
          <Link href="/sobre" prefetch>
            Sobre
          </Link>
        </li>
        <li>
          <Link href="/imc" prefetch>
            IMC
          </Link>
        </li>
        <li>
          <Link href="/fetch" prefetch>
            Fetch
          </Link>
        </li>
        <li>
          <Link href="/cursos" prefetch>
            Cursos
          </Link>
        </li>
      </ul>
      <SignInSignOn/>
    </div>
  );
}
