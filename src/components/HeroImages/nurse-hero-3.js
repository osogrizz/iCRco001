import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

const ImageBackground = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* height: 100vh; */
  width: 100%;
  background-image: url("../images/AirDRLE_Nurse.png");
  background-size: cover cover;
  margin: 0 !important;
  padding: 0 !important;
`

const Container = styled("div")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  width: 100%;
  height: 95vh;
  text-align: center;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
  padding: 0;
  margin: 0;

  div {
    width: 100%;
    margin: 0 auto;
    padding: 0;
  }
`
const LowerContainer = styled("div")`
  top: -50;
  display: flex;
  margin: 0 auto;
  width: 800px !important;
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

const InfoBox = styled("div")`
  width: 200px;

  p {
    font-weight: 700;
    letter-spacing: 2px;
    margin: 0;
  }
`

const NurseHero3 = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "AirDRLE_Nurse.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1120, quality: 100) {
            ...GatsbyImageSharpFluid
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
      <Container>
        <div>
          <NurseHero3 />
        </div>
        <InfoContainer>
          <LowerContainer>
            <InfoBox style={{ borderRight: "2px solid black" }}>
              <h2>100</h2>
              <p>Microns</p>
            </InfoBox>

            <InfoBox style={{ margin: "0 20px" }}>
              <h2>16</h2>
              <p>Bit Resolutions</p>
            </InfoBox>

            <InfoBox style={{ borderLeft: "2px solid black" }}>
              <h2>15</h2>
              <p>Megapixel</p>
            </InfoBox>
          </LowerContainer>
        </InfoContainer>
      </Container>
    </ImageBackground>
  )
}

export default NurseHero3
