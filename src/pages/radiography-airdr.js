import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import DRPageHero from "../components/dr-pages/dr-page-hero"

const Container = styled("div")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 50px auto 80px;
  text-align: center;
  max-width: 960px;

  h1 {
    text-align: center;
    text-transform: uppercase;
    color: #0069aa;
    letter-spacing: 1px;
  }

  h3 {
    font-weight: 700;
    font-size: 1rem;
    height: auto;
    letter-spacing: 4.2px;
    color: #0069aa;
    margin: 20px 20px 40px;
    text-align: left;
  }

  .intro-text {
    font-size: 0.875rem;
    letter-spacing: 1px;
    text-align: justify;
    width: 800px;
    margin: 20px auto 80px;
  }

  p {
    font-size: 0.75rem;
    letter-spacing: 1px;
    text-align: justify;
    margin: 0 20px;
  }

  .contacts {
    display: flex;
    justify-content: space-around;

    div {
      width: 50%;
    }
  }

  .text-info {
    display: flex;
    background: #f4f5f5;
    padding: 20px 40px 10px 0;
    margin-bottom: 40px;
    padding-right: 40px;

    p {
      width: 100%;
      text-align: justify;
      padding: 40px 10px;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;

      ul {
        list-style: none;
        span {
          color: #0069aa;
          font-weight: 700;
        }

        li {
          text-align: left;
          margin: 0;
          /* font-size: ; */
        }
      }
    }
  }

  .btn-section {
    width: 50%;
  }

  .image-container {
    margin: 0 auto;
    width: 450px;
  }

  .lower-text {
    display: flex;
    justify-content: space-around;

    div {
      width: 50%;
      margin: 0 20px;
      h3 {
        text-align: left;
        margin: 40px auto;
        font-size: 1rem;
      }

      p {
        text-align: justify;
        margin: 20px 0;
      }
    }
  }

  a {
    width: 200px;
    margin: 0 auto 40px;
    padding: 10px 20px;
    background: #0069aa;
    color: #fff;
    border: none;
    outline: orange;
    cursor: pointer;
    border-radius: 5px;
  }
`

const DigitalRadiography = () => {
  const { black, dimension } = useStaticQuery(graphql`
    query {
      black: file(relativePath: { eq: "airdr_black2.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      dimension: file(relativePath: { eq: "AirDRc_dimensions.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <Container>
          <div style={{ height: "450px" }}>
            <DRPageHero />
          </div>
          <div className="text-info">
            <div className="btn-section">
              <p>
                The AirDR™ is a durable, low-dose cassette-size DR panel loaded
                with cutting edge, fail-safe features while ensuring patients
                receive the lowest possible dose. This Flat Panel Detector uses
                a low-power WiFi connection to transmit images, allowing you the
                freedom to capture difficult or unusual x-ray projections. With
                a thin and sturdy carbon fiber frame and wireless capabilities,
                it can be seamlessly integrated into new or existing x-ray
                rooms. Rugged and reliable, the AirDR™ has achieved a high Water
                and Dust rating of IP42 to protect it from outside dust
                particles, and if accidentally wet, it is engineered to protect
                the panel and prevent the circuits from shorting out.
              </p>
              <a
                href="../images/AirDR_Brochure.pdf"
                download="AirDR-brochure.pdf"
              >
                Download Brochure
              </a>
            </div>

            <div>
              <Img
                fluid={black.sharp.fluid}
                style={{ width: "200px", marginBottom: "20px" }}
              />
              <ul>
                <li>
                  <span>✓</span> 100 Micron
                </li>
                <li>
                  <span>✓</span> 16 Bit Resolution
                </li>
                <li>
                  <span>✓</span> 15 Megapixel
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="image-container">
              <Img fluid={dimension.sharp.fluid} />
            </div>
            <h3>SPECIFICATIONS</h3>
            <p>
              The AirDR™ is a lightweight digital radiographic system designed
              to optimize workflow, increase throughput, and eliminate
              unnecessary exposures to patients. Its durable frame and wireless
              capabilities allow you complete imaging freedom for even the most
              difficult image projections. Using advanced acquisition software,
              the AirDR™ allows you to achieve unprecedented workflow and save
              valuable time.
            </p>
          </div>

          <div className="lower-text">
            <div>
              <h3>DETECTOR</h3>
              <p>
                The AirDR™ is a 100-micron, direct deposit Cesium, flat-panel
                detector. The detector transmits images to the acquisition
                station through a WiFi connection, eliminating the need for a
                hard wire. If WiFi is unavailable, a back-up cable connection
                can be used. Powered by a Cesium Iodide Scintillator, the
                detector delivers high-resolution images at the lowest possible
                dose.
              </p>
            </div>

            <div>
              <h3>SINGLE CENSOR DETECTOR</h3>
              <p>
                Other panels on the market can have as many as 5 separate
                sensors and the panel relies on these sensors to work in concert
                to acquire an image. Multi-sensor panels are often vulnerable to
                failure points between sensors, which can cause "no triggers"
                and "false triggers" during a routine study and ultimately lead
                to unnecessary repeat exposures for patients.
              </p>
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  )
}

export default DigitalRadiography
