import React from "react";

export default function ContactPage() {
  return (
    <section class="section section-contact">
      <div class="contact-page row">
        <h1>Contact us</h1>
        <p class="description">Meet the developers:</p>
        <div class="developers-container">
          <div class="developer">
            <h3 class="name">👤 Henry Ikemefuna</h3>
            <ul>
              <li>
                GitHub:{" "}
                <a href="https://github.com/henry-dura" target="_blank">
                  @henry-dura
                </a>{" "}
              </li>
              <li>
                Twitter:{" "}
                <a href="https://twitter.com/henryikemefuna" target="_blank">
                  @henryikemefuna
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/henry-ikemefuna-ugwu-3a2613100/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div class="developer">
            <h3 class="name">👤 James Serengia</h3>
            <ul>
              <li>
                GitHub:{" "}
                <a href="https://github.com/serengia" target="_blank">
                  @serengia
                </a>
              </li>
              <li>
                Twitter:{" "}
                <a href="https://twitter.com/JamesSerengia" target="_blank">
                  @jamesserengia
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a
                  href="https://linkedin.com/in/james-serengia"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
