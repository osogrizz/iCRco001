import React from "react"
import styled from "@emotion/styled"
import NurseHero3 from "../HeroImages/nurse-hero-3"

const Container = styled("div")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  width: 100%;
  text-align: center;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
  padding: 0;
  margin: 0;

  div {
    width: 100%;
  }
`

const InfoBox = styled("div")`
  padding: 35px 26px 0;
  /* height: 48vh; */
  h3 {
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
const LowerContainer = styled("div")`
  height: 40vh;
  display: flex;
  margin: 0 auto;
  width: 400px !important;
  padding: auto;
  padding-bottom: 100vh;
`

const InfoBox = styled("div")`
  width: 180px {
    font-size: 1.45rem;
  }

  p {
    font-weight: 700;
    letter-spacing: 1.2px;
    margin: 0;
    font-size: 0.75rem;
  }
`

const DimensionSection2 = () => {
  return (
    <Container>
      <div>
        <NurseHero3 />
      </div>
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
    </Container>
  )
}

export default DimensionSection2
