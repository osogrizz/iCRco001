import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Container = styled("div")`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 80px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  border-bottom: 2px solid gray;

  a {
    display: flex;
    font-weight: 700;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: lightgray;
    cursor: default;
  }
  .active {
    cursor: pointer;
    color: #222;
    background: lightgray;
  }
`

const ConfigNav = () => {
  return (
    <Container>
      <Link activeClassName="active" to="/DR_Solution">
        1. Build Your Kit
      </Link>
      <Link activeClassName="active" to="/DR_Kit_Overview">
        2. Kit Overview
      </Link>
      <Link activeClassName="active" to="DR_Quote">
        3. Quote
      </Link>
    </Container>
  )
}

export default ConfigNav
