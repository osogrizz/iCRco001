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
  /* background-size: cover cover; */
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
  padding: 10px 5px;
  line-height: 30px;
  letter-spacing: 1.1px;
  font-size: 0.775rem;
  text-align: left;

  span {
    color: #0069aa;
  }
`

const InfoBox = styled("div")`
  width: 180px;
  h2 {
    font-size: 1.45rem;
  }

  p {
    width: 100%;
    font-weight: 700;
    letter-spacing: 1.1px;
    margin: 0;
    font-size: 0.57rem;
  }
`

const LowerContainer = styled("div")`
  display: flex;
  margin: 0 auto;
  max-width: 650px !important;
  padding: auto;
  /* padding-bottom: 100vh; */
  margin-right: 120px;
`

const NurseHero6 = () => {
  const { nurse, logo } = useStaticQuery(graphql`
    query {
      nurse: file(relativePath: { eq: "nurse6.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1440, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      logo: file(relativePath: { eq: "iDR34Logo.png" }) {
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
          <h2>Long Length Digital Radiography</h2>
          <div style={{ margin: "0 auto" }}>
            <hr />
          </div>
          <TextBox>
            <p>
              Introducing the iDR34™: the only digital radiography solution
              capable of BOTH regional scanning and long length spinal imaging
              studies. With a 17" x 34" field of use, the iDR34™ can replace or
              supplement your existing RAD room environment. It gives you the
              ability to do all anatomy regions - neck and chest, full-torso,
              long-length, and spine. Because the system takes a single image,
              you can leverage compensation filters to balance out the exposure
              between thicker and thinner areas of anatomy.
            </p>
            <p>
              There is no need for multiple exposures, making the iDR34™ an
              ideal low-dose solution for applications such as scoliosis
              evaluation in the pediatric segment. Our proprietary algorithm
              eliminates the need for image stitching software, creating a
              full-spine image in one exposure without having to take three
              separate x-rays. Low-dose, high efficiency versatility makes the
              iDR34™ second to none in the DR market today. It's just another
              example of iCRco's evolution in the field of DR radiography.
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
              <h2>2</h2>
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

export default NurseHero6
