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

const DimensionSection = () => {
  const { wave, panels } = useStaticQuery(graphql`
    query {
      wave: file(relativePath: { eq: "wave.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1120, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      panels: file(relativePath: { eq: "AirDR_Dimensions.png" }) {
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
      <div>
        <Img
          fluid={wave.sharp.fluid}
          style={{ height: "40vh", backgroundSize: "cover" }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <div>Specifications</div> |<div>Detector</div> |
        <div>Single Detector</div>
      </div>
    </Container>
  )
}

export default DimensionSection
