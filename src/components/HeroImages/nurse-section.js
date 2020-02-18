import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import AirLogo from "../HeroImages/AirBlueLogo"

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

const LogoContainer = styled("div")`
  margin: 40px auto;
  /* justify-content: center; */
`

const NurseSection = () => {
  const { logo, nurse } = useStaticQuery(graphql`
    query {
      nurse: file(relativePath: { eq: "AirDR_Nurse.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container>
      <LogoContainer>
        {/* <Img fluid={logo.sharp.fluid} style={{ width: "300px" }} /> */}
        <div style={{ width: "350px", margin: "40px auto" }}>
          <AirLogo style={{ width: "120px" }} />
        </div>
        <h2>Digital Imaging Solutions</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          voluptates odio possimus culpa nisi iure adipisci optio quod,
          consectetur fugiat reiciendis facilis voluptatem rerum ab ex nihil
          blanditiis repudiandae corporis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, saepe
          ipsa veniam rerum perferendis in repellat impedit voluptate laboriosam
          non dolores praesentium tenetur? Dignissimos, et! Dolore laboriosam
          ipsa porro sed?
        </p>
        <button>Learn More</button>
        <div style={{ display: "flex" }}>
          <div>100</div> |<div>16</div> |<div>15</div>
        </div>
      </LogoContainer>
      <div>
        <Img fluid={nurse.sharp.fluid} />
      </div>
    </Container>
  )
}

export default NurseSection
