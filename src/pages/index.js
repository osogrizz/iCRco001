import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import HomeOne from "../components/HeroImages/Home-One"
import EventsHero from "../components/HeroImages/events-hero"
import PartsHero from "../components/HeroImages/parts-hero"
import TechnologyHero from "../components/HeroImages/technology-hero"
import NewsHero from "../components/HeroImages/news-hero"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Wrapper = styled("div")`
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 40px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    input {
      width: 250px;
      margin: 10px 10px;
      padding: 10px;
    }
    textarea {
      padding: 10px;
    }
    button {
      width: 200px;
      padding: 10px 20px;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <section>
        <HomeOne />
      </section>

      <section>
        <h2>Solutions</h2>
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
        <EventsHero />
      </section>
      <section>
        <form action="">
          <div>
            <input type="text" name="fName" placeholder="First Name" />
            <input type="text" name="lName" placeholder="Last Name" />
          </div>
          <div>
            <input type="email" name="email" placeholder="Email" />
            <input type="tel" name="phone" placeholder="Phone" />
          </div>
          <div>
            <input type="text" name="company" placeholder="Company" />
          </div>
          <div>
            <textarea
              name="questions"
              id=""
              cols="54"
              rows="10"
              placeholder="Questions"
            ></textarea>
          </div>
          <div>
            <button>Send</button>
          </div>
        </form>
      </section>
      <Link to="/about/">Go to About page 2</Link>
    </Wrapper>
  </Layout>
)

export default IndexPage
