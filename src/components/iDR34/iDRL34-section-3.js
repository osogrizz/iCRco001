import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

const ImageBackground = styled(BackgroundImage)`
  height: 95vh;
  width: 100%;
  background-image: url("../images/wave.png");
  background-size: cover cover;
`

const Container = styled("div")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`

const Table = styled("div")`
  padding-bottom: 0;
  width: 100%;
  h2 {
    color: #0069aa;
    font-size: 2.765rem;
    margin: 40px auto 20px;
    text-align: center;
  }
  p {
    text-align: left;
    font-size: 0.675rem;
  }

  .column-container {
    display: flex;
    margin: 0 10% 10px;
  }
  .top-column {
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    background: lightgray;

    p {
      margin: 0;
      width: 100%;
      text-align: center;
    }
  }
`

const TopTable = styled("div")`
  display: flex;
  margin: 0 10% 20px;
`

const TopRow = styled("div")`
  display: flex;
  justify-content: center;
  width: 100%;
  color: #fff;
  background: #0069aa88;

  div {
    margin: 0 auto;
    width: 100%;
    text-align: center;
  }

  p {
    margin: 10px auto;
    width: 100%;
    text-align: center;
    font-size: 0.75rem;
  }
`

const Row = styled("div")`
  display: flex;
  margin: 0 10%;
  border-bottom: 1px solid #333;

  div:first-child {
    color: #fff;
    background: #0069aa88;
    width: 330px;
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

const FinePrint = styled("div")`
  width: 80%;
  margin: 10px auto 0;
  font-size: 0.85rem;
`

const Section3 = () => {
  const { image, measure } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "wave.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      measure: file(relativePath: { eq: "iDR34_dimensions.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <ImageBackground
      fluid={image.sharp.fluid}
      fadeIn="soft"
      preserveStackingContext
    >
      <>
        <Container>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <div style={{ width: "60%", margin: "70px auto 0", zIndex: "-10" }}>
              <Img fluid={measure.sharp.fluid} />
            </div>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Table>
              <h2>iDR34 SPECIFICATIONS</h2>
              <TopTable>
                <TopRow>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <div style={{ borderRight: "1px solid #333" }}>
                      <p>Micron Spot Size</p>
                    </div>
                    <div
                      className="top-column"
                      style={{
                        margin: "0 auto",
                        borderRight: "1px solid #333",
                        width: "100%",
                        color: "#333",
                      }}
                    >
                      <p>200</p>
                      <p>155</p>
                      <p>100</p>
                    </div>
                  </div>
                </TopRow>
                <TopRow>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <div style={{ borderRight: "1px solid #333" }}>
                      <p>Pixels Per mm</p>
                    </div>
                    <div
                      className="top-column"
                      style={{
                        borderRight: "1px solid #333",
                        paddin: "0 auto",
                        color: "#333",
                      }}
                    >
                      <p>5</p>
                      <p>7.5</p>
                      <p>10</p>
                    </div>
                  </div>
                </TopRow>
                <TopRow>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <div style={{ borderRight: "1px solid #333" }}>
                      <p>Dots Per Inch (DPI)</p>
                    </div>
                    <div
                      className="top-column"
                      style={{
                        borderRight: "1px solid #333",
                        paddin: "0 auto",
                        color: "#333",
                      }}
                    >
                      <p>127</p>
                      <p>163</p>
                      <p>154</p>
                    </div>
                  </div>
                </TopRow>
                <TopRow>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <div>
                      <p>Line Pairs Per mm</p>
                    </div>
                    <div className="top-column" style={{ color: "#333" }}>
                      <p>2.5</p>
                      <p>3.7</p>
                      <p>5</p>
                    </div>
                  </div>
                </TopRow>
              </TopTable>
              <div>
                <Row>
                  <div>Grayscale Resolution</div>
                  <div>16 bits/pixel source file, 65536 shades of gray</div>
                </Row>
                <Row>
                  <div>Scanning</div>
                  <div>17" x 51" active area. 14" x 51" option</div>
                </Row>
                <Row>
                  <div>Configuration</div>
                  <div>Wall mounted, upright full-spine imaging</div>
                </Row>
                <Row>
                  <div>Weight</div>
                  <div>Approx. 100 lbs</div>
                </Row>
                <Row>
                  <div>Dimensions</div>
                  <div>
                    iDR 17x51: W22.5" x D6.32" x H72.25" <br />
                    iDR 14x51: W19.5" x D6.32" x H72.25"
                  </div>
                </Row>
                <Row>
                  <div>Power Source</div>
                  <div>
                    100-240V AC/2.5A max; 47-63Hz (universal power supply){" "}
                    <br />
                    24V option available
                  </div>
                </Row>
                <Row>
                  <div>iSupply</div>
                  <div>
                    24V portable DC power supply available <br />
                    270 scans on a single charge
                  </div>
                </Row>
                <Row>
                  <div>Heat Generation</div>
                  <div>Standby 230W, Maximum 1610W</div>
                </Row>
                <Row>
                  <div>Operating Conditions</div>
                  <div>
                    Temperature: 0-40˚C/32-105˚F, temperature change: 0.5˚C/min,
                    humidity: 15%-95% RH, magnetic fields: max1260 µT (in
                    conformance with En 6100-4-8: Level 3), 10 A/m
                  </div>
                </Row>
              </div>
            </Table>
            <FinePrint>
              <p>
                <em>
                  *Specifications are subject to change without notice.
                  Processing and display time are dependent on the prrocesor
                  speed, RAM disk access and video card.
                </em>
              </p>
            </FinePrint>
          </div>
        </Container>
      </>
    </ImageBackground>
  )
}

export default Section3
