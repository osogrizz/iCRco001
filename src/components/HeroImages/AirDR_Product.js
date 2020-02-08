import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import AirLogo from "../HeroImages/AirLogo"

const ImageBackground = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100%;
  height: 100vh;
  height: -webkit-fill-available;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-image: url("../images/AirDR_Product.png");
  background-size: cover cover;
  cursor: pointer;

  /* h3 {
    color: black;
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
  } */

  /* @media (max-width: 800px) {
    height: 135vh;
    h3 {
      font-size: 0.8rem;
    }
  } */
`
const HeroBottom = styled("div")`
  position: relative;
  margin-top: 72vh;
  width: 350px;

  @media (max-width: 800px) {
    width: 180px;
    margin: 0 auto;
    margin-top: 85vh;
  }
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
