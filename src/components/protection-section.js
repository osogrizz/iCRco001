import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
// import AirLogo from "./HeroImages/AirLogo"

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

  h3 {
    color: #fff;
    font-size: 1.4rem;
    font-weight: 400;
    margin: 20px auto 40px;
  }
  a {
    color: #fff;
    border-radius: 20px;
    border: 1px solid #fff;
    padding: 10px 20px;
    z-index: 500;
  }

  @media (max-width: 800px) {
    height: 135vh;
    h3 {
      font-size: 0.8rem;
    }
  }
`

const ProtectionHero = () => {
  const { protection } = useStaticQuery(graphql`
    query {
      protection: file(relativePath: { eq: "protection_hero.png" }) {
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
      fluid={protection.sharp.fluid}
      fadeIn="soft"
      preserveStackingContext
    >
      <div>
        <h3>Protection</h3>
      </div>
    </ImageBackground>
  )
}

export default ProtectionHero
