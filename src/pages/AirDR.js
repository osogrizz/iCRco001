import React from "react"
import styled from "@emotion/styled"
import { Link, graphql } from "gatsby"
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

  @media (max-width: 1300px) {
    section {
      height: 130vh;
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
  margin: 1.45rem auto 5rem;
  border: 3px solid #333333;
  border-radius: 50%;
  width: 34rem;
  height: 34rem;
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
    display: flex;
    flex-direction: column;
    position: absolute;
    list-style-type: none;
    text-align: center;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    top: 50%;
    left: 50%;
    height: 4em;
    width: 4em;
    margin: -2em;
    cursor: pointer;
  }

  .option-container {
    width: 30px;
  }

  p {
    font-size: 0.6rem;
    word-wrap: normal;
    line-height: 12px;
    margin: 0;
    font-weight: 700;
  }

  @media (max-width: 1300px) {
    margin: 10.75rem auto 2rem;
    width: 10rem;
    height: 10rem;
    border: none;
    padding: 0;

    li {
      height: 0.4em;
      width: 0.4em;
      margin: 0rem;
    }
  }
`

const AirDR = ({ data }) => {
  return (
    <Layout>
      <SEO title="AirDR" />
      <Container>
        <ProductHeader>
          <div className="product-nav">
            <Link>
              <div style={{ minWidth: "20px" }}>
                <Img fluid={data.motor.fluid} />
              </div>
            </Link>
            <Link>
              <div style={{ maxWidth: "50px" }}>
                <Img
                  fluid={data.pacs.fluid}
                  style={{ width: "80px", left: "-15px" }}
                />
              </div>
            </Link>
            <Link>
              <div style={{ minWidth: "20px" }}>
                <Img fluid={data.integrated.fluid} />
              </div>
            </Link>
            <Link>
              <div style={{ width: "20px" }}>
                <Img fluid={data.motor.fluid} />
              </div>
            </Link>
            <Link>
              <div style={{ maxWidth: "20px" }}>
                <Img
                  fluid={data.pacs.fluid}
                  style={{ width: "80px", left: "-30px" }}
                />
              </div>
            </Link>
            <Link>
              <div style={{ minWidth: "20px" }}>
                <Img fluid={data.integrated.fluid} />
              </div>
            </Link>
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
            <ProductConfig>
              <div
                className="prod-container"
                style={{
                  width: "80px",
                  height: "80px",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                {/* <AirDRProduct /> */}
                <div>
                  <Img fluid={data.airdr.fluid} />
                </div>
                AirDR Kit
              </div>
              <li
                style={{
                  transform: "rotate(10deg) translate(12em) rotate(-10deg)",
                }}
              >
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
                  transform: "rotate(60deg) translate(12em) rotate(-60deg)",
                }}
              >
                <div style={{ width: "50px" }}>
                  <Img fluid={data.clarity.fluid} />
                </div>
                <div style={{ margin: 0, padding: 0 }}>
                  <p>Clarity</p>
                  <p>Practice</p>
                </div>
              </li>
              <li
                style={{
                  transform: "rotate(115deg) translate(12em) rotate(-115deg)",
                }}
              >
                <div style={{ width: "120px" }}>
                  <Img fluid={data.tfsp.fluid} />
                </div>
                <div style={{ margin: 0, padding: 0 }}>
                  <p>True Flat</p>
                  <p>Scan Path</p>
                </div>
              </li>
              <li
                style={{
                  transform: "rotate(-325deg) translate(-12em) rotate(325deg)",
                }}
              >
                <div style={{ width: "60px" }}>
                  <Img fluid={data.registration.fluid} />
                </div>
                <div>
                  <p>Product</p>
                  <p>Registration</p>
                </div>
              </li>
              <li
                style={{
                  transform: "rotate(-10deg) translate(-12em) rotate(10deg)",
                }}
              >
                <div style={{ width: "60px" }}>
                  <Img fluid={data.xc.fluid} />
                </div>
                <div>
                  <p>Product</p>
                  <p>Registration</p>
                </div>
              </li>
              <li
                style={{
                  transform: "rotate(270deg) translate(12em) rotate(-270deg)",
                }}
              >
                <div style={{ width: "90px" }}>
                  <Img fluid={data.pacs.fluid} />
                </div>
                <div>
                  <p>Acuisition</p>
                  <p>Station</p>
                </div>
              </li>
              <li
                style={{
                  transform: "rotate(325deg) translate(12em) rotate(-325deg)",
                }}
              >
                <div style={{ width: "32px" }}>
                  <Img fluid={data.integrated.fluid} />
                </div>
                <div style={{ width: "180px" }}>
                  <p>Integrated PACS &</p>
                  <p>Workstation PC</p>
                </div>
              </li>
            </ProductConfig>
            <div>
              <button style={{ margin: "8rem auto" }}>Request a Quote</button>
            </div>
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
    airdr: imageSharp(fluid: { originalName: { eq: "AirDR_Icon.png" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
    motor: imageSharp(
      fluid: { originalName: { eq: "Motorized_Elevator.png" } }
    ) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
    clarity: imageSharp(
      fluid: { originalName: { eq: "Clarity_PracticeIcon.png" } }
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
    xc: imageSharp(fluid: { originalName: { eq: "XC_Icon.png" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
    registration: imageSharp(
      fluid: { originalName: { eq: "Product_RegistrationIcon.png" } }
    ) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
    pacs: imageSharp(fluid: { originalName: { eq: "PACS_Icon.png" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
    integrated: imageSharp(fluid: { originalName: { eq: "CPU_Icon.png" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`
