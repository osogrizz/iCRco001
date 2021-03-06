import React from "react"
import styled from "@emotion/styled"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import IDRL34Hero from "../components/iDR34/iDRL34-hero"
import IDR34Section2 from "../components/iDR34/iDRL34-section-2"
import IDR34Section3 from "../components/iDR34/iDRL34-section-3"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled("div")`
  margin-top: 50px;

  section {
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
  height: 130px;
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

const iDR34 = ({ data }) => {
  return (
    <Layout>
      <SEO title="AirDR_C" />
      <Container>
        <ProductHeader>
          <div className="product-nav">
            <Link to="/AirDR">
              <div
                style={{
                  width: "50px",
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

            <Link to="/AirDR_C">
              <div
                style={{
                  width: "60px",
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

            <Link to="/AirDR_LE">
              <div
                style={{
                  width: "50px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Img fluid={data.airdrLE.fluid} />
                <p style={{ fontSize: "0.6rem", width: "60px" }}>AirDR LE</p>
              </div>
            </Link>

            <Link to="/AirDR_LE_C">
              <div
                style={{
                  width: "60px",
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

            <Link to="/iDR_L">
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

            <Link to="/iDR34">
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
          <IDRL34Hero />
          <IDR34Section2 />
          <IDR34Section3 />
        </div>
      </Container>
    </Layout>
  )
}

export default iDR34

export const query = graphql`
  query iDR34 {
    airdrNav: imageSharp(fluid: { originalName: { eq: "AirDR2.png" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
    airdrC: imageSharp(fluid: { originalName: { eq: "AirDRC2.png" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
    airdrLE: imageSharp(fluid: { originalName: { eq: "AirDR2LE.png" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
    airdrLEc: imageSharp(fluid: { originalName: { eq: "AirDR_LEc2.png" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
    iDRL: imageSharp(fluid: { originalName: { eq: "iDR_L.png" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
    iDR34: imageSharp(fluid: { originalName: { eq: "iDR34.png" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
    nurse: imageSharp(fluid: { originalName: { eq: "AirDR_Nurse.png" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`
