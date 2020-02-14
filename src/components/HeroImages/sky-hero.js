import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

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
    url("../images/Sky.png");
  background-size: cover cover;
  z-index: -10;

  h3 {
    color: #fff;
    font-size: 1.4rem;
    font-weight: 400;
    margin: 20px auto 40px;
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
const HeroBottom = styled("div")`
  position: relative;
  margin-top: 72vh;
  width: 350px;

  @media (max-width: 800px) {
    width: 180px;
    margin: 0 auto;
    margin-top: 85vh;
  }
`

const ProductConfig = styled("ul")`
  position: relative;
  margin: 1.45rem auto 5rem;
  border: 3px solid #333333;
  border-radius: 50%;
  width: 34rem;
  height: 34rem;
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.24s 0.2s;

  .prod-container {
    width: 80px;
    height: 80px;
    text-align: center;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  li {
    display: flex;
    flex-direction: column;
    position: absolute;
    list-style-type: none;
    text-align: center;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    top: 50%;
    left: 50%;
    height: 4em;
    width: 4em;
    margin: -2em;
    cursor: pointer;
  }

  .option-container {
    width: 30px;
  }

  p {
    font-size: 0.6rem;
    word-wrap: normal;
    line-height: 12px;
    margin: 0;
    font-weight: 700;
  }

  @media (max-width: 1300px) {
    margin: 10.75rem auto 2rem;
    width: 10rem;
    height: 10rem;
    border: none;
    padding: 0;

    li {
      height: 0.4em;
      width: 0.4em;
      margin: 0rem;
    }
  }
`

const ProductHeader = styled("nav")`
  background: #c9c5c7;
  /* background: transparent; */
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: space-evenly;
  z-index: 1000;
  /* padding-top: 20px; */

  a {
    color: black;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 1.2px;
  }
  .product-nav {
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    width: 1120px;
    padding: 20px 2% 0;
  }
  @media (max-width: 1300px) {
    margin: 0 auto;
  }

  @media (max-width: 800px) {
    margin: 0 auto;
    .product-nav a {
      padding: 0;
      font-size: 0.5rem;
    }
  }
`

const SkyHero = ({ data }) => {
  const {
    image,
    airdr,
    motor,
    clarity,
    tfsp,
    registration,
    xc,
    pacs,
    integrated,
  } = useStaticQuery(graphql`
    query {
      airdrNav: file(relativePath: { eq: "AirDR.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image: file(relativePath: { eq: "Sky.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image: file(relativePath: { eq: "Sky.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image: file(relativePath: { eq: "Sky.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image: file(relativePath: { eq: "Sky.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image: file(relativePath: { eq: "Sky.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image: file(relativePath: { eq: "Sky.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      airdr: file(relativePath: { eq: "AirDR_Icon.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      motor: file(relativePath: { eq: "Motorized_Elevator.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      clarity: file(relativePath: { eq: "Clarity_PracticeIcon.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      tfsp: file(relativePath: { eq: "TFSP_Icon.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      registration: file(relativePath: { eq: "XC_Icon.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      xc: file(relativePath: { eq: "Product_RegistrationIcon.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      pacs: file(relativePath: { eq: "PACS_Icon.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      integrated: file(relativePath: { eq: "CPU_Icon.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <ImageBackground
      fluid={image.sharp.fluid}
      // fadeIn="soft"
      preserveStackingContext
    >
      <ProductHeader>
        <div className="product-nav">
          <Link>
            <div style={{ width: "70px", textAlign: "center" }}>
              <Img fluid={data.airdrNav.fluid} />
              <p style={{ fontSize: "0.6rem" }}>AirDR</p>
            </div>
          </Link>
          <Link>
            <div style={{ width: "72px", textAlign: "center" }}>
              <Img fluid={data.airdrC.fluid} />
              <p style={{ fontSize: "0.6rem" }}>AirDR c</p>
            </div>
          </Link>
          <Link>
            <div style={{ width: "70px", textAlign: "center" }}>
              <Img fluid={data.airdrLE.fluid} />
              <p style={{ fontSize: "0.6rem" }}>AirDR LE</p>
            </div>
          </Link>
          <Link>
            <div style={{ width: "70px", textAlign: "center" }}>
              <Img fluid={data.airdrLEc.fluid} />
              <p style={{ fontSize: "0.6rem" }}>AirDR LE c</p>
            </div>
          </Link>
          <Link>
            <div style={{ width: "30px", textAlign: "center" }}>
              <Img fluid={data.iDRL.fluid} />
              <p style={{ fontSize: "0.6rem" }}>iDR-L</p>
            </div>
          </Link>
          <Link>
            <div style={{ width: "40px", textAlign: "center" }}>
              <Img fluid={data.iDR34.fluid} />
              <p style={{ fontSize: "0.6rem" }}>iDR34</p>
            </div>
          </Link>
        </div>
      </ProductHeader>
      <section>
        <h1>Air DR</h1>
        <ProductConfig>
          <div
            className="prod-container"
            style={{
              width: "80px",
              height: "80px",
              textAlign: "center",
              fontWeight: "700",
            }}
          >
            <div>
              <Img fluid={airdr.sharp.fluid} />
            </div>
            AirDR
          </div>
          <li
            style={{
              transform: "rotate(10deg) translate(12em) rotate(-10deg)",
            }}
          >
            <div className="option-container">
              <Img fluid={motor.sharp.fluid} />
            </div>
            <div>
              <p>Motorized</p>
              <p>Elevator</p>
            </div>
          </li>
          <li
            style={{
              transform: "rotate(60deg) translate(12em) rotate(-60deg)",
            }}
          >
            <div style={{ width: "50px" }}>
              <Img fluid={clarity.sharp.fluid} />
            </div>
            <div style={{ margin: 0, padding: 0 }}>
              <p>Clarity</p>
              <p>Practice</p>
            </div>
          </li>
          <li
            style={{
              transform: "rotate(115deg) translate(12em) rotate(-115deg)",
            }}
          >
            <div style={{ width: "120px" }}>
              <Img fluid={tfsp.sharp.fluid} />
            </div>
            <div style={{ margin: 0, padding: 0 }}>
              <p>True Flat</p>
              <p>Scan Path</p>
            </div>
          </li>
          <li
            style={{
              transform: "rotate(-325deg) translate(-12em) rotate(325deg)",
            }}
          >
            <div style={{ width: "60px" }}>
              <Img fluid={registration.sharp.fluid} />
            </div>
            <div>
              <p>Product</p>
              <p>Registration</p>
            </div>
          </li>
          <li
            style={{
              transform: "rotate(-10deg) translate(-12em) rotate(10deg)",
            }}
          >
            <div style={{ width: "60px" }}>
              <Img fluid={xc.sharp.fluid} />
            </div>
            <div>
              <p>Product</p>
              <p>Registration</p>
            </div>
          </li>
          <li
            style={{
              transform: "rotate(270deg) translate(12em) rotate(-270deg)",
            }}
          >
            <div style={{ width: "90px" }}>
              <Img fluid={pacs.sharp.fluid} />
            </div>
            <div>
              <p>Acuisition</p>
              <p>Station</p>
            </div>
          </li>
          <li
            style={{
              transform: "rotate(325deg) translate(12em) rotate(-325deg)",
            }}
          >
            <div style={{ width: "32px" }}>
              <Img fluid={integrated.sharp.fluid} />
            </div>
            <div style={{ width: "180px" }}>
              <p>Integrated PACS &</p>
              <p>Workstation PC</p>
            </div>
          </li>
        </ProductConfig>
      </section>
    </ImageBackground>
  )
}

export default SkyHero

// export const query = graphql`
//   query skyHero {
//     bg: imageSharp(fluid: { originalName: { eq: "AirDR.png" } }) {
//       fluid(maxWidth: 800) {
//         ...GatsbyImageSharpFluid_tracedSVG
//       }
//     }
//     airdrNav: imageSharp(fluid: { originalName: { eq: "AirDR.png" } }) {
//       fluid(maxWidth: 800) {
//         ...GatsbyImageSharpFluid_tracedSVG
//       }
//     }
//     airdrC: imageSharp(fluid: { originalName: { eq: "AirDRc.png" } }) {
//       fluid(maxWidth: 800) {
//         ...GatsbyImageSharpFluid_tracedSVG
//       }
//     }
//     airdrLE: imageSharp(fluid: { originalName: { eq: "AirDR_LE.png" } }) {
//       fluid(maxWidth: 800) {
//         ...GatsbyImageSharpFluid_tracedSVG
//       }
//     }
//     airdrLEc: imageSharp(fluid: { originalName: { eq: "AirDR_LEc.png" } }) {
//       fluid(maxWidth: 800) {
//         ...GatsbyImageSharpFluid_tracedSVG
//       }
//     }
//     iDRL: imageSharp(fluid: { originalName: { eq: "iDR-L.png" } }) {
//       fluid(maxWidth: 800) {
//         ...GatsbyImageSharpFluid_tracedSVG
//       }
//     }
//     iDR34: imageSharp(fluid: { originalName: { eq: "iDR34.png" } }) {
//       fluid(maxWidth: 800) {
//         ...GatsbyImageSharpFluid_tracedSVG
//       }
//     }
//     airdr: imageSharp(fluid: { originalName: { eq: "AirDR_Icon.png" } }) {
//       fluid(maxWidth: 800) {
//         ...GatsbyImageSharpFluid_tracedSVG
//       }
//     }
//     motor: imageSharp(
//       fluid: { originalName: { eq: "Motorized_Elevator.png" } }
//     ) {
//       fluid(maxWidth: 800) {
//         ...GatsbyImageSharpFluid_tracedSVG
//       }
//     }
//     clarity: imageSharp(
//       fluid: { originalName: { eq: "Clarity_PracticeIcon.png" } }
//     ) {
//       fluid(maxWidth: 800) {
//         ...GatsbyImageSharpFluid_tracedSVG
//       }
//     }
//     tfsp: imageSharp(fluid: { originalName: { eq: "TFSP_Icon.png" } }) {
//       fluid(maxWidth: 800) {
//         ...GatsbyImageSharpFluid_tracedSVG
//       }
//     }
//     xc: imageSharp(fluid: { originalName: { eq: "XC_Icon.png" } }) {
//       fluid(maxWidth: 800) {
//         ...GatsbyImageSharpFluid_tracedSVG
//       }
//     }
//     registration: imageSharp(
//       fluid: { originalName: { eq: "Product_RegistrationIcon.png" } }
//     ) {
//       fluid(maxWidth: 800) {
//         ...GatsbyImageSharpFluid_tracedSVG
//       }
//     }
//     pacs: imageSharp(fluid: { originalName: { eq: "PACS_Icon.png" } }) {
//       fluid(maxWidth: 800) {
//         ...GatsbyImageSharpFluid_tracedSVG
//       }
//     }
//     integrated: imageSharp(fluid: { originalName: { eq: "CPU_Icon.png" } }) {
//       fluid(maxWidth: 800) {
//         ...GatsbyImageSharpFluid_tracedSVG
//       }
//     }
//   }
// `
