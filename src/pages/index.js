import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import scrollTo from "gatsby-plugin-smoothscroll"
import AirDRHero from "../components/HeroImages/airdr-hero"
import ThreeSix from "../components/HeroImages/threesix-hero"
import ClarisXTHero from "../components/HeroImages/clarisxt-hero"
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
        width: 2.75px;
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
      .label-active {
        opacity: 100%;
        margin-left: 12px;
        width: 120px;
        :hover {
          margin-left: 0;
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
    const getLabel = document.querySelector(".label-active")

    if (getActive) {
      getActive.classList.remove("active")
    }
    if (getLabel) {
      getLabel.classList.remove("label-active")
    }

    const getName = e.target.getAttribute("name")
    e.target.classList.add("label-active")
    e.target.previousSibling.classList.add("active")
    scrollTo(getName)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <section id="AirDR">
          <AirDRHero />
        </section>

        <section id="threeSix">
          <ThreeSix />
        </section>

        <section id="ClarisXT">
          <ClarisXTHero />
        </section>

        <section
          id="ClarityPACS"
          style={{ padding: "50px 0 35px", background: "black" }}
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
          {/* <div style={{ margin: "35px 0 0" }}>
            <Link
              style={{
                background: "transparent",
                color: "#fff",
                borderRadius: "20px",
                border: "1px solid #fff",
                padding: "10px 20px",
                zIndex: "500",
              }}
            >
              Learn More
            </Link>
          </div> */}
        </section>

        <SideNav>
          <li onClick={handleClick}>
            <div>
              <div className="nav-indicator active"></div>
              <div className="nav-label label-active" name="#AirDR">
                AirDR
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
