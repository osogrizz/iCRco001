import React from "react"
import styled from "@emotion/styled"
import { Link, graphql } from "gatsby"
import AirDR_Product from "../components/HeroImages/AirDR_Product"
import Img from "gatsby-image"
// import AirDrVideo from "../images/AirDR_Animation.mp4"

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
    h2 {
      margin-top: 25px;
    }
  }
`

const ProductHeader = styled("nav")`
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
    justify-content: space-evenly;
    width: 1120px;
    padding: 0 2%;
  }
  @media (max-width: 1300px) {
    margin: 0 auto;
    .product-nav a {
      font-size: 0.875rem;
      width: 100%;
    }
  }

  @media (max-width: 800px) {
    margin: 0 auto;
    .product-nav a {
      padding: 0;
      font-size: 0.5rem;
    }
  }
`

const ProductConfig = styled("ul")`
  position: relative;
  margin: 4.75rem auto 5rem;
  border: 3px solid #333333;
  border-radius: 50%;
  width: 30rem;
  height: 30rem;
  padding: 2.8rem;
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
    /* display: block; */
    display: flex;
    flex-direction: column;
    /* overflow: hidden; */
    position: absolute;
    list-style-type: none;
    text-align: center;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    top: 50%;
    left: 50%;
    /* border: 1px solid black; */
    height: 4em;
    width: 4em;
    margin: -2em;
    /* background: black; */
  }

  .option-container {
    width: 30px;
  }

  p {
    font-size: 0.6rem;
    word-wrap: normal;
    line-height: 12px;
    margin: 0;
    /* text-align: left; */
  }
`

const AirDR = ({ data }) => {
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
          {/* <section
            id="ClarityPACS"
            style={{
              background: "transparent",
              top: 0,
              left: 0,
              margin: 0,
              marginLeft: "-48px",
              padding: 0,
              height: "520px",
              width: "1020px",
            }}
          >
            <video
              style={{ display: "flex" }}
              className="video-player"
              height="100%"
              width="100%"
              loop
              muted
              autoPlay
              playsInline
            >
              <source src={AirDrVideo} type="video/mp4" />
            </video>
          </section> */}
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
              <li style={{ transform: "translate(12em)" }}>
                <div className="option-container">
                  <Img fluid={data.motor.fluid} />
                </div>
                <div>
                  <p>Motorized</p>
                  <p>Elevator</p>
                </div>
              </li>
              <li
                style={{
                  transform: "rotate(90deg) translate(12em) rotate(-90deg)",
                }}
              >
                <div style={{ width: "120px" }}>
                  <Img fluid={data.tfsp.fluid} />
                </div>
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

export const query = graphql`
  query AirDR {
    motor: imageSharp(
      fluid: { originalName: { eq: "Motorized_Elevator.png" } }
    ) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
    tfsp: imageSharp(fluid: { originalName: { eq: "TFSP_Icon.png" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`
