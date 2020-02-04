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

  @media (max-width: 800px) {
    video {
      width: -webkit-fill-available;
      padding: 20px 0;
    }
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
  z-index: 5;

  li {
    a {
      margin: 0;
      color: #9a9a9a;
      display: flex;
      div:first-of-type {
        width: 2px;
        background: #9a9a9a;
        background: lightgray;
        height: 26px;
        margin-right: 10px;
      }
      div:last-of-type {
        opacity: 0;
        color: #fff;
        font-size: 0.845rem;
        font-weight: 600;
        letter-spacing: 1.1px;
        -webkit-transform: translateX(-10%);
        transform: translateX(-10%);
        &:hover {
          cursor: pointer;
          opacity: 100%;
          transform: translateY(0%);
          transition: transform 0.6s;
        }
      }
    }
  }

  @media (max-width: 800px) {
    display: none;
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
        <section id="AirDR">
          <HomeOne />
        </section>

        <section id="3600">
          <PartsHero />
        </section>

        <section id="ClarisXT">
          <TechnologyHero />
        </section>

        <section
          id="ClarityPACS"
          style={{ padding: "50px 0", background: "black" }}
        >
          <video
            style={{ display: "flex" }}
            className="video-player"
            height="100%"
            width="100%"
            loop
            muted
            autoPlay
            playsInline
          >
            <source src={ShortVideo} type="video/mp4" />
          </video>
        </section>

        <SideNav>
          <li>
            <Link to="#AirDR" activeStyle={activeStyles}>
              <div></div>
              <div>Air DR</div>
            </Link>
          </li>
          <li>
            <Link to="#3600" activeStyle={activeStyles}>
              <div></div>
              <div>3600</div>
            </Link>
          </li>
          <li>
            <Link to="#ClarisXT" activeStyle={activeStyles}>
              <div></div>
              <div>Claris XT</div>
            </Link>
          </li>
          <li>
            <Link to="#ClarityPACS" activeStyle={activeStyles}>
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
