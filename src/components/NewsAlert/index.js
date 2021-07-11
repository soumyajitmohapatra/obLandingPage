import React from "react"
import "react-responsive-modal/styles.css"
import { Modal } from "react-responsive-modal"
import img from "../../images/hiring.webp"
function NewsAlert({ onClose, open }) {
  return (
    <div>
      <Modal open={open} onClose={onClose} center>
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSe69qQFdadrUcMrQ470SiBFuCBCuALIXm2GuoqQzD1NhG0zLQ/viewform"
        >
          <img src={img} alt="hiring" style={{ width: "100%" }} />
        </a>
      </Modal>
    </div>
  )
}
export default NewsAlert
