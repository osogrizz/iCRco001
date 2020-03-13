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
    margin: 20px auto;
    text-align: center;
  }
  p {
    margin: 10px 10%;
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
    width: 300px;
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
  text-align: center;
  padding-top: 15px;
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
      measure: file(relativePath: { eq: "AirDR_Dimensions.png" }) {
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
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "50%",
                margin: "40px auto",
              }}
            >
              <Img fluid={measure.sharp.fluid} />
            </div>
            <Table>
              <Row>
                <div>Battery</div>
                <div>Lithium ion 3100 mAh x 2</div>
              </Row>
              <Row>
                <div>X-Ray Voltage</div>
                <div>40 - 150 kVp</div>
              </Row>
              <Row>
                <div>Operating Environment</div>
                <div>
                  10˚C to 35˚C <br />
                  30% tp 85%
                </div>
              </Row>
              <Row>
                <div>Power</div>
                <div>DC 24V, 1.0A</div>
              </Row>
            </Table>
          </div>

          <div style={{ width: "100%" }}>
            <Table>
              <h2>AIRDR LE SPECIFICATIONS</h2>
              <div>
                <Row>
                  <div>Technology</div>
                  <div>a-Si TFT with photodiode</div>
                </Row>
                <Row>
                  <div>Scintilator</div>
                  <div>
                    Csl:Tl/Gd<sub>2</sub>0<sub>2</sub>S:Tb
                  </div>
                </Row>
                <Row>
                  <div>Pixel Pitch</div>
                  <div>140 µm</div>
                </Row>
                <Row>
                  <div>Spatial Resolution</div>
                  <div>3.5 ip/mm</div>
                </Row>
                <Row>
                  <div>Pixels</div>
                  <div>3072 x 3072 pixels</div>
                </Row>
                <Row>
                  <div>Image Size</div>
                  <div>17" x 17" (43.0 cm x 43.0 cm; 432 mm x 432 mm)</div>
                </Row>
                <Row>
                  <div>Gray Scale</div>
                  <div>16 bit</div>
                </Row>
                <Row>
                  <div>Image Acquisition Time</div>
                  <div>
                    Wired: 1.5 seconds <br />
                    Wireless: 3 seconds
                  </div>
                </Row>
                <Row>
                  <div>Recommended Cycle Time</div>
                  <div>15 seconds</div>
                </Row>
                <Row>
                  <div>
                    Data Interface <br />
                    (Data Output)
                  </div>
                  <div>
                    Gigabit Ethernet <br />
                    IEEE 802.11n
                  </div>
                </Row>
                <Row>
                  <div>X-Ray Generator Interface</div>
                  <div>
                    Line Trigger <br />
                    Auto Trigger AED Mode
                  </div>
                </Row>
                <Row>
                  <div>Dimensions</div>
                  <div>
                    18.11 x 18.11 x 59" <br />
                    46.0 cm x 46.0 cm x 1.5 cm
                  </div>
                </Row>
                <Row>
                  <div>Weight</div>
                  <div>
                    4.2 Kg <br />
                    4.5 kg (9.4lb) (including battery)
                  </div>
                </Row>
              </div>
            </Table>
          </div>
        </Container>

        <FinePrint>
          <p>
            <em>
              *Specifications are subject to change without notice. Processing
              and display time are dependent on the prrocesor speed, RAM disk
              access and video card.
            </em>
          </p>
        </FinePrint>
      </>
    </ImageBackground>
  )
}

export default Section3
