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
      margin-top: 80px;
    }
    h1,
    h2 {
      text-align: center;
    }
  }
`

const ProductHeader = styled("nav")`
  position: fixed;
  background: #fad5a2;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    color: #fff;
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
          </div>
        </ProductHeader>
        <div>
          <section>
            <h1>AirDR</h1>
            <ProductConfig>
              <div
                style={{
                  top: "50%",
                  left: "50%",
                  border: "1px solid black",
                  height: "20px",
                  width: "20px",
                }}
              ></div>
              <div
                style={{
                  top: "50%",
                  left: "50%",
                  border: "1px solid black",
                  height: "20px",
                  width: "20px",
                }}
              ></div>
              <div
                style={{
                  top: "50%",
                  left: "50%",
                  border: "1px solid black",
                  height: "20px",
                  width: "20px",
                }}
              ></div>
              <div
                style={{
                  top: "50%",
                  left: "50%",
                  border: "1px solid black",
                  height: "20px",
                  width: "20px",
                }}
              ></div>
            </ProductConfig>
          </section>
          <section>
            <h2>section 2</h2>
          </section>
          <section>
            <h2>section 3</h2>
          </section>
        </div>
      </Container>
    </Layout>
  )
}

export default AirDR
