import React from "react";
import Modal from "./Modal";
import { useSelector } from "react-redux";

export default function Footer() {
  const { modalOpen } = useSelector((state) => state.modal);
  return (
    <>
      {/* <div className="popup-hook"></div> */}
      <div className="modal-container">{modalOpen && <Modal />}</div>
      <footer className="footer">
        <div className="footer-container row">
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
