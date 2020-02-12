import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

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

const AironeSection = () => {
  return (
    <>
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
            }}
          >
            <div>
              <Img fluid={data.airdr.fluid} />
            </div>
            AirDR
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
    </>
  )
}

export default AironeSection

export const query = graphql`
  query sectionOne {
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
