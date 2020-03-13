import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
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
  top: -35px;

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
  max-width: 660px;
  margin-left: 55%;

  hr {
    height: 2px;
    margin: 0 auto 5px;
  }

  button {
    margin: 20px 0 40px;
  }

  @media (max-width: 1480px) {
    margin: 0 auto;
  }
`

const LogoContainer = styled("div")`
  max-width: 350px;
`

const TextBox = styled("div")`
  padding: 10px 30px;
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
  width: 180px;
  h2 {
    font-size: 1.45rem;
  }

  p {
    font-weight: 700;
    letter-spacing: 1.2px;
    margin: 0;
    font-size: 0.57rem;
  }
`

const LowerContainer = styled("div")`
  display: flex;
  margin: 0 auto;
  width: 650px !important;
  padding: auto;
  padding-bottom: 100vh;
  margin-right: 120px;
`

const NurseHero = () => {
  const { nurse, logo } = useStaticQuery(graphql`
    query {
      nurse: file(relativePath: { eq: "iDRL_cover.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1440, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      logo: file(relativePath: { eq: "iDRL_Logo.png" }) {
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
        <InfoContainer>
          <LogoContainer style={{ margin: "40px auto", width: "250px" }}>
            <Img fluid={logo.sharp.fluid} />
          </LogoContainer>
          <h2>Full Spine Direct Radiography.</h2>
          <div style={{ margin: "0 auto" }}>
            <hr />
          </div>
          <TextBox>
            <p>
              Our solution to address all your long-bone imaging needs.
              Introducing the <strong>iDR-L™</strong>- a seamless, high
              resolution detectorthat offers full spine, regional and zone
              scanning capabilities. This direct capture solution revolutionizes
              how full-spine imaging is achieved.
            </p>
            <p>
              <strong>iDR-L™</strong> Method: The long-bone radiography platform
              utilizes a 17" by 51" detector plate that eliminates the need for
              a cassette. Integrating phosphor plate technology, the{" "}
              <strong>iDR-L™</strong> boast a higher resolution than standard DR
              while maintaining the same workflow. This solution sends complete
              image information directly to the scan processor skipping lengthy
              image stitching processes.
            </p>
          </TextBox>
          <button>Download Brochure</button>

          <LowerContainer>
            <InfoBox style={{ borderRight: "2px solid black" }}>
              <h2>100</h2>
              <p>Microns</p>
            </InfoBox>

            <InfoBox style={{ margin: "0 20px" }}>
              <h2>1</h2>
              <p>Full Spine Detector</p>
            </InfoBox>
            <InfoBox style={{ borderLeft: "2px solid black" }}>
              <h2>3</h2>
              <p>Regional Scan Areas</p>
            </InfoBox>

            <InfoBox style={{ borderLeft: "2px solid black" }}>
              <h2>16</h2>
              <p>Bit Resolutions</p>
            </InfoBox>
          </LowerContainer>
        </InfoContainer>
      </Wrapper>
    </ImageBackground>
  )
}

export default NurseHero
