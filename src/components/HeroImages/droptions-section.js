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

const InfoBox = styled("div")`
  h3 {
    color: #0069aa;
    letter-spacing: 1.2px;
  }
`

const DROptionsSection = () => {
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
          style={{ height: "50vh", backgroundSize: "cover" }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <InfoBox>
          <h3>Specifications</h3>
          <p>
            Lorem ipsum dolor amet slow-carb cold-pressed kogi pinterest
            polaroid pabst ennui whatever. Post-ironic pork belly slow-carb
            before they sold out dreamcatcher. Microdosing pork belly ethical,
            woke offal leggings cliche mustache chia ramps taxidermy yuccie
            green juice iPhone. Post-ironic tumblr tacos fingerstache, echo park
          </p>
        </InfoBox>{" "}
        |
        <InfoBox>
          <h3>Detector</h3>
          <p>
            Lorem ipsum dolor amet slow-carb cold-pressed kogi pinterest
            polaroid pabst ennui whatever. Post-ironic pork belly slow-carb
            before they sold out dreamcatcher. Microdosing pork belly ethical,
            woke offal leggings cliche mustache chia ramps taxidermy yuccie
            green juice iPhone. Post-ironic tumblr tacos fingerstache, echo park
          </p>
        </InfoBox>{" "}
        |
        <InfoBox>
          <h3>Single Detector</h3>
          <p>
            Lorem ipsum dolor amet slow-carb cold-pressed kogi pinterest
            polaroid pabst ennui whatever. Post-ironic pork belly slow-carb
            before they sold out dreamcatcher. Microdosing pork belly ethical,
            woke offal leggings cliche mustache chia ramps taxidermy yuccie
            green juice iPhone. Post-ironic tumblr tacos fingerstache, echo park
          </p>
        </InfoBox>
      </div>
    </Container>
  )
}

export default DROptionsSection
