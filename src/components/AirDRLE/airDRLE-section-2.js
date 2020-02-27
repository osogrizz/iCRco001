import React from "react"
import styled from "@emotion/styled"
import NurseHero3 from "../HeroImages/nurse-hero-3"

const Container = styled("div")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
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
  }
`

const DimensionSection2 = () => {
  return (
    <Container>
      <div>
        <NurseHero3 />
      </div>
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
    </Container>
  )
}

export default DimensionSection2
