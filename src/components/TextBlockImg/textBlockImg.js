import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const TextBlockImg = ({ title, children, subtitle, id }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "purple-bg.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
    }
  `)
  return (
    <TextBlockImgWrapper>
      <div className="content-container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {children}
      </div>
    </TextBlockImgWrapper>
  )
}

const TextBlockImgWrapper = styled.section`
  background: #f5f6fa;
  color: #1b1b1b;
  text-align: left;
  padding: 60px 20px;

  @media (min-width: 768px) {
    padding: 80px 30px;
    text-align: center;
  }

  h1 {
    color: #055527;
    font-weight: bolder;
    font-size: 3rem;
  }

  p {
    margin-bottom: 40px;
  }
`

export default TextBlockImg
