import React, { useState, useEffect } from "react"
import { mainMenuItems } from "../constants/links"
import styled from "styled-components"
import { Link } from "react-scroll"

const Navbar = ({ Logo,onClick }) => {
  const [isOpen, setNav] = useState(false)
  const [visible, setVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset

    // set state based on location info (explained in more detail below)
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    )

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos, visible, handleScroll])

  return (
    <NavStyles
      style={{
        top: visible ? "0" : "-160px",
        visibility: visible ? "visible" : "hidden",
      }}
    >
      <div className="masthead flex-container">
        <img src={Logo} alt="Logo" />
        <button
          className={isOpen ? "toggle-btn toggle-btn-active" : "toggle-btn"}
          type="button"
          onClick={toggleNav}
          aria-label="Menu Button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
        {mainMenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={`${item.path}`}
                smooth={true}
                duration={500}
                onClick={toggleNav}
              >
                <span>{item.text}</span>
              </Link>
            </li>
          )
        })}
        <li key="hdsh" onClick={onClick}>
          {/* <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdTW-9Y2wzOLiD47DIJ4TJz6GiAiXCII5D4oLLBvm3V9ajrrw/viewform"
            target="_blank"
          > */}
            <span>Career</span>
          {/* </a> */}
        </li>
      </ul>
    </NavStyles>
  )
}

export const NavStyles = styled.nav`
  position: fixed;
  z-index: 10;
  width: 100%;
  left: 0;
  right: 0;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
  .masthead {
    z-index: 3;
    width: 100%;
    justify-content: space-between;

    img {
      width: 16%;
      @media (max-width: 388px) {
        width: 32%;
      }
      @media (min-width: 1200px) {
        width: 16%;
      }
    }
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    text-align: center;
    background: #fff;
    margin: 0;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateX(100%);
    transition: 0.3s ease-in;
    list-style: none;
    padding-left: 0;

    li {
      list-style: none;
      font-size: 1.25rem;
      font-weight: 400;
      margin-left: 0;
      padding: 0.75rem 0;
      span {
        color: #1b1b1b;
        &.active {
          color: #e609b5;
        }
        &:hover {
          cursor: pointer;
          color: #e609b5;
        }
      }
      a {
        text-decoration: none;
        text-transform: capitalize;
        transition: 0.3s;
      }
      &:hover {
        cursor: pointer;
        a {
          color: #e609b5;
        }
      }
    }

    &.show-nav {
      transform: translateX(0%);
    }
  }

  .toggle-btn {
    width: 40px;
    height: 40px;
    padding: 5px;
    background-color: transparent;
    border: none;

    span {
      display: block;
      width: 30px;
      height: 2px;
      background-color: #1b1b1b;
      transition: 0.2s ease-in;

      &:nth-child(1) {
        transform: translateY(-5px);
      }

      &:nth-child(3) {
        transform: translateY(5px);
      }
    }

    &.toggle-btn-active {
      span {
        &:nth-child(1) {
          transform: translateY(2px) rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
          transform: translateX(-100%);
        }

        &:nth-child(3) {
          transform: translateY(-2px) rotate(-45deg);
        }
      }
    }
  }

  @media (min-width: 992px) {
    .masthead {
      flex-direction: column;
      justify-content: center;
    }

    .toggle-btn {
      display: none;
    }

    .nav-links {
      background: transparent;
      flex-direction: row;
      margin-left: auto;
      position: relative;
      transform: translateX(0);
      transition: none;

      li {
        margin-left: 1rem;
      }
    }
  }
`

export default Navbar
