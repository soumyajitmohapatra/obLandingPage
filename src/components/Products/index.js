import React from "react"
import styled from "styled-components"

const Products = ({ title, para, children }) => {
  return (
    <ProductsWrapper id="products">
      <div className="text-area">
        <h2>{title}</h2>
        <p>{para}</p>
      </div>
      <div className="flex-container">{children}</div>
    </ProductsWrapper>
  )
}

const ProductsWrapper = styled.section`
  padding: 30px 30px 120px 30px;
  text-align: center;
  background: #f5f6fa;
  color: #1b1b1b;
  .text-area {
    max-width: 500px;
    margin: 0 auto;

    @media (min-width: 1200px) {
      max-width: 650px;
    }
  }

  h2 {
    color: #055527;
    font-weight: bolder;
    font-size: 3rem;
  }

  .flex-container {
    flex-direction: column-reverse;
    padding-top: 80px;
    align-items: center;
    justify-content: center;

    @media (min-width: 992px) {
      flex-direction: row;
    }
  }
`

export default Products
