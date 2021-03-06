import React, { useState } from "react"
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
    padding: 10px;
    border-radius: 50%;
    &:hover {
      transition: all 0.2s ease-in-out;
      background: rgba(180, 180, 180, 0.5);
      width: 140px;
      height: 140px;
    }
  }
  #airdr {
    &:hover {
      transition: all 0.1s ease-in-out;
      margin: -3.725em;
      padding: 10px;
    }
  }
  #xc {
    &:hover {
      transition: all 0.1s ease-in-out;
      margin: -3.725em;
      padding: 10px;
    }
  }
  #clarity {
    &:hover {
      transition: all 0.1s ease-in-out;
      margin: -3.725em;
      padding: 10px;
    }
  }
  #registration {
    &:hover {
      transition: all 0.1s ease-in-out;
      margin: -3.725em;
      padding: 10px;
    }
  }
  #workstation {
    &:hover {
      transition: all 0.1s ease-in-out;
      margin: -3.325em;
      padding: 10px;
    }
  }

  .option-container {
    /* width: 30px; */
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
    colorairdr,
    motor,
    colormotor,
    clarity,
    workStation,
    colorStation,
    registration,
    colorReg,
    xc,
    colorXC,
    pacs,
    colorPACS,
  } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "Sky.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blueLogo: file(relativePath: { eq: "AirDr_Logo1.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      airdr: file(relativePath: { eq: "AirDR2.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      colorairdr: file(relativePath: { eq: "AirDR-color.png" }) {
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
      colormotor: file(relativePath: { eq: "color-motor.png" }) {
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
      colorReg: file(relativePath: { eq: "Product-Registration-Color.png" }) {
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
      colorXC: file(relativePath: { eq: "xc-box.png" }) {
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
      colorStation: file(relativePath: { eq: "Dell.png" }) {
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
      colorPACS: file(relativePath: { eq: "ClarityPACS.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const [workstation, setWorkstation] = useState(false)
  const [airdrImg, setAirdrImg] = useState(false)
  const [xcImage, setXCIMage] = useState(false)
  const [clarityImg, setClarityImg] = useState(false)
  const [registrationImg, setRegistration] = useState(false)

  const handleWorkstation = e => {
    e.preventDefault()
    setWorkstation(!workstation)
  }

  const handleAirdr = e => {
    e.preventDefault()
    setAirdrImg(!airdrImg)
  }

  const handleXC = e => {
    e.preventDefault()
    setXCIMage(!xcImage)
  }
  const handleClarity = e => {
    e.preventDefault()
    setClarityImg(!clarityImg)
  }
  const handleRegistration = e => {
    e.preventDefault()
    setRegistration(!registrationImg)
  }

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
            margin: "30px auto 20px",
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

          {/* <li
            onMouseEnter={handleWorkstation}
            onMouseLeave={handleWorkstation}
            style={{
              transform: "rotate(-324deg) translate(-11em) rotate(324deg)",
            }}
          >
            {!workstation ? (
              <div style={{ width: "30px" }}>
                <Img fluid={motor.sharp.fluid} />
              </div>
            ) : (
              <div style={{ width: "70px" }}>
                <Img fluid={colormotor.sharp.fluid} />
              </div>
            )}
            <div style={{ width: "120px" }}>
              <p>iCRco Integrated PACS</p>
              <p>& Workstation PC</p>
            </div>
          </li> */}

          {/* <li
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
          </li> */}
          <li
            id="workstation"
            onMouseEnter={handleWorkstation}
            onMouseLeave={handleWorkstation}
            style={{
              transform: "rotate(202deg) translate(11em) rotate(-202deg)",
            }}
          >
            {!workstation ? (
              <div style={{ width: "90px" }}>
                <Img fluid={workStation.sharp.fluid} />
              </div>
            ) : (
              <div style={{ width: "90px" }}>
                <Img fluid={colorStation.sharp.fluid} />
              </div>
            )}
            <div style={{ margin: 0, padding: 0, width: "120px" }}>
              <p>Acquisition Station</p>
            </div>
          </li>

          <li
            id="registration"
            onMouseEnter={handleRegistration}
            onMouseLeave={handleRegistration}
            style={{
              transform: "rotate(-58deg) translate(-11em) rotate(58deg)",
            }}
          >
            {!registrationImg ? (
              <div style={{ width: "60px" }}>
                <Img fluid={registration.sharp.fluid} />
              </div>
            ) : (
              <div style={{ width: "60px" }}>
                <Img fluid={colorReg.sharp.fluid} />
              </div>
            )}
            <div>
              <p>Product</p>
              <p>Registration</p>
            </div>
          </li>

          <li
            id="airdr"
            onMouseEnter={handleAirdr}
            onMouseLeave={handleAirdr}
            style={{
              transform: "rotate(270deg) translate(11em) rotate(-270deg)",
            }}
          >
            {!airdrImg ? (
              <>
                <div style={{ width: "50px" }}>
                  <Img fluid={airdr.sharp.fluid} />
                </div>
                <div>
                  <p>AirDR</p>
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    width: "100px",
                    margin: 0,
                  }}
                >
                  <Img fluid={colorairdr.sharp.fluid} />
                </div>
                <div style={{ width: "60px", margin: 0, padding: 0 }}>
                  <p>AirDR</p>
                </div>
              </>
            )}
          </li>

          <li
            id="xc"
            onMouseEnter={handleXC}
            onMouseLeave={handleXC}
            style={{
              transform: "rotate(342deg) translate(11em) rotate(-342deg)",
            }}
          >
            {!xcImage ? (
              <div style={{ width: "80px" }}>
                <Img fluid={xc.sharp.fluid} />
              </div>
            ) : (
              <div style={{ width: "80px" }}>
                <Img fluid={colorXC.sharp.fluid} />
              </div>
            )}
            <div style={{ width: "180px" }}>
              <p>XC 2.0 Acquisition</p>
              <p>Software</p>
            </div>
          </li>
          <li
            id="clarity"
            onMouseEnter={handleClarity}
            onMouseLeave={handleClarity}
            style={{
              transform: "rotate(50deg) translate(11.5em) rotate(-50deg)",
            }}
          >
            {!clarityImg ? (
              <div style={{ width: "80px", height: "80px" }}>
                <Img fluid={pacs.sharp.fluid} />
              </div>
            ) : (
              <div style={{ width: "82px", height: "80px" }}>
                <Img fluid={colorPACS.sharp.fluid} />
              </div>
            )}
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
