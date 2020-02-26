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
  }
`

const Row = styled("div")`
  display: flex;
  margin: 0 10%;
  border-bottom: 1px solid #333;

  div:first-child {
    color: #fff;
    background: #0069aa88;
    width: 200px;
    text-align: left;
    padding: 8px;
  }
  div:last-child {
    text-align: left;
    width: 100%;
    padding: 8px;
    background: lightgray;
  }
`

const NurseSection = () => {
  return (
    <Container>
      <InfoContainer>
        <h2>AIRDR c SPECIFICATIONS</h2>
        <div display={{}}>
          <Row>
            <div>title</div>
            <div>lorem ipsum...</div>
          </Row>
          <Row>
            <div>title</div>
            <div>lorem ipsum...</div>
          </Row>
          <Row>
            <div>title</div>
            <div>lorem ipsum...</div>
          </Row>
          <Row>
            <div>title</div>
            <div>lorem ipsum...</div>
          </Row>
          <Row>
            <div>title</div>
            <div>lorem ipsum...</div>
          </Row>
          <Row>
            <div>title</div>
            <div>lorem ipsum...</div>
          </Row>
          <Row>
            <div>title</div>
            <div>lorem ipsum...</div>
          </Row>
          <Row>
            <div>title</div>
            <div>lorem ipsum...</div>
          </Row>
          <Row>
            <div>title</div>
            <div>lorem ipsum...</div>
          </Row>
          <Row>
            <div>title</div>
            <div>lorem ipsum...</div>
          </Row>
          <Row>
            <div>title</div>
            <div>lorem ipsum...</div>
          </Row>
          <Row>
            <div>title</div>
            <div>lorem ipsum...</div>
          </Row>
          <Row>
            <div>title</div>
            <div>lorem ipsum...</div>
          </Row>
          <Row style={{ borderBottom: "none" }}>
            <div>title</div>
            <div>lorem ipsum...</div>
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
