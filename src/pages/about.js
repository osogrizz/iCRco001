import React from "react"
import styled from "@emotion/styled"
import AboutHero from "../components/about-hero"

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

  section {
    max-width: 960px;
    margin: 0 auto;
    h2 {
      text-align: center;
      text-transform: uppercase;
      color: #0069aa;
      font-weight: 400;
      letter-spacing: 4.4px;
    }
  }
`
const WhoWeAre = styled("section")`
  max-width: 960px;
  margin: 0 auto;
  div {
    margin: 3.745rem 0.945rem;
    display: flex;
    justify-content: space-between;
  }

  h2 {
    text-transform: uppercase;
    color: #0069aa;
    font-weight: 700;
    letter-spacing: 4px;
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
  }

  span {
    color: #0069aa;
    font-weight: 700;
  }

  section {
    height: 120px;
  }
`
// const HeroBox = styled("div")`
//   h2 {
//     color: #222;
//     font-size: 2rem;
//     font-weight: 700;
//     letter-spacing: 0.5rem;
//     border: 4px solid black;
//     text-align: center;
//     padding: 1rem 0;
//     max-width: 800px;
//     margin: 0 auto;
//   }
// `

const AboutPage = () => (
  <Layout>
    <SEO title="About page" />
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

      <section>
        <h2></h2>
      </section>
      <section>
        <div>
          <h2>WE MANUFACTURE IN-HOUSE</h2>
        </div>
        <div>
          <h2>WE REDEFINE THE FIELD OF DIGITAL IMAGING</h2>
        </div>
      </section>
      <section>
        <h2>OUR PHILOSOPHY</h2>
        <h4>
          "Good patient care is what it's all about. Better patient care, better
          patient outcome."
        </h4>
        <img src="" alt="" />
        <div style={{ display: "flex" }}>
          <div>
            <h3>Better Image</h3>
            <h3>Exceeding Expectations</h3>
            <h3>Product Flexibility</h3>
          </div>
          <div>
            <h3>Low Dose Solutions</h3>
            <h3>Accessible Image Systems</h3>
            <h3>It's in our Design.</h3>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2>Our CEO</h2>
          <p>
            Aside from being iCRco's reliable leader, STEPHEN NEUSHUL is an
            incredibly innovative individual who greatly enjoys tinkering and
            engineering over the business aspects. You'll find him on the
            production floor more than in his office. More than anything, he
            passionately enjoys seeing the benefits of his creativity in
            engineering.
          </p>
          <button>Read More</button>
        </div>
        <div>
          <img src="" alt="portrait" />
        </div>
      </section>

      <section>
        <h2>iCRCO APPROACHING 30 YEARS</h2>
        <h4>Achieving Milestones in Innovation and Technology.</h4>
        <article>
          “When I think back on how this company started, our expansion into the
          global market, securing contracts with the U.S. military, and donating
          systems to countries and organizations designed to help people in
          critical need, I am truly humbled by the journey.”
        </article>
        <button>Read More</button>
      </section>
    </AboutWrapper>
  </Layout>
)

export default AboutPage

// export const query = graphql`
//   query AboutQuery {
//     card: imageSharp(fluid: {originalName: {eq: "about-hero.png" } } ) {
//       fluid(maxWidth: 400) {
//       ...GatsbyImageSharpFluid
//       }
//     }
