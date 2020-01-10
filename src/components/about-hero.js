import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const ImageBackground = styled(BackgroundImage)`
  position: relative;
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
    /* color: #fff; */
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.5rem;
    border: 4px solid black;
    /* border: 4px solid #fff; */
    text-align: center;
    padding: 1rem 1.875rem;
    max-width: 800px;
    margin: 0 auto;
  }
`

const AboutHero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "about-hero.png" }) {
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
      <h2>Proudly Made in the USA</h2>
    </ImageBackground>
  )
}

export default AboutHero

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */
