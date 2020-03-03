import React from "react"
import styled from "@emotion/styled"
import Nurse3 from "../HeroImages/nurse-hero-3"

const Container = styled("div")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
`

const InfoBox = styled("div")`
  width: 320px;
  text-align: center;
  margin: 20px auto;
  /* padding: 15px; */

  h4 {
    font-size: 1.2rem;
  }
  p {
    font-weight: 600;
  }
`

const airDRLESection2 = () => {
  return (
    <div>
      <Nurse3 />
      <Container>
        <InfoBox style={{ borderRight: "2px solid #333" }}>
          <h4>140</h4>
          <p>Microns</p>
        </InfoBox>
        <InfoBox>
          <h4>16</h4>
          <p>Bit Resolutions</p>
        </InfoBox>
        <InfoBox style={{ borderLeft: "2px solid #333" }}>
          <h4>8</h4>
          <p>Frames Per Sec</p>
        </InfoBox>
      </Container>
    </div>
  )
}

export default airDRLESection2
