import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

import { FiLogOut } from "react-icons/fi";

export function Header() {
  const { signOut } = useContext(AuthContext);
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/dashboard">
          <Image
            src="/logo.svg"
            width={190}
            height={60}
            alt="Logo SujeitoPizza"
          />
        </Link>

        <nav className={styles.menuNav}>
          <Link href="/category">
            <a>Categoria</a>
          </Link>
          <Link href="/product">
            <a>Cardápio</a>
          </Link>

          <button onClick={signOut}>
            <FiLogOut color="#fff" size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
}
