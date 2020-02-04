import React from "react"
// import { Link } from "gatsby"
import styled from "@emotion/styled"
// import { graphql } from "gatsby"
// import Img from "gatsby-image"
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa"

import FlagImage from "./HeroImages/flag-image"

const Wrapper = styled("div")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  /* background: #a9a9a9; */
  background: rgb(39, 44, 53);
  min-height: 40vh;
  text-align: center;
  padding-top: 60px;
  color: #777;
  display: flex;
  flex-direction: column;

  .top-footer {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 5%;
  }
  .bottom-footer {
    /* bottom: 0; */
    /* left: 0; */
    display: flex;
    justify-content: space-evenly;
    /* width: 960px; */
    /* margin: 20px auto; */
    margin-top: 20px;
    padding-bottom: 8rem;
  }

  h5 {
    text-align: left;
    font-weight: 400;
    text-transform: uppercase;

    :hover {
      color: #0069aa;
      transition: color 0.35s linear;
    }
  }

  li {
    /* text-align: left; */
    list-style-type: none;
  }

  p {
    /* text-align: left; */
    font-size: 0.675rem;
    margin: 0px;
    color: #7a7a7a;

    :hover {
      color: #fff;
      transition: color 0.3s linear;
    }
  }

  hr {
    margin: 0 5%;
    background: #777;
    /* background: lightgray; */
  }

  h6 {
    margin: 20px;
    font-weight: 400;
    font-size: 0.775rem;
  }

  svg {
    border: none;
    fill: #a9a9a9;
    stroke-width: 2;
    margin: 20px 30px 0 0;
    font-size: 1.6rem;
    :hover {
      fill: #fff;
      transition: fill 0.2s linear;
    }
  }
  .social-media {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 0;
    margin: 0;

    ul {
      li {
        display: flex;
        justify-content: space-around;
        margin: 20px;
      }
    }
  }
`

const MidContainer = styled("div")`
  display: flex;
  justify-content: space-around;
  max-width: 1120px;
  margin: 0 auto;

  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column-reverse;
    justify-content: center;

    h5 {
      text-align: center;
    }
  }
`

const Footer = ({ data }) => {
  console.log("data", data)
  return (
    <Wrapper>
      {/* <div className="top-footer">
        <li>
          <h5>solutions</h5>
          <Link>
            <p>Computed Tomography</p>
          </Link>
          <Link>
            <p>Computed Radiology</p>
          </Link>
          <Link>
            <p>Digital Radiology</p>
          </Link>
          <Link>
            <p>DICOM Printers</p>
          </Link>
          <Link>
            <p>X-Ray Room Solutions</p>
          </Link>
          <Link>
            <p>Software & Hardware Solutions</p>
          </Link>
        </li>

        <li>
          <h5>specialties</h5>
          <Link>
            <p>Urgent Care</p>
          </Link>
          <Link>
            <p>Chiropractic</p>
          </Link>
          <Link>
            <p>Orthopedic</p>
          </Link>
          <Link>
            <p>Podiatry</p>
          </Link>
          <Link>
            <p>General Radiology</p>
          </Link>
          <Link>
            <p>Veterinary</p>
          </Link>
        </li>

        <li>
          <h5>services & support</h5>
          <Link>
            <p>Sales Support</p>
          </Link>
          <Link>
            <p>Technical Support</p>
          </Link>
          <Link>
            <p>Product Registration</p>
          </Link>
          <Link>
            <p>Parts</p>
          </Link>
          <Link>
            <p>Dealer Assistance</p>
          </Link>
        </li>

        <li>
          <h5>quick links</h5>
          <Link>
            <p>About Us</p>
          </Link>
          <Link>
            <p>News & Events</p>
          </Link>
        </li>

        <li>
          <h5>contact us</h5>
          <Link>
            <p>iCRco Headquarters</p>
          </Link>
          <Link>
            <p>26 Coromar Dr. Goleta, CA 93117</p>
          </Link>
          <Link>
            <p>(310) 921-9559</p>
          </Link>
          <Link>
            <p>info@company.com</p>
          </Link>
        </li>
      </div> */}

      <MidContainer>
        <FlagImage />
        <li>
          <h5>Stay Connected</h5>

          <ul style={{ display: "flex" }} className="social-media">
            <li>
              <a
                href="https://www.facebook.com/icrcompany"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF id="facbook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/icrcoinc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram id="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/icrco"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter id="twitter" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/icrco/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn id="linkedin" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/user/TheICRCompany"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube id="youtube" />
              </a>
            </li>
          </ul>
        </li>
      </MidContainer>

      <hr />
      <div className="bottom-footer">
        <h6>© {new Date().getFullYear()}, iCRco. All rights reserved.</h6>

        <div style={{ margin: 0, display: "flex" }}>
          <h6>Terms & Conditions</h6>
          <h6>Privacy Policy</h6>
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer

// export const query = graphql`
//   query FlagQuery {
//     flag: imageSharp(fluid: { originalName: { eq: "flag.png" } }) {
//       fluid(maxWidth: 800) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `
