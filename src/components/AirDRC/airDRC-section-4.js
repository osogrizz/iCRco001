import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import NurseHero from "../HeroImages/nurse-hero"

const Container = styled("div")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  height: 100vh;
  width: 100%;
  text-align: center;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  overflow: hidden;
`

const InfoContainer = styled("div")`
  padding-bottom: 0;
  margin-bottom: 0;
  width: 100%;
  h2 {
    color: #0069aa;
    font-size: 3rem;
    margin: 20px auto;
  }
  p {
    margin: 20px 10%;
    text-align: left;
    font-size: 0.775rem;
  }
`

const Row = styled("div")`
  display: flex;
  margin: 0 10%;
  border-bottom: 1px solid #333;

  div:first-child {
    color: #fff;
    background: #0069aa88;
    width: 250px;
    text-align: left;
    padding: 8px;
    font-size: 0.975rem;
  }
  div:last-child {
    text-align: left;
    width: 100%;
    padding: 8px;
    background: lightgray;
    font-size: 0.75rem;
  }
`

const NurseSection = () => {
  return (
    <Container>
      <InfoContainer>
        <h2>AIRDR c SPECIFICATIONS</h2>
        <div display={{}}>
          <Row>
            <div>Application</div>
            <div>General Radiography</div>
          </Row>
          <Row>
            <div>Sensor</div>
            <div>Direct Deposit Cesium Iodide</div>
          </Row>
          <Row>
            <div>Panel</div>
            <div>Amorphous Silicon active TFT/diode array</div>
          </Row>
          <Row>
            <div>Active Area</div>
            <div>17 x 17 inch (432mm x 432mm)</div>
          </Row>
          <Row>
            <div>Sensor panel</div>
            <div>4,138 x 4320 (18.7M pixels)</div>
          </Row>
          <Row>
            <div>Image Data</div>
            <div>16 bit</div>
          </Row>
          <Row>
            <div>Trigger Mode</div>
            <div>Auto Sensing, Manual, User Open (for NDT)</div>
          </Row>
          <Row>
            <div>Image Preview</div>
            <div>2 ~ 5 sec. (approx.)</div>
          </Row>
          <Row>
            <div>Image Transfer Time</div>
            <div>600 ms. (approx.)</div>
          </Row>
          <Row>
            <div>
              Wired Interface <br />
              (Data Output)
            </div>
            <div>Gigabit Ethernet and X-Ray I/F</div>
          </Row>
          <Row>
            <div>Voltage</div>
            <div>100-240 V ~.50/60 Hz</div>
          </Row>
          <Row>
            <div>Power Consumption</div>
            <div>35 VA MAximum</div>
          </Row>
          <Row>
            <div>Environment</div>
            <div>
              Storage: -10°C ~ 60°C, 10% ~ 90% RH (Non-condensing) <br />
              Working: 10°C ~35°C, 20% ~75% RH (Non-condensing)
            </div>
          </Row>
          <Row>
            <div>Dimensions (WxLXT)</div>
            <div>
              18.11 x 18.11 x 59" (Cassette-size for the standard table or wall
              bucky)
            </div>
          </Row>
          <Row style={{ borderBottom: "none" }}>
            <div>Weight</div>
            <div>4.5kg (9.4lb)</div>
          </Row>

          <p>
            <em>
              * Specifications are subject to change without notice. Processing
              and display time are dependent on processor speed, RAM disk access
              time, and video card.
            </em>
          </p>
        </div>
      </InfoContainer>
      <NurseHero />
    </Container>
  )
}

export default NurseSection
