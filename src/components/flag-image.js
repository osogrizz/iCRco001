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
  width: 100%;
  background-image: url("../images/flag.png");
  background-size: cover;
  color: #fff;
  text-align: center;
`

const FlagImage = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "flag.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div style={{ width: "200px", height: "146px" }}>
      <ImageBackground fluid={image.sharp.fluid} />
    </div>
  )
}

export default FlagImage
