import React from "react"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Products from "../components/Products"
import Product from "../components/Product"
import Leader from "../components/CompanyLeader"
import Countdown from "../components/Countdown"
import Contact from "../components/Contact/contact"
import { Link } from "react-scroll"

import perk1Img from "../images/organic.webp"
import perk2Img from "../images/healthcare.webp"
import perk3Img from "../images/odisha.webp"
import NewsAlert from "../components/NewsAlert"

const HomePage = () => {
  
  return (
    <>
      <Banner />
      <TextBlock
        id="about"
        title="Our Mission"
        paragraph="Our mission is to serve the traditional and cultural flavoured drink of
        Odisha to the consumer which are now getting away due to the
        modernization of society. Now a days people want you have healthy
        natural and traditional drink but due to their busy day to day life
        they are unable to have it, we will help them to overcome this
        problem by providing such kind of drink in a handy packaged manner."
      >
        <Link to="perks" smooth={true} duration={500}>
          <Button label="Tell Me More" cta="Tell Me More!" />
        </Link>
      </TextBlock>
      <TextBlockImg
        id="perks"
        title="What will you expect from our products?"
        subtitle="One good thing about our products is that the taste and nutrition go hand in hand. 
        Our products are enriched with Odia tradition and love of Odia Peoples. So you get what you want and what you love."
      >
        <div className="flex-container trio-block">
          <Perk
            img={perk1Img}
            alt="Super fast speed increases"
            title="100% Organic"
            content="Our products are made of 100% pure and oroganic fruits."
          />
          <Perk
            img={perk2Img}
            alt="Healthy"
            title="100% Healthy"
            content="Our drinks are rich in Vitamin-A/C/B1/B2."
          />
          <Perk
            img={perk3Img}
            style={{ height: "130px" }}
            alt="Super fast speed increases"
            title="100% Odia"
            content="Made with Odia flavors, Made For India"
          />
        </div>
      </TextBlockImg>
      <Products title="Product Launch" para="Countdown ends at Aug 30, 2021">
        <Countdown />
        {/* <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          <Product title="Standard">
            <ul>
              <li>
                <MdDone />1 User
              </li>
              <li>
                <MdDone />
                1GB Storage
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Dedicated Advisor
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                24/7 Support
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Product>
          <Product title="Hyper" active={true}>
            <ul>
              <li>
                <MdDone />
                24/7 Support
              </li>
              <li>
                <MdDone />
                Dedicated Advisor
              </li>
              <li>
                <MdDone />
                Unlimited Storage
              </li>
              <li>
                <MdDone />
                Unlimited Users
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Product>
          <Product title="Super">
            <ul>
              <li>
                <MdDone />
                10 Users
              </li>
              <li>
                <MdDone />
                500GB Storage
              </li>
              <li>
                <MdDone />
                Advice Support
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Dedicated Advisor
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Product>
        </IconContext.Provider> */}
      </Products>
      <Leader />
      <Contact
        id="contact"
        title="Get in touch"
        subtitle="or fill in the contact form down below."
      />
    </>
  )
}

export default HomePage
