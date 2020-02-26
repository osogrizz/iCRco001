import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

const ImageBackground = styled(BackgroundImage)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
  background-image: url("../images/wave.png");
  background-size: cover cover;
`

const WaveHero = () => {
  const { image, measureC } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "wave.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      measureC: file(relativePath: { eq: "AirDRc_dimensions.png" }) {
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
        <Img fluid={measureC.sharp.fluid} />
      </div>
    </ImageBackground>
  )
}

export default WaveHero
