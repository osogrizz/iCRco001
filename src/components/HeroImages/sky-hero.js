import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
// import AirLogo from "./AirLogo"
import AironeSection from "../airone-section"
import Img from "gatsby-image"

const ImageBackground = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  height: -webkit-fill-available;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 100%;
  background-image: linear-gradient(
      rgba(80, 80, 80, 0.2),
      rgba(80, 80, 80, 0.2)
    ),
    url("../images/Sky.png");
  background-size: cover cover;
  z-index: -10;

  h3 {
    color: #fff;
    font-size: 1.4rem;
    font-weight: 400;
    margin: 20px auto 40px;
  }
  a {
    color: #fff;
    border-radius: 20px;
    border: 1px solid #fff;
    padding: 10px 20px;
    z-index: 500;
  }

  @media (max-width: 800px) {
    height: 135vh;
    h3 {
      font-size: 0.8rem;
    }
  }
`
const HeroBottom = styled("div")`
  position: relative;
  margin-top: 72vh;
  width: 350px;

  @media (max-width: 800px) {
    width: 180px;
    margin: 0 auto;
    margin-top: 85vh;
  }
`

const SkyHero = ({ data }) => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "Sky.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
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
  `)
  return (
    <ImageBackground
      fluid={image.sharp.fluid}
      // fadeIn="soft"
      preserveStackingContext
    >
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
    </ImageBackground>
  )
}

export default SkyHero
