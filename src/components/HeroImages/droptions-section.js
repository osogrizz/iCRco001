import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import AirLogo from "./AirLogo"

const ImageBackground = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  height: -webkit-fill-available;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 100%;
  background-image: linear-gradient(
      rgba(80, 80, 80, 0.2),
      rgba(80, 80, 80, 0.2)
    ),
    url("../images/protection_hero.png");
  background-size: cover cover;

  h2 {
    margin: 80px auto;
    font-size: 2.8rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #0069aa;
  }

  @media (max-width: 800px) {
    height: 135vh;
    h2 {
      font-size: 0.8rem;
    }
  }
`

const Container = styled("div")`
  width: 100%;
  text-align: center;
`

const SelectionBox = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h2 {
    top: 50%;
    font-size: 2.8rem;
    margin: 0;
    padding: 20px;
    font-weight: 700;
    text-transform: uppercase;
    color: #0069aa;
    align-items: center;
  }
  a {
    color: #fff;
    border-radius: 20px;
    border: 1px solid #fff;
    background: #ffffff55;
    z-index: 500;
  }
`

const OptionsHero = () => {
  const { options } = useStaticQuery(graphql`
    query {
      options: file(relativePath: { eq: "AirDROptions.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <ImageBackground
      fluid={options.sharp.fluid}
      fadeIn="soft"
      preserveStackingContext
    >
      <Container>
        <h2>DR Options</h2>
        <SelectionBox>
          <Link>
            <h2>Cesium</h2>
          </Link>
          <Link>
            <h2>Gadox</h2>
          </Link>
        </SelectionBox>
      </Container>
    </ImageBackground>
  )
}

export default OptionsHero
