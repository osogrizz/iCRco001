import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Container = styled("div")`
  display: flex;
  height: 100vh;
  width: 100%;
  text-align: center;
  flex-direction: column;
  justify-content: space-evenly;

  div {
    width: 100%;
  }
`

const DROptionsSection = () => {
  const { wave } = useStaticQuery(graphql`
    query {
      wave: file(relativePath: { eq: "AirDROptions.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1120, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container>
      <div>
        <Img
          fluid={wave.sharp.fluid}
          style={{ height: "100vh", backgroundSize: "cover" }}
        />
      </div>
    </Container>
  )
}

export default DROptionsSection
