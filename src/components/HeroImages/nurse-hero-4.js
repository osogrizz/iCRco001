import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

const Container = styled("div")`
  width: 500px;
  background: rgba(255, 255, 255, 0.785);
  border-radius: 15px;
  padding: 0 30px;
  margin-left: 120px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  .logo-container {
    position: relative;
    width: 320px;
    margin: 30px auto 20px;
  }

  h2 {
    font-size: 0.975rem;
    text-align: center;
    color: #777;
  }

  hr {
    height: 2px;
  }

  p {
    text-align: left;
    margin: 80px auto 40px;
    letter-spacing: 0.4px;
    line-height: 30px;
    color: #000;
  }

  button {
    border: 2px solid transparent;
    border-radius: 12px;
    background: #0069aa;
    color: #fff;
    padding: 15px 40px;
    text-align: center;

    &:hover {
      outline: transparent;
      color: #0069aa;
      background: #fff;
      border: 2px solid #0069aa;
      cursor: pointer;
    }
  }
`

const ImageBackground = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 80vh;
  width: 100%;
  background-image: url("../images/AirDRLE_Nurse.png");
  background-size: cover cover;
`

const NurseHero4 = () => {
  const { image, logo } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "AirDR_LEc_Nurse2.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1120, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(relativePath: { eq: "AirDRLEc_logo.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
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
        <div className="logo-container">
          <Img fluid={logo.sharp.fluid} />
        </div>
        <h2>Budget-friendly Digital Radiography.</h2>
        <hr />
        <p>
          The <strong>AirDR LEc™</strong> System has been specifically designed
          and optimized to advancethe imaging equipment you're using right now.
          Utilizing it's unique form-factor and embedded Automatic Exposure
          Detection (AED), the AirDR LEc™ System is compatible with any X-ray
          system designed to work with ISO 4090 - compliant, 35 x 43 cm
          cassettes.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "60px",
          }}
        >
          <button>Download Brouchure</button>
        </div>
      </Container>
    </ImageBackground>
  )
}

export default NurseHero4
