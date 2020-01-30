import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import HomeOne from "../components/HeroImages/Home-One"
import EventsHero from "../components/HeroImages/events-hero"
import PartsHero from "../components/HeroImages/parts-hero"
import TechnologyHero from "../components/HeroImages/technology-hero"
import NewsHero from "../components/HeroImages/news-hero"
import ShortVideo from "../images/ClarityPACS.mp4"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Wrapper = styled("div")`
  text-align: center;

  form {
    background: #545351;
    margin: 0;
    padding-bottom: 1.45rem;
  }
`

const FormContainer = styled("div")`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 40px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  input {
    width: 250px;
    margin: 10px 10px;
    padding: 10px;
    outline-color: orange;
  }
  textarea {
    padding: 10px;
    outline-color: orange;
  }
  button {
    width: 200px;
    margin: 40px;
    padding: 10px 20px;
    background: #0069aa;
    color: #fff;
    border: none;
    outline: orange;
    cursor: pointer;
    border-radius: 5px;
  }
`

const IndexPage = ({ data }) => {
  console.log("data", data)
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <section>
          <HomeOne />
        </section>

        <section>
          <PartsHero />
        </section>

        <section>
          <TechnologyHero />
        </section>

        <section>
          <video
            style={{ display: "flex" }}
            className="video-player"
            height="100%"
            width="100%"
            loop
            muted
            autoPlay
          >
            <source src={ShortVideo} type="video/mp4" />
          </video>
        </section>

        {/* <section>
          <NewsHero />
        </section> */}

        {/* <section>
          <EventsHero />
        </section> */}

        {/* <section>
          <form onSubmit={handleSubmit}>
            <FormContainer>
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
            </FormContainer>
          </form>
        </section> */}
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
