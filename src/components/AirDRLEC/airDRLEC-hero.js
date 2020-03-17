import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

const ImageBackground = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 81vh !important;
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
  z-index: 1;
  overflow: hidden;

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
  }

  @media (max-width: 800px) {
    height: 135vh;
    h3 {
      font-size: 0.8rem;
    }
  }
`

const ProductConfig = styled("ul")`
  position: relative;
  margin: 2.45rem auto 5rem;
  border: 3px solid #333333;
  border-radius: 50%;
  width: 30rem;
  height: 30rem;
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* z-index: 1; */

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

const SkyHero = () => {
  const {
    blueLogo,
    image,
    airdr,
    motor,
    clarity,
    workStation,
    registration,
    xc,
    pacs,
  } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "Sky.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blueLogo: file(relativePath: { eq: "AirDRLEc_logo.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      airdr: file(relativePath: { eq: "AirDR_LEc2.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      motor: file(relativePath: { eq: "CPU.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      clarity: file(relativePath: { eq: "Clarity_PracticeIcon.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      registration: file(relativePath: { eq: "Product_RegistrationIcon.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      xc: file(relativePath: { eq: "XC_Icon.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      workStation: file(relativePath: { eq: "PACS_Icon.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      integrated: file(relativePath: { eq: "CPU.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      pacs: file(relativePath: { eq: "Clarity_PACS_Icon.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <ImageBackground
      fluid={image.sharp.fluid}
      fadeIn="soft"
      preserveStackingContext
    >
      <section>
        <div
          style={{
            position: "relative",
            width: "320px",
            zIndex: "1000",
            margin: "0 auto",
          }}
        >
          <Img fluid={blueLogo.sharp.fluid} />
        </div>
        <ProductConfig>
          <div
            className="prod-container"
            style={{
              width: "120px",
              height: "120px",
              textAlign: "center",
              fontWeight: "700",
            }}
          >
            <div style={{ width: "100%", color: "#0069aa" }}>
              <h1 style={{ fontSize: "3.75rem" }}>KIT</h1>
            </div>
          </div>

          <li
            style={{
              transform: "rotate(-324deg) translate(-11em) rotate(324deg)",
            }}
          >
            <div className="option-container">
              <Img fluid={motor.sharp.fluid} />
            </div>
            <div style={{ width: "120px" }}>
              <p>iCRco Integrated PACS</p>
              <p>& Workstation PC</p>
            </div>
          </li>

          <li
            style={{
              transform: "rotate(60deg) translate(11em) rotate(-60deg)",
            }}
          >
            <div style={{ width: "60px" }}>
              <Img fluid={clarity.sharp.fluid} />
            </div>
            <div style={{ margin: 0, padding: 0 }}>
              <p>Clarity</p>
              <p>Practice</p>
            </div>
          </li>
          <li
            style={{
              transform: "rotate(165deg) translate(11em) rotate(-165deg)",
            }}
          >
            <div style={{ width: "90px" }}>
              <Img fluid={workStation.sharp.fluid} />
            </div>
            <div style={{ margin: 0, padding: 0, width: "120px" }}>
              <p>Acquisition Station</p>
            </div>
          </li>

          <li
            style={{
              transform: "rotate(-60deg) translate(-11em) rotate(60deg)",
            }}
          >
            <div style={{ width: "60px" }}>
              <Img fluid={registration.sharp.fluid} />
            </div>
            <div>
              <p>Product</p>
              <p>Registration</p>
            </div>
          </li>

          <li
            style={{
              transform: "rotate(270deg) translate(11em) rotate(-270deg)",
            }}
          >
            <div style={{ width: "50px" }}>
              <Img fluid={airdr.sharp.fluid} />
            </div>
            <div>
              <p>AirDR LE c</p>
            </div>
          </li>

          <li
            style={{
              transform: "rotate(330deg) translate(11em) rotate(-330deg)",
            }}
          >
            <div style={{ width: "80px" }}>
              <Img fluid={xc.sharp.fluid} />
            </div>
            <div style={{ width: "180px" }}>
              <p>XC 2.0 Acquisition</p>
              <p>Software</p>
            </div>
          </li>
          <li
            style={{
              transform: "rotate(15deg) translate(12em) rotate(-15deg)",
            }}
          >
            <div style={{ width: "80px" }}>
              <Img fluid={pacs.sharp.fluid} />
            </div>
            <div style={{ width: "180px" }}>
              <p>Clarity</p>
              <p>PACS</p>
            </div>
          </li>
        </ProductConfig>
      </section>
    </ImageBackground>
  )
}

export default SkyHero
