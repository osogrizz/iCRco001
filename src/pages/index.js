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

const SideNav = styled("ul")`
  display: block;
  top: 50%;
  left: 0%;
  margin-top: -78px;
  position: fixed;
  color: #fff;
  list-style-type: none;

  li {
    a {
      margin: 0;
      color: #9a9a9a;
      display: flex;
      div:first-of-type {
        width: 1px;
        background: #9a9a9a;
        height: 26px;
        margin-right: 10px;
      }
      div:last-of-type {
        opacity: 0;
        color: #fff;
        &:hover {
          cursor: pointer;
          opacity: 100%;
        }
      }
    }
  }
`
const activeStyles = {
  color: "#fff",
}

const IndexPage = ({ data }) => {
  console.log("data", data)
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <section id="home-1">
          <HomeOne />
        </section>

        <section id="home-2">
          <PartsHero />
        </section>

        <section id="home-3">
          <TechnologyHero />
        </section>

        <section
          id="home-4"
          style={{ paddingTop: "50px", background: " rgb(39, 44, 53)" }}
        >
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

        <SideNav>
          {/* display: block;
    left: 0;
    margin-top: -78px;
    position: fixed;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: 5; */}
          <li>
            <Link to="#home-1" activeStyle={activeStyles}>
              <div></div>
              <div>Air DR</div>
            </Link>
          </li>
          <li>
            <Link to="#home-2" activeStyle={activeStyles}>
              <div></div>
              <div>3600</div>
            </Link>
          </li>
          <li>
            <Link to="#home-3" activeStyle={activeStyles}>
              <div></div>
              <div>Claris XT</div>
            </Link>
          </li>
          <li>
            <Link to="#home-4" activeStyle={activeStyles}>
              <div></div>
              <div>Clarity PACS</div>
            </Link>
          </li>
        </SideNav>

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
