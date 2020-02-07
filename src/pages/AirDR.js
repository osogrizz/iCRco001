import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import AirDR_Product from "../components/HeroImages/AirDR_Product"

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
  justify-content: space-evenly;
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
    justify-content: space-between;
    width: 1120px;
    padding: 0 2%;
  }
`

const ProductConfig = styled("ul")`
  position: relative;
  margin: 4.75em auto 0;
  border: 2px dotted #33333355;
  border-radius: 50%;
  width: 24em;
  height: 24em;
  padding: 2.8em;
  display: flex;
  justify-content: center;
  align-items: center;
  /* cursor: pointer; */
  transition: 0.24s 0.2s;

  .prod-container {
    width: 80px;
    height: 80px;
    text-align: center;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  li {
    display: block;
    overflow: hidden;
    position: absolute;
    list-style-type: none;
    text-align: center;
    align-items: center;
    top: 50%;
    left: 50%;
    border: 1px solid black;
    height: 4em;
    width: 4em;
    margin: -2em;
    background: black;
  }
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
              <div
                className="prod-container"
                style={{
                  width: "80px",
                  height: "80px",
                  textAlign: "center",
                  fontWeight: "700",
                  // cursor: "pointer",
                }}
              >
                <AirDR_Product />
                AirDR
              </div>
              <li style={{ transform: "translate(12em)" }}>option 1</li>
              <li
                style={{
                  transform: "rotate(90deg) translate(12em) rotate(-90deg)",
                }}
              >
                option 2
              </li>
              <li style={{ transform: "translate(-12em)" }}>option 3</li>
              <li
                style={{
                  transform: "rotate(270deg) translate(12em) rotate(-270deg)",
                }}
              >
                option 4
              </li>
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
