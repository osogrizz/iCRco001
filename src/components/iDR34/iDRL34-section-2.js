import React from "react"
import styled from "@emotion/styled"
import NurseHero6 from "../HeroImages/nurse-hero-6"

const Container = styled("div")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  height: 95vh;
  width: 100%;
  text-align: center;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  overflow: hidden;

  div {
    width: 100%;
  }

  button {
    border: 2px solid transparent;
    border-radius: 12px;
    background: #0069aa;
    color: #fff;
    padding: 15px 40px;
    margin-bottom: 60px;

    &:hover {
      outline: transparent;
      color: #0069aa;
      background: #fff;
      border: 2px solid #0069aa;
      cursor: pointer;
    }
  }
`

const AirDRCSection2 = () => {
  return (
    <Container>
      <NurseHero6 />
    </Container>
  )
}

export default AirDRCSection2
