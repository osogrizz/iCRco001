import React, { useState } from "react"
import styled from "@emotion/styled"

const Container = styled("div")`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 80px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  border-bottom: 2px solid gray;

  button {
    display: flex;
    font-weight: 700;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: lightgray;
    background: #fff;
    cursor: default;
    outline: transparent;
    &:active {
      color: #222;
      background: lightgray;
      transition: all 0.2s ease-in-out;
    }
  }
  .active {
    cursor: pointer;
    color: #222;
    background: lightgray;
  }
`

const ConfigNav = () => {
  const [steps, setSteps] = useState()

  return (
    <Container>
      <button className="active">1. Build Your Kit</button>
      <button disabled>2. Kit Overview</button>
      <button disabled>3. Quote</button>
    </Container>
  )
}

export default ConfigNav
