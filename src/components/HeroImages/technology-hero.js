import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import ClarisLogo from "../HeroImages/ClarisLogo"

const ImageBackground = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  height: -webkit-fill-available;

  width: 100%;
  background-image: linear-gradient(
      rgba(80, 80, 80, 0.2),
      rgba(80, 80, 80, 0.2)
    ),
    url("../images/ClarisXT.png");
  background-size: cover cover;

  h2 {
    color: #fff;
    font-size: 5rem;
    font-weight: 500;
    letter-spacing: 0.5rem;
    text-align: center;
    padding: 1rem 1.875rem;
    max-width: 800px;
    margin: 0 auto;
  }
  h5 {
    color: #fff;
    text-align: center;
    letter-spacing: 2px;
  }
  h3 {
    color: #fff;
    font-size: 1.4rem;
    font-weight: 400;
    margin: 20px auto 0;
  }

  @media (max-width: 800px) {
    h3 {
      font-size: 1.3rem;
    }
  }
`

const HeroBottom = styled("div")`
  position: relative;
  margin-top: 72vh;
  width: 350px;
  h3 {
    color: #fff;
    font-size: 1.4rem;
    font-weight: 400;
    /* text-overflow: ; */
    margin: 20px auto 0;
  }

  @media (max-width: 800px) {
    width: 300px;
  }
`

const TechnologyHero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "ClarisXT.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1800) {
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
      style={{ padding: "0 0 40px" }}
    >
      <HeroBottom>
        <ClarisLogo />
      </HeroBottom>
      <h3>The Next Dimension of 3D Imaging.</h3>
    </ImageBackground>
  )
}

export default TechnologyHero
