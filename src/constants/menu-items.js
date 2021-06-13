import React from "react"
import { FaInstagram, FaFacebook } from "react-icons/fa"

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
    icon: <FaInstagram />,
    url: "https://www.instagram.com/odisha_beverages_pvt._ltd/",
    name: "Instagram",
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
