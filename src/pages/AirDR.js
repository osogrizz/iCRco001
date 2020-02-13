import React from "react"
import styled from "@emotion/styled"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
// import AirDrVideo from "../images/AirDR_Animation.mp4"
import SkyHero from "../components/HeroImages/sky-hero"
import AironeSection from "../components/airone-section"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled("div")`
  margin-top: 50px;

  section {
    height: 100vh;
    padding: 40px 20px;
    z-index: 1000;
    h1,
    h2 {
      margin-top: 25px;
      text-align: center;
      letter-spacing: 2px;
    }

    /* h2 {
      margin-top: 25px;
      text-align: center;
    } */
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
  height: 140px;
  display: flex;
  justify-content: space-evenly;
  z-index: 1000;
  /* padding-top: 20px; */

  a {
    color: black;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 1.2px;
  }
  .product-nav {
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    width: 1120px;
    padding: 20px 2% 0;
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

  /* img {
    padding: 40px 0;
  } */
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
              <div style={{ width: "70px" }}>
                <Img fluid={data.airdrNav.fluid} />
                <p style={{ fontSize: "0.6rem" }}>AirDR</p>
              </div>
            </Link>
            <Link>
              <div style={{ width: "72px" }}>
                <Img fluid={data.airdrC.fluid} />
                <p style={{ fontSize: "0.6rem" }}>AirDR</p>
              </div>
            </Link>
            <Link>
              <div style={{ width: "70px" }}>
                <Img fluid={data.airdrLE.fluid} />
                <p style={{ fontSize: "0.6rem" }}>AirDR</p>
              </div>
            </Link>
            <Link>
              <div style={{ width: "70px" }}>
                <Img fluid={data.airdrLEc.fluid} />
                <p style={{ fontSize: "0.6rem" }}>AirDR</p>
              </div>
            </Link>
            <Link>
              <div style={{ width: "30px" }}>
                <Img fluid={data.iDRL.fluid} />
                <p style={{ fontSize: "0.6rem" }}>Air</p>
              </div>
            </Link>
            <Link>
              <div style={{ width: "40px" }}>
                <Img fluid={data.iDR34.fluid} />
                <p style={{ fontSize: "0.6rem" }}>Air</p>
              </div>
            </Link>
          </div>
        </ProductHeader>
        <div>
          <SkyHero />

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
    airdrNav: imageSharp(fluid: { originalName: { eq: "AirDR.png" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
    airdrC: imageSharp(fluid: { originalName: { eq: "AirDRc.png" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
    airdrLE: imageSharp(fluid: { originalName: { eq: "AirDR_LE.png" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
    airdrLEc: imageSharp(fluid: { originalName: { eq: "AirDR_LEc.png" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
    iDRL: imageSharp(fluid: { originalName: { eq: "iDR-L.png" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
    iDR34: imageSharp(fluid: { originalName: { eq: "iDR34.png" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
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
