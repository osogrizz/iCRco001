import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import AboutHero from "../components/about-hero"
import EarthHero from "../components/earh-hero"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutWrapper = styled("div")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  h1 {
    text-align: center;
    text-transform: uppercase;
    color: #0069aa;
    letter-spacing: 0.7rem;
  }

  button {
    cursor: pointer;
    width: 142px;
    height: 40px;
    border: rgba(24, 26, 28, 1) 0px solid;
    outline: transparent;
    border-radius: 5px;
    font-size: 0.845rem;
    background-color: #0069aa;
    color: #fff;
    background-image: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 0.4) 51%
    );
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.6);

    :hover {
      color: #444;
      background-color: #fff;
      background-image: linear-gradient(
        0deg,
        rgba(20, 20, 20, 0.2) 0%,
        rgba(20, 20, 20, 0.075) 50%,
        rgba(20, 20, 20, 0) 51%
      );
      transition: background 0.5s linear;
    }
  }

  section {
    margin: 0 auto 80px;
  }
`
const WhoWeAre = styled("section")`
  max-width: 960px;
  margin: 0 auto;
  div {
    margin: 3.745rem 0.945rem;
    display: flex;
    justify-content: space-around;
  }

  h2 {
    text-transform: uppercase;
    color: #0069aa;
    font-weight: 600;
    letter-spacing: 5.8px;
    font-size: 1.485rem;
  }

  article {
    margin: 0 auto;
    max-width: 880px;
  }

  p {
    letter-spacing: 1.9px;
    color: #313538;
    font-size: 0.795rem;
    font-weight: 400;
    padding: 0 40px;
  }

  span {
    color: #0069aa;
    font-weight: 700;
  }

  section {
    height: 120px;
  }
`

const InHouse = styled("section")`
  max-width: 1120px;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  h3 {
    font-weight: 700;
    font-size: 1.275rem;
    height: auto;
    letter-spacing: 4.2px;
  }

  .container-top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    h3 {
      width: max-content;
    }
  }
  .container-bottom {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    width: 100%;

    h3 {
      padding: 0 16%;
      line-height: 1.875rem;
      text-align: center;
    }
  }

  .image-top {
    width: 55%;
    img {
      padding: 0;
    }
  }
  .image-bottom {
    flex-direction: row-reverse;
    width: 55%;
    img {
      padding: 0;
    }
  }
`

const Philo = styled("section")`
  max-width: 800px;
  text-align: center;
  h2 {
    text-transform: uppercase;
    color: #0069aa;
    font-size: 2.25rem;
    font-weight: 600;
    letter-spacing: 0.2rem;
  }

  h4 {
    font-weight: 400;
    margin-bottom: 50px;
  }

  .features {
    margin: 40px 0;
    display: flex;
    justify-content: space-between;
    background: #f3f3f3;
    padding-bottom: 0;

    h3 {
      color: #0069aa;
      font-size: 1.175rem;
      font-weight: 400;
      padding: 0;
      margin: 15px 20px;
      letter-spacing: 1px;
      span {
        font-weight: bold;
      }
    }
  }
`

const Earth = styled("section")`
  background: #181a1c;

  div {
    margin: 0 auto;
    margin-bottom: 60px;
    width: 960px;
    text-align: center;

    h2 {
      margin: 6rem 0 0.45rem;
      font-size: 1.975rem;
      letter-spacing: 1.4px;
    }

    p {
      width: 738px;
      font-size: 0.875rem;
      letter-spacing: 1px;
    }
  }
`

const CEO = styled("section")`
  background: #f3f3f3;
  display: flex;
  justify-content: center;
  padding: 40px;

  div:first-of-type {
    margin-right: 24px;
  }

  h2 {
    text-transform: uppercase;
    color: #0069aa;
    font-size: 2.25rem;
    font-weight: 700;
    letter-spacing: 3.5px;
  }

  p {
    font-size: 0.865rem;
    font-weight: 300;
    padding-right: 75px;

    span {
      font-weight: bold;
      color: #0069aa;
    }
  }

  div {
    width: 400px;
  }
  button {
    margin: 40px 40px 40px 0;
  }
`

const Thirty = styled("section")`
  width: 960px;
  margin: 0 auto;
  text-align: center;
  h2 {
    text-transform: uppercase;
    color: #0069aa;
    font-size: 2.25rem;
    font-weight: 700;
    letter-spacing: 3.5px;
    i {
      text-transform: lowercase;
    }
  }
  h4 {
    color: #636769;
  }
  div {
    margin: 0 auto;
    width: 960px;
    :first-child {
      width: 280px;
      margin-bottom: 0;
      padding: 0;
    }
    :nth-child(2) {
      width: 750px;
    }
  }

  q {
    font-size: 1rem;
    letter-spacing: 1.1px;
    text-align: center;
  }
  cite {
    color: #0069aa;
    font-weight: 600;
  }
  button {
  }
  .thirty-closing {
    display: flex;
    flex-direction: column;

    cite {
      margin: 0 auto;
      width: 500px;
      text-align: right;
    }
    button {
      text-align: center;
      margin: 40px auto;
    }
  }
`

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <AboutWrapper>
      <WhoWeAre>
        <h1>Who We Are</h1>
        <article>
          <p>
            <span>
              <i>i</i>CRco, Inc.
            </span>
            , an ISO 13485 certified company, is an independent leader in the
            design and manufacture of digital imaging hardware and software,
            offering innovative solutions for medical, industrial, and
            veterinary markets for 30 years.
          </p>
          <p>
            Over the years, iCRco has been providing a full range of digital
            imaging solutions including cassette workflow, direct capture, and
            3DCT. Its globally-recognized products reduce healthcare costs with
            reliable hardware systems and high-resolution capabilities. iCRco
            offers leading-edge technology that integrates seamlessly into
            acquisition, practice management, and image archiving solutions.
          </p>
        </article>

        <div>
          <h2>Intuitive</h2>
          <h2>Consistent</h2>
          <h2>Reliable</h2>
        </div>
      </WhoWeAre>

      <AboutHero />

      <InHouse>
        <div className="container-top">
          <div>
            <h3>WE MANUFACTURE IN-HOUSE</h3>
          </div>
          <div className="image-top">
            <Img fluid={data.future.fluid} />
          </div>
        </div>

        <div className="container-bottom">
          <div>
            <h3>WE REDEFINE THE FIELD OF DIGITAL IMAGING</h3>
          </div>
          <div className="image-bottom">
            <Img fluid={data.prod.fluid} />
          </div>
        </div>
      </InHouse>

      <Earth>
        <div>
          <EarthHero />
        </div>
      </Earth>

      <Philo>
        <h2>OUR PHILOSOPHY</h2>
        <h4>
          <i>
            "Good patient care is what it's all about. Better patient care,
            better patient outcome."
          </i>
        </h4>
        <Img fluid={data.philo.fluid} />

        <div className="features">
          <div>
            <h3>
              Better <span>Image</span>
            </h3>
            <h3>
              Exceeding <span>Expectations</span>
            </h3>
            <h3>
              Product <span>Flexibility</span>
            </h3>
          </div>

          <div>
            <h3>
              Low Dose <span>Solutions</span>
            </h3>
            <h3>
              Accessible <span>Image Systems</span>
            </h3>
            <h3>
              It's in our <span>Design.</span>
            </h3>
          </div>
        </div>
      </Philo>

      <CEO>
        <div>
          <h2>Our CEO</h2>
          <p>
            Aside from being iCRco's reliable leader,{" "}
            <span>STEPHEN NEUSHUL</span> is an incredibly innovative individual
            who greatly enjoys tinkering and engineering over the business
            aspects. You'll find him on the production floor more than in his
            office. More than anything, he passionately enjoys seeing the
            benefits of his creativity in engineering.
          </p>
          <button>Read More</button>
        </div>
        <div>
          <Img fluid={data.ceo.fluid} />
        </div>
      </CEO>

      <Thirty>
        <h2>
          <i>i</i>CRCO APPROACHING 30 YEARS
        </h2>
        <h4>Achieving Milestones in Innovation and Technology.</h4>
        <div>
          <Img fluid={data.innovation.fluid} />
          <Img fluid={data.devices.fluid} />
        </div>
        <article>
          <q>
            <i>
              When I think back on how this company started, our expansion into
              the global market, securing contracts with the U.S. military, and
              donating systems to countries and organizations designed to help
              people in critical need, I am truly humbled by the journey.
            </i>
          </q>
        </article>
        <div className="thirty-closing">
          <cite> - Stephen Neushel</cite>
          <button>Read More</button>
        </div>
      </Thirty>
    </AboutWrapper>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query AboutQuery {
    future: imageSharp(fluid: { originalName: { eq: "Future_of_CR.png" } }) {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
    prod: imageSharp(fluid: { originalName: { eq: "production_floor.png" } }) {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
    philo: imageSharp(fluid: { originalName: { eq: "philosophy.png" } }) {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
    ceo: imageSharp(fluid: { originalName: { eq: "ceo.png" } }) {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
    innovation: imageSharp(fluid: { originalName: { eq: "innovation.png" } }) {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
    devices: imageSharp(fluid: { originalName: { eq: "device-gallery.png" } }) {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
