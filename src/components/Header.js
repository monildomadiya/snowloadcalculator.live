import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <div className="logo">
          ❄ Snow<em>Load</em>Calculator
        </div>
      </Link>
      <ul className="nav-links">
        <li>
          <Link href="/#calculator">Calculator</Link>
        </li>
        <li>
          <Link href="/#how-it-works">How It Works</Link>
        </li>
        <li>
          <Link href="/#factors">Factors</Link>
        </li>
        <li>
          <Link href="/#faq">FAQ</Link>
        </li>
      </ul>
    </nav>
  );
}
