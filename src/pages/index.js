import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import HomeOne from "../components/HeroImages/Home-One"

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
        <h2>Claris XT</h2>
      </section>
      <section>
        <h2>Solutions</h2>
        <Link></Link>
        <Link></Link>
        <Link></Link>
        <Link></Link>
        <Link></Link>
        <Link></Link>
      </section>
      <section>
        <h2>Specialties</h2>
      </section>
      <section>
        <h2>Parts</h2>
      </section>
      <section>
        <h2>Technology</h2>
      </section>
      <section>
        <h2>News</h2>
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
