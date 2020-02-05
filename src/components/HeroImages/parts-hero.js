import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import ThreeHunLogo from "../HeroImages/3600Logo"

const ImageBackground = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  height: -webkit-fill-available;

  width: 100%;
  background-image: linear-gradient(
      rgba(80, 80, 80, 0.2),
      rgba(80, 80, 80, 0.2)
    ),
    url("../images/3600LF.png");
  background-size: cover cover;

  h3 {
    color: black;
    font-size: 1.8rem;
    font-weight: 600;
    margin: 20px auto 40px;
  }
  a {
    color: black;
    border-radius: 20px;
    border: 1px solid black;
    padding: 10px 20px;
    z-index: 500;
  }
  @media (max-width: 800px) {
    height: 120vh;
    h3 {
      /* margin: 10px auto 20px; */
      font-size: 0.8rem;
    }
  }
`

const HeroBottom = styled("div")`
  position: relative;
  margin-top: 72vh;
  width: 320px;

  @media (max-width: 800px) {
    width: 180px;
    margin: 0 auto;
    margin-top: 68vh;
  }
`

const PartsHero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "3600LF.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1240, quality: 100) {
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
      <HeroBottom>
        <ThreeHunLogo />
      </HeroBottom>
      <h3>The Flagship CR.</h3>
      <Link to="/3600">Learn More</Link>
    </ImageBackground>
  )
}

export default PartsHero
