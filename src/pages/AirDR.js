import React from "react"
import styled from "@emotion/styled"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
// import AirDrVideo from "../images/AirDR_Animation.mp4"
import SkyHero from "../components/HeroImages/sky-hero"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled("div")`
  margin-top: 50px;

  section {
    /* height: 100vh; */
    /* padding: 40px 20px; */
    z-index: 1000;
    h1,
    h2 {
      margin-top: 25px;
      text-align: center;
      letter-spacing: 2px;
    }
  }

  @media (max-width: 1300px) {
    section {
      height: 130vh;
    }
  }
`

const ProductHeader = styled("nav")`
  background: #e6eef0;
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-evenly;
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
    align-items: baseline;
    width: 1120px;
    padding: 18px 2% 0;
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

const AirDR = ({ data }) => {
  return (
    <Layout>
      <SEO title="AirDR" />
      <Container>
        <ProductHeader>
          <div className="product-nav">
            <Link>
              <div
                style={{
                  width: "60px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Img fluid={data.airdrNav.fluid} />
                <p style={{ fontSize: "0.6rem" }}>AirDR</p>
              </div>
            </Link>

            <Link>
              <div
                style={{
                  width: "70px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Img fluid={data.airdrC.fluid} />
                <p style={{ fontSize: "0.6rem" }}>AirDR c</p>
              </div>
            </Link>

            <Link>
              <div
                style={{
                  width: "60px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Img fluid={data.airdrLE.fluid} />
                <p style={{ fontSize: "0.6rem" }}>AirDR LE</p>
              </div>
            </Link>

            <Link>
              <div
                style={{
                  width: "70px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Img fluid={data.airdrLEc.fluid} />
                <p style={{ fontSize: "0.6rem", width: "68px" }}>AirDR LE c</p>
              </div>
            </Link>

            <Link>
              <div
                style={{
                  width: "40px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Img fluid={data.iDRL.fluid} style={{ width: "24px" }} />
                <p style={{ fontSize: "0.6rem", width: "38px" }}>iDR-L</p>
              </div>
            </Link>

            <Link>
              <div
                style={{
                  width: "40px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Img fluid={data.iDR34.fluid} style={{ width: "30px" }} />
                <p style={{ fontSize: "0.6rem", width: "40px" }}>iDR34</p>
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
