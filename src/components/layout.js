import React, { useState, useEffect } from "react"
import "./reset.css"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Seo from "../components/Seo/seo"
import GlobalStyles from "../styles/GlobalStyles"
import TypographyStyles from "../styles/TypographyStyles"
import Logo from "../images/ob.png"
import NewsAlert from "./NewsAlert"

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)

  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)

  return (
    <>
      <Seo />
      <GlobalStyles />
      <TypographyStyles />
      {/* <NewsAlert open={open} onClose={onCloseModal} /> */}
      <Navbar
        Logo={Logo}
        onClick={() => {
          setOpen(true)
        }}
      />
      <div className="layout">{children}</div>
      <Footer Logo={Logo} />
    </>
  )
}

export default Layout
