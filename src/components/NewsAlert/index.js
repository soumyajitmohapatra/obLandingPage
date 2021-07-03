import React, { useState, useEffect } from "react"
import "react-responsive-modal/styles.css"
import { Modal } from "react-responsive-modal"
import img from "../../images/hiring.jpg"
function NewsAlert() {
  const [open, setOpen] = useState(false)

  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)

  useEffect(() => {
    onOpenModal()
  }, [])
  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdTW-9Y2wzOLiD47DIJ4TJz6GiAiXCII5D4oLLBvm3V9ajrrw/viewform"
        >
          <img src={img} alt="hiring" style={{ width: "100%" }} />
        </a>
      </Modal>
    </div>
  )
}
export default NewsAlert
