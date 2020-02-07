import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled("div")`
  margin-top: 50px;

  section {
    height: 100vh;
    padding: 40px 20px;
    h1 {
      margin-top: 25px;
    }
    h1,
    h2 {
      text-align: center;
    }
  }
`

const ProductHeader = styled("nav")`
  /* position: fixed; */
  /* background: #fad5a2; */
  background: #c9c5c7;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;

  a {
    color: black;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 1.2px;
  }
  .product-nav {
    display: flex;
    justify-content: space-around;
    width: 1120px;
  }
`

const ProductConfig = styled("div")`
  position: relative;
  margin: 0 auto;
  padding: 0;
  border: 8px solid black;
  border-radius: 50%;
  width: 520px;
  height: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProductOption = styled("div")`
  top: 50%;
  left: 50%;
  border: 1px solid black;
  height: 20px;
  width: 20px;
  margin: -10px;
  position: relative;
`

const AirDR = () => {
  return (
    <Layout>
      <SEO title="AirDR" />
      <Container>
        <ProductHeader>
          <div className="product-nav">
            <Link>AirDR LE</Link>
            <Link>Two</Link>
            <Link>AirDR LEc</Link>
            <Link>iDR</Link>
            <Link>iDR34</Link>
            <Link>3600</Link>
          </div>
        </ProductHeader>
        <div>
          <section>
            <h1>AirDR</h1>
            <ProductConfig>
              <ProductOption />
              <ProductOption />
              <ProductOption />
              <ProductOption />
            </ProductConfig>
            <button>Request a Quote</button>
          </section>
          <section>
            <h2>Product Info</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "50vh",
                width: "960px",
                margin: " 50vh auto 0",
              }}
            >
              <div>detail 1</div> |<div>detail 2</div> |<div>detail 3</div>
            </div>
          </section>
          <section>
            <h2>Product Specs</h2>
          </section>
        </div>
      </Container>
    </Layout>
  )
}

export default AirDR
