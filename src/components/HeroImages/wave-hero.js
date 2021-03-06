import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

const ImageBackground = styled(BackgroundImage)`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 50vh; */
  width: 100%;
  background-image: url("../images/wave.png");
  background-size: cover cover;
`

const WaveHero = () => {
  const { image, measure } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "wave.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      measure: file(relativePath: { eq: "AirDR_Dimensions.png" }) {
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
      <div
        style={{
          position: "relative",
          width: "480px",
          margin: "30px auto 20px",
        }}
      >
        <Img fluid={measure.sharp.fluid} />
      </div>
    </ImageBackground>
  )
}

export default WaveHero
