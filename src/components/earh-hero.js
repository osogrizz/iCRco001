import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const ImageBackground = styled(BackgroundImage)`
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  background-image: url() ("../images/earth.png");
  background-size: cover;
  color: #fff;
  text-align: center;

  h2 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.5rem;
    padding: 1rem 1.875rem;
    max-width: 800px;
    margin: 0 auto;
  }
`

const EarthHero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "earth.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1120) {
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
      <h2>1.4 Billion Images Captured</h2>
      <p>
        Since it’s inception, iCRco, has been committed to providing healthcare
        professionals the best in imaging technology while pulling costs out of
        healthcare. iCRco is proudly represented in the most busiest and exotic
        locations in over 90 countries worldwide. Recently iCRco calculated
        almost 1.4 billion images captured since it entered the global arena.
      </p>
    </ImageBackground>
  )
}

export default EarthHero
