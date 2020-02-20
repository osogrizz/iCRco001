import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Container = styled("div")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  height: 92.6vh;
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
  padding-bottom: 0;

  hr {
    height: 2px;
    width: 650px;
    margin: 0 auto;
    background: #333;
  }
`

const LogoContainer = styled("div")`
  margin: 50px auto;
  max-width: 350px;
  margin: 0 auto;
`

const TextBox = styled("div")`
  padding: 10px 150px 40px;
  line-height: 35px;
  letter-spacing: 1.1px;
  font-size: 0.875rem;
  text-align: left;
`

const InfoBox = styled("div")`
  width: 200px;
  p {
    font-weight: 700;
    letter-spacing: 2px;
  }
`

const LowerContainer = styled("div")`
  display: flex;
  margin: 0 auto;
  width: 750px !important;
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
        <LogoContainer style={{ margin: "40px auto" }}>
          <Img fluid={logo.sharp.fluid} />
        </LogoContainer>
        <h2>Digital Imaging Solutions</h2>
        <div style={{ margin: "0 auto" }}>
          <hr />
        </div>
        <TextBox>
          <p>
            The <strong>AirDR™</strong> is a durable, low-dose cassette-size DR
            panel loaded with cutting edge, fail-safe features while ensuring
            patients receive the lowest possible dose. This Flat Panel Detector
            uses a low-power WiFi connection to transmit images, allowing you
            the freedom to capture difficult or unusual projections.
          </p>
          <p>
            With a thin and sturdy carbon fiber frame and wireless capabilities,
            it can be seamlessly integrated into new or existing x-ray rooms.
            Rugged and reliable, the <strong>AirDR™</strong> has acheived a high
            Water and Dust rating of IP42 to protect it from outside dust
            particles, and if accidentally wet, it is engineered to protect the
            panel and prevent the circuits from shorting out.
          </p>
        </TextBox>
        <button>Download Brochure</button>

        <LowerContainer>
          <InfoBox style={{ borderRight: "2px solid black" }}>
            <h2>100</h2>
            <p>Microns</p>
          </InfoBox>

          <InfoBox style={{}}>
            <h2>16</h2>
            <p>Bit Resolutions</p>
          </InfoBox>

          <InfoBox style={{ borderLeft: "2px solid black" }}>
            <h2>15</h2>
            <p>Megapixel</p>
          </InfoBox>
        </LowerContainer>
      </InfoContainer>
      <div style={{ margin: 0, padding: 0 }}>
        <Img
          fluid={nurse.sharp.fluid}
          style={{
            height: "-webkit-fill-content",
            width: "100%",
            top: 0,
            bottom: 0,
          }}
        />
      </div>
    </Container>
  )
}

export default NurseSection
