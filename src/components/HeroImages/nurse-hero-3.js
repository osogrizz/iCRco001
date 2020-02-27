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
  background-image: url("../images/AiirDRLE_Nurse.png");
  background-size: cover cover;
`

const NurseHero3 = () => {
  const { image, measureC } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "AirDRLE_Nurse.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1120, quality: 100) {
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
    ></ImageBackground>
  )
}

export default NurseHero3
