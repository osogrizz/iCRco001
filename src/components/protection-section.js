import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
// import AirLogo from "./HeroImages/AirLogo"

const ImageBackground = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  height: -webkit-fill-available;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 100%;
  background-image: linear-gradient(
      rgba(80, 80, 80, 0.2),
      rgba(80, 80, 80, 0.2)
    ),
    url("../images/protection_hero.png");
  background-size: cover cover;

  h2 {
    margin: 80px auto 120px;
    font-size: 2.8rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #0069aa;
  }
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
`

const SelectionBox = styled("div")`
  width: 100%;
  /* height: 100vh; */
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
  height: 550px;
  width: 480px;
  border-radius: 20px;
  border: 1px solid #fff;
  background: #ffffff55;
  /* z-index: 500; */
  /* cursor: pointer; */

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
    width: 300px;
    text-align: left;
    bottom: 0;
    list-style: none;
    &::before {
      content: "check ";
    }
  }
`

const ProtectionHero = () => {
  const { protection } = useStaticQuery(graphql`
    query {
      protection: file(relativePath: { eq: "protection_hero.png" }) {
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
      <div></div>
      <Container>
        <h2>DR Protection Options</h2>
        <SelectionBox style={{ height: "50vh", marginTop: "80px" }}>
          <InfoCard>
            <h3>DR Panel Case</h3>
            <p>Built from military grade polyethalyne.</p>
            <hr />
            <div
              style={{
                height: "70%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "40px 40px 0",
              }}
            >
              <p>
                The DR Panel Case are designed to provide an extra layer of
                resistance from drops and damages With the DR Panel Case your
                panel cover can travel with your AirDR and fit into any table
                and wall stand with no modifications.
              </p>

              <ul>
                <li>lghtweight frame.</li>
                <li>quick and easy setup</li>
                <li>Sleek outer casing design and feel.</li>
              </ul>
            </div>
          </InfoCard>
          <InfoCard>
            <h3>Tough Carry</h3>
            <p>Built from High density polyethylene.</p>
            <hr />
            <div
              style={{
                height: "70%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "40px 40px 0",
              }}
            >
              <p>
                Assure the safety of your investment. Tough Carry uses military
                grade technology to protect your panels from breakage and
                deterioration while still maintaining the highest quality of
                imaging.
              </p>

              <ul>
                <li>Lightweight and secure frame.</li>
                <li>Carbon fiber backing.</li>
                <li>Easy one hand operation with carrying handle.</li>
              </ul>
            </div>
          </InfoCard>
        </SelectionBox>
      </Container>
    </ImageBackground>
  )
}

export default ProtectionHero
