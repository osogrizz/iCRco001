import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Container = styled("div")`
  display: flex;
  height: 100vh;
  width: 100%;
  text-align: center;
  flex-direction: row;
  justify-content: space-evenly;

  div {
    width: 100%;
  }
`

const InfoContainer = styled("div")`
  margin: 40px auto;
`

const LogoContainer = styled("div")`
  max-width: 350px;
  margin: 40px auto;
`

const NurseSection = () => {
  const { logo, nurse } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "AirDr_Logo1.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nurse: file(relativePath: { eq: "AirDR_Nurse.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container>
      <InfoContainer>
        <LogoContainer>
          <Img fluid={logo.sharp.fluid} />
        </LogoContainer>
        <h2>Digital Imaging Solutions</h2>
        <hr />
        <div style={{ padding: "20px 80px" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            voluptates odio possimus culpa nisi iure adipisci optio quod,
            consectetur fugiat reiciendis facilis voluptatem rerum ab ex nihil
            blanditiis repudiandae corporis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            saepe ipsa veniam rerum perferendis in repellat impedit voluptate
            laboriosam non dolores praesentium tenetur? Dignissimos, et! Dolore
            laboriosam ipsa porro sed?
          </p>
        </div>
        <button>Learn More</button>
        <div style={{ display: "flex" }}>
          <div>100</div> |<div>16</div> |<div>15</div>
        </div>
      </InfoContainer>
      <div>
        <Img fluid={nurse.sharp.fluid} />
      </div>
    </Container>
  )
}

export default NurseSection
