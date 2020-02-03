import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import AirLogo from "../HeroImages/AirLogo"

const ImageBackground = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  height: 100vh;
  height: -webkit-fill-available;

  width: 100%;
  background-image: linear-gradient(
      rgba(80, 80, 80, 0.2),
      rgba(80, 80, 80, 0.2)
    ),
    url("../images/AirDR.png");
  background-size: cover cover;

  h3 {
    color: #fff;
    font-size: 4rem;
  }
`
const HeroBottom = styled("div")`
  position: relative;
  margin-top: 72vh;
  width: 500px;

  h2 {
    color: #fff;
    font-size: 5rem;
    font-weight: 500;
    letter-spacing: 0.5rem;
    padding: 1rem 1.875rem;
    max-width: 800px;
    /* margin: 0 auto; */
  }

  @media (max-width: 800px) {
    width: 300px;
  }
`

const HomeOne = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "AirDR.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1800) {
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
        {/* <h2></h2> */}
        <AirLogo />
      </HeroBottom>
    </ImageBackground>
  )
}

export default HomeOne
