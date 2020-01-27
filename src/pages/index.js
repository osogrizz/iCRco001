import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import HomeOne from "../components/HeroImages/Home-One"
import Solutions from "../components/HeroImages/Solutions"
import PartsHero from "../components/HeroImages/parts-hero"
import TechnologyHero from "../components/HeroImages/technology-hero"
import NewsHero from "../components/HeroImages/news-hero"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Wrapper = styled("div")`
  text-align: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <section>
        <HomeOne />
      </section>

      <section>
        <Solutions />
      </section>
      <section>
        <h2>Specialties</h2>
      </section>
      <section>
        <PartsHero />
      </section>
      <section>
        <TechnologyHero />
      </section>
      <section>
        <NewsHero />
      </section>
      <section>
        <h2>Upcoming Events</h2>
      </section>
      <section>
        <form action="">
          <input type="text" name="fName" placeholder="First Name" />
          <input type="text" name="lName" placeholder="Last Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="tel" name="phone" placeholder="Phone" />
          <input type="text" name="company" placeholder="Company" />
          <textarea
            name="questions"
            id=""
            cols="30"
            rows="10"
            placeholder="Questions"
          ></textarea>
        </form>
      </section>
      <Link to="/about/">Go to About page 2</Link>
    </Wrapper>
  </Layout>
)

export default IndexPage
