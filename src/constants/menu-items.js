import React from "react"
import { FaInstagram, FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa"

export const mainMenuItems = [
  {
    path: "/",
    title: "home",
  },
  {
    path: "about",
    title: "about",
  },
  {
    path: "products",
    title: "products",
  },
  {
    path: "contact",
    title: "contact",
  },
 
]

export const socialMenuItems = [
  {
    icon: <FaFacebook />,
    url: "https://www.facebook.com/Odishabeverages/",
    name: "Facebook",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/company/odisha-beverages-pvt-ltd/about/",
    name: "Linkedin",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/odisha_beverages_pvt._ltd/",
    name: "Instagram",
  },
  {
    icon: <FaWhatsapp />,
    url: "https://wa.me/+919937384021/?text=Hi Odisha Beverages, ",
    name: "Whatsapp",
  },
]

export const footerMenuItems = [
  {
    path: "/privacy",
    title: "privacy",
  },
  {
    path: "/cookies",
    title: "cookies",
  },
]
