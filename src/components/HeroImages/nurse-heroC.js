import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

const ImageBackground = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-image: linear-gradient(
      rgba(80, 80, 80, 0.1),
      rgba(80, 80, 80, 0.1)
    ),
    url("../images/AirDRc_cover.png");
  background-size: cover cover;

  @media (max-width: 800px) {
    height: 135vh;
  }
  @media (max-width: 1480px) {
    backgroun-image: linear-gradient(
        rgba(200, 200, 200, 0.5),
        rgba(200, 200, 200, 0.5)
      ),
      url("../images/AirDRc_cover.png");
  }
`

const Wrapper = styled("div")`
  width: 100%;

  @media (max-width: 1480px) {
    max-width: 100vw;
    heigth: 100vh;
    margin: 0 auto;
    background: rgba(200, 200, 200, 0.8);
  }
`

const InfoContainer = styled("div")`
  padding-bottom: 0;
  margin-bottom: 0;
  max-width: 400px;
  margin-left: 70%;

  hr {
    height: 2px;
    width: 350px;
    margin: 0 auto 5px;
    /* background: #333; */
  }

  button {
    margin: 80px 0;
  }

  @media (max-width: 1480px) {
    /* max-width: 100vw; */
    /* heigth: 100vh; */
    margin: 0 auto;
    /* background: rgba(200, 200, 200, 0.8); */
  }
`

const LogoContainer = styled("div")`
  max-width: 350px;
`

const TextBox = styled("div")`
  /* padding: 10px 150px 40px; */
  width: 350px;
  padding: 10px 20px;
  line-height: 30px;
  letter-spacing: 1.1px;
  font-size: 0.775rem;
  text-align: left;

  span {
    color: #0069aa;
  }
`

const InfoBox = styled("div")`
  /* width: 100%; */
  h2 {
    font-size: 1.45rem;
  }

  p {
    font-weight: 700;
    letter-spacing: 1.2px;
    margin: 0;
    font-size: 0.75rem;
  }
`

const LowerContainer = styled("div")`
  display: flex;
  margin: 0 auto;
  width: 410px !important;
  padding: auto;
  padding-bottom: 100vh;
`

const NurseHero = () => {
  const { nurse, logo } = useStaticQuery(graphql`
    query {
      nurse: file(relativePath: { eq: "AirDRc_cover.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1120, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      logo: file(relativePath: { eq: "AirDRc_Logo.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1120, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <ImageBackground
      fluid={nurse.sharp.fluid}
      fadeIn="soft"
      preserveStackingContext
    >
      <Wrapper>
        <InfoContainer style={{}}>
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
              <span>AirDRc™</span>. A fully-ruggedized, cassette-size, wired
              flat panel DR engineered for the modern healthcare professional.
              The detector provides integrated AED (Automatic Exposure
              Detection) which allows for seamless, retrofit integration and
              no-hassle implementation into your practice.
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
      </Wrapper>
    </ImageBackground>
  )
}

export default NurseHero
