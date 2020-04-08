import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"

const Container = styled("div")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 100px auto 80px;
  text-align: center;
  max-width: 960px;

  h1 {
    text-align: center;
    text-transform: uppercase;
    color: #0069aa;
    letter-spacing: 0.7rem;
  }

  h3 {
    font-weight: 700;
    font-size: 1.275rem;
    height: auto;
    letter-spacing: 4.2px;
    color: #0069aa;
    margin: 0;
  }

  .intro-text {
    font-size: 0.875rem;
    letter-spacing: 1px;
    text-align: justify;
    width: 800px;
    margin: 20px auto 80px;
  }

  p {
    font-size: 0.875rem;
    letter-spacing: 1px;
    text-align: center;
  }

  .contacts {
    display: flex;
    justify-content: space-around;

    p {
    }

    div {
      width: 50%;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 80px auto;

    label {
      width: 120px;
      text-align: left;
    }

    input {
      padding: 10px;
      margin: 10px;
      width: 380px;
    }
    textarea {
      padding: 10px;
      margin: 10px;
    }

    button {
      width: 200px;
      margin: 40px auto;
      padding: 10px 20px;
      background: #0069aa;
      color: #fff;
      border: none;
      outline: orange;
      cursor: pointer;
      border-radius: 5px;
    }

    .input-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
    }
  }
`

const TechSupport = () => {
  return (
    <div>
      <Layout>
        <Container>
          <h1>Techical Support</h1>
          <p className="intro-text">
            iCRco, Inc. employs in-house technical support and software team
            members allowing us to respond to your inquiries immediately. Our
            relationship with you extends well past the installation of your
            radiography unit and our support personnel are trained to address
            any questions or needs you might have. With iCRco, help is only a
            phone call away.
          </p>

          <div className="contacts">
            <div>
              <h3>USA</h3>
              <div
                style={{ margin: "0 auto", textAlign: "left", width: "300px" }}
              >
                <p>
                  Mon - Fri, 7:00 am - 6:00 on PST. <br />
                  Telephone: (866)907-7740 <br />
                  techsupport@icrcompany.com
                </p>
              </div>
            </div>
            <div>
              <h3>Europe</h3>
              <p>
                Thomas Pazera <br />
                Telephone: 0031 646 357 925 <br />
                tpazera@icrcompany.com
              </p>
            </div>
          </div>
          <div className="contacts">
            <div>
              <h3>APAC - Asia | Pacific</h3>
              <p>
                Elaine N. Otadoy. RRT <br />
                Telephone: +63 9178004460 <br />
                eotadoy@icrcompany.com
              </p>
            </div>
            <div>
              <h3>Middle East | India | Africa</h3>
              <p>
                Shrirang Pimplikar <br />
                Telephone: +971 50 657 1095 <br />
                spimplikar@icrcompany.com
              </p>
            </div>
          </div>
          <form action="">
            <div className="input-container">
              <label htmlFor="name">Name*</label>
              <input type="text" name="Name" placeholder="Name" required />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email*</label>
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="input-container">
              <label htmlFor="phone">Phone</label>
              <input type="tel" name="phone" placeholder="Phone" />
            </div>
            <div className="input-container">
              <label htmlFor="company">Company*</label>
              <input type="text" name="company" placeholder="Company" />
            </div>
            <div className="input-container">
              <label htmlFor="product-name">Product Name</label>
              <input
                type="text"
                name="product-name"
                placeholder="Product Name"
              />
            </div>
            <div className="input-container">
              <label htmlFor="serial-number">Serial Number*</label>
              <input
                type="text"
                name="serial-number"
                placeholder="Serial Number"
              />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>

            <button>Submit</button>
          </form>
        </Container>
      </Layout>
    </div>
  )
}

export default TechSupport
