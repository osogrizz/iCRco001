import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import WaveHero from "./wave-hero"

const Container = styled("div")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
  padding: 5px 26px;
  h3 {
    color: #0069aa;
    letter-spacing: 1.2px;
  }
  p {
    font-size: 0.875rem;
    letter-spacing: 1.1px;
    text-align: left;
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
      # panels: file(relativePath: { eq: "AirDR_Dimensions.png" }) {
      #   sharp: childImageSharp {
      #     fluid(maxWidth: 800) {
      #       ...GatsbyImageSharpFluid
      #     }
      #   }
      # }
    }
  `)
  return (
    <Container>
      <div>
        <WaveHero />
      </div>
      <div style={{ display: "flex" }}>
        <InfoBox>
          <h3>Specifications</h3>
          <p>
            The <strong>AirDR™</strong> is a lightweight digital radiographic
            system designed to optimize workflow, increase throughhput, and
            eliminate unnecessary exposure for patients. Its durable frame and
            wirelesscapabilities allow you complete imaging freedom foreven the
            most difficult image projections. Using advancedacquisition
            software, the <strong>AirDR™</strong> allows you to acheive
            unprecedented workflow and save valuable time.
          </p>
        </InfoBox>
        <InfoBox>
          <h3>Detector</h3>
          <p>
            The <strong>AirDR™</strong> is a 100-micronn, direct deposit Cesium,
            flat panel detector. The detector transmits images to the
            acquisition station through a WiFi connection, eliminatingthe need
            for a hard wire. If WiFo is unavailable, a backup cable connection
            can be used. Powered by a Cesium Iodide Scintilator, the detector
            delivers high-resolution images at the lowest possible dose.
          </p>
        </InfoBox>
        <InfoBox>
          <h3>Single Detector</h3>
          <p>
            Other panels on the market can have as many as 5 separate sensorsand
            the panel relies on these sensors to work in concert to acquire an
            image. Multi-sensor panels are often vulnerable to failure points
            between sensors, which cancause "no triggers" and "false triggers"
            during a routune study and ultimately lead to uneccessary repeat
            exposure for patients.
          </p>
        </InfoBox>
      </div>
    </Container>
  )
}

export default DimensionSection
