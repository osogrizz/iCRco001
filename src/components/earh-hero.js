import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const ImageBackground = styled(BackgroundImage)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url("../images/about-hero.png");
  background-size: cover;

  h2 {
    color: #222;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.5rem;
    border: 4px solid black;
    text-align: center;
    padding: 1rem 1.875rem;
    max-width: 800px;
    margin: 0 auto;
  }
`

const EarthHero = () => {
  return (
    <ImageBackground
      fluid={image.sharp.fluid}
      fadeIn="soft"
      preserveStackingContext
    >
      <h2>Proudly Made in the USA</h2>
    </ImageBackground>
  )
}

export default EarthHero
