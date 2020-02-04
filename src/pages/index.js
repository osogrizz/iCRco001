import React from "react"
// import { Link } from "gatsby"
import styled from "@emotion/styled"
import scrollTo from "gatsby-plugin-smoothscroll"
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

  section {
    scroll-behavior: smooth;
  }

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

const SideNav = styled("ul")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: block;
  top: 50%;
  left: 0%;
  margin-top: -78px;
  position: fixed;
  color: #fff;
  list-style-type: none;
  z-index: 5;

  li {
    div {
      margin: 0;
      color: #9a9a9a;
      display: flex;

      .nav-indicator {
        width: 1px;
        background: #9a9a9a;
        background: lightgray;
        height: 26px;
        margin-right: 10px;
      }
      .active {
        width: 3px;
      }
      .nav-label {
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

const IndexPage = () => {
  const handleClick = e => {
    const getActive = document.querySelector(".active")
    if (getActive) {
      getActive.classList.remove("active")
    }
    const getName = e.target.getAttribute("name")
    e.target.previousSibling.classList.add("active")
    scrollTo(getName)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <section id="AirDR">
          <HomeOne />
        </section>

        <section id="threeSix">
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
          <li onClick={handleClick}>
            <div>
              <div className="nav-indicator"></div>
              <div className="nav-label" name="#AirDR">
                Air DR
              </div>
            </div>
          </li>
          <li onClick={handleClick}>
            <div>
              <div className="nav-indicator"></div>
              <div className="nav-label" name="#threeSix">
                3600
              </div>
            </div>
          </li>
          <li onClick={handleClick}>
            <div>
              <div className="nav-indicator"></div>
              <div className="nav-label" name="#ClarisXT">
                Claris XT
              </div>
            </div>
          </li>
          <li onClick={handleClick}>
            <div>
              <div className="nav-indicator"></div>
              <div className="nav-label" name="#ClarityPACS">
                Clarity PACS
              </div>
            </div>
          </li>
        </SideNav>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
