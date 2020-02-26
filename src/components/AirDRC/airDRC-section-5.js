import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import NurseHero from "../HeroImages/nurse-hero"

const Container = styled("div")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  height: 95vh;
  width: 100%;
  text-align: center;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
`

const InfoBox = styled("div")`
  width: 800px;
  padding: 35px 26px 0;
  height: 40vh;

  h4 {
    color: #0069aa;
    letter-spacing: 1.2px;
    text-align: left;
  }
  p {
    font-size: 0.875rem;
    letter-spacing: 1.1px;
    text-align: left;
  }
`

const AirDRCSection5 = () => {
  const { integrated, workflow } = useStaticQuery(graphql`
    query {
      integrated: file(relativePath: { eq: "airdrc_kid.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      workflow: file(relativePath: { eq: "airdrc_lady.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div style={{ width: "500px", margin: "40px auto" }}>
          <Img fluid={integrated.sharp.fluid} />
        </div>
        <div style={{ width: "500px", margin: "40px auto" }}>
          <Img fluid={workflow.sharp.fluid} />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <InfoBox>
          <h4>
            Integrated AED for "No-Hassle Implentation" into existing X-Ray
            rooms
          </h4>
          <p>
            The AirDR c offers incredible versatility and lightning-fast image
            display speed. This cassette-sized, flat panel fits into existing
            tables and wall buckys. With a small upfront investment you can
            transform your radiology department into an efficient, profit center
            with increased patient throughput and a smoother acquisition
            experience.
          </p>
        </InfoBox>

        <InfoBox>
          <h4>Improved Workflow</h4>
          <p>
            The AirDR c provides a lightning-fast display time of 2.5 seconds.
            You'll never experience battery failure or battery depletion during
            use, saving you valuable time. iCRco has been introducing proven
            imaging solutions across the medical industry for nearly 25 years.
            As the official CR provider to the US military, iCRco has propelled
            its products to the furthest reaches of the world, and the AirDR c
            is no exception.
          </p>
        </InfoBox>
      </div>
    </Container>
  )
}

export default AirDRCSection5
