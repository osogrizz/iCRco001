import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import IDRLPageHero from "../components/dr-pages/idrl-page-hero"

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
    padding: 20px 40px 40px 0;
    margin-bottom: 40px;
    padding-right: 40px;

    p {
      width: 100%;
      text-align: justify;
      padding: 40px 10px 0;
    }
    p:nth-child(2) {
      padding: 0 0 40px;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;

      ul {
        list-style: none;
        margin: 0 auto;
        span {
          color: #0069aa;
          font-weight: 700;
        }

        li {
          text-align: left;
          margin: 0 auto;
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
  .table {
    margin: 0 auto;
    width: 500px;
    display: flex;
    justify-content: center;
    border: 1px solid #333;

    div {
      margin: 0;
      padding: 0;
    }

    h5 {
      background: dodgerblue;
      padding: 10px;
      margin: 0 0 5px;
      color: #fff;
      font-size: 0.775rem;
    }

    p {
      font-size: 0.75rem;
      text-align: center;
    }
  }
`

const RadiographyIDRL = () => {
  const { girl, dimension } = useStaticQuery(graphql`
    query {
      girl: file(relativePath: { eq: "iDR-L_Girl.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      dimension: file(relativePath: { eq: "iDRL_dimensions.png" }) {
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
            <IDRLPageHero />
          </div>
          <div className="text-info">
            <div className="btn-section">
              <p>
                One solution to address all your long-bone imaging needs.
                Introducing the iDR-L™ – a seamless, high-resolution detector
                that offers full spine, regional, and zone scanning
                capabilities. This direct capture solution revolutionizes how
                full-spine imaging is achieved.
              </p>
              ​
              <p>
                iDR-L™ Method: The long-bone radiography platform utilizes a 17”
                by 51” detector plate that eliminates the need for a cassette.
                Integrating phosphor plate technology, the iDR-L™ boasts a
                higher resolution than standard DR while maintaining the same
                workflow. This solution sends complete image information
                directly to the scan processor skipping lengthy image stitching
                processes.
              </p>
              <a
                href="../images/iDR-L_Brochure.pdf"
                download="iDR-L-brochure.pdf"
              >
                Download Brochure
              </a>
            </div>

            <div>
              <Img fluid={girl.sharp.fluid} style={{ width: "400px" }} />
              <ul>
                <li>
                  <span>✓</span> 1 Full Spine Detector
                </li>
                <li>
                  <span>✓</span> 3 Regional Scan Areas
                </li>
                <li>
                  <span>✓</span> 16 Bit Resolution
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="image-container">
              <Img
                fluid={dimension.sharp.fluid}
                style={{ width: "280px", margin: "0 auto" }}
              />
            </div>

            <div className="table">
              <div>
                <h5>Micron Spot Size</h5>
                <p>200</p>
                <p>155</p>
                <p>100</p>
              </div>
              <div>
                <h5>Pixels Per MM</h5>
                <p>5</p>
                <p>7.5</p>
                <p>10</p>
              </div>
              <div>
                <h5>Dots Per Inch (DPI)</h5>
                <p>127</p>
                <p>163</p>
                <p>254</p>
              </div>
              <div>
                <h5>Line Pairs Per MM</h5>
                <p>2.8</p>
                <p>3.1</p>
                <p>5</p>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  )
}

export default RadiographyIDRL
