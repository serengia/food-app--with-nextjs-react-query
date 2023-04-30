import React from "react";

export default function Header() {
  return (
    <header>
      <nav class="header-container row">
        <div class="logo">
          <a href="">Chickenry</a>
        </div>

        <ul>
          <li>
            <button class="navigation-btn" id="home">
              Home
            </button>
          </li>
          <li>
            <button class="navigation-btn" id="contact">
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
