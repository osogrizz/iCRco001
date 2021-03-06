import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const ImageBackground = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-image: url("../images/airdrc-image01.png");
  background-size: cover cover;

  @media (max-width: 800px) {
    height: 135vh;
  }
`

const NurseHero2 = () => {
  const { nurse } = useStaticQuery(graphql`
    query {
      nurse: file(relativePath: { eq: "airdrc-image01.png" }) {
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
    ></ImageBackground>
  )
}

export default NurseHero2
