import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const ImageBackground = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  height: -webkit-fill-available;

  width: 100%;
  background-image: linear-gradient(
      rgba(150, 150, 150, 0.4),
      rgba(150, 150, 150, 0.4)
    ),
    url("../images/ClarisXT.png");
  background-size: cover cover;

  h2 {
    color: #fff;
    font-size: 5rem;
    font-weight: 500;
    letter-spacing: 0.5rem;
    text-align: left;
    padding: 1rem 1.875rem;
    max-width: 800px;
    margin: 0 auto;
  }
  h3 {
    color: #fff;
    font-size: 4rem;
  }
`

const HomeOne = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "ClarisXT.png" }) {
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
      {/* <h2>
        Claris <span>XT</span>
      </h2>
      <h3>The Next Dimension of 3D Imaging</h3> */}
    </ImageBackground>
  )
}

export default HomeOne
