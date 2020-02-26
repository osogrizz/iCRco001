import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import AirLogo from "../HeroImages/AirLogo"

const ImageBackground = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 95vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 100%;
  background-image: url("../images/protection_hero.png");
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
  height: 100vh;
  width: 100%;
  text-align: center;
`

const SelectionBox = styled("div")`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h2 {
    font-size: 2.8rem;
    margin: 0;
    padding: 20px;
    font-weight: 700;
    text-transform: uppercase;
    color: #0069aa;
    align-items: center;
  }
  button {
    color: #fff;
    border-radius: 20px;
    border: none;
    outline: orange;
    /* border: 1px solid #fff; */
    background: #ffffff55;
    cursor: pointer;
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
        <SelectionBox style={{ height: "50vh" }}>
          <button>
            <h2>Cesium</h2>
          </button>
          <button>
            <h2>Gadox</h2>
          </button>
        </SelectionBox>
      </Container>
    </ImageBackground>
  )
}

export default OptionsHero
