import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="header-container row">
        <div className="logo">
          <Link href="/">Chickenry</Link>
        </div>

        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/meals"}>Meals</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
