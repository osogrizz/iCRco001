import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

const ImageBackground = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 95vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 100%;
  background-image: url("../images/protection_hero.png");
  background-size: cover cover;

  a {
    color: #fff;
    border-radius: 20px;
    border: 1px solid #fff;
    padding: 10px 20px;
    z-index: 500;
  }

  @media (max-width: 800px) {
    height: 135vh;
    h3 {
      font-size: 0.8rem;
    }
  }
`

const Container = styled("div")`
  height: 100vh;
  width: 100%;
  text-align: center;

  h2 {
    margin: 35px auto 160px;
    font-size: 2.8rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #0069aa;
  }
`

const SelectionBox = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h3 {
    font-size: 2.8rem;
    margin: 20px;
    font-weight: 700;
    text-transform: uppercase;
    color: #0069aa;
    align-items: center;
  }
`

const InfoCard = styled("div")`
  height: 650px;
  width: 480px;
  border-radius: 20px;
  background: #e6f6ff66;

  p {
    font-weight: 500;
  }

  hr {
    width: 80%;
    margin: 0 auto;
    height: 2px;
    background: #666;
  }

  li {
    margin: 0 auto;
    width: 400px;
    font-size: 0.975rem;
    text-align: left;
    list-style: none;
    font-weight: 500;
    &::before {
      content: "✓ ";
      color: #0069aa;
      font-weight: 700;
    }
  }
`

const AirDRLESection5 = () => {
  const { protection, leCase, tough } = useStaticQuery(graphql`
    query {
      protection: file(relativePath: { eq: "protection_hero.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leCase: file(relativePath: { eq: "AirDRLE_CaseNew.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tough: file(relativePath: { eq: "AirDR_Tough.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <ImageBackground
      fluid={protection.sharp.fluid}
      fadeIn="soft"
      preserveStackingContext
    >
      <Container>
        <h2>DR Protection Options</h2>
        <SelectionBox style={{ height: "50vh", marginTop: "80px" }}>
          <InfoCard>
            <h3>DR Panel Case</h3>
            <p style={{ fontWeight: "bold" }}>
              Built from military grade polyethylene.
            </p>
            <hr />
            <div
              style={{
                height: "70%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "20px 40px 0",
              }}
            >
              <p
                style={{
                  fontWeight: 400,
                  textAlign: "left",
                  fontSize: "0.9rem",
                }}
              >
                The DR Panel Case are designed to provide an extra layer of
                resistance from drops and damages With the DR Panel Case your
                panel cover can travel with your AirDR and fit into any table
                and wall stand with no modifications.
              </p>
              <div style={{ width: "100%", height: "250px" }}>
                <Img
                  fluid={leCase.sharp.fluid}
                  style={{
                    width: "58%",
                    top: -10,
                    left: -20,
                    backgroundSize: "cover",
                    margin: "0 auto",
                  }}
                />
              </div>

              <ul>
                <li>Lightweight frame</li>
                <li>Quick and easy setup</li>
                <li>Sleek outer casing design and feel.</li>
              </ul>
            </div>
          </InfoCard>
          <InfoCard>
            <h3>ToughCarry</h3>
            <p style={{ fontWeight: "bold" }}>
              Built from high density polyethylene.
            </p>
            <hr />
            <div
              style={{
                height: "70%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "20px 40px 0",
              }}
            >
              <p
                style={{
                  fontWeight: 400,
                  textAlign: "left",
                  fontSize: "0.9rem",
                }}
              >
                Assure the safety of your investment. ToughCarry uses military
                grade technology to protect your panels from breakage and
                deterioration while still maintaining the highest quality of
                imaging.
              </p>
              <div style={{ width: "100%", height: "250px" }}>
                <Img
                  fluid={tough.sharp.fluid}
                  style={{
                    width: "60%",
                    top: -110,
                    backgroundSize: "cover",
                    margin: "0 auto",
                  }}
                />
              </div>

              <ul>
                <li>Lightweight and secure frame</li>
                <li>Carbon fiber backing</li>
                <li>Easy one hand operation with carrying handle</li>
              </ul>
            </div>
          </InfoCard>
        </SelectionBox>
      </Container>
    </ImageBackground>
  )
}

export default AirDRLESection5
