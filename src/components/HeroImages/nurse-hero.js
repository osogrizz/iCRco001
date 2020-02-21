import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const ImageBackground = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-image: linear-gradient(
      rgba(80, 80, 80, 0.1),
      rgba(80, 80, 80, 0.1)
    ),
    url("../images/AirDR_Nurse.png");
  background-size: cover cover;

  @media (max-width: 800px) {
    height: 135vh;
  }
`

const NurseHero = () => {
  const { nurse } = useStaticQuery(graphql`
    query {
      nurse: file(relativePath: { eq: "AirDR_Nurse.png" }) {
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

export default NurseHero
