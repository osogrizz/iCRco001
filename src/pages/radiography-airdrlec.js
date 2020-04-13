import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import DRLECPageHero from "../components/dr-pages/drlec-page-hero"

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
    /* background: #f4f5f5; */
    /* padding: 20px 0px 10px 0; */
    /* margin-bottom: 40px; */
    /* padding-right: 40px; */

    p {
      width: 100%;
      text-align: justify;
      padding: 40px 0;
    }
    p:nth-child(2) {
      padding: 0 0 40px;
    }

    div {
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
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
        }
      }
    }
  }

  .btn-section {
    width: 40%;

    ul {
      margin: 0 auto;
      margin-bottom: 40px;
    }
  }

  .image-container {
    margin: 0 auto;
    width: 450px;
  }

  .list-section {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 80px;
    padding: 0;
    text-align: left;

    ul {
      li {
        list-style: none;
        margin: 0;
      }
    }
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
    margin: 0 auto 60px;
    padding: 10px 20px;
    background: #0069aa;
    color: #fff;
    border: none;
    outline: orange;
    cursor: pointer;
    border-radius: 5px;
  }

  .lower-info {
    background: #f4f5f5;

    .lower-section {
      display: flex;
      justify-content: space-around;

      h3 {
        letter-spacing: 1px;
        line-height: 30px;
      }

      div {
        width: 80%;
        margin: 20px auto;
      }
    }
  }
`

const DRLECDigitalRadiography = () => {
  const { nurse1, nurse, dimension, kid, lady } = useStaticQuery(graphql`
    query {
      nurse1: file(relativePath: { eq: "AirDR_LEc_Nurse2.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      nurse: file(relativePath: { eq: "airdrc-image02.png" }) {
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
      kid: file(relativePath: { eq: "airdrc_kid.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      lady: file(relativePath: { eq: "airdrc_lady.png" }) {
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
            <DRLECPageHero />
          </div>
          <div>
            <Img fluid={nurse1.sharp.fluid} />
          </div>
          <div className="text-info">
            <div className="btn-section">
              <p>
                Introducing the <strong>AirDR™ LE c</strong>, a budget-friendly
                tethered DR panel that performs at the level of our premium
                AirDR option, yet at a more affordable price. The cassette-size
                AirDR™ LE c outputs at 140 Micron, making it an effective and
                competitive flat panel detector.
              </p>
              <p>
                The <strong>AirDR™ LE c</strong> provides an advanced, low-dose
                digital radiography solution when paired with the robust and
                feature-rich image processing XC™ software. XC provides superior
                quality images every time with an option to further manipulate
                the images.
              </p>

              <div className="list-section">
                <ul>
                  <li>
                    <span>✓</span> 140 Micron
                  </li>
                  <li>
                    <span>✓</span> 16 Bit Resolution
                  </li>
                  <li>
                    <span>✓</span> 7.8 Megapixel
                  </li>
                </ul>
              </div>

              <a href="../images/AirDRc.pdf" download="AirDRc-brochure.pdf">
                Download Brochure
              </a>
            </div>

            <div style={{ marginLeft: "40px" }}>
              <Img fluid={nurse.sharp.fluid} style={{ width: "460px" }} />
            </div>
          </div>

          <div>
            <div className="image-container">
              <Img fluid={dimension.sharp.fluid} />
            </div>
            <h3>SPECIFICATIONS</h3>
            <p>
              The <strong>AirDR™ LE c</strong> System has been specially
              designed and optimized to advance the imaging equipment you're
              using right now. Utilizing it's unique form-factor and embedded
              Automatic Exposure Detection (AED), the{" "}
              <strong>AirDR™ LE c</strong> System is compatible with any X-ray
              system designed to work with ISO 4090 - compliant, 35 x 43 cm
              cassettes.
            </p>
          </div>

          <div className="lower-text">
            <div>
              <h3>DETECTOR</h3>
              <p>
                The <strong>AirDR™ LE c</strong> is a 140-micron, direct deposit
                Cesium, flat-panel detector. The detector transmits images to
                the acquisition station through a WiFi connection, eliminating
                the need for a hard wire. If WiFi is unavailable, a back-up
                cable connection can be used. Powered by a Cesium Iodide
                Scintillator, the detector delivers high-resolution images at
                the lowest possible dose.
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
          <div className="lower-info">
            <div className="lower-section">
              <div>
                <Img fluid={kid.sharp.fluid} />
              </div>

              <div>
                <h3>
                  Integrated AED for "No-Hassle Implementation" into existing
                  X-Ray Rooms
                </h3>
                <p>
                  The <strong>AirDR™ LE c</strong> offers incredible versatility
                  and lightning-fast image display speed. This cassette-sized,
                  flat panel fits into existing tables and wall buckys. With a
                  small upfront investment you can transform your radiology
                  department into an efficient, profit center with increased
                  patient throughput and a smoother acquisition experience.
                </p>
              </div>
            </div>

            <div className="lower-section">
              <div>
                <h3>Improved Workflow</h3>
                <p>
                  The <strong>AirDR™ LE c</strong> provides a lightning-fast
                  display time of 2-5 seconds. You’ll never experience battery
                  failure or battery depletion during use, saving you valuable
                  time. iCRco has been introducing proven imaging solutions
                  across the medical industry for nearly 25 years. As the
                  official CR provider to the U.S. military, iCRco has propelled
                  its products to the furthest reaches of the world, and the{" "}
                  <strong>AirDR™ LE c</strong> is no exception.
                </p>
              </div>
              <div>
                <Img fluid={lady.sharp.fluid} />
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  )
}

export default DRLECDigitalRadiography
