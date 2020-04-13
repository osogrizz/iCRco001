import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import Layout from "../components/layout"

const Container = styled("div")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 120px auto 80px;
  text-align: center;
  max-width: 1120px;

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

  h4 {
    font-size: 0.895rem;
    /* letter-spacing: 0.5px; */
    font-weight: 600;
    margin: 20px 0;
  }

  .white-section {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;

    div {
      margin: 0 auto;
      /* width: 50%;s */
    }
  }

  #longbone {
    width: 100%;
  }

  .title-container {
    width: 86%;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 80px;

    /* a {
      width: 120px;
      margin: 20px auto 40px;
      padding: 10px 20px;
      background: #0069aa;
      color: #fff;
      border: none;
      outline: orange;
      cursor: pointer;
      border-radius: 5px;
    } */
  }

  a {
    width: 120px;
    margin: 20px auto 40px;
    padding: 10px 20px;
    background: #0069aa;
    color: #fff;
    border: none;
    outline: orange;
    cursor: pointer;
    border-radius: 5px;
  }
  .gray-section {
    background: #f4f5f5;
    margin-top: 80px;

    .section-heading {
      background: #fff;
      display: flex;
      justify-content: space-around;
      width: 100%;
      padding-left: 100px;

      h3 {
        color: #333;
      }
    }

    .scintillators {
      display: flex;
      justify-content: center;
      align-items: center;
      .sci-title {
        width: 20%;
      }
    }
  }

  .image-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin-top: 40px;

    image {
      width: 100%;
    }
  }
`

const DigitalRadiography = () => {
  const {
    longbone,
    lbLogo,
    logo34,
    airdr,
    airdrc,
    airdrp,
    airdrpc,
    mammography,
    airdrle,
    airdrlec,
  } = useStaticQuery(graphql`
    query {
      longbone: file(relativePath: { eq: "LongBone.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      lbLogo: file(relativePath: { eq: "iDRL_Logo.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      logo34: file(relativePath: { eq: "iDR34Logo.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      airdr: file(relativePath: { eq: "Air-DR_Hero.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      airdrc: file(relativePath: { eq: "AirDRc_hero.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      airdrp: file(relativePath: { eq: "AirDRP_side14x17.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      airdrpc: file(relativePath: { eq: "front.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      mammography: file(relativePath: { eq: "AirDRM_sideview.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      airdrle: file(relativePath: { eq: "AirDRLE_Straight.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      airdrlec: file(relativePath: { eq: "AirDRLEc.png" }) {
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
          <h1>digital radiography</h1>
          <hr />
          <div className="white-section">
            <div id="longbone">
              <Img fluid={longbone.sharp.fluid} />

              <div className="title-container">
                <div style={{ width: "120px" }}>
                  <Img fluid={lbLogo.sharp.fluid} />
                  <h4>Long Length DR</h4>
                  <Link>Browse</Link>
                </div>

                <div style={{ width: "138px" }}>
                  <Img fluid={logo34.sharp.fluid} />
                  <h4>Full Spine DR</h4>
                  <Link>Browse</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="gray-section">
            <div className="section-heading">
              <h3>Portable</h3>
              <h3>Fixed</h3>
            </div>

            <div className="scintillators">
              <div className="sci-title">
                <h4>Cesium</h4>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  borderLeft: "1px solid #333",
                }}
              >
                <div className="image-wrapper">
                  <Img fluid={airdr.sharp.fluid} style={{ width: "45%" }} />
                  <h4>Innovative DR Solution</h4>
                  <Link>Browse</Link>
                </div>
                <div className="image-wrapper">
                  <Img fluid={airdrc.sharp.fluid} style={{ width: "50%" }} />
                  <h4>Innovative DR Solution</h4>
                  <Link>Browse</Link>
                </div>
                <div className="image-wrapper">
                  <Img fluid={airdrp.sharp.fluid} style={{ width: "32%" }} />
                  <h4>DR Solution for Printers</h4>
                  <Link>Browse</Link>
                </div>
                <div className="image-wrapper">
                  <Img fluid={airdrpc.sharp.fluid} style={{ width: "50%" }} />
                  <h4>DR Solution for Printers</h4>
                  <Link>Browse</Link>
                </div>
                <div className="image-wrapper">
                  <Img
                    fluid={mammography.sharp.fluid}
                    style={{ width: "35%" }}
                  />
                  <h4>Ultimate Mammography DR Solution</h4>
                  <Link>Browse</Link>
                </div>
              </div>
            </div>
            <hr style={{ margin: 0 }} />
            <div className="scintillators">
              <div className="sci-title">
                <h4>Gadox</h4>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  borderLeft: "1px solid #333",
                }}
              >
                <div className="image-wrapper">
                  <Img fluid={airdrle.sharp.fluid} style={{ width: "50%" }} />
                  <h4>Budget DR Solution</h4>
                  <Link>Browse</Link>
                </div>
                <div className="image-wrapper">
                  <Img fluid={airdrlec.sharp.fluid} style={{ width: "50%" }} />
                  <h4>Budget DR Solution</h4>
                  <Link>Browse</Link>
                </div>
                <div className="image-wrapper">
                  <Img fluid={airdrp.sharp.fluid} style={{ width: "32%" }} />
                  <h4>DR Solution for Printers</h4>
                  <Link>Browse</Link>
                </div>
                <div className="image-wrapper">
                  <Img fluid={airdrpc.sharp.fluid} style={{ width: "50%" }} />
                  <h4>DR Solution for Printers</h4>
                  <Link>Browse</Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  )
}

export default DigitalRadiography
