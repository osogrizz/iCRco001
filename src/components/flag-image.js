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
  /* height: 100px; */
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
          fluid(maxWidth: 1120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div style={{ width: "300px", height: "200px" }}>
      <ImageBackground fluid={image.sharp.fluid} />
    </div>
  )
}

export default FlagImage
