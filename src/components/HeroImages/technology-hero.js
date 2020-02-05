import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import ClarisLogo from "../HeroImages/ClarisLogo"

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
    url("../images/ClarisXT.png");
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
    h3 {
      font-size: 0.8rem;
    }
  }
`

const HeroBottom = styled("div")`
  position: relative;
  margin-top: 72vh;
  width: 350px;

  @media (max-width: 800px) {
    width: 180px;
    margin: 0 auto;
    margin-top: 68vh;
  }
`

const TechnologyHero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "ClarisXT.png" }) {
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
      style={{ padding: "0 0 40px" }}
    >
      <div>
        <HeroBottom>
          <ClarisLogo />
        </HeroBottom>
        <h3>The Next Dimension of 3D Imaging.</h3>
        <Link to="/ClarisXT">Learn More</Link>
      </div>
    </ImageBackground>
  )
}

export default TechnologyHero
