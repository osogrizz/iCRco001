import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

import IDRLSingle from "../dr-pages/idr-single"

const ImageBackground = styled(BackgroundImage)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  height: -webkit-fill-available;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 100%;
  background-image: url("../images/wave.png");
  background-size: cover cover;

  h3 {
    color: #505456;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1px;
    /* margin: 20px auto 40px; */
  }
  a {
    color: #fff;
    border-radius: 20px;
    border: 1px solid #fff;
    padding: 10px 20px;
    z-index: 500;
  }

  .logo-container {
    width: 25%;
    /* margin-top: 80px; */

    h3 {
      width: 100%;
      margin: 20px 0 0;
      letter-spacing: 2px;
    }
  }

  @media (max-width: 800px) {
    height: 135vh;
    h3 {
      font-size: 0.8rem;
    }
  }
`
const ImgContainer = styled("div")`
  padding: 10px;
  width: 43%;
  margin-top: 20px;
  margin-right: 20px;

  @media (max-width: 800px) {
    width: 180px;
    margin: 0 auto;
    margin-top: 85vh;
  }
`

const IDRLPageHero = () => {
  const { image, logo } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "wave.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(relativePath: { eq: "iDRL_Logo.png" }) {
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
      <ImgContainer>
        <IDRLSingle />
      </ImgContainer>
      <div className="logo-container">
        <Img fluid={logo.sharp.fluid} />
        <h3>Full Spine DR Solution.</h3>
      </div>
    </ImageBackground>
  )
}

export default IDRLPageHero
