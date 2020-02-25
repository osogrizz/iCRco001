import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import NurseHeroC from "../HeroImages/nurse-heroC"

const Container = styled("div")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  height: 100vh;
  width: 100%;
  text-align: center;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  overflow: hidden;

  div {
    width: 100%;
  }

  button {
    border: 2px solid transparent;
    border-radius: 12px;
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
  margin-bottom: 0;
  width: 120%;

  hr {
    height: 2px;
    width: 580px;
    margin: 0 auto 5px;
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
  line-height: 30px;
  letter-spacing: 1.1px;
  font-size: 0.875rem;
  text-align: left;
`

const InfoBox = styled("div")`
  width: 200px;

  p {
    font-weight: 700;
    letter-spacing: 2px;
    margin: 0;
  }
`

const LowerContainer = styled("div")`
  display: flex;
  margin: 0 auto;
  width: 750px !important;
`

const AirDRCSection2 = () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "AirDRc_Logo.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Container>
      {/* <InfoContainer style={{}}>
        <LogoContainer style={{ margin: "40px auto" }}>
          <Img fluid={logo.sharp.fluid} />
        </LogoContainer>
        <h2>Digital Imaging Solutions</h2>
        <div style={{ margin: "0 auto" }}>
          <hr />
        </div>
        <TextBox>
          <p>
            Introducing the latest in DR innovation from iCRco, the{" "}
            <span>AirDRc™</span>. A fully-ruggedized, cassette-size, wired flat
            panel DR engineered for the modern healthcare professional. The
            detector provides integrated AED (Automatic Exposure Detection)
            which allows for seamless, retrofit integration and no-hassle
            implementation into your practice.
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
      </InfoContainer> */}
      <NurseHeroC />
    </Container>
  )
}

export default AirDRCSection2
