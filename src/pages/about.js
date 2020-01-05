import React from "react"
// import { Link } from "gatsby"
import styled from "@emotion/styled"

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

  div {
    margin: 3.745rem 0.945rem;
    display: flex;
    justify-content: space-between;
  }

  article {
    margin: 0 auto;
    max-width: 880px;
  }

  h2 {
    text-transform: uppercase;
    color: #0069aa;
    font-weight: 500;
    letter-spacing: 4.4px;
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

const AboutHero = styled("div")`
  /* background-image: url("../images/hero-about.webp"); */
  width: 100%;
  height: 100px;
`

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <AboutWrapper>
      <h1>Who We Are</h1>
      <article>
        <p>
          <span>
            <i>i</i>CRco, Inc.
          </span>
          , an ISO 13485 certified company, is an independent leader in the
          design and manufacture of digital imaging hardware and software,
          offering innovative solutions for medical, industrial, and veterinary
          markets for 30 years.
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

      <AboutHero></AboutHero>

      <section>
        <h2></h2>
      </section>
      <section>
        <div>
          <h2>title1</h2>
        </div>
        <div>
          <h2>title2</h2>
        </div>
      </section>
      <section>
        <h2></h2>
      </section>
      <section>
        <h2></h2>
      </section>
      <section>
        <h2></h2>
      </section>
    </AboutWrapper>
  </Layout>
)

export default SecondPage
