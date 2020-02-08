import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const ImageBackground = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  height: -webkit-fill-available;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-image: url("../images/AirDR_Product.png");
  background-size: cover cover;
`

const AirDRProduct = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "AirDR_Icon.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
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

export default AirDRProduct
