import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const ImageBackground = styled(BackgroundImage)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  height: -webkit-fill-available;
  width: 100%;
  background-image: linear-gradient(
      rgba(150, 150, 150, 0.4),
      rgba(150, 150, 150, 0.4)
    ),
    url("../images/solutions.jpg");
  background-size: cover;

  h2 {
    color: #fff;
    font-size: 5rem;
    font-weight: 500;
    letter-spacing: 0.5rem;
    /* border: 4px solid black; */
    text-align: center;
    padding: 1rem 1.875rem;
    margin: 0 auto;
  }
`

const EventsHero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "solutions.jpg" }) {
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
      <h2>Upcoming Events</h2>
    </ImageBackground>
  )
}

export default EventsHero
