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

const DimensionSection2 = () => {
  return (
    <Container>
      <div>
        <NurseHero3 />
      </div>
      <div style={{ display: "flex", height: "20vh" }}></div>
    </Container>
  )
}

export default DimensionSection2
