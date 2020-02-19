import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Container = styled("div")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  height: 100vh;
  width: 100%;
  text-align: center;
  flex-direction: row;
  justify-content: space-evenly;

  div {
    width: 100%;
  }

  button {
    border: 2px solid transparent;
    border-radius: 40px;
    background: #0069aa;
    color: #fff;
    padding: 15px 40px;
    margin-bottom: 60px;

    &:hover {
      outline: transparent;
      color: #0069aa;
      background: #fff;
      border: 2px solid #0069aa;
      cursor: pointer;
    }
  }
`

const InfoContainer = styled("div")`
  margin: 40px auto;
`

const LogoContainer = styled("div")`
  max-width: 350px;
  margin: 40px auto;
`

const TextBox = styled("div")`
  padding: 10px 150px 40px;
  line-height: 35px;
  letter-spacing: 1.1px;
  font-size: 0.875rem;
  text-align: left;
`

const InfoBox = styled("div")`
  p {
    font-weight: 600;
    letter-spacing: 1.2px;
  }
`

const NurseSection = () => {
  const { logo, nurse } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "AirDr_Logo1.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      nurse: file(relativePath: { eq: "AirDR_Nurse.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container>
      <InfoContainer>
        <LogoContainer>
          <Img fluid={logo.sharp.fluid} />
        </LogoContainer>
        <h2>Digital Imaging Solutions</h2>
        <hr />
        <TextBox>
          <p>
            The AirDR™ is a durable, low-dose cassette-size DR panel loaded with
            cutting edge, fail-safe features while ensuring patients receive the
            lowest possible dose. This Flat Panel Detector uses a low-power WiFi
            connection to transmit images, allowing you the freedom to capture
            difficult or unusual projections. With a thin and sturdy carbon
            fiber frame and wireless capabilities, it can be seamlessly
            integratedinto new or existing x-ray rooms. Rugged and reliable, the
            AirDR™ has acheived a high Water and Dust rating of IP42 to protect
            it from outside dust particles, and if accidentally wet, it is
            engineered to protect the panel and prevent the circuits from
            shorting out.
          </p>
        </TextBox>
        <button>Download Brochure</button>
        <div style={{ display: "flex" }}>
          <InfoBox>
            <h2>100</h2>
            <p>Microns</p>
          </InfoBox>{" "}
          |
          <InfoBox>
            <h2>16</h2>
            <p>Bit Resolutions</p>
          </InfoBox>{" "}
          |
          <InfoBox>
            <h2>15</h2>
            <p>Megapixel</p>
          </InfoBox>
        </div>
      </InfoContainer>
      <div>
        <Img fluid={nurse.sharp.fluid} />
      </div>
    </Container>
  )
}

export default NurseSection
