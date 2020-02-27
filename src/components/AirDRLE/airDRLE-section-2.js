import React from "react"
import styled from "@emotion/styled"
// import WaveHero from "../HeroImages/wave-hero"
import NurseHero3 from "../HeroImages/nurse-hero-3"

const Container = styled("div")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  /* height: 100vh; */
  width: 100%;
  height: 95vh;
  text-align: center;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
  padding: 0;
  margin: 0;

  div {
    width: 100%;
    margin: 0 auto;
    padding: 0;
  }
`
<<<<<<< HEAD

const InfoBox = styled("div")`
  padding: 35px 26px 0;
  height: 20vh;
  h3 {
    color: #0069aa;
    letter-spacing: 1.2px;
  }
  p {
    font-size: 0.875rem;
    letter-spacing: 1.1px;
    text-align: left;
=======
const LowerContainer = styled("div")`
  top: -50;
  display: flex;
  margin: 0 auto;
  width: 800px !important;
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

const InfoBox = styled("div")`
  width: 200px;

  p {
    font-weight: 700;
    letter-spacing: 2px;
    margin: 0;
>>>>>>> e3b8e3fb8e4beb6627129e12df775164b9583e5d
  }
`

const DimensionSection = () => {
  return (
    <Container>
      <div>
        <NurseHero3 />
      </div>
<<<<<<< HEAD
      <div style={{ display: "flex" }}>
        <InfoBox>
          <h3>Specifications</h3>
          <p>
            The <strong>AirDR™</strong> is a lightweight digital radiographic
            system designed to optimize workflow, increase throughhput, and
            eliminate unnecessary exposure for patients. Its durable frame and
            wireless capabilities allow you complete imaging freedom foreven the
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
            for a hard wire. If WiFi is unavailable, a backup cable connection
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
=======
      <InfoContainer>
        <LowerContainer>
          <InfoBox style={{ borderRight: "2px solid black" }}>
            <h2>100</h2>
            <p>Microns</p>
          </InfoBox>

          <InfoBox style={{ margin: "0 20px" }}>
            <h2>16</h2>
            <p>Bit Resolutions</p>
          </InfoBox>

          <InfoBox style={{ borderLeft: "2px solid black" }}>
            <h2>15</h2>
            <p>Megapixel</p>
          </InfoBox>
        </LowerContainer>
      </InfoContainer>
>>>>>>> e3b8e3fb8e4beb6627129e12df775164b9583e5d
    </Container>
  )
}

export default DimensionSection
