import React from "react"
import "./reset.css"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Seo from "../components/Seo/seo"
import GlobalStyles from "../styles/GlobalStyles"
import TypographyStyles from "../styles/TypographyStyles"
import Logo from "../images/VerticalLogo.png"

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <GlobalStyles />
      <TypographyStyles />
      <Navbar Logo={Logo} />
      <div className="layout">{children}</div>
      <Footer Logo={Logo} />
    </>
  )
}

export default Layout
