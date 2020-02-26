import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import NurseHeroC from "../HeroImages/nurse-heroC"

const Container = styled("div")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  height: 95vh;
  width: 100%;
  text-align: center;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  overflow: hidden;

  div {
    width: 100%;
  }

  button {
    border: 2px solid transparent;
    border-radius: 12px;
    background: #0069aa;
    color: #fff;
    padding: 15px 40px;
    margin-bottom: 60px;

    &:hover {
      outline: transparent;
      color: #0069aa;
      background: #fff;
      border: 2px solid #0069aa;
      cursor: pointer;
    }
  }
`

const InfoContainer = styled("div")`
  padding-bottom: 0;
  margin-bottom: 0;
  width: 120%;

  hr {
    height: 2px;
    width: 580px;
    margin: 0 auto 5px;
    background: #333;
  }
`

const LogoContainer = styled("div")`
  margin: 50px auto;
  max-width: 350px;
  margin: 0 auto;
`

const TextBox = styled("div")`
  padding: 10px 150px 40px;
  line-height: 30px;
  letter-spacing: 1.1px;
  font-size: 0.875rem;
  text-align: left;
`

const InfoBox = styled("div")`
  width: 200px;

  p {
    font-weight: 700;
    letter-spacing: 2px;
    margin: 0;
  }
`

const LowerContainer = styled("div")`
  display: flex;
  margin: 0 auto;
  width: 750px !important;
`

const AirDRCSection2 = () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "AirDRc_Logo.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Container>
      <NurseHeroC />
    </Container>
  )
}

export default AirDRCSection2
