import React from "react";
import Modal from "./Modal";

export default function Footer() {
  return (
    <>
      {/* <div class="popup-hook"></div> */}
      <div className="modal-container">{modalOpen && <Modal />}</div>
      <footer class="footer">
        <div class="footer-container row">
          <p>
            Created by{" "}
            <a target="_blank" href="https://github.com/serengia">
              James Serengia
            </a>{" "}
          </p>
        </div>
      </footer>
    </>
  );
}
