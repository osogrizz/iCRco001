import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import ThreeHunLogo from "../HeroImages/3600Logo"

const ImageBackground = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  height: 100vh;
  height: -webkit-fill-available;

  width: 100%;
  background-image: linear-gradient(
      rgba(80, 80, 80, 0.2),
      rgba(80, 80, 80, 0.2)
    ),
    url("../images/3600LF.png");
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
`

const HeroBottom = styled("div")`
  position: relative;
  margin-top: 72vh;
  width: 350px;

  h2 {
    color: #fff;
    font-size: 5rem;
    font-weight: 500;
    letter-spacing: 0.5rem;
    padding: 1rem 1.875rem;
    max-width: 800px;
    /* margin: 0 auto; */
  }

  @media (max-width: 800px) {
    width: 300px;
  }
`

const PartsHero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "3600LF.png" }) {
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
    >
      <HeroBottom>
        <ThreeHunLogo />
      </HeroBottom>
      <h3>The Flagship CR.</h3>
    </ImageBackground>
  )
}

export default PartsHero
